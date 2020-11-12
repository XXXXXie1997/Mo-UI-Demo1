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
      phone: {
        type: Object,
        validator(value) {
          let keys = Object.keys(value);
          let valid = true;
          keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
              valid = false;
            }
          });
          return valid;
        }
      }
    },
    data() {
      return {
        gutter: 0,
      };
    },
    computed: {
      colClass() {
        let {span, offset, phone} = this;
        let phoneClass;
        if (phone) {
          phoneClass = [`col-phone-${phone.span}`];
        }
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`,
          ...phoneClass
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

    @media (max-width: 576px) {

    }
</style>