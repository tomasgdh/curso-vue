import { defineStore } from "pinia";

export const useExample = defineStore("useExample", {
  state: () => {
    return {
      count: 1,
    };
  },
  actions: {
    increment(vol = 1) {
      this.count += 1;
    },
  },
  //persist: true, //persite todo este storage
  persist: {
    //persiste las partes de este Storage que yo quiera, mas control
    storage: sessionStorage,
    paths: ["count"],
  },
});
