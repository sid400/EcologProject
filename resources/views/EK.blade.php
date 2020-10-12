<!DOCTYPE html>
<html lang="en">
<head><!-- Yandex.Metrika counter -->
    <script type="text/javascript" >
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(68231212, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
        });
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/68231212" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('js/Ekolog.js') }}" defer></script>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/EK.css') }}" rel="stylesheet">
    <link href="{{ asset('img/SVG/icons/Favicon.svg') }}" rel="shortcut icon" type="image/x-icon">
    <title>Ekolog</title>
</head>
<body class="EK_overflow_auto">
<div id="EK" class="EK">
    <div class="EK_modalBin">
        <modal-window v-if="isVisibilityModals.bin"
                      v-bind:modal_props="'bin'"
                      v-bind:body_overflow="bodyOverflow">
            <template v-slot:close_btn>
                <svg class="EK_Btn-icon-BIgWhite modalClose">
                    <use xlink:href="#EK_ico-cross"></use>
                    <use xlink:href="#EK_ico-circle"></use>
                </svg>
            </template>
            <template v-slot:content>
                <customer-bin v-bind:bin="CustomerBin"
                              v-bind:base="productBaseObj"
                              v-bind:add="addBinItem"
                              v-bind:total="totalBin"
                              v-bind:order="totalOrder"
                              v-bind:send_order="sendOrder"
                              v-bind:body_overflow="bodyOverflow"
                              v-bind:check_promo="checkPromoCode"
                              v-bind:calc_order="calcTotalOrder"
                              v-bind:del_all="deleteAllBinItem"
                              v-bind:del="deleteBinItem">
                </customer-bin>
            </template>
        </modal-window>
    </div>
    <div class="EK_modalMenu">
        <modal-window v-if="isVisibilityModals.smallMenu"
                      v-bind:modal_props="'smallMenu'"
                      v-bind:body_overflow="bodyOverflow">
            <template v-slot:close_btn>
                <svg class="EK_Btn-icon-BIgWhite modalClose">
                    <use xlink:href="#EK_ico-cross"></use>
                    <use xlink:href="#EK_ico-circle"></use>
                </svg>
            </template>
            <template v-slot:content>
                <div class="EK_menu_760 EK_slide_menu">
                    <a href="#EK_about" class="EK_menu_item EK_Btn-link"
                       v-on:click="isVisibilityModals.smallMenu = !isVisibilityModals.smallMenu, bodyOverflow()">О
                        нас</a>
                    <div class="EK_sep_line"></div>
                    <a href="#EK_shop" class="EK_menu_item EK_Btn-link"
                       v-on:click="isVisibilityModals.smallMenu = !isVisibilityModals.smallMenu, bodyOverflow()">Магазин</a>
                    <div class="EK_sep_line"></div>
                    <a href="#EK_pay" class="EK_menu_item EK_Btn-link"
                       v-on:click="isVisibilityModals.smallMenu = !isVisibilityModals.smallMenu, bodyOverflow()">Оплата
                        и доставка</a>
                    <div class="EK_sep_line"></div>
                    <a href="#EK_questions" class="EK_menu_item EK_Btn-link"
                       v-on:click="isVisibilityModals.smallMenu = !isVisibilityModals.smallMenu, bodyOverflow()">Контакты</a>
                </div>
            </template>
        </modal-window>

    </div>
    <div class="EK_container">
        <div class="EK_customer_bin_logo">
            <svg v-show="!isVisibilityModals.bin" class="EK_Btn-iconBigBlack EK_customer_bin-ico"
                 v-on:click="bodyOverflow(),isVisibilityModals.bin = !isVisibilityModals.bin">
                <use xlink:href="#EK_ico-bin"></use>
                <use xlink:href="#EK_ico-circle"></use>
{{--                <use v-if="CustomerBin.bin.length > 0" xlink:href="#EK_ico-circleDot"></use>--}}
            </svg>
            <div v-show="!isVisibilityModals.bin" v-if="CustomerBin.bin.length > 0" class="EK_customer_bin-dot"></div>
        </div>
        <header class="EK_header">
            <div v-on:click="animClass('.EK_customer_bin-dot', 'EK_scale')" class="EK_header_title PoiretOne">эколог</div>
            <div class="EK_burgerMenu"
                 v-if="!isVisibilityModals.smallMenu"
                 v-on:click="bodyOverflow(),isVisibilityModals.smallMenu = !isVisibilityModals.smallMenu">
                <div class="EK_burgermenu-stroke"></div>
            </div>
            <div class="EK_menu">
                <a href="#EK_about" class="EK_menu_item EK_Btn-link">О нас</a>
                <a href="#EK_shop" class="EK_menu_item EK_Btn-link">Магазин</a>
                <a href="#EK_pay" class="EK_menu_item EK_Btn-link">Оплата и доставка</a>
                <a href="#EK_questions" class="EK_menu_item EK_Btn-link">Контакты</a>
            </div>
        </header>
        <section class="EK_separator EK_sep_hello">
            <h1 class="EK_text-H EK_sep_hello-text">Магазин добрых товаров</h1>
        </section>
        <section id="EK_about" class="EK_separator  EK_sep_about">
            <h1 class="EK_text-H1 EK_sep_header">O нас</h1>
            <div class="EK_sep_about-content">
                <p class="EK_text-H1 EK_sep_about-text">Мы&nbsp;&mdash; магазин экологичных товаров, которые не&nbsp;вредят
                    природе, животным
                    и&nbsp;человеку</p>
                <p class="EK_text-H2 EK_sep_about-text">Мы&nbsp;существуем для того, чтобы сделать нашу жизнь
                    качественно лучше, создавая удобство и&nbsp;уют не&nbsp;нанося вреда окружающей среде</p>

            </div>
        </section>
        <section id="EK_shop" class="EK_separator Ek_sep_shop">
            <h1 class="EK_text-H1 EK_sep_header">Магазин</h1>
            <div class="EK_shop">
                <div class="Ek_shop_navigate">
                    <span class="Ek_shop_navigate_link EK_text-H2 EK_Btn-link"
                          v-bind:class="[index === Shops.productQuery ? 'EK_Btn-link-active' : '']"
                          v-for="(category, index) in Shops.productCategories" :key="category"
                          v-on:click="Shops.productQuery = index"> @{{category}}</span>
                </div>
                <div class="Ek_shop_showcase">
                    <product-item v-for="product in filteredProductBase" :key="product.product_id"
                                  v-bind:product="product"
                                  v-bind:add="addBinItem"
                                  v-bind:delete="deleteBinItem"
                    ></product-item>
                </div>
            </div>
        </section>
        <section class="EK_separator EK_mailing">
            <div class="EK_mailing_box">
                <p class="EK_anim-show EK_text-T1 EK_mailing_text"
                   v-if="subscribe.subscribeExists === true">Мы уже присылаем ваm самые экологичные новости</p>
                <p class="EK_anim-show EK_text-T1 EK_mailing_text"
                   v-if="subscribe.subscribeStatus === true">Спасибо за подписку</p>
                <p class="EK_anim-show EK_text-T1 EK_mailing_text"
                   v-if="subscribe.subscribeStatus === true">
                    Первое письмо с подарком уже у вас !</p>
                <p class="EK_text-T1 EK_mailing_text"
                   v-if="subscribe.subscribeFormIsVisible">Подпишись на&nbsp;e-mail
                    рассылку и&nbsp;получай новости о&nbsp;наших
                    новинках</p>
                <form v-if="subscribe.subscribeFormIsVisible" action="#" class="EK_mailing_form">
                    @csrf
                    <input v-model="subscribe.subscribeMail" type="email" placeholder="E-mail"
                           class="EK_Form-inputBorder EK_mailing_input">
                    <input v-on:click.prevent="sendSubscribe()" type="submit" class="EK_mailing_submit">
                    <div class="EK_text-T2 EK_mailing_form_errors " v-if="subscribe.subscribeMailCheck">
                        Проверьте поле Email
                    </div>
                </form>

            </div>
        </section>
        <section id="EK_pay" class="EK_separator EK_pay">
            <h1 class="EK_text-H1 EK_pay_header">Оплата и доставка</h1>
            <div class="EK_pay_sep">
                <div class="EK_pay_block">
                    <span class="EK_text-H2 EK_pay_title">Оплата</span>
                    <div class="EK_sep_line EK_pay_line"></div>
                    <ul class="EK_pay_list">
                        <li class="EK_text-T1 EK_pay_list_item">&bull; картой на сайте</li>
                        <li class="EK_text-T1 EK_pay_list_item">&bull; картой при получении</li>
                        <li class="EK_text-T1 EK_pay_list_item">&bull; наличными при получении</li>
                    </ul>
                </div>
                <div class="EK_pay_block">
                    <span class="EK_text-H2 EK_pay_title">Доставка</span>
                    <div class="EK_sep_line EK_pay_line"></div>
                    <ul class="EK_pay_list">
                        <li class="EK_text-T1 EK_pay_list_item">&bull; по России курьером - 450 &#1031;</li>
                        <li class="EK_text-T1 EK_pay_list_item">&bull; по России СДЭКом - 300 &#1031;</li>
                        <li class="EK_text-T1 EK_pay_list_item">&bull; почтой России - 250 &#1031;</li>
                    </ul>
                </div>
            </div>
        </section>
        <section id="EK_questions" class="EK_separator EK_questions">
            <div class="EK_questions_sep">
                <span class="EK_text-H1 EK_questions_header">Остались вопросы?</span>
                <div class="EK_questions_social">
                    <span class="EK_text-T1 EK_questions_text EK_questions_text-1">Пиши нам сюда</span>
                    <svg class="EK_Btn-icon EK_questions_icon">
                        <use xlink:href="#EK_logo-WhatsUp"></use>
                    </svg>
                    <svg class="EK_Btn-icon EK_questions_icon">
                        <use xlink:href="#EK_logo-telegramm"></use>
                    </svg>
                    <svg class="EK_Btn-icon EK_questions_icon">
                        <use xlink:href="#EK_logo-instagramm"></use>
                    </svg>
                    <svg class="EK_Btn-icon EK_questions_icon">
                        <use xlink:href="#EK_logo-VK"></use>
                    </svg>
                </div>
                <span class="EK_text-T1 EK_questions_text EK_questions_text-2">Или задай вопрос тут:</span>
                <form action="" class="EK_questions_form">
                    <div class="EK_questions_form_wrapper">
                        <input type="text" placeholder="Имя"
                               class="EK_Form-inputUnderlineWhite EK_questions_form-input EK_questions_element"
                               v-model="feedback.data.name">
                        <div class="EK_questions_form_error EK_text-T2"
                             v-if="feedback.errors.name[0]">Некорректно введено имя
                        </div>
                    </div>
                    <div class="EK_questions_form_wrapper">
                        <input type="email" placeholder="E-mail"
                               class="EK_Form-inputUnderlineWhite EK_questions_form-input EK_questions_element"
                               v-model="feedback.data.email">
                        <div class="EK_questions_form_error EK_text-T2"
                             v-if="feedback.errors.email[0]">Некорректно введен E-mail
                        </div>
                    </div>

                    <span class="EK_text-T2 EK_questions_text EK_questions_text-3 EK_questions_element ">Любой вопрос или комментарий</span>

                    <div class="EK_questions_form_wrapper">
                        <textarea cols="4"
                                  placeholder="Можешь оставить свой номер телефона и мы ответим в любом удобном тебе мессенджере или ответ автоматически придёт на e-mail"
                                  class="EK_Form-textArea EK_questions_element"
                                  v-model="feedback.data.text"></textarea>
                        <div class="EK_questions_form_error EK_text-T2"
                             v-if="feedback.errors.text[0]">Что-то не так с текстом
                        </div>
                    </div>
                    <input type="submit" value="Отправить" class="EK_Btn-clr EK_questions_form-btn"
                           v-on:click.prevent="sendFeedback()"
                           v-bind:value="feedback.btnValue">
                    <span class="EK_text-T2 EK_questions_text EK_questions_text-4">Нажимая на кнопку, я даю согласие
                        на обработку персональных данных</span>
                </form>
            </div>
        </section>
        <footer class="EK_separator EK_footer">
            <div class="EK_sep_line"></div>
            <div class="EK_footer_sep">
                <div class="EK_footer_block EK_footer_block-1">
                    <span class="EK_text-H2 EK_footer_header">Магазин</span>
                    <a href="#EK_shop"
                       v-for="(category, index) in Shops.productCategories" :key="category"
                       v-on:click="Shops.productQuery = index"
                       class="EK_text-T1 EK_Btn-link  EK_footer_text">@{{category}}</a>
                </div>
                <div class="EK_footer_block EK_footer_block-2">
                    <span class="EK_text-H2 EK_footer_header">Инфо</span>
                    <a href="#EK_about" class="EK_text-T1 EK_Btn-link  EK_footer_text">О нас</a>
                    <a href="#EK_pay" class="EK_text-T1 EK_Btn-link  EK_footer_text">Оплата и доставка</a>
                </div>
                <div class="EK_footer_block EK_footer_block-3">
                    <span class="EK_text-H2 EK_footer_header">Контакты</span>
                    <span class="EK_text-T1  EK_footer_text">+7-934-72-57-50</span>
                    <a href="mailto:Ecolog@gmail.com" class="EK_text-T1 EK_Btn-link EK_footer_text">Ecolog@gmail.com</a>
                    <div>
                        <svg class="EK_Btn-icon EK_footer_icon">
                            <use xlink:href="#EK_logo-WhatsUp"></use>
                        </svg>
                        <svg class="EK_Btn-icon EK_footer_icon">
                            <use xlink:href="#EK_logo-telegramm"></use>
                        </svg>
                        <svg class="EK_Btn-icon EK_footer_icon">
                            <use xlink:href="#EK_logo-instagramm"></use>
                        </svg>
                        <svg class="EK_Btn-icon EK_footer_icon">
                            <use xlink:href="#EK_logo-VK"></use>
                        </svg>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</div>
</body>
@include("chips.EK_spriteSVG")
</html>
