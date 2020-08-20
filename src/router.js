import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

import Burgers from './views/Burgers.vue';
import BurgerDetails from './views/BurgerDetails.vue';
import EditBurger from './views/EditBurger.vue';
import AddBurger from './views/AddBurger.vue';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/hamburguesas',
        name: 'hamburguesas',
        component: Burgers,
    },
    {
        path: '/hamburguesas/:id',
        name: 'hamburguesasDetalle',
        component: BurgerDetails,
    },
    {
        path: '/hamburguesas/delete/:id',
        name: 'hamburguesasEliminar',
        component: EditBurger,
    },
    {
        path: '/hamburguesa/add',
        name: 'hamburguesasAgregar',
        component: AddBurger,
    }
    ],
    
});