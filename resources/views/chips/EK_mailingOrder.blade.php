<!DOCTYPE HTML PUBLIC «-//W3C//DTD HTML 4.0 Transitional//EN»>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="x-apple-disable-message-reformatting">
    <link href="{{ asset('LandingPages/EK/CSS/EK.css') }}" rel="stylesheet">

    <style>
        body {
            background-color: #FFFFFF;
        }

        .content a {
            text-decoration: none;
            text-underline: none;
            color: #00272c;
        }

        .content a:hover {
            text-decoration: none;
            text-underline: none;
            color: #00272c;
        }

        .content a:focus {
            text-decoration: none;
            text-underline: none;
            color: #00272c;
        }

        .content {
            background-color: #FFFFFF;
            max-width: 595px;
            margin: 0 auto;
            color: #00272c;
            text-align: center;
        }

        .mailTitle {
            font-size: 48px;
            line-height: 56px;
            text-align: center;
            margin-bottom: 40px;
            margin-left: 5%;
            margin-right: 5%;
        }

        .mailLine {
            border: 1px solid #00272C;
            margin-left: 5%;
            margin-right: 5%;
            margin-top: 30px;
            margin-bottom: 30px;
        }

        .mailHeader {
            font-size: 36px;
            line-height: 42px;
            margin-bottom: 30px;
            margin-top: 60px;
            margin-left: 5%;
            margin-right: 5%;
        }

        .mailText {
            font-size: 24px;
            line-height: 28px;
            margin-bottom: 50px;
            text-align: center;
            margin-left: 5%;
            margin-right: 5%;
        }

        .mailTextleft {
            text-align: left;
        }

        .mailBlock {
            /*background-color: #586E58;*/
            /*background-repeat: no-repeat;*/
            /*background-position: center;*/
            /*background-size: auto;*/
            margin-bottom: 70px;
            /*padding-bottom: 30px;*/
            /*padding-top: 30px;*/
        }

        /*.mailBlock-p {*/
        /*    display: inline-block;*/
        /*    height: 84px;*/

        /*}*/

        /*.mailBlock-p-1 {*/
        /*    margin-left: 64px;*/
        /*    font-size: 24px;*/
        /*    line-height: 28px;*/
        /*    width: 298px;*/
        /*    height: 84px;*/
        /*}*/

        /*.mailBlock-p-2 {*/
        /*    width: 115px;*/
        /*    height: 75px;*/
        /*    font-size: 64px;*/
        /*    line-height: 84px;*/
        /*    margin-right: 64px;*/
        /*    height: 84px;*/
        /*}*/

        .mailBtn {
            display: inline-block;
            width: 277px;
            height: 46px;
            line-height: 46px;
            background-color: #586E58;
            margin-bottom: 20px;
            font-size: 16px;
        }

        .mailFooter {
            margin-left: 5%;
            margin-right: 5%;
        }

        .mailFooterSeparator {
            margin-bottom: 20px;
        }

        .mailPhoneAndMail {
            font-size: 18px;
            line-height: 21px;
        }

        .mailSocialLink {
            display: inline-block;
            width: 18px;
            height: 18px;
            margin-left: 10px;
            margin-right: 10px;
        }

        .mailSocialLinkImg {
            display: inline-block;
            width: 18px;
            height: 18px;
        }
        .cartItem{
        }
    </style>
    <title>Заказ</title>

</head>
<body>
{{--<div style="font-size: 0px; font-color: #ffffff; opacity: 0; visibility: hidden; width: 0; height: 0; display: none;">--}}
{{--    текст прехедера--}}
{{--</div>--}}
<div class="container">
    <div class="container">
        <div class="content">
            <h1 class="mailTitle">Эколог</h1>
            <div class="mailLine"></div>
            <h2 class="mailHeader">Здравствуйте</h2>
            <p class="mailText">Благодарим вас за заказ добрых товаров</p>
            <p class="mailTextleft">Вы заказали</p>
            <div class="mailLine"></div>
            @foreach($data['bin'] as $binitem)
                <div class="cartItem">
                    <img src="#" alt="" style="width: 100px; height: 100px; background-color: gray">
                    <span>
                        <span>{{$binitem['product']['pre_name'] }}</span>
                        <span>{{$binitem['product']['name'] }}</span>
                    </span>
                    <span>{{$binitem['count'] }}</span>
                    <span>{{$binitem['count'] * $binitem['product']['price']}}₽</span>
                </div>
                <div class="mailLine"></div>
            @endforeach
            <div class="mailBlock">
                <div class="payment">
                    <h2>Оплата</h2>
                    <div class="mailLine"></div>
                    <p>{{$data['paymentMethod']}}</p>
                </div>
                <div class="delivery">
                    <h2>Доставка</h2>
                    <div class="mailLine"></div>
                    <p>{{$data['delivery']}}</p>
                </div>
                <div class="Total">
                    Сумма: {{$data['totalOrder']}}₽
                </div>
                <div class="customerData">
                    <span>{{$data['userData']['email']}}</span>
                    <span>{{$data['userData']['name']}}</span>
                    <span>{{$data['userData']['phone']}}</span>
                    <span>{{$data['userData']['street']}}</span>
                    <span>{{$data['userData']['town']}}</span>
                </div>
                <div class="conditions">
                    <p>• Ваши данные будут переданы в курьерскую службу, которая свяжется с вами в течение трёх
                        дней.</p>
                    <p>• Если вы нашли ошибку - свяжись с нами по телефону, e-mail или в социальных сетях</p>
                </div>
                <div class="mailLine"></div>
                <div class="mailFooter">
                    <div class="mailFooterSeparator">
                        <a class="mailPhoneAndMail" href="#">+7-777-77-77-77</a>
                    </div>
                    <div class="mailFooterSeparator">
                        <a class="mailPhoneAndMail" href="#">Ecolog@gmeil.com</a>
                    </div>
                    <div class="mailFooterSeparator">
                        {{--                    <a class="mailSocialLink" href="#"><img class="mailSocialLinkImg"--}}
                        {{--                                                            src="{{$message->embed('public/LandingPages/EK/img/mail/whatsup.png')}}"--}}
                        {{--                                                            alt="whatsup"></a>--}}
                        {{--                    <a class="mailSocialLink" href="#"><img class="mailSocialLinkImg"--}}
                        {{--                                                            src="{{$message->embed('public/LandingPages/EK/img/mail/telegramm.png')}}"--}}
                        {{--                                                            alt="telegramm"></a>--}}
                        {{--                    <a class="mailSocialLink" href="#"><img class="mailSocialLinkImg"--}}
                        {{--                                                            src="{{$message->embed('public/LandingPages/EK/img/mail/instagramm.png')}}"--}}
                        {{--                                                            alt="instagramm"></a>--}}
                        {{--                    <a class="mailSocialLink" href="#"><img class="mailSocialLinkImg"--}}
                        {{--                                                            src="{{$message->embed('public/LandingPages/EK/img/mail/vkontakte.png')}}"--}}
                        {{--                                                            alt="vkontakte"></a>--}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
