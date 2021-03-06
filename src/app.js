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
import Tabs from './tabs'
import TabsBody from './tabs-body'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from  './collapse'
import CollapseItem from './collapse-item'


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
Vue.component('mo-tabs', Tabs)
Vue.component('mo-tabs-body', TabsBody)
Vue.component('mo-tabs-head', TabsHead)
Vue.component('mo-tabs-item', TabsItem)
Vue.component('mo-tabs-pane', TabsPane)
Vue.component('mo-popover', Popover)
Vue.component('mo-collapse', Collapse)
Vue.component('mo-collapse-item', CollapseItem)



new Vue({
  el: '#app',
  data: {
    selectedTab: [],
  },
  created() {


  },
  methods: {

  }
})
