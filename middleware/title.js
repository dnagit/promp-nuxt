export default function ({ store }) {
  store.commit('SET_CURRENT', {})
  store.commit('SET_PAGINATION', {})
  if (store.state.menuIsActive === !false) {
    


    store.commit('setMenuState', false)
  }

}