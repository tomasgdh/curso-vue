<template>
  <h3>{{ store.count }}</h3>
  <button @click="store.increment">Añadir</button>
</template>
<script lang="ts" setup>
import { useExampleLocalStorage } from "../store/useExampleLocalStorage";
const store = useExampleLocalStorage();
store.init();
</script>

<style scoped></style>
