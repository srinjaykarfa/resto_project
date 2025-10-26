<template>
    <Header />
    <h2>Hello User, Welcome to the Update Restaurant page</h2>
    <form action="" class="update">
        <input type="text" v-model="restaurant.name" name="name" placeholder="Enter Restaurant Name" />
        <input type="text" v-model="restaurant.address" name="address" placeholder="Enter Address" />
        <input type="text" v-model="restaurant.contact" name="contact" placeholder="Enter Contact" />
        <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
    </form>
</template>
<script>
import axios from 'axios';
import Header from './Header.vue';
export default {
    name: 'UpdateRestaurantPage',
    components: {
        Header,
    },
    methods:{
        async updateRestaurant(){
            const result = await axios.put('http://localhost:3000/restaurants/' + this.$route.params.id, {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });
            if (result.status === 200) {
                this.$router.push({ name: 'Home' });
            }
        }
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
    async mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "SignUp" });
        }
        console.log(this.$route.params.id)
        const result = await axios.get('http://localhost:3000/restaurants/' + this.$route.params.id);
        this.restaurant = result.data;
    }
}
</script>