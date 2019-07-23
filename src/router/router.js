import Vue from 'vue'
import VueRouter from 'vue-router'

// import routing components
import store from '../store/store.js'
import Login from '../components/Login.vue'
import Users from '../components/views/Users.vue'
import Todos from '../components/views/Todos.vue'
import Events from '../components/views/Events.vue'
import Dashboard from '../components/Dashboard.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{ 
			path: '/login', 
			alias: '/', 
			name: 'login', 
			component: Login
		},
		{ 
			path: '/dashboard', 
			name: 'dashboard', 
			component: Dashboard, 
			meta : { 
				requiresAuth : true
			}
		},
		{ 
			path: '/event', 
			name: 'event', 
			component: Events,
			meta : { 
				requiresAuth : true
			}
		},
		{ 
			path: '/todo', 
			name: 'todo', 
			component: Todos,
			meta : { 
				requiresAuth : true
			}
		},
		{ 
			path: '/user', 
			name: 'user', 
			component: Users,
			meta : { 
				requiresAuth : true
			}
		},
	]
})

router.beforeEach((to, from, next) => {
	if(to.meta.requiresAuth) {
		if(store.getters.isLoggedIn) {
			next()
		} else {
			next({
				path : '/login'
			})
		}
	} else {
		next()
	}
})

export default router
