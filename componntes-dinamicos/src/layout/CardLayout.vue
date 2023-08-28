<template>
  <h1>Componente Card</h1>
  <div class="container">
    <UserCard v-for="item in props.content" :key="item.name" :content="item" />
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
import UserCard from "../components/UserCard.vue";

const props = defineProps(["content"]);
</script>

<style scoped>
.container {
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
