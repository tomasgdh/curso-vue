<script setup lang="ts"></script>

<template>
    <nav>
        <router-link :to="{ name: 'home' }">HOME</router-link> | 
        <router-link :to="{ name: 'auth' }">Auth Backend</router-link> | 
        <router-link :to="{ name: 'firebase' }">Auth Firebase</router-link> | 
        <router-link :to="{ name: 'authsocial' }">Auth Social</router-link> | 
        <router-link :to="{ name: 'authaws' }">Auth AWS</router-link> | 
        <router-link :to="{ name: 'authazure' }">Auth Azure</router-link>
    </nav>
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
    </div>
    <RouterView></RouterView>
</template>

<style scoped>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.vue:hover {
        filter: drop-shadow(0 0 2em #42b883aa);
    }
</style>
