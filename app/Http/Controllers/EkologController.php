<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Jobs\test;
use App\Mail\EK_MailArrow;
use App\Models\Ekolog;
use App\Models\SubscribeEcolog;
use App\Models\feedbackEcolog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use PHPUnit\Framework\Constraint\IsEmpty;
use App\Jobs\EmailsEcolog;
use Validator;

class EkologController extends Controller
{
    function GetProductJSON()
    {
        $products = Ekolog::all();
        $products = $products->toJson();
        return $products;
    }

    function putOrder(Request $request)
    {
        $deliveryPrices = [
            1 => [
                'price' => 450,
                'name' => 'по России курьером - 450'
            ],
            2 => [
                'price' => 300,
                'name' => 'по России СДЭКом - 300 ₽'
            ],
            3 => [
                'price' => 250,
                'name' => 'почтой России - 250 ₽'
            ],
        ];
        $paymentDescript = [
            1 => 'картой на сайте',
            2 => 'картой при получении',
            3 => 'наличными при получении',
        ];
        $order = $request->all();
        $bin = $request->get('bin');
        $delivery = $request->get('delivery');
        $paymentMethod = $request->get('paymentMethod');
        $promoCode = $request->get('promoCode');
        $userData = $request->get('userData');
        $response = [
            'Error' => false,
            'isDone' => false,
            'massage' => null,
            'validator' => [],
        ];
        $totalBin = null;
        $totalOrder = null;

        $validator = Validator::make($request->get('userData'), [
            'email' => 'required|max:255|min:2|email',
            'name' => 'required|max:255|min:5|string',
            'phone' => 'required|max:255|min:5|string',
            'street' => 'required|max:255|min:5|string',
            'town' => 'required|max:1000|min:5|string',
        ]);
        if ($validator->fails()) {
            $response['Error'] = true;
            $response['massage'] = 'Ошибка валидации';
            $response['validator'] = $validator->errors();
            return $response;
        } elseif ($delivery > 3 || $delivery < 1 ) {
            $response['Error'] = true;
            $response['massage'] = 'Ошибка доставки';
            return $response;
        } elseif ($paymentMethod > 3 || $paymentMethod < 1) {
            $response['Error'] = true;
            $response['massage'] = 'Ошибка оплаты';
            return $response;
        } elseif (false) {
//            $promoCode validation
            $response['Error'] = true;
            $response['massage'] = 'Ошибка промокода';
            return $response;
        } else{
            for ($i = 0; $i < count($bin); ++$i)
            {
                $product = Ekolog::where('id', $bin[$i]['id'])->first();
                if (!isset($product) || $bin[$i]['count'] < 1 || is_float($bin[$i]['count'] +1 ) ){
                    $response['Error'] = true;
                    $response['massage'] = 'Несуществующий товар с id:'.$bin[$i]['id']. ' или неверное количество:'.$bin[$i]['count'];
                    return $response;
                }
                $bin[$i]['product']= $product;
                $totalBin +=  $bin[$i]['count']*$bin[$i]['product']['price'];
            }
        }
        $totalOrder = $totalBin * 0.9 + $deliveryPrices[$delivery]['price'];
        $order['bin'] = $bin;
        $order['totalBin'] = $totalBin;
        $order['totalBin'] = $totalBin;
        $order['totalOrder'] = $totalOrder;
        $order['delivery'] = $deliveryPrices[$delivery]['name'];
        $order['paymentMethod'] = $paymentDescript[$paymentMethod];
        $this->sendOrder($order['userData']['email'],$order);
        $response['isDone'] = true;
        return $response;

    }

    function sendOrder($to, $dataIntoMail)
    {
        Mail::to($to)->queue(new EK_MailArrow($dataIntoMail, 'chips.EK.EK_mailingOrder', 'Ваш заказ'));
    }

    function feedback(Request $request)
    {


        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255|min:2|string',
            'email' => 'required|max:255|min:3|email',
            'text' => 'required|max:1000|min:5|string',
        ]);
        $response = [
            'feedbackSave' => false,
            'errorSaving' => false,
            'errorValidator' => false,
            'errors' => [
                'name' => false,
                'email' => false,
                'text' => false,
            ],
        ];
        if ($validator->fails()) {
            $response['errorValidator'] = true;
            $response['errors']['name'] = $validator->errors()->get('name');
            $response['errors']['email'] = $validator->errors()->get('email');
            $response['errors']['text'] = $validator->errors()->get('text');
            return $response;

        } else {
            $feedback = new feedbackEcolog;
            $feedback->fill($request->all());
            if ($feedback->save()) {
                $response['feedbackSave'] = true;
                return $response;
            } else {
                $response['errorSaving'] = true;
                return $response;
            }
        }
    }

    function subscribe(Request $request)
    {
        $mailFromRequest = $request->get('mail');
        $response = [
            'isError' => false,
            'mailCheck' => false,
            'isExistsMail' => false,
            'massage' => null,
            'errors' => null,
        ];
        $validator = Validator::make($request->all(), [
            'mail' => 'required|max:255|email',
        ]);
        if ($validator->fails()) {
            $response['isError'] = true;
            $response['mailCheck'] = true;
            $response['errors'] = $validator->errors();
            $response['massage'] = 'incorrect mail';
            return $response;
        }
        $mail = SubscribeEcolog::firstWhere('user_mail', $mailFromRequest);
        if (!$mail) {
            $response['isExistsMail'] = false;
            $dataIntoMail = $mailFromRequest;
            Mail::to($mailFromRequest)->queue(new EK_MailArrow($dataIntoMail, 'chips.EK.EK_mailingSubscribe', 'Добро пожаловать'));
            $subscribe = new SubscribeEcolog;
            $subscribe->user_mail = $mailFromRequest;
            $subscribe->save();
            return $response;

        } else {
            $response['isError'] = true;
            $response['isExistsMail'] = true;
            $response['massage'] = 'Такая почта уже существует';
            return $response;
        }

    }

}
