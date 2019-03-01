import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faStar as fasStar,
  faSquare as fasSquare,
  faPencilAlt as fasPencilAlt,
  faEdit as fasEdit,
  faCircle,
  faCheckSquare
} from '@fortawesome/free-solid-svg-icons'
import {
  faStar as farStar,
  faSquare as farSquare,
  faEdit as farEdit,
  faCircle as farCircle,
  faFile,
  faCalendarAlt,
  faCommentDots
} from '@fortawesome/free-regular-svg-icons'
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
  FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

library.add(fasStar, fasSquare, fasPencilAlt, fasEdit, faCircle, faCheckSquare)
library.add(farStar, farSquare, farEdit, farCircle, faFile, faCalendarAlt,faCommentDots)
// library.add(farPencilAlt)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
