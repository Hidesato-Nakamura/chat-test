import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  users: [],
})
export const mutations = {
  AddUser(state, uid) {
    state.users.push(uid)
    console.log('add user:' + uid)
  },
}

// const store = new Vuex.Store({
//   state,
//   mutations,
//   modules: {
//     store: {
//       namespaced: true,
//     },
//   },
// })

// export default store
