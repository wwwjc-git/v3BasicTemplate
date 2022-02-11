import { createStore } from 'vuex'
import getters from './getters'
import home from './home'
const store = createStore({
  modules: {
    home
  },
  getters
})

export default store
