import { createStore } from "vuex";

export default createStore({
  state: {
    //solo estados - Datos
    counter: 1,
  },
  getters: {
    //estados y datos computados "calculados"
    times2(state) {
      return state.counter * 2;
    },
  },
  mutations: {
    //setters - acciones Syncronas
    setCounter(state, value) {
      state.counter = value;
    },
  },
  actions: {
    //setters - acciones Asyncronas
  },
  modules: {
    //subdivir el store en elementos
  },
});
