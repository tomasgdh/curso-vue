<template>
  <h3>Counter</h3>
  <h3>{{ counter }} x 2 = {{ times2 }}</h3>
  <button @click="increment">Increment</button>
</template>
<script lang="ts" setup>
//composition API 2
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const counter = computed(() => store.state.counter);
const times2 = computed(() => store.getters.times2);
const increment = () => store.commit("setCounter", counter.value + 1);

/*//composition API 1
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "HelloWorld",
  setup() {
    const store = useStore();
    const counter = computed(() => store.state.counter);
    const times2 = computed(() => store.getters.times2);
    const increment = () => store.commit("setCounter", counter.value + 1);
    return { increment, counter, times2 };
  },
});
*/
/* Option Api 2
import { defineComponent } from "vue";
import { mapMutations, mapState, mapGetters } from "vuex";
export default defineComponent({
  name: "HelloWorld",
  computed: {
    ...mapState(["counter"]),
    ...mapGetters(["times2"]),
  },
  methods: {
    ...mapMutations(["setCounter"]),
    increment() {
      this.setCounter(this.counter + 1);
    },
  },
});*/

/* Option Api 1
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  computed: {
    counter() {
      //TODO: Read the counter from store
      return this.$store.state.counter;
    },
    times2() {
      //TODO: Read the times2 from store
      return this.$store.getters.times2;
    },
  },
  methods: {
    increment() {
      //TODO: call the setCounter mutation from the store
      this.$store.commit("setCounter", this.counter + 1);
    },
  },
});*/
</script>

<style scoped></style>
