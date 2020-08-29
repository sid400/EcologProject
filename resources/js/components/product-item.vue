<template>
    <div class="EK_shop_item">
        <img v-bind:src=" path + product.product_id + ext" v-bind:alt="product.name"
             class="EK_shop_item_img">
        <h3 class="EK_text-H2 EK_shop_item_title">{{product.pre_name}} {{product.name}}</h3>
        <div class="EK_sep_line EK_shop_item_line"></div>
        <p class="EK_text-T1 EK_shop_item_desc">{{product.short_description}}</p>
        <div class="EK_sep_line EK_shop_item_line"></div>
        <div class="EK_shop_item_sep">
            <span v-on:click="add(product.product_id),animClass('.EK_customer_bin-dot', 'EK_scale')" class="EK_Btn-stnd  EK_shop_item_btn">В корзину</span>
            <span class="EK_text-H2 EK_shop_item_price">{{product.price}} &#1031;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "product-item",
        props: ['product', 'add','delete',],
        computed: {
            path: function () {
                return this.$root.path
            },
            ext: function () {
                return this.$root.ext
            },
            animClass: function () {
                return this.$root.animClass
            },
        },
        data: function () {
            return {
                path1: `public/img/products/`,
                path2: `.jpeg`,
                fullPath: ''
            }
        },
    }
</script>

<style scoped>

</style>
