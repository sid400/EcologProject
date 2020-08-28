<template>
    <section class="modalWindow">
        <div class="modalWrapper modalWrapper-1">
            <div class="modalCloser modalCloser-1"
                 v-on:click="closeWindow(modal_props), body_overflow()">
            </div>
            <div class="modalWrapper modalWrapper-2">
                <div class="modalCloseBatton"
                     v-on:click="closeWindow(modal_props),body_overflow()">
                    <slot name="close_btn"></slot>
                </div>
                <div class="modalWrapper modalWrapper-3">
                    <div v-on:click="closeWindow(modal_props),body_overflow()" class="modalCloser modalCloser-2"></div>
                    <slot name="content"></slot>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "modal-window",
        props: ['body_overflow', 'modal_props'],
        methods: {
            closeWindow(modalProps) {
                // noinspection JSUnresolvedVariable
                this.$root.isVisibilityModals[modalProps] = false;
                // noinspection JSUnresolvedVariable
                this.$root.orderResponse.isDone = false
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
        min-height: 100vh;
        height: 100%;
        min-width: 100%;
        z-index: 999;
        overflow: auto;
    }
    .modalWrapper{
        position: relative;

    }

    .modalWrapper-1 {
        overflow: auto;
        min-height: 100%;
        min-width: 100%;
    }

    .modalWrapper-2 {
        height: 100%;
        width: 100%;
    }

    .modalWrapper-3 {

        z-index: 990;
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

    .modalCloseBatton {
        cursor: pointer;
        z-index: 999;
    }
</style>
