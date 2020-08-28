<template>
    <section class="modalWindow">

        <div class="modalWrapper-1">
            <div v-on:click="closeWindow(), body_overflow()" class="modalCloser modalCloser-1"></div>
            <div class="modalWrapper-2">

                <div class="modalCloseBatton">
                    <svg class="EK_Btn-icon-BIgWhite modalClose"
                         v-on:click="closeWindow(),body_overflow()">
                        <use xlink:href="#EK_ico-cross"></use>
                        <use xlink:href="#EK_ico-circle"></use>
                    </svg>
                </div>
                <div class="modalWrapper-3">
                    <div v-on:click="closeWindow(),body_overflow()" class="modalCloser modalCloser-2"></div>
                        <slot></slot>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
    export default {
        name: "modal-window",
        props: ['is_show_bin', 'body_overflow'],
        methods: {
            closeWindow() {
                this.$root.isShowModal = false
            }
        }
        // data: function () {
        // },
    }
</script>

<style scoped>
    .modalWindow {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        min-height: 100vw;
        height: 100%;
        min-width: 100%;
        z-index: 999;
        overflow: auto;
    }

    .modalCloser {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        min-height: 100vw;
        height: 100%;
        min-width: 100%;
        overflow: auto;
    }

    .modalCloser-1 {
        z-index: 0;
    }

    .modalCloser-2 {
        z-index: -1;
    }
</style>
