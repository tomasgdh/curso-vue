<template>
  <h1>Auth Azure</h1>
  <!-- <button @click="login">Login</button> -->
</template>

<script lang="ts" setup>
/*   import { PublicClientApplication } from "@azure/msal-browser";
    import { onMounted } from "vue";
    import AzureService from "../service/AzureService";

    onMounted(() => {
        const azureService = new AzureService();
        $msalInstance = new PublicClientApplication(
            azureService.getMsalConfig().value
        );
    });
    const account = '';
    const login = async () => {
        await $msalInstance
            .loginPopup({})
            .then(() => {
                const myAccounts = $msalInstance.getAllAccounts();
                account = myAccounts[0];
                $emitter.emit("login", account);
            })
            .catch((error) => {
                alert(error);
            });
    };*/
</script>

<style scoped></style>
