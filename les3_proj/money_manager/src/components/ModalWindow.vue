<template>
  <div class="wrapper">
    <div class="header">Add New Payment</div>
    <div class="content">
      <AddPaymentForm />
    </div>
    <div class="footer">
      <button @click="onCloseClick">Close</button>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./AddPaymentForm.vue";
export default {
  name: "ModalWindow",
  components: {
    AddPaymentForm,
  },
  methods: {
    onCloseClick() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.wrapper {
  position: absolute;
  background: aliceblue;
  left: 30%;
}
</style>
