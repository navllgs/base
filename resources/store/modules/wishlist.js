import Vue from 'vue'
import Axios from 'axios'
import * as API from '../../js/endpoints'
import { endpoints } from '../../js/endpoints'

export default {
  namespaced: true,
  state:{
    wishlists: null
  },
  getters:{
    allWish: (state) => {
      return state.wishlists
    }
  },
  mutations:{
    setWishlists(state,v){
      Vue.set(state,'wishlists', v);
    }
  },
  actions:{
    getAllWish({state,commit,dispacth,rootState}){
      return new Promise((resolve,reject)=>{
        console.log(endpoints);
        
        Axios.get('http://127.0.0.1/wish/all/items').then(
          res => {
            commit('setWishlists', res.data)
            resolve(res.data)
          },
          err =>{
            reject(err)
          }
        )
      })
    }
  }
}