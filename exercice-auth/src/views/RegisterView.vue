<template>
  <h1>Register View</h1>
  <form>
    <div class="form-group">
      <label for="name">User Name</label>
      <input
        type="text"
        class="form-control"
        id="name"
        placeholder="Enter name"
        v-model="name"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="email"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
        v-model="password"
      />
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="createUser">
      Register
    </button>
  </form>
  <p style="color: red">{{ feedBack }}</p>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import useAuth from "../store/auth";
import router from "../router";
const store = useAuth();
const name = ref("");
const email = ref("");
const password = ref("");
const feedBack = ref("");
const createUser = async () => {
  feedBack.value = "Sending...";
  const response = await store.register(
    name.value,
    email.value,
    password.value
  );
  if (response == false) {
    //Error
    feedBack.value = "Registration error.";
  } else {
    //Success
    router.push({ name: "notelist" });
  }
};
</script>

<style scoped></style>
