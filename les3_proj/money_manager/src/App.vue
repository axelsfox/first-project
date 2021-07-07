<template>
  <div id="app">
    <div class="header">
      <h1>My personal costs</h1>
    </div>
    <div class="wrapper">
      <AddPaymentForm @addNewPayment="addNewPaymentDate" />
      <PaymentsDisplay :items="paymentsList" :page="page" />
      <Pagenathion :items="paymentsList" @choisenPage="choisenPage" />
    </div>
  </div>
</template>
 
<script>
import PaymentsDisplay from "./components/PaymentsDisplay";
import AddPaymentForm from "./components/AddPaymentForm.vue";
import Pagenathion from "./components/Pagenathion.vue";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagenathion,
  },
  data() {
    return {
      paymentsList: [],
      page: 0,
    };
  },
  methods: {
    addNewPaymentDate(value) {
      console.log(value);
      this.paymentsList = [...this.paymentsList, value];
    },
    choisenPage(value) {
      this.page = value;
      console.log("выбрана страница" + value);
    },
    //fetchData() {
    //  return [
    //    {
    //      date: "12.03.2021",
    //      category: "Food",
    //      value: 180,
    //    },
    //    {
    //      date: "12.03.2021",
    //      category: "Internet",
    //      value: 100,
    //    },
    //    {
    //      date: "14.03.2021",
    //      category: "Food",
    //      value: 300,
    //    },
    //    {
    //      date: "28.05.2021",
    //      category: "Sport",
    //      value: 180,
    //    },
    //  ];
    //},
    //},
    //created() {
    //  this.paymentsList = this.fetchData();
  },
};
</script>
 <style>
.header {
  margin: 0px 30px;
  color: black;
  font-size: 18px;
}
</style>