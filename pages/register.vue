<template>

<div class="login-wrapper align-middle">
    
        <div class="frame ">
            <div class="nav">
                <ul class="links">
                    <li class="signin-inactive"><nuxt-link
            class="btn"
            :to="'login'"
          >เข้าสู่ระบบ</nuxt-link></li>
                    <li class="signup-active"><nuxt-link
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
                            <input class="form-styling" type="email" name="email" placeholder="admin@test.com" /> 
                        </div>
                        
                       <div class="input">
                            <label for="fullname">รหัสผ่าน</label>
                            <input class="form-styling" type="password" name="password"  /> 
                        </div>
                         <div class="input">
                            <label for="fullname">ยืนยันรหัสผ่าน</label>
                            <input class="form-styling" type="password" name="password" placeholder="ใส่รหัสผ่านอีกครั้ง"  /> 
                        </div>
                    </div> 
                    
                     <div class="regis-agree">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">ยอมรับ<a>เงื่อนไข</a>และ<a>ข้อตกลง</a></label>
                        </div>
                    </div>
                   
                    <div class="btn-animate"> <a class="btn-signin">สมัครสมาชิก <img src="~/assets/mark/icons8-right_arrow.png" /></a>  </div>
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
    await store.commit("SET_TITLE", "Register");
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
      title: "Register | " + this.$store.state.info.sitename,
    };
  },
  mounted() {
    this.$store.commit("SET_CURRENT", {
      title: "Register",
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
