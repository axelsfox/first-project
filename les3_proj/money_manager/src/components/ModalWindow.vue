<template>
  <div class="wrapper">
    <div class="header">{{ settings.header }}</div>
    <div class="content"><component :is="settings.compName" /></div>
    <div class="footer">
      <button @click="onCloseClick">Close</button>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./AddPaymentForm.vue";
import Auth from "./Auth.vue";

export default {
  name: "ModalWindow",
  components: {
    AddPaymentForm,
    Auth,
  },
  props: {
    settings: {
      type: Object,
    },
  },
  methods: {
    onCloseClick() {
      this.$modal.hide();
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  position: absolute;
  background: aliceblue;
  left: 30%;
}
</style>
