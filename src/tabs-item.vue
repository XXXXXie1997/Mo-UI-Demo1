<template>
    <div class="tabs-item" @click="onClick" :class="classes">
        <slot></slot>
    </div>
</template>

<script lang='ts'>
  export default {
    name: 'MoTabsItem',
    data(){
      return{
        active: false
      }
    },
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String | Number,
        require: true
      }
    },
    inject: ['eventBus'],
    computed:{
      classes(){
        return {
          active: this.active,
          disabled: this.disabled
        }
      }
    },
    created() {

      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      });
    },
    methods: {
      onClick() {
        if(this.disabled){return}
        this.eventBus.$emit('update:selected', this.name,this);
      }
    }
  };
</script>

<style lang='scss' scoped>
    $blue:rgb(84,153,254);
    $disabled-text-color:gray;
    .tabs-item {
        flex-shrink: 0;
        padding: 0 2em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;

        &.active{
            color:$blue;
            font-weight: bold;
        }
        &.disabled{
            color: $disabled-text-color;
        }
    }
</style>