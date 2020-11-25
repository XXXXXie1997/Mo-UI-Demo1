import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'

Vue.component('mo-icon',Icon)
Vue.component('mo-button',Button)
Vue.component('mo-button-group',ButtonGroup)
Vue.component('mo-input',Input)
Vue.component('mo-row',Row)
Vue.component('mo-col',Col)
Vue.component('mo-layout',Layout)
Vue.component('mo-sider',Sider)
Vue.component('mo-header',Header)
Vue.component('mo-content',Content)
Vue.component('mo-footer',Footer)



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
