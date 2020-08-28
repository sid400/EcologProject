<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([
    'prefix' => 'EK',
    'as' => 'EK::',
],
    function () {
        Route::get('/GetProduct', 'Landingpage\Ekolog\EkologController@GetProductJSON')
            ->name('GetProduct');
        Route::post('/putOrder', 'Landingpage\Ekolog\EkologController@putOrder')
            ->name('putOrder');
//        Route::get('/sendOrder', 'Landingpage\Ekolog\EkologController@sendOrder')
//            ->name('sendOrder');
        Route::post('/subscribe', 'Landingpage\Ekolog\EkologController@subscribe')
            ->name('subscribe');
        Route::post('/feedback', 'Landingpage\Ekolog\EkologController@feedback')
            ->name('feedback');
    }
);
