import Vue from 'vue'
import Router from 'vue-router'
import App from '../js/views/App'
import Example from '../js/components/ExampleComponent'
import NotFound from '../js/components/NotFound'
Vue.use(Router)

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