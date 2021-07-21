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
   
  //пример с урока
 /* fetchData ({ commit }){
      return new Promise((resolve)=>{
        setTimeout(()=>{
          const items = []
          for (let i=1; i<10; i++){
            items.push({
              date: '12.07.2021',
              category: "Food",
              value: i
            })
          }
          resolve(items)

        }, 2000)
      })
      .then (res=> commit('setPaymentsListData', res))
    }
*/

         
     },
   
    })