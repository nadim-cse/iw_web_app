import Settings from './AdminSettings.vue';
import VueRouter from 'vue-router';

window.axios = require('axios');

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'admin-settings',
            component: Settings,
        },
    ]
});