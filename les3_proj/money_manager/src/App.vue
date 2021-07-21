<template>
  <div id="app">
    <div class="link-box">
      <div>
        <a href="#" @click="goToPage('dashboard')">Dashdoard</a>
        <a href="#" @click="goToPage('about')">About</a>
        <button class="main__add_form" @click="addFormShow = true">
          Add New Cost +
        </button>
        <ModalWindow
          v-if="addFormShow"
          @close="addFormShow = !addFormShow"
          :settings="settings"
        />
        <!--<router-link to="/dashboard"> Dashboard </router-link>
        <router-link to="/about"> About </router-link>-->
        <!--<a href="#Dasboard">Dashboard</a>
        <a href="#About">About</a>
        <a href="#Unknown">dev/null</a>-->
      </div>
    </div>
    <h1>My personal costs</h1>
    <div class="content">
      <router-view />
      <!--<Page404 v-if="pageName === 'page404'" />
      <PageAbout v-if="pageName === 'about'" />
      <PageDashboard v-if="pageName === 'dasboard'" />-->
      <!--<AddPaymentForm @addNewPayment="addNewPaymentDate" />-->
    </div>
    <div class="wrapper"></div>
  </div>
</template>
 
<script>
//import { mapActions } from "vuex";
//import PaymentsDisplay from "./components/PaymentsDisplay.vue";
//import AddPaymentForm from "./components/AddPaymentForm.vue";
//import PageAbout from "./components/page/PageAbout.vue";
//import PageDashboard from "./components/page/PageDashboard.vue";
//import Page404 from "./components/page/Page404.vue";
import ModalWindow from "./components/ModalWindow.vue";

export default {
  name: "App",
  components: {
    ModalWindow,
    //PaymentsDisplay,
    //AddPaymentForm,
    //PageAbout,
    //PageDashboard,
    //Page404,
  },
  data() {
    return {
      //  paymentsList: [],
      addFormShow: false,
      settings: {
        header: "Add u Cost",
        compName: "add",
      },
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

 <style scoped lang="scss">
.header {
  margin: 0px 30px;
  color: black;
  font-size: 18px;
  text-align: left;
}
.link-box {
  display: flex;
}
.link-box a {
  text-decoration: none;
  color: rgb(1, 104, 56);
  margin: 10px;
}
.main__add_form {
  background-color: transparent;
  border: transparent;
  color: rgb(1, 104, 56);
}
</style>