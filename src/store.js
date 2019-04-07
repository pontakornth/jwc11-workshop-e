import Vue from 'vue'
import Vuex from 'vuex'
import DB from './db'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    DB: DB,
    isLogin: false
  },
  mutations: {
    login(state) {
      state.isLogin == true
    }

  },
  actions: {
    login({ commit }) {
      commit('login')
    }
  },
/*  getters: {
    getAllUsers(state)
  } */
})
