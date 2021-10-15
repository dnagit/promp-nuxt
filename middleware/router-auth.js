export default function ({ store, redirect, route }) {
    //console.log('act2', store.$auth.$storage.getLocalStorage('user'));
    
    store.$auth.$storage.getLocalStorage('user') != null && route.name == 'login' ? redirect('/') : ''
    store.$auth.$storage.getLocalStorage('user') == null   && route.name != 'login'  ? redirect('/login') : ''
  }
  
  function isAdminRoute(route) {
    if (route.matched.some((record) => record.path == '/')) {
      return true
    }
  }