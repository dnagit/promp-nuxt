export default function ({ store,redirect }) {
    store.commit('SET_CURRENT', {})
    store.commit('SET_PAGINATION', {})
    if (!store.state.authenticated) {
      return redirect('/login')
    }
    /*if (store.state.menuIsActive === !false) {
      console.log('menu')
  
  
      store.commit('setMenuState', false)
    }*/
  
 }