import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
//https://www.bezkoder.com/vue-3-crud/
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//axios.defaults.baseURL = 'http://localhost:8000/api/';

const app = createApp(App)

app.use(router)

app.mount('#app')
