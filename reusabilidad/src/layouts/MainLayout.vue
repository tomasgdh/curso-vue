<template>
  <div class="container">
    <div class="navBar">
      <NavBar />
    </div>
  </div>
  <div class="main-content">
    <div class="menu">
      <MenuSideBar />
    </div>
    <div class="main-content">
      <slot name="main"></slot>
    </div>
    <div class="aux-content">
      <slot name="aux"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavBar from "../components/NavBar.vue";
import MenuSideBar from "../components/MenuSideBar.vue";
</script>

<style scoped></style>
