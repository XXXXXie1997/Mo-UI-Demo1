<template>
    <div class="mo-button-group">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
  export default {
    name:'MoButtonGroup',
    mounted() {
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase();
        if (name !== 'button') {
          console.warn(`mo-button-group子元素需要全部使用'mo-button'，而你的代码使用了'${name}'`);
        }
      }
    }
  };
</script>

<style lang='scss' scoped>
    .mo-button-group {
        display: inline-flex;
        vertical-align: middle;

        > .mo-button {
            border-radius: 0;

            &:not(:first-child) {
                margin-left: -1px;
            }

            &:first-child {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }

            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }

            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>