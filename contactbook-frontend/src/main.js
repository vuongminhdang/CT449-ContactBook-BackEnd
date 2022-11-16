import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
    library.add(fas);

createApp(App).component("fa", FontAwesomeIcon).use(router).mount('#app');
