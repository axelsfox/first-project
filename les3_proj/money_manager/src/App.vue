<template>
  <div id="app">
    <div class="header">
      <h1>My personal costs</h1>
    </div>
    <div class="wrapper">
      <AddPaymentForm @addNewPayment="addNewPaymentDate" />
      <PaymentsDisplay :items="paymentsList" />
    </div>
  </div>
</template>
 
<script>
import PaymentsDisplay from "./components/PaymentsDisplay";
import AddPaymentForm from "./components/AddPaymentForm.vue";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      paymentsList: [],
    };
  },
  methods: {
    addNewPaymentDate(value) {
      console.log(value);
      this.paymentsList = [...this.paymentsList, value];
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
  color: rgb(53, 53, 53);
  font-size: 18px;
}
</style>