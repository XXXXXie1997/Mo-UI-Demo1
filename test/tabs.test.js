const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsBody from '../src/tabs-body'
import TabsHead from '../src/tabs-head'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('mo-tabs', Tabs)
Vue.component('mo-tabs-body', TabsBody)
Vue.component('mo-tabs-head', TabsHead)
Vue.component('mo-tabs-item', TabsItem)
Vue.component('mo-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.be.ok
  })

  it('接收selected属性', (done) => {

    const div = document.createElement('div')
    document.body.appendChild(div)


    div.innerHTML = `
    <mo-tabs selected="tab1">
        <mo-tabs-head>
            <mo-tabs-item name="tab1">tab1</mo-tabs-item>
            <mo-tabs-item name="tab2" >tab2</mo-tabs-item>
            <mo-tabs-item name="tab3">tab3</mo-tabs-item>
        </mo-tabs-head>
        <mo-tabs-body>
            <mo-tabs-pane name="tab1">11111111</mo-tabs-pane>
            <mo-tabs-pane name="tab2">22222222</mo-tabs-pane>
            <mo-tabs-pane name="tab3">33333333</mo-tabs-pane>
        </mo-tabs-body>
    </mo-tabs>
`
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
     let x =  vm.$el.querySelector(`.tabs-item[data-name="tab1"]`)
      expect(x.classList.contains('active')).to.be.true
      done()
    })
  })

  it('可以接受direction prop',()=>{

  })

})