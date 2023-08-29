<template>
  <h3>{{ store.count }}</h3>
  <button @click="store.increment">Añadir</button>
</template>
<script lang="ts" setup>
import { useExample } from "../store/useExample";
const store = useExample();
</script>

<style scoped></style>
