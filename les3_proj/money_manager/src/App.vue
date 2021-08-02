<template>
  <v-app>
    <v-app-bar app flat>
      <v-btn plain :ripple="false" to="/dashboard">Dashboard</v-btn>
      <v-btn plain :ripple="false" to="/about">About</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
 
<script>
//import { mapActions } from "vuex";
//import PaymentsDisplay from "./components/PaymentsDisplay.vue";
//import AddPaymentForm from "./components/AddPaymentForm.vue";
//import PageAbout from "./components/page/PageAbout.vue";
//import PageDashboard from "./components/page/PageDashboard.vue";
//import Page404 from "./components/page/Page404.vue";

export default {
  name: "App",
  components: {
    //PaymentsDisplay,
    //AddPaymentForm,
    //PageAbout,
    //PageDashboard,
    //Page404,
  },
  data() {
    return {
      //  paymentsList: [],
    };
  },
  methods: {
    goToPage(page) {
      this.$router.push({
        name: page,
      });
    },

    //...mapMutations(["setPaymentsListData"]),
    //...mapActions({
    //  fetchListData: 'fetchData'
    //}),
    /*addNewPaymentDate(value) {
      this.paymentsList = [...this.paymentsList, value];
    },
    goToPage(page) {
      this.$router.push({
        name: page,
      });
    },

    //fetchData() {
    //  return [
    //    {
    //      date: "12.03.2021",
    //     category: "Food",
    //      value: 180,
    //    },
    //   {
    //       date: "12.03.2021",
    //      category: "Internet",
    //    },
    //    {
    //     date: "14.03.2021",
    //      category: "Food",
    //      value: 300,
    //   },
    //    {
    //     date: "28.05.2021",
    //      category: "Sport",
    //     value: 180,
    //    },
    //  ];
    //},
  },
  computed: {
    paymentList() {
      return this.$store.getters.getPaymentsList;
    },
  },*/

    // created() {
    //this.$store.commit("setPaymentsListData", this.fetchData());
    //this.paymentsList = this.fetchData();
    //this.setPaymentsListData(this.fetchData());
    //  this.fetchData();
    // },
  },
};
</script>

 <style>
</style>