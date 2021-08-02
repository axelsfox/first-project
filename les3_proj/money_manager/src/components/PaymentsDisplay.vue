<template>
  <v-container>
    <v-row>
      <v-col :cols="1">#</v-col>
      <v-col :cols="4">Date</v-col>
      <v-col :cols="5">Category</v-col>
      <v-col :cols="2">Value</v-col>
    </v-row>
    <v-row v-for="(item, idx) in items" :key="idx">
      <v-col :cols="1">{{ idx }}</v-col>
      <v-col :cols="4">{{ item.date }}</v-col>
      <v-col :cols="5">{{ item.category }}</v-col>
      <v-col :cols="2">{{ item.value }}</v-col>
    </v-row>
  </v-container>
</template>
 
<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    getFPV() {
      return this.$store.getters.getFullPaymentValue;
    },
  },
};
</script>
 
<style>
.main__table {
  width: 400px;
  text-align: center;
  margin: 20px 30px;
  border-collapse: collapse;
}
.table__header {
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  height: 30px;
}
.table__item {
  font-size: 16px;
  font-weight: normal;
  border-bottom: 1px solid #d3d3d3;
  height: 50px;
}
</style>