<template>
  <div class="dashboard__container">
    <!--<AddPaymentForm />-->
    <PaymentsDisplay :items="paymentList" />
    <button class="main__add_form" @click="showPaymentsForm">
      Add New Cost +
    </button>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import PaymentsDisplay from "../PaymentsDisplay.vue";

export default {
  name: "PageDashboard",
  components: {
    PaymentsDisplay,
  },
  data() {
    return {};
  },

  methods: {
    ...mapMutations(["setPaymentsListData"]),
    ...mapActions({
      fetchListData: "fetchData",
    }),
    addNewPaymentDate(value) {
      this.paymentsList = [...this.paymentsList, value];
    },
    goToPage(page) {
      this.$router.push({
        name: page,
      });
    },

    showPaymentsForm() {
      this.$modal.show("add", {
        header: "Add u Cost",
        compName: "AddPaymentForm",
      });
    },
  },
  computed: {
    paymentList() {
      return this.$store.getters.getPaymentsList;
    },
  },

  created() {
    if (!this.fetchListData.length) {
      this.fetchListData();
    }
  },
};
</script>

<style>
</style>
