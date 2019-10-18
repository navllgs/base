import Vue from 'vue'

export default {
  namespaced: true,
  state:{
    user: null
  },
  getters:{
    getCurrentUser: state => {
      return state.user
    }
  },
  mutations:{
    setCurrentUser(state,v){
      Vue.set(state,'user',v)
    }
  },
  actions:{

  }
}