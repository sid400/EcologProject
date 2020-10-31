// Vue.component('product-item', {
//     data: function () {
//         return {
//         }
//     },
//     template:
//         '<div class="EK_shop_item">' +
//             '<img src="../../../../public/LandingPages/EK/img/products/Dark%20Brown%20Soap.jpeg" alt="" class="EK_shop_item_img">' +
//             '<h3 class="EK_text-H2 EK_shop_item_title">Мыло “Зефир”</h3>' +
//             '<div class="EK_sep_line EK_shop_item_line"></div>' +
//             '<p class="EK_text-T1 EK_shop_item_desc">Натуральное мыло с запахом зефира. Состоит только из природных компонентов: масел и экстрактов целебных трав</p>' +
//             '<div class="EK_sep_line EK_shop_item_line"></div>' +
//             '<div class="EK_shop_item_sep">' +
//                 '<span class="EK_Btn-stnd  EK_shop_item_btn">В корзину</span>' +
//                 '<span class="EK_text-H2 EK_shop_item_price">666 &#1031;</span>' +
//             '</div>' +
//         '</div>'
// })
Vue.component('product-item', require('./components/product-item').default)
Vue.component('modal-window', require('./components/modal-window').default)
Vue.component('customer-bin', require('./components/customer-bin').default)
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)


