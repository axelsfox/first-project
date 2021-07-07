<template>
  <div class="pagebox">
    <div @click="pagechoice($event)" v-bind:id="1" class="page">1</div>
    <div
      @click="pagechoice($event)"
      v-bind:id="pagenumbers + 1"
      class="page"
      v-for="pagenumbers in evenNumbers(items)"
      :key="pagenumbers"
    >
      {{ pagenumbers + 1 }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagenathion",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    evenNumbers(itemslist) {
      const page = itemslist.length / 5;
      return page;
    },
    pagechoice(e) {
      const choisenPage = Number(e.target.id);
      //console.log(choisenPage);
      this.$emit("choisenPage", choisenPage);
    },
  },
};
</script>


<style>
.pagebox {
  display: flex;
  align-items: center;
  margin: 20px 30px;
  border-top: #d3d3d3 solid 1px;
  border-bottom: #d3d3d3 solid 1px;
  height: 30px;
  width: 400px;
  justify-content: center;
}
.page {
  margin: 5px 10px;
}
</style>