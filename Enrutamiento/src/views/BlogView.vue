<template>
    <h1>Blog Section</h1>
    <ul>
        <li><router-link :to="{name: 'Post', params: {id:1}}">Primer Post</router-link></li>
        <li><router-link :to="{name: 'Post', params: {id:2}}">Segundo Post</router-link></li>
        <li><router-link :to="{name: 'Post', params: {id:3}}">Tercer Post</router-link></li>
        <li><router-link :to="{name: 'Post', params: {id:4}}">Cuarto Post</router-link></li>
    </ul>
</template>
<script lang="ts" setup></script>

<style scoped></style>
