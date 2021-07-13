<template>
  <div id="app">
    <div class="header">
      <h1>My personal costs</h1>
    </div>
    <div class="wrapper">
      <!--<AddPaymentForm @addNewPayment="addNewPaymentDate" />-->
      <AddPaymentForm />
      <PaymentsDisplay :items="paymentList" />
    </div>
  </div>
</template>
 
<script>
import { mapMutations } from "vuex";
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
      //paymentsList: [],
    };
  },
  methods: {
    ...mapMutations(["setPaymentsListData"]),
    // addNewPaymentDate(value) {
    //  this.paymentsList = [...this.paymentsList, value];
    //},
    fetchData() {
      return [
        {
          date: "12.03.2021",
          category: "Food",
          value: 180,
        },
        {
          date: "12.03.2021",
          category: "Internet",
          value: 100,
        },
        {
          date: "14.03.2021",
          category: "Food",
          value: 300,
        },
        {
          date: "28.05.2021",
          category: "Sport",
          value: 180,
        },
      ];
    },
  },
  computed: {
    paymentList() {
      return this.$store.getters.getPaymentsList;
    },
  },

  created() {
    //this.$store.commit("setPaymentsListData", this.fetchData());
    //this.paymentsList = this.fetchData();
    this.setPaymentsListData(this.fetchData());
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