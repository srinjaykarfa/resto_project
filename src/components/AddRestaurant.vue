<template>
    <Header />
    <h2>Hello User, Welcome to the Add Restaurant page</h2>
    <form action="" class="add">
        <input type="text" v-model="restaurant.name" name="name" placeholder="Enter Restaurant Name" />
        <input type="text" v-model="restaurant.address" name="address" placeholder="Enter Address" />
        <input type="text" v-model="restaurant.contact" name="contact" placeholder="Enter Contact" />
        
        <button type="button" v-on:click="addRestaurant">Add New Restaurant</button>
    </form>
</template>
<script>
import axios from 'axios';
import Header from './Header.vue';
export default {
    name: 'AddRestaurantPage',
    components: {
        Header,
    },
    data() {
        return {
            restaurant: {
                name: "",
                address: "",
                contact: ""
            }
        }
    },
    methods: {
        async addRestaurant() {
            const result = await axios.post('http://localhost:3000/restaurants', {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });
            if (result.status === 201) {
                this.$router.push({ name: 'Home' });
            }
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "SignUp" });
        }
    }
}
</script>
