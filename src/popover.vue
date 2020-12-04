<template>
    <div class="popover" @click.stop="onClick" ref="popover">
        <div ref="contentWrapper" v-if="visible" class="content-wrapper">
            <slot name="content"></slot>
        </div>
        <span class="triggerWrapper" ref="triggerWrapper">
              <slot></slot>
        </span>

    </div>
</template>

<script lang='js'>
  export default {
    name: 'MoPopover',
    data() {
      return {visible: false}
    },
    methods: {
      onClick(event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          } else {
            this.open()
          }
        }
      },
      open() {
        this.visible = true
        setTimeout(() => {
          this.positionContent()
          document.addEventListener('click', this.onClickDocument)
        }, 0)
      },
      positionContent() {
        document.body.appendChild(this.$refs.contentWrapper)
        let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
      },

      close() {
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)

      },
      onClickDocument(e) {
        if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {return}
        if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
        ) {return}
        this.close()
      }
    },
    mounted() {

    }
  }
</script>

<style lang='scss' scoped>
    $border-color: #333;
    $border-radius: 4px;
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        padding: 0.5em 1em;
        filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.5));
        background: white;
        transform: translateY(-100%);
        margin-top: -10px;
        max-width: 20em;
        word-break: break-all;

        &::before, &::after {
            content: '';
            display: block;
            width: 0;
            height: 0;
            position: absolute;
            left: 10px;

        }

        &::before {
            border: 10px solid transparent;
            border-top-color: $border-color;
            top: 100%;
        }

        &::after {
            border: 10px solid transparent;
            border-top-color: white;
            top: calc(100% - 1px);
        }
    }

    .triggerWrapper {
        display: inline-block;
    }
</style>