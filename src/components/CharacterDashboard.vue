<template>
    <!-- TODO: Get rid of margin-top attr on div that is being set by Vue -->
    <div>
        <ul id="nav-mobile" class="sidenav sidenav-fixed" style="overflow: auto;">
            <li class="logo center"><img src="../assets/circled-notch.png" alt="" style="height: 150px;" /></li>
            <router-link class="active" tag="li" to="/characterdashboard"><a>Characters</a></router-link>
            <router-link tag="li" to="/games"><a>Games</a></router-link>
            <div class="row">
                <li class="col s12 m6 center"><i class="material-icons" @click="logout" style="cursor: pointer; font-size: 3em;">power_settings_new</i></li>
                <li class="col s12 m6 center"><i class="material-icons sidebar-icons">settings_new</i></li>
            </div>
        </ul>
        <main style="padding-left: 300px;">
            <div class="container"></div>
            <nav>
                <div class="nav-wrapper">
                    <a href="#" class="brand-logo">Character Dashboard</a>
                    <a href="#" data-activates="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                </div>
            </nav>

            <div class="row">
                <div class="col s4 m4">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title">Charon Demonborn</span>
                            <p>Tiefling</p>
                            <p>Barbarian</p>
                            <p>Level 5</p>
                        </div>
                    </div>
                </div>
            </div>

            <button v-on:click="logout">Logout</button>
            <!-- <div class="fixed-action-btn">
                <a class="btn-floating btn-large red"><i class="material-icons">add</i></a>
            </div> -->
            <router-link tag="div" class="fixed-action-btn" to=""><a class="btn-floating btn-large red"><i class="material-icons">add</i></a></router-link>
        </main>
    </div>
</template>

<script>
    $(document).ready(function() {
        $('.sidenav').sidenav();
        $('.fixed-action-btn').floatingActionButton();
    })

    import firebase from 'firebase'

    export default {
        name: 'characterdashboard',
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

<style>
    .sidebar-icons {
        font-size: 3em;
        cursor: pointer;
    }
</style>
