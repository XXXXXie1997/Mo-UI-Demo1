const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

  it('存在',()=>{
    expect(Row).to.exist
  })
  it('接收 gutter 属性',()=>{
    expect(Row).to.exist
  })
})