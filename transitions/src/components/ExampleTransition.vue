<template>
  <button @click="show = !show">Mostar / Ocultar</button>
  <Transition>
    <h1 v-if="show">Hola mundo aninmated!</h1>
  </Transition>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const show = ref(false);
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
/*
enter-from -- Estado inicial de Entrada de la trancicion opacity:0
enter-active -- Estado de Ejecucion de la trancicion  opasity 2s ease
enter-to -- Estado final de Entrada de la trancicion opacity:1

leave-from -- Estado inicial de Salida de la trancicion opacity:1
leave-active --Estado de Ejecucion de la trancicion  opasity 2s ease
leave-to -- Estado final de Salida de la trancicion opacity:0
 */
</style>
