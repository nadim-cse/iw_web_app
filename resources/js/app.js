require('./bootstrap');
window.Vue = require('vue');

import Alpine from 'alpinejs';
import Vue from 'vue';

window.Alpine = Alpine;

Alpine.start();

const vm = new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});


