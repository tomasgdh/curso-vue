<template>
  <h3>Counter</h3>
  <h3>{{ store.count }} x 2 = {{ store.times2 }}</h3>
  <button @click="store.increment(1)">Increment</button>
</template>
<script lang="ts" setup>
import { useCounterStore } from "../store/counter";
const store = useCounterStore();
</script>