const EK = new Vue({
    el: '#EK',
    data: {
        isVisibilityModals: {
            bin: false,
            smallMenu: false,
        },
        productBase: null,
        productBaseObj: null,
        totalBin: null,
        totalOrder: null,
        discount: 0,
        filteredProductBase: [],
        subscribe: {
            subscribeMail: null,
            subscribeMailCheck: false,
            subscribeStatus: false,
            subscribeExists: false,
            subscribeFormIsVisible: true,
            subscribeErrors: null,
        },
        feedback: {
            data: {
                name: null,
                email: null,
                text: null,
            },
            validate: {
                feedbackSave: false,
                errorSaving: false,
                errorValidator: false,
            },
            errors: {
                name: [false],
                email: [false],
                text: [false],
            },
            btnValue: 'Отправить'

        },
        promoCodes: {
            'test10': 10,
            'test20': 20,
            'test30': 30,
            'test40': 40,
        },
        deliveryCosts: {
            1: 450,
            2: 300,
            3: 250,
        },
        orderResponse: {
            isDone: false,
            Error: false,
            massage: null,
            validator: {}
        },
        path: 'img/products/',
        ext: '.jpeg',
        Shops: {
            productQuery: '0',
            productCategoriesEn: ['all', 'soap', 'Brushes', 'roles', 'dishes', 'other'],
            productCategories: {
                0: 'Все продукты',
                1: 'Мыло',
                2: 'Щётки',
                3: 'Ролики для лица',
                4: 'Посуда',
                5: 'Другое',
            }
        },
        CustomerBin: {
            userData: {
                name: null,
                phone: null,
                email: null,
                town: null,
                street: null,
            },
            promoCode: null,
            paymentMethod: 1,
            delivery: 1,
            bin: []
        }
    },
    computed: {
        test: function () {
            return 'test'
        },
    },
    methods: {
        // SERVICE METHODS
        arrayToObj(arr) {
            let obj = {};
            arr.forEach(item => {
                let id = item.id;
                obj[id] = item;
            })
            return obj
        },
        animClass(selector, animClass){
            let bodyClass = document.querySelector(selector).classList;
            bodyClass.add(animClass);
            setTimeout(() => {
                bodyClass.remove(animClass)
            }, 500);
        },
        changeClass(selector, firstClass, secondClass) {
            let bodyClass = document.querySelector(selector).classList;
            let isFirstClass = bodyClass.contains(firstClass);
            let isSecondClass = bodyClass.contains(secondClass);
            if (isFirstClass) {
                bodyClass.replace(firstClass, secondClass);
            } else if (isSecondClass) {
                bodyClass.replace(secondClass, firstClass)
            } else {
                bodyClass.add(firstClass);
            }
        },
        bodyOverflow() {
            this.changeClass('body', 'EK_overflow_auto', 'EK_overflow_hidden')
        },
        CloseModal(ModalParam) {
            this[ModalParam] = false;
        },

        // PUSH AND PULL METHODS
        sendFeedback() {
            let data = this.feedback.data
            axios
                .post('https://ecolog.ipa-wb.ru/api/EK/feedback', data)
                .then((response) => {
                    if (response.data.errorValidator) {
                        this.feedback.errors = response.data.errors
                        this.feedback.validate.errorValidator = response.data.errorValidator
                        // return;
                    } else if (response.data.errorSaving) {
                        this.feedback.validate.errorSaving = response.data.errorSaving
                        // return;
                    } else {
                        this.feedback.data.text = null
                        this.feedback.errors = {
                            name: [false],
                            email: [false],
                            text: [false],
                        }
                        this.feedback.btnValue = 'Еще один'
                        this.feedback.validate.feedbackSave = response.data.feedbackSave
                        // return;
                    }

                })
                .catch((error) => {
                    console.log(error);
                });
        },
        sendSubscribe: function () {
            let mail = this.subscribe.subscribeMail;
            axios
                .post('https://ecolog.ipa-wb.ru/api/EK/subscribe', {'mail': mail})
                .then((response) => {
                    /**
                     * @type {Object}
                     */
                    let resp = response.data;
                    /**
                     *
                     */
                    if (resp.mailCheck === true) {
                        /**
                         * @param {boolean} resp.mailCheck
                         */
                        this.subscribe.subscribeMailCheck = true
                        this.subscribe.subscribeErrors = resp.errors.mail

                    } else if (resp.isExistsMail === true) {
                        /**
                         * @param {boolean} resp.isExistsMail
                         */
                        this.subscribe.subscribeExists = true
                        this.subscribe.subscribeFormIsVisible = false
                        // return;
                    } else if (resp.isExistsMail === false) {
                        this.subscribe.subscribeStatus = true
                        this.subscribe.subscribeFormIsVisible = false
                        // return
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        sendOrder() {
            let bin = this.CustomerBin;
            axios
                .post('https://ecolog.ipa-wb.ru/api/EK/putOrder', bin)
                .then((response) => {
                    this.orderResponse = response.data
                    if (this.orderResponse.isDone === true) {
                        this.CustomerBin.bin = [];
                        Vue["$cookies"].remove('CustomerBin')
                    }
                })
                .catch((error) => {
                    console.log(error);
                });

        },

        // ALL ACTION WITH PRODUCT DATA METHODS
        filterProducts() {
            this.filteredProductBase = [];
            if (this.Shops.productQuery === '0') {
                this.filteredProductBase = this.productBase;
            } else {
                this.productBase.forEach(product => {
                    if (parseInt(product.category) === parseInt(this.Shops.productQuery)) {
                        /**
                         * @param  {string} product.category
                         */
                        this.filteredProductBase.push(product);
                    }

                })
            }

        },
        //DISCOUNT METHODS
        checkPromoCode() {
            let promoCode = this.CustomerBin.promoCode;
            let promoCodes = this.promoCodes
            if (promoCodes[promoCode] > 0) {
                this.setDiscount(promoCodes[promoCode])
            }
        },
        setDiscount(disc) {
            this.discount = disc;
        },

        //CALC METHODS
        calcTotalOrder() {
            let bin = this.CustomerBin;
            let dl = this.deliveryCosts;
            let tb = this.totalBin;
            return this.totalOrder = Math.round(((tb + dl[bin['delivery']]) / 100) * (100 - this.discount));

        },
        calcTotalBin() {
            let bin = this.CustomerBin.bin;
            let base = this.productBaseObj;
            let sum = 0;
            bin.forEach(item => {
                let product = base[item.id]
                sum += product['price'] * item.count
            })
            return this.totalBin = Math.round(sum);
        },

        // ACTION WITH BIN METHODS
        addBinItem(id) {
            let prodStatus = this.searchItemInBin(id);
            if (prodStatus === false) {
                this.CustomerBin.bin.push(
                    {
                        'id': id,
                        'count': 1
                    }
                )
            } else {
                let item = this.CustomerBin.bin[prodStatus]
                item.count += 1;
            }
            let bin = JSON.stringify(this.CustomerBin.bin)
            Vue["$cookies"].set('CustomerBin', bin);
            this.calcTotalBin();
            this.calcTotalOrder();
        },
        deleteBinItem(id) {
            let prodStatus = this.searchItemInBin(id);
            let item = this.CustomerBin.bin[prodStatus];
            let count = item.count;
            if (count > 1) {
                item.count -= 1;
            } else {
                this.CustomerBin.bin.splice(prodStatus, 1);
            }
            let bin = JSON.stringify(this.CustomerBin.bin)
            Vue["$cookies"].set('CustomerBin', bin);
            this.calcTotalBin();
            this.calcTotalOrder();
        },
        deleteAllBinItem(id) {
            let prodStatus = this.searchItemInBin(id);
            this.CustomerBin.bin.splice(prodStatus, 1);
            let bin = JSON.stringify(this.CustomerBin.bin)
            Vue["$cookies"].set('CustomerBin', bin);
        },
        searchItemInBin(id) {
            if (this.CustomerBin.bin.length === 0) {
                return false
            } else {
                let ind = false;
                this.CustomerBin.bin.forEach((element, index) => {
                        if (element.id === id) {
                            ind = index;
                            return ind
                        }
                    }
                )
                return ind;
            }
        },


    },
    beforeMount() {
        // noinspection CommaExpressionJS
        axios
            .get('https://ecolog.ipa-wb.ru/api/EK/GetProduct')
            .then(response => (
                this.productBase = response.data,
                    this.productBaseObj = this.arrayToObj(response.data),
                    this.filteredProductBase = response.data

            ));
    },
    mounted() {

        let cookieBin = Vue["$cookies"].get('CustomerBin');
        if (cookieBin) {
            this.CustomerBin.bin = JSON.parse(cookieBin);
        }
    },

    beforeUpdate() {
        this.filterProducts();
        this.calcTotalBin();
        this.calcTotalOrder();
    }

});
