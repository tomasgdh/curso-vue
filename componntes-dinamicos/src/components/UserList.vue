<template>
  <div class="list">
    <h3>{{ props.content.name }}</h3>
    <p>Edad: {{ props.content.age }}</p>
    <p>Posicion: {{ props.content.position }}</p>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
const props = defineProps(["content"]);
</script>

<style scoped>
.list {
  background-color: aquamarine;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 10px;
}
</style>
