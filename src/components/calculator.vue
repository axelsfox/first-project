<template>
  <div>
    <p>Простой калькулятор</p>
    <input class="inputField" type="text" placeholder="число 1" />
    <div class="mathBtnBox">
      <button class="mathBtn"></button>
      <button class="mathBtn"></button>
      <button class="mathBtn"></button>
      <button class="mathBtn"></button>
      <button class="mathBtn"></button>
    </div>
    <input class="inputField" type="text" placeholder="число 2" />
    <p>Сумма:</p>
    <div>{{ sum }}</div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      operand1: 0,
      operand2: 0,
      sum: 0,
    };
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
