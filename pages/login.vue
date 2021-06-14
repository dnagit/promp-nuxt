<template>
  <div>
      <div class="brand-wrapper">LOGO</div>
      <div class="login-wrapper my-auto">
            <h1 class="login-title">Login</h1>
            
                <div class="frame">
                    <div class="nav">
                        <ul class="links">
                            <li class="signin-active"><a class="btn">Existing User</a></li>
                            <li class="signup-inactive"><a class="btn">New User</a></li>
                        </ul>
                    </div>
                    <div ng-app ng-init="checked = false">
                        <form class="form-signin" action="" method="post" name="form"> <label for="fullname">Full name</label><input class="form-styling" type="text" name="username" placeholder="" /> <label for="dlno">Driving License Number</label> <input class="form-styling" type="text" name="username" placeholder="" /> <label for="password">Password</label> <input class="form-styling" type="text" name="password" placeholder="" /> <input type="checkbox" id="checkbox" /> <label for="checkbox"><span class="ui"></span>Keep me signed in</label>
                            <div class="btn-animate"> <a class="btn-signin">Login to your account</a> </div>
                        </form>
                        <form class="form-signup" action="" method="post" name="form"> <label for="fullname">Full name</label> <input class="form-styling" type="text" name="email" placeholder="" /><label for="email">Email</label> <input class="form-styling" type="text" name="email" placeholder="" /> <label for="dlno">Enter DL Number</label> <input class="form-styling" type="text" name="dlno" placeholder="" /> <label for="password">Create password</label> <input class="form-styling" type="text" name="confirmpassword" placeholder="" /> <a ng-click="checked = !checked" class="btn-signup">REGISTER</a> </form>
                        <div class="success"> 
                                <div class="successtext">
                                    <p> New User registered, Kindly check your email for confirmation.</p>
                                </div>
                        </div>
                    </div>
                    <div class="forgot"> <a href="#">Forgot your password?</a> </div>
                    <div>
                        <div class="cover-photo"></div>
                        <div class="profile-photo"></div>
                        <h1 class="welcome">Welcome,User</h1> <a class="btn-goback" value="Refresh" onClick="history.go()">Go back</a>
                    </div>
                </div> 
            </div>    
     
  </div>
</template>

<script>
export default {
  watchQuery: ["page"],
    layout: 'login',
    layout (context) {
    return 'login'
  },
  async asyncData({ params, app, payload, route, store }) {
    await store.commit("SET_TITLE", "Login");
  },
  transition(to, from) {
    if (!from) return "fade";
    return +to.query.page > +from.query.page ? "slide-right" : "slide-left";
  },
  data() {
    return {};
  },
  head() {
    return {
      title: "Login | " + this.$store.state.info.sitename,
    };
  },
  mounted() {
    this.$store.commit("SET_CURRENT", {
      title: "Login",
      dir: ''
    });
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
};
</script>

<style>
.browse a {
  width: 100%;
}
.search:focus {
  outline: none;
}
.footer__heading {
  text-transform: uppercase;
}
nav .r {
  grid-gap: 0;
}
.r.full-height {
  grid-gap: 0;
}
@media only screen and (max-width: 40rem) {
  .xs-collapse {
    visibility: hidden;
    visibility: collapse;
    border: 0 !important;
    border-color: none !important;
    padding: 0 !important;
  }
  .xs-visible {
    visibility: visible;
  }
}
</style>
