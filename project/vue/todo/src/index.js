import Vue from 'vue';
import App from './app.vue';

import './assist/styles/test.css';
import './assist/styles/test-stylus.styl';



const root = document.createElement('div');

document.body.appendChild(root)

new Vue({
    render:(h)=>h(App)
}).$mount(root)