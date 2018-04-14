import Vue from 'vue';
import App from '../src/app.vue';

import '../assist/styles/test.css';
import '../assist/styles/test-stylus.styl';

import '../assist/images/icon1.jpg';
import '../assist/images/icon2.jpg';

const root = document.createElement('div');

document.body.appendChild(root)

new Vue({
    render:(h)=>h(App)
}).$mount(root)