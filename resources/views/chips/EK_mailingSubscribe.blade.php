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
        body{
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
    </style>
    <title>Document</title>

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
            <p class="mailText">Благодарим вас за подписку и рады приветствовать в нашей
                экологичной
                семье </p>
            <div class="mailBlock">
{{--                <img class="" style="width: 100px;height: 100px"--}}
{{--                     src="{{$message->embed('LandingPages\EK\img\mail\subscribeBG.jpg')}}"--}}
{{--          alt="Промокод ECO на скидку в 10% при первом заказе">--}}
{{--                <div class="mailBlock-p mailBlock-p-1">Дарим скидку на первый--}}
{{--                    заказ после подписки по промокоду ECO</div>--}}
{{--                <div class="mailBlock-p mailBlock-p-2">10% </div>--}}
            </div>
            <a class="mailBtn" href="{{$url}}">В магазин</a>
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
</body>
</html>
