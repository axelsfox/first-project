<template>
  <div class="wrapper" v-bind:style="{ top: , left: }">
    <div class="small_menu">
      <img class="redact_menu" src="../assets/pencil.svg" alt="редактировать" />
      <a href="">Редактировать</a>
    </div>
    <div class="small_menu">
      <img class="redact_menu" src="../assets/basket.svg" alt="удалить" /><a
        href=""
        >Удалить</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "RedactWindow",
  props: {
    settings: {
      type: Object,
    },
  },
  methods: {
    onCloseClick() {},
    onRedactClick() {},
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  background: aliceblue;
  height: 50px;
  width: 150px;
}
.redact_menu {
  height: 20px;
}
.small_menu {
  display: flex;
  margin: 5px;
}
img {
  margin-right: 5px;
}
a {
  text-decoration: none;
  color: black;
}
</style>
