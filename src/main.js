import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import './index.css'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            result: 0
        }
    },
    mutations: {
        sumResult (state, payload) {
            state.result = parseInt(payload.a)+ parseInt(payload.b);
        }
    }
})


const app = createApp(App).use(store);
app.mount('#app');
