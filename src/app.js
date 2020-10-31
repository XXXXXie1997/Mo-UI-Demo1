import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('mo-icon',Icon)
Vue.component('mo-button',Button)
Vue.component('mo-button-group',ButtonGroup)
Vue.component('mo-input',Input)



new Vue({
  el:'#app',
  data:{
    loading1:false,
    loading2:true,
    loading3:false,
    message:'hi',
  },
  created(){
    setTimeout(()=>{
      let event = new Event('change');
      let inputElement = this.$el.querySelector('input')
      inputElement.dispatchEvent(event)
    },3000)
  },
  methods:{
    inputChange(e){
      console.log(e)
    }
  }
})
