<template>
  <div class="List">
    <table class="main__table">
      <tr class="table__header">
        <th>#</th>
        <th>Date</th>
        <th>Category</th>
        <th>Value</th>
      </tr>
      <tr class="table__item" v-for="(item, idx) in items" :key="idx">
        <td>{{ idx + 1 }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.value }}</td>
        <td>
          <img
            @click="smallmenu"
            class="menu_points"
            src="../assets/points.svg"
            alt=""
          />
        </td>
      </tr>
      <tr class="table__item">
        <td>Итого</td>
        <td></td>
        <td></td>
        <td>{{ getFPV }}</td>
      </tr>
    </table>
  </div>
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
  methods: {
    smallmenu(event) {
      const smalMenuSet = {
        id: event.id,
        x: event.pageX,
        y: event.pageY,
      };
      console.log(smalMenuSet);
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
.menu_points {
  height: 15px;
}
</style>