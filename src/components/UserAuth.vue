<template>
    <div class="container">
        <h1 class="text-center">Welcome to Oghma</h1>
        <div class="row">
            <div id="firebaseui-auth-container"></div>
        </div>
        <!-- <div class="row">
            <div class="col s12">
                <ul class="tabs">
                    <li class="tab col s6">
                        <a href="#signup" class="active">Sign Up</a>
                    </li>
                    <li class="tab col s6">
                        <a href="#signin">Sign In</a>
                    </li>
                </ul>
            </div>
            <div id="signup" class="col s12">
                <h2>Create new account</h2>
                <div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="email-signup" type="email" class="validate" v-model="email" />
                                <label for="email-signup">Email</label>
                            </div>
                            <div class="input-field col s12">
                                <input id="password-signup" type="password" class="validate" v-model="password" />
                                <label for="password-signup">Password</label>
                            </div>
                            <button type="submit" class="btn col s12">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
            <div id="signin" class="col s12">
                <h2>Sign in to existing account</h2>
                <div class="row">
                    <form class="col s12" @submit.prevent="signIn">
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="email" type="email" class="validate" v-model="email" />
                                <label for="email">Email</label>
                            </div>
                            <div class="input-field col s12">
                                <input id="password" type="password" class="validate" v-model="password" />
                                <label for="password">Password</label>
                            </div>
                            <button type="submit" class="btn col s12">Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </div> -->
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
                        this.$router.replace('charactercreate')
                    },
                    (err) => {
                        alert('Oops. ' + err.message)
                    }
                );
            },
            signIn () {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        this.$router.replace('charactercreate')
                    },
                    (err) => {
                        alert('Oops. ' + err.message)
                    }
                );
            }
        },
        mounted() {
            var uiConfig = {
                signInSuccessUrl: '/charactercreate',
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
