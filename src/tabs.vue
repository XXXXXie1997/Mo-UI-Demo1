<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script lang='js'>
  import Vue from 'vue'

  export default {
    name: 'MoTabs',
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    data() {
      return {
        eventBus: new Vue()

      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    mounted() {
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'MoTabsHead') {
          vm.$children.forEach((item) => {
            if (item.$options.name === 'MoTabsItem'
              && item.$props.name === this.selected) {
              console.log(item.$el)
              this.eventBus.$emit('update:selected', this.selected,item)
            }
          })
        }
      })
    }
  }
</script>

<style lang='scss' scoped>
    .tabs {

    }
</style>