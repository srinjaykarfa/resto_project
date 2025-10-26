<template>
    <img class="logo" src="../assets/restologo.webp" alt="Logo" />
    <h1>Login</h1>
    <div class="login">
        <input type="email" v-model="email" name="email" id="email" placeholder="Email">
        <input type="password" v-model="password" name="password" id="password" placeholder="Password">
        <button v-on:click="login">Login</button>
        <p>Don't have an account? <router-link to="/signup">Sign up here</router-link></p>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'LoginPage',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async login() {
            //localhost:3000/users?email=srinjay@test.com&password=Srinjay@123
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`);
            console.log(result);
            if(result.status==200 &&result.data.length>0){
                localStorage.setItem("user-info",JSON.stringify(result.data[0]))
                this.$router.push({ name: "Home" });
            }
        }

    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (user) {
            this.$router.push({ name: "Home" });
        }
    }
}
</script>