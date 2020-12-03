<template>
    <div class="popover" @click.stop="onClick" ref="popover">
        <div ref="contentWrapper" v-if="visible" class="content-wrapper">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
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
          }else{
            this.open()
          }
        }
      },
      open() {
        this.visible = true
        setTimeout(() => {
          this.positionContent()
          document.addEventListener('click', this.onClickDocument)
        },0)
      },
      positionContent() {
        document.body.appendChild(this.$refs.contentWrapper)
        let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
      },

      close(){
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)

      },
      onClickDocument(e){

        //TODO
        //点击弹出content不关闭content待实现
        if (this.$refs.contentWrappe && this.$refs.contentWrapper === e.target

        ){return}else {
          this.close()
          console.log('closed')
        }

      }
    },
    mounted() {

    }
  }
</script>

<style lang='scss' scoped>
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid red;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        transform: translateY(-100%);
    }
</style>