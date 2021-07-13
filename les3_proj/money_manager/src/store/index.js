import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
     paymentsList: [],
     pageList: [], 
     choosepage: [
       {
      page1: [
        { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
        { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
        { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 }
      ],
      page2: [
        { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
        { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
        { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }
      ],
    }
  ]    
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
    getPageList: state => state.pageList,

 
    getFullPaymentValue: state => {
      return state.paymentsList.reduce((res, cur) => res + cur.value, 0)
    },
  },

   actions: {

actions: {
  fetchData ({ commit }, pageidx){

  }


  
   /* fetchData ({ commit }){
      return new Promise((resolve)=>{
        setTimeout(()=>{
          const items = [
            {
              page1: [
                { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
                { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
                { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 }
              ],
              page2: [
                { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
                { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
                { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }
              ],
              
            }
          ]

          resolve(items)

        }, 2000)
      })
      .then (res=> commit('setPaymentsListData', res))
    }
    */
   
    //пример с урока
    /*fetchData ({ commit }){
      return new Promise((resolve)=>{
        setTimeout(()=>{
          const items = []
          for (let i=1; i<110; i++){
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
    }*/


    //Фетч не захотел взлетать из-за непонятной ошибки с лишней скобкой в JSON
          /* fetchData ({ commit }) {
           fetch ('https://raw.githubusercontent.com/axelsfox/testdata/money_manager/data.json')
           .then (response => response.json())
              .then(data => {
              const newitems = [];
              if (data.keys == "page1"){
               this.newitems.push(data);
             commit('setPaymentsListData', newitems)
               }
              })
             
         },*/
        
     },
   
  modules: {
  }
})
