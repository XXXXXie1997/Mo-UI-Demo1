<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script lang='ts'>

  export default {
    name: 'MoTabsPane',
    inject: ['eventBus'],
    props:{
      name: {
        type: String | Number,
        require: true
      }
    },
    data() {
      return {
        active: false
      };
    },
    created() {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      });
    },
    computed:{
      classes(){
        return {
          active: this.active
        }
      }
    },
  };
</script>

<style lang='scss' scoped>
    .tabs-pane {
        padding: 1em;
&.active{
}
    }
</style>