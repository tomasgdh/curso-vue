<template>
  <RouterLink :to="{ name: 'notecreate' }"> Create new Note</RouterLink>
  <button @click.prevent="logout">LogOut</button>
  <h1>Note List View</h1>
  <table class="table" v-if="notes">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Note</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="el in notes" :key="el.id">
        <th scope="row">{{ el.id }}</th>
        <td>{{ el.content }}</td>
      </tr>
    </tbody>
  </table>
  <p v-else>No data yet.</p>
  <RouterLink :to="{ name: 'login' }"> Login</RouterLink>
</template>

<script lang="ts" setup>
import { ref, Ref, onMounted } from "vue";
import useAuth from "../store/auth";
import INote from "../interfaces/INote";
import router from "../router";
const store = useAuth();
const notes: Ref<Array<INote>> = ref([]);

onMounted(async () => {
  notes.value = await store.getNotes();
});

const logout = () => {
  store.logout();
  router.push({ name: "login" });
};
</script>

<style scoped></style>
