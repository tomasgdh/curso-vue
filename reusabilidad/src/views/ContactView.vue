<template>
  <MainLayout>
    <template #main>
      <h1>My Contact Content</h1>
    </template>
    <template #aux>
      <p>X position is: {{ x }}, Y position is: {{ y }}</p>
    </template>
  </MainLayout>
</template>
<script lang="ts" setup>
import MainLayout from "../layouts/MainLayout.vue";
import { useMouse } from "../composables/useMouse";
const { x, y } = useMouse();
</script>

<style scoped></style>
