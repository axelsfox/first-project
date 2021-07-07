<template>
  <div class="List">
    <table>
      <tr>
        <th>#</th>
        <th>Date</th>
        <th>Category</th>
        <th>Value</th>
      </tr>
      <tr class="item" v-for="(item, idx) in items" :key="idx">
        <td>{{ idx + 1 }}</td>
        <td>{{ item.date }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.value }}</td>
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
};
</script>
 
<style lang="scss" module>
</style>