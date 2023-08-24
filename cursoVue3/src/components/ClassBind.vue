<template>
    <p :class="{ danger: hasError }">El mensaje fue enviado exitosamente!</p>
    <p :style="{ backgroundColor: '#ccc', color: '#fff' }">
        El mensaje fue enviado exitosamente!
    </p>
    <p :style="{ backgroundColor: '#ccc', color: color1 }">
        El mensaje fue enviado exitosamente!
    </p>
    <button @click="HandlerClick">Cambiar Color</button>
</template>
<script lang="ts" setup>
    import { ref } from "vue";
    let hasError = true;
    let color1 = ref("#fff");
    const HandlerClick = () => {
        color1.value = "#ff0000";
    };
</script>
<style>
    .danger {
        color: red;
    }
</style>
