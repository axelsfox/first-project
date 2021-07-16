<template>
  <div class="dashboard__container">
    <AddPaymentForm />
    <PaymentsDisplay :items="paymentList" />
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import PaymentsDisplay from "../PaymentsDisplay.vue";
import AddPaymentForm from "../AddPaymentForm.vue";

export default {
  name: "PageDashboard",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
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
