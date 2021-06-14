<template>

<div class="login-wrapper align-middle">
    
    <div class="frame ">
        <div class="title-forgot">
            <h1>ลืมรหัสผ่าน</h1>
            โปรดกรอกอีเมลของคุณ เพื่อส่งคำขอเปลี่ยนรหัสผ่าน
        </div>
        
        <div>
            <form class="form-signin" action="" method="post" name="form">
                <div class="form-login">
                    <div class="input active">
                        <label for="fullname">อีเมล</label>
                        <input class="form-styling" type="email" name="email" placeholder="admin@test.om" /> 
                    </div>
                    
                    
                </div> 
                
                    <div class="link-forgot">  </div>
                
                <div class="btn-animate">
                     <nuxt-link
            class="btn-signin"
            :to="'forgotcomplete'"
          >ยืนยัน <img src="~/assets/mark/icons8-right_arrow.png" /></nuxt-link>
            </div>
                    
            </form>
                
            
                
        </div>
        
        
    </div> 
    <div class="back_to">
        <div class="btn-backto"> 
            <nuxt-link
            class="btn"
            :to="'login'"
          ><img src="~/assets/mark/icons-9.png"/>กลับไปที่่หน้าเข้าสู่ระบบ</nuxt-link>
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
    await store.commit("SET_TITLE", "Forgot Password");
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
      title: "Forgot Password | " + this.$store.state.info.sitename,
    };
  },
  mounted() {
    this.$store.commit("SET_CURRENT", {
      title: "Forgot Password",
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
