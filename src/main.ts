import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import Home from './components/Home.vue';
import Pics from './components/Pics.vue';

const routes = [
	{ path: '/', component: Home },
	{ path: '/pics', component: Pics },
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
