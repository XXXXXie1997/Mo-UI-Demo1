<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
  export default {
    name: 'MoTabsBody',
    inject:['eventBus'],
    created() {

    }
  };
</script>

<style lang='scss' scoped>
    .tabs-body {

    }
</style>