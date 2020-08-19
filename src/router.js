import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

import Burgers from './views/Burgers.vue';
import BurgerDetails from './views/BurgerDetails.vue';

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
            path: '/hamburguesas/:id',
            name: 'hamburguesasEliminar',
            component: EditBurger,
        }
    ],
});