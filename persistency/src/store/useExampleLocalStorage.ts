import { defineStore } from "pinia";

export const useExampleLocalStorage = defineStore("useExampleLocalStorage", {
  state: () => {
    return {
      count: 1,
    };
  },
  actions: {
    init() {
      const iniCount = localStorage.getItem("count");
      if (iniCount) {
        this.count = parseInt(iniCount);
      }
    },
    increment(vol = 1) {
      this.count += 1;
      localStorage.setItem("count", this.count.toString());
    },
  },
});
