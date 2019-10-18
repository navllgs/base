import Vue from 'vue'
import Router from 'vue-router'
import App from '../js/views/App'
import Example from '../js/components/ExampleComponent'
import NotFound from '../js/components/NotFound'
Vue.use(Router)

function setAuthHeaders () {
    //sample headers implement
    Axios.defaults.headers.common['Authorization'] = null
    Axios.defaults.headers.common['Authorization'] = 'Bearer ' + 'access_token'
    Axios.defaults.headers.put['Content-Type'] = 'application/json'
    Axios.defaults.headers.post['Content-Type'] = 'application/json'
}

const router = new Router({
  routes: [
    {
      path: '/',
      component: Example,
    },    
    { 
      path: "*", 
      component: NotFound 
    }
  ]
});
export default router;