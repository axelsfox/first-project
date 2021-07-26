<template>
  <div class="mainBox">
    <p>Простой калькулятор</p>
    <input
      class="inputField"
      @click="field = true"
      v-model.number.trim="operand1"
      type="text"
      placeholder="число 1"
      name="operand1"
    />
    <input
      class="inputField"
      @click="field = false"
      v-model.number.trim="operand2"
      type="text"
      placeholder="число 2"
      name="operand2"
    />

    <!--домашняя работа-->
    <div>
      <input
        name="screenKeyB"
        type="checkbox"
        id="checkbox"
        v-model="checked"
      />
      <label for="checkbox">Показать экранную клавиатуру</label>
    </div>

    <div class="screenKeyboard" v-if="checked == true">
      <button
        class="onekey"
        v-for="screenkey in screenkeyboard"
        :key="screenkey"
        @click="boardButton(screenkey)"
        :name="screenkey"
      >
        {{ screenkey }}
      </button>
      <button class="onekey" @click="boardDelet" name="CE">CE</button>
    </div>
    <input name="radioop" type="radio" id="one" :checked="field" />
    <label for="one">Значение 1</label>
    <br />
    <input name="radioop" type="radio" id="two" :checked="!field" />
    <label for="two">Значение 2</label>

    <!---->
    <div class="mathBtnBox">
      <button
        class="mathBtn"
        v-for="operand in operands"
        :key="operand"
        :alt="operand"
        v-bind:title="operand"
        @click="calculate(operand)"
        :name="operand"
      >
        {{ operand }}
      </button>
    </div>

    <div v-if="error">Ошибка! {{ error }}</div>
    <p>Результат: {{ result }}</p>
    <div class="strange-message">
      <template v-if="result < 0">Получилось отрицательное число</template>
      <template v-else-if="result < 100">Результат в первой сотне</template>
      <template v-else-if="result > 100"
        >Получилось слишком большое число</template
      >
    </div>
    <div class="logs">
      <div v-for="(log, id) in logs" v-bind:key="id">{{ log }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      operand1: "",
      operand2: "",
      field: true,
      result: 0,
      error: "",
      operands: ["+", "-", "*", "/", "^"],
      logs: {},
      checked: false,
      screenkeyboard: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
  methods: {
    boardButton(button) {
      this.field ? (this.operand1 += button) : (this.operand2 += button);
    },
    summary() {
      this.result = Number(this.operand1) + Number(this.operand2);
    },
    subtraction() {
      this.result = this.operand1 - this.operand2;
    },
    multiply() {
      this.result = this.operand1 * this.operand2;
    },
    division() {
      if (this.operand2 === 0) {
        this.error = "На ноль делить нельзя!";
      } else {
        this.result = parseInt(this.operand1 / this.operand2);
      }
    },
    exponentiation() {
      this.result = this.operand1 ** this.operand2;
    },

    calculate(operation = "+") {
      this.error = "";
      switch (operation) {
        case "+":
          this.summary();
          break;
        case "-":
          this.subtraction();
          break;
        case "*":
          this.multiply();
          break;
        case "/":
          this.division();
          break;
        case "^":
          this.exponentiation();
          break;
      }
      this.logs[
        Date.now()
      ] = `${this.operand1}${operation}${this.operand2}=${this.result}`;
    },
    boardDelet() {
      this.field
        ? (this.operand1 = this.operand1.slice(0, -1))
        : (this.operand2 = this.operand2.slice(0, -1));
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
.screenKeyboard {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 500px;
  border: black 2px solid;
  padding: 5px;
  margin: 0px 700px;
  box-sizing: border-box;
}
.onekey {
  height: 30px;
  width: 30px;
  border: black 1px solid;
  border-radius: 20%;
  margin: 5px;
}
</style>
