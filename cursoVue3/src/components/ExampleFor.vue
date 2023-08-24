<template>
    <ul>
        <li v-for="country in countries" :key="country.code">
            {{ country.name }}
        </li>
        <!--v-bind:key="index" se puede escribir :key="index"-->
    </ul>
</template>
<script lang="ts" setup>
    import { Ref, ref } from "vue";
    interface Icountry{
        code: string,
        name: string
    }
    let countries:Ref<Array<Icountry>> = ref([
        {
            code: "es",
            name: "Spain",
        },
        { code: "fr", name: "France" },
        { code: "en", name: "UK" },
        { code: "gr", name: "Germany" },
        { code: "it", name: "Italy" },
        { code: "pt", name: "Portugal" },
    ]);
</script>
<style></style>
