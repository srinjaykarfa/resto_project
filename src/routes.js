import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import {createRouter, createWebHistory} from "vue-router";
import UpdateRestaurant from "./components/UpdateRestaurant.vue";
import AddRestaurant from "./components/AddRestaurant.vue";
import Login from "./components/Login.vue";

const routes=[
    {
        name:'Home',
        component: Home,
        path:'/'
    },
    {
        name:'SignUp',
        component: SignUp,
        path:'/signup'
    },
    {
        name:'Login',
        component: Login,
        path:'/login'
    },
    {
        name:'AddRestaurant',
        component: AddRestaurant,
        path:'/add'
    },
    {
        name:'UpdateRestaurant',
        component: UpdateRestaurant,
        path:'/update/:id'
    }
]
const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router;