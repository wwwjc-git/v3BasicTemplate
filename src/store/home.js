import homeTypes from './types/home'

export default  {
    state: () => ({
      count: 0
    }),
    mutations: {
        [homeTypes.SET_HOME_NAME] (state) {
            // `state` is the local module state
            state.count++
          }
    },
    actions: {}
  }