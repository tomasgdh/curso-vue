<template>
<div>Hola Mundo</div>
</template>
<script lang="ts" setup>
import { onMounted, onUpdated} from 'vue';

//Hooks

onMounted(()=>{
    console.log("Mounted")
})
onUpdated(()=>{
    console.log("Updated")
})
</script>

<style scoped>
</style>