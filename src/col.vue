<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
export default {
  name:'MoCol',
  props:{
    span: {
      type:[Number, String]
    }
  }
}
</script>

<style lang='scss' scoped>
    .col {
        height: 100px;
        background: #aaaaaa;
        width: 50%;
        border: 1px solid #333333;

        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n /24)*100%;
            }
        }
    }

</style>