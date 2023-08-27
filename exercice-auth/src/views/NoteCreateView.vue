<template>
  <RouterLink :to="{ name: 'notelist' }"> List Note</RouterLink>
  <h1>Note Create View</h1>
  <form>
    <div class="form-group">
      <label for="note">Note</label>
      <input
        type="text"
        class="form-control"
        id="note"
        placeholder="Enter Note"
        v-model="note"
      />
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="createNote">
      Cargar Nota
    </button>
  </form>
  <RouterLink :to="{ name: 'login' }"> Login</RouterLink>
  <p style="color: red">{{ feedBack }}</p>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import useAuth from "../store/auth";
import router from "../router";

const store = useAuth();
const note = ref("");
const feedBack = ref("");

const createNote = async () => {
  feedBack.value = "Sending...";
  const response = await store.createNote(note.value);
  if (response == false) {
    //Error
    feedBack.value = "Create Note error.";
  } else {
    //Success
    router.push({ name: "notelist" });
  }
};
</script>

<style scoped></style>
