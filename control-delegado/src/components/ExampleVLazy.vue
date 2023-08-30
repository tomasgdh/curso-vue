<template>
  <img
    v-lazy="{
      src: lazyOption.src,
      lifecycle: lazyOption.lifecycle,
      delay: lazyOption.delay,
    }"
  />
</template>
<script lang="ts" setup>
import { VNode, ref } from "vue";

const lazyOption = ref({
  src: "https://picsum.photos/1920/1080",
  delay: 500,
  lifecycle: {
    loading: (el: VNode) => {
      console.log("Cargando el lemento", el);
    },
    error: (el: VNode) => {
      console.log("Error en la carga", el);
    },
    loaded: (el: VNode) => {
      console.log("Imagen Cargada", el);
    },
  },
});
</script>

<style scoped>
img[lazy="loading"] {
  background-color: blue;
  width: 500px;
}
</style>
