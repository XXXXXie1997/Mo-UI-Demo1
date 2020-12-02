<template>
    <div class="tabs-item">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
export  default {
  name:'MoTabsItem'
  props:{
    disabled:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style lang='scss' scoped>
.tabs-item{

}
</style>