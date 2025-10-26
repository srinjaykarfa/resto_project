<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Restaurant</router-link>
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>
<script>
export default {
    name: 'HeaderComponent',
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: "Login" });
        }
    }
}
</script>
<style>
.nav {
    background-color: #333;
    overflow: hidden;
    padding: 14px 16px;

}
.nav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    margin: 4px 5px;
    border-radius: 4px;

}
.nav a:hover {
    background-color: #ddd;
    color: black;


}
.nav a.active {
    background-color: #04AA6D;
    color: white;
}
.nav a:last-child {
    float: right;
    
    border-radius: 4px;
}
.nav a:hover:last-child {
    background-color: red;
    color: white;
}
.nav a.active:last-child {
    background-color: darkred;
    color: white;
}



</style>