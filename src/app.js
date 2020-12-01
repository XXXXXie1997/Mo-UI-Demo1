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
import Toast from './toast'
import Plugin from './plugin'

Vue.component('mo-icon', Icon)
Vue.component('mo-button', Button)
Vue.component('mo-button-group', ButtonGroup)
Vue.component('mo-input', Input)
Vue.component('mo-row', Row)
Vue.component('mo-col', Col)
Vue.component('mo-layout', Layout)
Vue.component('mo-sider', Sider)
Vue.component('mo-header', Header)
Vue.component('mo-content', Content)
Vue.component('mo-footer', Footer)
Vue.component('mo-toast', Toast)
Vue.use(Plugin)


new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi',
  },
  created() {


  },
  methods: {
    showToast1() {
      this.$toast('丢人！',{
        position:'top',
        enableHtml: false,
        closeButton: {
          text:'摸了',
          callback(toast){
            console.log('他说他要摸了')
          }
        },
        autoClose:3,
      })
    },
    showToast2() {
      this.$toast('丢人！',{
        position:'middle',
        enableHtml: false,
        closeButton: {
          text:'摸了',
          callback(toast){
            console.log('他说他要摸了')
          }
        },
        autoClose:3,
      })
    },
    showToast3() {
      this.$toast('丢人！',{
        position:'bottom',
        enableHtml: false,
        closeButton: {
          text:'摸了',
          callback(toast){
            console.log('他说他要摸了')
          }
        },
        autoClose:3,
      })
    },
    showToast(position) {
      this.$toast('丢人！',{
        position,
        enableHtml: false,
        closeButton: {
          text:'摸了',
          callback(toast){
            console.log('他说他要摸了')
          }
        },
        autoClose:3,
      })
    }
  }
})
