<template>
    <div class="container">
        <h1 class="text-center">Welcome to Oghma</h1>
        <div class="row">
            <div id="firebaseui-auth-container"></div>
        </div>
    </div>
</template>

<script src="https://apis.google.com/js/api:client.js"></script>

<script>
    $(document).ready(function () {
        $('.tabs').tabs();
    });

    var firebase = require('firebase');
    var firebaseui = require('firebaseui');

    export default {
        name: 'userAuth',
        data: function() {
            return {
                email: '',
                password: '',
                googleSignInParams: {
                    client_id: ''
                }
            }
        },
        methods: {
            signUp () {
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        this.$router.replace('characterdashboard')
                    },
                    (err) => {
                        alert('Oops. ' + err.message)
                    }
                );
            },
            signIn () {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        this.$router.replace('characterdashboard')
                    },
                    (err) => {
                        alert('Oops. ' + err.message)
                    }
                );
            }
        },
        mounted() {
            var uiConfig = {
                signInSuccessUrl: '/characterdashboard',
                signInOptions: [
                    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                    firebase.auth.EmailAuthProvider.PROVIDER_ID,
                ]
            };

            var ui = new firebaseui.auth.AuthUI(firebase.auth());
            ui.start('#firebaseui-auth-container', uiConfig);
        }
    }
</script>

<style scoped>
    #auth-container {
        margin-top: 50px;
    }

    .tab-content {
        padding-top: 20px;
    }
</style>
