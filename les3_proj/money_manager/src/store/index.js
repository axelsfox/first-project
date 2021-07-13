import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     paymentsList: [],     
  },  
  
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
    addNewPamenttoStore(state, payload) {
      state.paymentsList.push(payload)
    }
  
  },
  getters: { 
    getPaymentsList: state => state.paymentsList,
 
    getFullPaymentValue: state => {
      return state.paymentsList.reduce((res, cur) => res + cur.value, 0)
    },
  },

  actions: {
  },
  modules: {
  }
})
