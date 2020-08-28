<template>
    <div class="EK_customer_bin">
        <h2 v-if=" orderResponse.isDone === false" class="EK_text-H1 EK_customer_bin_header">Ваш заказ</h2>
        <div v-if="orderResponse.isDone === false" class="EK_sep_line EK_customer_bin-sep"></div>
        <div v-if="customerBin.length === 0 && orderResponse.isDone === false" class="EK_customer_bin-empty">
            <p class="EK_text-H1">Упс, здесь пока что пусто</p>
            <a href="#EK_shop" class="EK_Btn-stnd EK_customer_bin-btn" v-on:click="closeWindow(),body_overflow()">Вернуться
                к
                покупкам</a>
        </div>
        <div v-if="orderResponse.isDone === true" class="EK_customer_bin-finish">
            <p class="EK_text-H1 EK_customer_bin-finish_header">Спасибо за заказ!</p>
            <p class="EK_text-H2 EK_customer_bin-finish_text">• Ваш заказ успешно оформлен и обрабатывается нашими
                менеджерами</p>
            <p class="EK_text-H2 EK_customer_bin-finish_text">• Вся подробная информация выслана вам на e-mail</p>
            <p class="EK_text-H2 EK_customer_bin-finish_text">• Мы свяжемся с вами в ближайшее время</p>
        </div>
        <div class="EK_customer_bin_items" v-if="customerBin.length > 0">
            <div class="EK_customer_bin_cart" v-for="item in bin.bin" :key="item.id">
                <div class="EK_customer_bin_cart-2">
                    <img class="EK_customer_bin_cart-img" v-bind:src=" path + item.id + ext"
                         v-bind:alt="base[item.id].name">
                    <div class="EK_customer_bin_cart_withoutImg">
                        <div class="EK_customer_bin_cart-nameCont">
                            <span class="EK_text-T1 EK_customer_bin_cart-preName">{{base[item.id].pre_name}} </span>
                            <span class="EK_text-T1 EK_customer_bin_cart-name">{{base[item.id].name}}</span>
                        </div>
                        <div class="EK_customer_bin_cart-countCont">
                            <span class="EK_customer_bin_cart-btnDel" v-on:click="del(item.id)"></span>
                            <span class="EK_text-T1 EK_customer_bin_cart-number">{{item.count}}</span>
                            <span class="EK_customer_bin_cart-btnAdd" v-on:click="add(item.id)"></span>
                        </div>
                        <div class="EK_text-T1 EK_customer_bin_cart-price">{{base[item.id].price * item.count}} &#1031;
                        </div>
                        <div class="EK_text-T1 EK_customer_bin_cart-delItem" v-on:click="del_all(item.id)"></div>
                    </div>
                </div>
                <div class="EK_sep_line EK_customer_bin-sep"></div>
            </div>
            <div class="EK_text-H2 EK_customer_bin-total">
                Сумма заказа: {{total}} &#1031;
            </div>
            <div class="EK_customer_bin-payBlock">
                <div class="EK_text-H1 EK_customer_bin-header">Оплата</div>
                <div class="EK_sep_line EK_customer_bin-sep"></div>
                <div v-on:click="bin.paymentMethod = 1" class="EK_customer_bin-payItem">
                    <div class="EK_customer_bin-check-Box">
                        <svg class="EK_customer_bin-checkBoxIcon">
                            <use class="use1" xlink:href="#EK_ico-circleMini"></use>
                            <use v-if="bin.paymentMethod === 1" class="use2" xlink:href="#EK_ico-tickMini"></use>
                        </svg>
                    </div>
                    <p class="EK_text-T1 EK_customer_bin-text">картой на сайте</p>
                </div>
                <div v-on:click="bin.paymentMethod = 2" class="EK_customer_bin-payItem">
                    <div class="EK_customer_bin-check-Box">
                        <svg class="EK_customer_bin-checkBoxIcon">
                            <use class="use1" xlink:href="#EK_ico-circleMini"></use>
                            <use class="use2" v-if="bin.paymentMethod === 2" xlink:href="#EK_ico-tickMini"></use>
                        </svg>
                    </div>
                    <p class="EK_text-T1 EK_customer_bin-text">картой при получении</p>
                </div>
                <div v-on:click="bin.paymentMethod = 3" class="EK_customer_bin-payItem">
                    <div class="EK_customer_bin-check-Box">
                        <svg class="EK_customer_bin-checkBoxIcon">
                            <use class="use1" xlink:href="#EK_ico-circleMini"></use>
                            <use class="use2" v-if="bin.paymentMethod === 3" xlink:href="#EK_ico-tickMini"></use>
                        </svg>
                    </div>
                    <p class="EK_text-T1 EK_customer_bin-text">наличными при получении</p>
                </div>
                <div class="EK_sep_line EK_customer_bin-sep"></div>
            </div>
            <div class="EK_customer_bin-payBlock">
                <div class="EK_text-H1 EK_customer_bin-header">Доставка</div>
                <div class="EK_sep_line EK_customer_bin-sep"></div>
                <div v-on:click="bin.delivery = 1,calc_order()" class=" EK_customer_bin-payItem">
                    <div class="EK_customer_bin-check-Box">
                        <svg class="EK_customer_bin-checkBoxIcon">
                            <use class="use1" xlink:href="#EK_ico-circleMini"></use>
                            <use class="use2" v-if="bin.delivery === 1" xlink:href="#EK_ico-tickMini"></use>
                        </svg>
                    </div>
                    <p class="EK_text-T1 EK_customer_bin-text">по России курьером - 450 &#1031;</p>
                </div>
                <div v-on:click="bin.delivery = 2,calc_order()" class="EK_customer_bin-payItem">
                    <div class="EK_customer_bin-check-Box">
                        <svg class="EK_customer_bin-checkBoxIcon">
                            <use class="use1" xlink:href="#EK_ico-circleMini"></use>
                            <use class="use2" v-if="bin.delivery === 2" xlink:href="#EK_ico-tickMini"></use>
                        </svg>
                    </div>
                    <p class="EK_text-T1 EK_customer_bin-text">по России СДЭКом - 300 &#1031;</p>
                </div>
                <div v-on:click="bin.delivery = 3, calc_order()" class="EK_customer_bin-payItem">
                    <div class="EK_customer_bin-check-Box">
                        <svg class="EK_customer_bin-checkBoxIcon">
                            <use class="use1" xlink:href="#EK_ico-circleMini"></use>
                            <use class="use2" v-if="bin.delivery === 3" xlink:href="#EK_ico-tickMini"></use>
                        </svg>
                    </div>
                    <p class="EK_text-T1 EK_customer_bin-text">почтой России - 250 &#1031;</p>
                </div>
                <div class="EK_customer_bin-sep"></div>
                <div class="EK_sep_line EK_customer_bin-sep"></div>
            </div>
            <!--buyer's data-->
            <div class="EK_customer_bin-customerInfo">
                <div class="EK_text-H1 EK_customer_bin-header">Данные для доставки</div>
                <form class="EK_customer_bin-formDelivery">
                    <div class="EK_customer_bin-formDelivery-wrapper">
                        <input v-model="bin.userData.name" class="EK_Form-inputUnderlineBlack" type="text" name=""
                               id="EK_in_del-1" placeholder="ФИО">
                        <div class="EK_questions_form_error EK_text-T2"
                             v-if="orderResponse.validator.hasOwnProperty('name')">Проверьте поле ФИО
                        </div>
                    </div>
                    <div class="EK_customer_bin-formDelivery-wrapper">
                        <input v-model="bin.userData.phone" class="EK_Form-inputUnderlineBlack" type="text" name=""
                               id="EK_in_del-2" placeholder="Телефон">
                        <div class="EK_questions_form_error EK_text-T2"
                             v-if="orderResponse.validator.hasOwnProperty('phone')">Проверьте поле Телефон
                        </div>
                    </div>
                    <div class="EK_customer_bin-formDelivery-wrapper">
                        <input v-model="bin.userData.email" class="EK_Form-inputUnderlineBlack" type="text" name=""
                               id="EK_in_del-3" placeholder="E-mail">
                        <div class="EK_questions_form_error EK_text-T2"
                             v-if="orderResponse.validator.hasOwnProperty('email')">Проверьте поле E-mail
                        </div>
                    </div>
                    <div class="EK_customer_bin-formDelivery-wrapper">
                        <input v-model="bin.userData.town" class="EK_Form-inputUnderlineBlack" type="text" name=""
                               id="EK_in_del-4" placeholder="Город">
                        <div class="EK_questions_form_error EK_text-T2"
                             v-if="orderResponse.validator.hasOwnProperty('town')">Проверьте поле Город
                        </div>
                    </div>
                    <div class="EK_customer_bin-formDelivery-wrapper">
                        <input v-model="bin.userData.street" class="EK_Form-inputUnderlineBlack" type="text" name=""
                               id="EK_in_del-5" placeholder="Улица, дом, номер квартиры">
                        <div class="EK_questions_form_error EK_text-T2"
                             v-if="orderResponse.validator.hasOwnProperty('street')">Проверьте поле Улица, дом, номер квартиры
                        </div>
                    </div>
                </form>
            </div>
            <!--Promo code-->
            <div class="EK_customer_bin-promo">
                <div class="EK_text-H1 EK_customer_bin-header">У вас есть промокод?</div>
                <input v-model="bin.promoCode" class="EK_Form-inputBorder EK_customer_bin-promoInput" type="text"
                       placeholder="Промокод">
                <div v-on:click="check_promo(),calc_order()" class="EK_Btn-clr EK_customer_bin-promoBtn">Применить</div>

            </div>
            <div class="EK_text-H2 EK_customer_bin-total">
                Сумма: {{order}} &#1031;
            </div>
            <a v-on:click="send_order()" href="#EK_shop" class="EK_Btn-stnd EK_customer_bin-btn">Оформить заказ</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "customer-bin",
        props: ['base', 'bin', 'add', 'del', 'del_all', 'send_order', 'total', 'order', 'calc_order', 'body_overflow', 'check_promo'],
        bin: [],
        methods: {
            closeWindow() {
                this.$root.isVisibilityModals.bin = false
            }
        },
        computed: {
            customerBin: function () {
                return this.$root.CustomerBin.bin
            },
            path: function () {
                return this.$root.path
            },
            ext: function () {
                return this.$root.ext
            },
            orderResponse: function () {
                return this.$root.orderResponse
            }

        },
        data: function () {
            return {}
        },
    }
</script>

<style scoped>

</style>
