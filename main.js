import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

Vue.prototype.$baseUrl="http://localhost:8000";

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
