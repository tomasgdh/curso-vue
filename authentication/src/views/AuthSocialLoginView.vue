<template>
    <h1>Auth Social Login</h1>
    <button @click="loginGoogle">Login with Google</button>
    <button @click="loginFacebook">Login with FaceBook</button>
    <button @click="loginTwitter">Login with Twitter</button>
    <button @click="loginGithub">Login with GitHub</button>
</template>
<script lang="ts" setup>
    import {
        GoogleAuthProvider,
        FacebookAuthProvider,
        TwitterAuthProvider,
        GithubAuthProvider,
        signInWithPopup,
        getAuth,
    } from "firebase/auth";

    const gooogleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const twitterProvider = new TwitterAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const auth = getAuth();
    const loginGoogle = () => {
        signInWithPopup(auth, gooogleProvider)
            .then((result) => {
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                alert("Google Exito");
            })
            .catch((error) => {
                alert("Google Error:" + error.message);
            });
    };
    const loginFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                const credential =
                    FacebookAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                alert("Facebook Exito");
            })
            .catch((error) => {
                alert("Facebook Error:" + error.message);
            });
    };
    const loginTwitter = () => {
        signInWithPopup(auth, twitterProvider)
            .then((result) => {
                const credential =
                    TwitterAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                alert("Twitter Exito");
            })
            .catch((error) => {
                alert("Twitter Error:" + error.message);
            });
    };
    const loginGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const credential =
                GithubAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                alert("Github Exito");
            })
            .catch((error) => {
                alert("Github Error:" + error.message);
            });
    };
</script>

<style scoped></style>
