<template>
    <Header />
    <h1>Hello {{ name }}, Welcome to the Restaurant App</h1>
    <table>
        <tr>
            <th>ID</th>
            <th>Restaurant Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Actions</th>
        </tr>
        <tr v-for="restaurant in restaurants" :key="restaurant.id">
            <td>{{ restaurant.id }}</td>
            <td>{{ restaurant.name }}</td>
            <td>{{ restaurant.address }}</td>
            <td>{{ restaurant.contact }}</td>
            <td><router-link :to="'/update/' + restaurant.id">Edit</router-link>
                <button v-on:click="deleteRestaurant(restaurant.id)">Delete</button>
            </td>
        </tr>
    </table>
</template>
<script>
import axios from 'axios';
import Header from './Header.vue';
export default {
    name: 'HomePage',
    components: {
        Header,
    },
    data() {
        return {
            name: "",
            restaurants: []
        }
    },
    methods: {
        async deleteRestaurant(id) {
            let result = await axios.delete("http://localhost:3000/restaurants/" + id);
            if (result.status == 200) {
                this.loadData();
            }
        },
        async loadData() {
            let user = localStorage.getItem("user-info");
            if (!user) {
                this.$router.push({ name: "SignUp" });
            } else {
                this.name = JSON.parse(user).name;
            }
            let result = await axios.get('http://localhost:3000/restaurants');
            console.log(result);
            this.restaurants = result.data;
        }
    },
    mounted() {
        this.loadData();
    }
}
</script>
<style scoped>
table {
    width: 80%;
    border-collapse: collapse;
    margin: 20px auto;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
}

th {
    background-color: #f2f2f2;
    text-align: center;
}

button {
    margin-left: 10px;
    padding: 5px 10px;
    background-color: #ff4d4d;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 4px;
}
</style>