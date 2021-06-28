<template>
  <div>
    <p>Простой калькулятор</p>
    <input
      class="inputField"
      v-model.number.trim="operand1"
      type="text"
      placeholder="число 1"
    />
    <div class="mathBtnBox">
      <button class="mathBtn" @click="summary">+</button>
      <button class="mathBtn" @click="subtraction">-</button>
      <button class="mathBtn" @click="multiply">*</button>
      <button class="mathBtn" @click="division">/</button>
      <button class="mathBtn" @click="exponentiation">^</button>
    </div>
    <input
      class="inputField"
      v-model.number.trim="operand2"
      type="text"
      placeholder="число 2"
    />
    <p>Сумма:</p>
    <div>{{ result }}</div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      operand1: 0,
      operand2: 0,
      result: 0,
    };
  },
  methods: {
    summary() {
      this.result = this.operand1 + this.operand2;
    },
    subtraction() {
      this.result = this.operand1 - this.operand2;
    },
    multiply() {
      this.result = this.operand1 * this.operand2;
    },
    division() {
      if (this.operand2 === 0) {
        this.result = "Ошибка! Нельзя делить на ноль!";
      } else {
        this.result = parseInt(this.operand1 / this.operand2);
      }
    },
    exponentiation() {
      this.result = this.operand1 ** this.operand2;
    },
  },
};
</script>



<style lang="scss">
.mathBtnBox {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0% 30%;
}
.mathBtn {
  height: 40px;
  width: 40px;
  margin: 10px;
  border: 3px solid black;
  border-radius: 25%;
}
.p {
  margin: 10px 20px;
  text-align: center;
}
.inputField {
  height: 40px;
  width: 80px;
  margin: 10px;
  border: 3px solid black;
  border-radius: 15%;
  padding: 10px 10px;
  text-align: center;
}
</style>
