import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';

import router from './router';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';


import InputText from 'primevue/inputtext';


library.add(faArrowLeft);




const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('inputText',InputText)

app.use(router);


app.mount('#app');
