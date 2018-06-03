<template>
    <!-- TODO: Get rid of margin-top attr on div that is being set by Vue -->
    <div>
        <ul id="nav-mobile" class="sidenav sidenav-fixed" style="overflow: auto;">
            <li class="logo center"><img src="../assets/circled-notch.png" alt="" style="height: 150px;" /></li>
            <!-- <li class="active"><router-link class="" to="/charactercreate">Characters</router-link></li> -->
            <router-link class="" tag="li" to="/charactercreate"><a>Characters</a></router-link>
            <li><router-link class="" to="/charactercreate">Games</router-link></li>
            <li><a href="google.com">Google</a></li>
        </ul>
        <main style="padding-left: 300px;">
            <div class="container"></div>
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Character Creator</a>
                    <a href="#" data-activates="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                </div>
            </nav>
            <button v-on:click="logout">Logout</button>
            <div class="fixed-action-btn">
                <router-link :to="{ name: '', params: {} }"></router-link>
            </div>
        </main>
    </div>
</template>

<script>
    $(document).ready(function() {
        $('.sidenav').sidenav();
    })

    import firebase from 'firebase'

    export default {
        name: 'charactercreate',
        data () {
            return {
                name: '',
                photo: '',
                user: {}
            }
        },
        created() {
            this.user = firebase.auth().currentUser;
            if(this.user) {
                this.name = this.user.displayName;
                this.photo = this.user.photoURL;
            }
        },
        methods: {
            logout: function() {
                firebase.auth().signOut().then(() => {
                    this.$router.replace('userAuth')
                })
            }
        }
    }
</script>
