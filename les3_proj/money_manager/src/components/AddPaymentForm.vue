<template>
  <div class="container">
    <button class="addNewcost" @click="show = !show">ADD NEW COST +</button>
    <div class="payment-form" v-show="show">
      <input
        class="payment-form_type"
        placeholder="Количество"
        type="number"
        v-model.number="value"
      />
      <input
        class="payment-form_type"
        placeholder="Категория"
        type="text"
        v-model.trim="category"
      />
      <input
        class="payment-form_type"
        placeholder="Дата"
        type="text"
        v-model.number="date"
      />
      <button @click="onClick" class="svbtn">ADD +</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      value: 0,
      category: "",
      date: "",
      show: false,
    };
  },
  methods: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    onClick() {
      const { value, category } = this;
      const data = {
        value,
        category,
        date: this.date || this.getCurrentDate(),
      };
      console.log(data);
      this.$emit("addNewPayment", data);
    },
  },
};
</script>

<style>
.container {
  margin: 30px;
  box-sizing: border-box;
}
.addNewcost {
  background-color: #399;
  border: 1px solid #399;
  border-radius: 5%;
  height: 40px;
  width: 200px;
  color: white;
  font-size: 16px;
  letter-spacing: 2px;
  text-align: left;
  padding: 5px 10px;
}
.payment-form {
  display: flex;
  flex-direction: column;
  width: 200px;
  height: auto;
}
.payment-form_type {
  margin: 10px 0px;
  height: 30px;
  padding: 5px 10px;
  border: #d3d3d3 solid 1px;
}
.svbtn {
  background-color: #399;
  border: 1px solid #399;
  width: 100px;
  color: white;
  font-size: 16px;
  letter-spacing: 2px;
  text-align: left;
  padding: 5px 10px;
  border-radius: 5%;
  height: 40px;
  margin-left: 100px;
}
</style>
