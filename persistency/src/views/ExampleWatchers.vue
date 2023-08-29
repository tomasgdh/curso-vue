<template>
  <h1>Notas:</h1>
  <input type="text" v-model="note" />
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
const note = ref("");
watch(note, () => {
  console.log(`Se ha modificado el valor: ${note.value}`);
  localStorage.setItem("note", note.value);
});
</script>

<style scoped></style>
