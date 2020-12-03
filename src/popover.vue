<template>
    <div class="popover" @click="xxx">
        <div v-if="visible" class="content-wrapper">
            <slot name="content"></slot>
        </div>
        <slot></slot>

    </div>
</template>

<script lang='js'>
  export default {
    name: 'MoPopover',
    data() {
      return {visible: false}
    },
    methods: {
      xxx() {
        this.visible = !this.visible
      }
    }
  }
</script>

<style lang='scss' scoped>
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }
    .content-wrapper{
        position: absolute;
        bottom: 100%;
        border: 1px solid red;
        box-shadow: 0 0 3px rgba(0,0,0,0.5);
    }
</style>