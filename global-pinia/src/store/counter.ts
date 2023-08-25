import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  //SETTERS
  state: () => {
    return {
      count: 1,
    };
  },
  //GETTERS
  getters: {
    times2: (state) => state.count * 2,
  },
  //ACTIONS
  actions: {
    increment(valor = 1) {
      this.count += valor;
    },
  },
});
