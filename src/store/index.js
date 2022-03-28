import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:1,
    sum:0
  },
  mutations: {
    addCount(state,step){
      state.count+=step
    },
    subCount(state,step){
      state.count-=step
    }
  },
  actions: {
    subAsync(context,step){
      setTimeout(()=>{
        context.commit('subCount',step)
      },1000)
    }
  },
  getters:{
    showNum(state){
      return '当前的count为'+state.count
    }
  },
  modules: {
  }
})
