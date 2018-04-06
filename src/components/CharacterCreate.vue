<template>
    <!-- TODO: Get rid of margin-top attr on div that is being set by Vue -->
    <div>
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Character Creator</a>
                <a href="#" data-activates="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            </div>
        </nav>
        <ul id="nav-mobile" class="sidenav">
            <li class="active"><router-link class="btn" to="/charactercreate">Create Character</router-link></li>
        </ul>
        <div class="containter">

        </div>
        <button v-on:click="logout">Logout</button>
        {{ name }}
    </div>
</template>

<script>
    $(document).ready(function() {
        $('.sidenav-trigger').sidenav();
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
