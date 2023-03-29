import Dashboard from './AdminDashboard.vue';
import VueRouter from 'vue-router';

window.axios = require('axios');

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'admin-dashboard',
            component: Dashboard,
        },
    ]
});