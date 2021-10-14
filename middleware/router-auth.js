export default function ({ store, redirect, route }) {
    console.log('act',store.state);
    
   store.state.user != null && route.name == 'login' ? redirect('/') : ''
   store.state.user == null  ? redirect('/login') : ''
  }
  
  function isAdminRoute(route) {
    if (route.matched.some((record) => record.path == '/')) {
      return true
    }
  }