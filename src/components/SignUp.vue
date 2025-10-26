<template>
    <img class="logo" src="../assets/restologo.webp" alt="Logo" />
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" name="username" id="username" placeholder="Username">
        <input type="email" v-model="email" name="email" id="email" placeholder="Email">
        <input type="password" v-model="password" name="password" id="password" placeholder="Password">
        <button v-on:click="signUp">Sign Up</button>
        <p>Already have an account? <router-link to="/login">Login here</router-link></p>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {
            console.log("Sign Up", this.name, this.email, this.password);
            let result = await axios.post('http://localhost:3000/users', {
                name: this.name,
                email: this.email,
                password: this.password
            });
            console.log(result);
            if (result.status == 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data))
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