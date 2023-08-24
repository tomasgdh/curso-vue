<template>
    <h1>Auth Firebase</h1>
    <div class="container">
        <form>
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
            <button
                type="submit"
                class="btn btn-primary mt-2"
                @click.prevent="authUser"
            >
                Submit
            </button>
        </form>
    </div>
</template>
<script lang="ts" setup>
    import { ref, Ref } from "vue";
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
    let email: Ref<string> = ref("");
    let password: Ref<string> = ref("");
    const authUser = async () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((result) => {
                alert("Exito");
            })
            .catch((error) => {
                alert("Error:" + error.message);
            });
    };
</script>

<style scoped></style>
