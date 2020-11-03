<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
  export default {
    name: 'MoCol',
    props: {
      span: {
        type: [Number, String],
      },
      offset: {
        type: [Number, String],
      },
    },
    data() {
      return {
        gutter: 0,
      };
    },
    computed: {
      colClass() {
        let {span, offset} = this;
        return [
          `col-${span}`,
          offset && `offset-${offset}`
        ];
      },
      colStyle() {
        return {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px',
        };
      },
    }
  };
</script>

<style lang='scss' scoped>
    .col {
        width: 50%;

        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n /24)*100%;
            }
        }
        $offset-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$offset-prefix}#{$n} {
                margin-left: ($n /24)*100%;
            }
        }
    }

</style>