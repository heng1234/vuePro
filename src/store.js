import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginCheck:{}

  },
  mutations: {
      "SET_LOGINCHECK": function (state,loginCheck={}) {
          state.loginCheck = loginCheck;
      },
  },
  actions: {

  }
})
