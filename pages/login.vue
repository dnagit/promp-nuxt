<template>

<div class="login-wrapper align-middle">
    
        <div class="frame ">
            <div class="nav">
                <ul class="links">
                    <li class="signin-active"><nuxt-link
            class="btn"
            :to="'login'"
          >เข้าสู่ระบบ</nuxt-link></li>
                    <li class="signup-inactive"><nuxt-link
            class="btn"
            :to="'register'"
          >สมัครสมาชิก</nuxt-link></li>
                </ul>
            </div>
            <div ng-app ng-init="checked = false">
                <form class="form-signin" action="" method="post" name="form">
                    <div class="form-login">
                        <div class="input active">
                            <label for="fullname">อีเมล</label>
                            <input class="form-styling" type="email" name="email" placeholder="admin@test.om" /> 
                        </div>
                        
                       <div class="input">
                            <label for="fullname">รหัสผ่าน</label>
                            <input class="form-styling" type="password" name="password"  /> 
                        </div>
                    </div> 
                    
                     <div class="link-forgot"><nuxt-link
           
            :to="'forgotpass'"
          >ลืมรหัสผ่าน?</nuxt-link> </div>
                   
                    <div class="btn-animate"> <button class="btn btn-xs">เข้าสู่ระบบ <img src="~/assets/mark/icons8-right_arrow.png" /></button>  </div>
                </form>
               
                  
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
