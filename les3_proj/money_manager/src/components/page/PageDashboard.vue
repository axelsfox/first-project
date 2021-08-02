<template>
  <v-container>
    <div class="text-h5 text-sm-h3 mb-8">My personal costs</div>
    <v-row>
      <v-col>
        <v-dialog v-model="dialog">
          <template v-slot:activator="{ on }">
            <v-btn color="teal" dark v-on="on">
              ADD NEW COST <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
            <!-- FUTURE CONTENT -->
          </v-card>
        </v-dialog>

        <PaymentsDisplay :items="paymentList" />
      </v-col>
      <v-col>
        <!-- <Diagram /> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import PaymentsDisplay from "../PaymentsDisplay.vue";
//import AddPaymentForm from "../AddPaymentForm.vue";

export default {
  name: "PageDashboard",
  components: {
    PaymentsDisplay,
    //AddPaymentForm,
  },
  data() {
    return {
      dialog: false,
    };
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
