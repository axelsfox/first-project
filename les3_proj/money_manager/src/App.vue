<template>
  <div id="app">
    <div class="header">
      <h1>My personal costs</h1>
    </div>
    <div class="wrapper">
      <PaymentsDisplay :items="paymentsList" />
    </div>
  </div>
</template>
 
<script>
import PaymentsDisplay from "./components/PaymentsDisplay";

export default {
  name: "App",
  components: {
    PaymentsDisplay,
  },
  data() {
    return {
      paymentsList: [],
    };
  },
  methods: {
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
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>
 
<style lang="scss" module>
</style>