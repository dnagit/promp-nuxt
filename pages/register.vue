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
                <div    class="form-signin">
            

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
                       <div @click.native.stop="createUser()" class="mx-2 ">
                    Email
                </div>
                   
                    <div class="btn-animate">  <nuxt-link class="btn btn-xs" to="/a" @click.native="createUser">
   สมัครสมาชิก <img src="~/assets/mark/icons8-right_arrow.png" />
  </nuxt-link>   </div>
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
  async created(){
    console.log('abc');
    //await this.$fire.authReady()
     await this.$fire.auth.signInWithEmailAndPassword('sweeppers@gmail.com', '123456')
        .then((u) => {
           console.log('userauth',u.user.email);
           /* uid: 'am5QftkSVReZoAYIb8FxCXc01tB3',
    displayName: null,
    photoURL: null,
    email: 'sweeppers@gmail.com',
    emailVerified: false,
    phoneNumber: null,
    isAnonymous: false,
    tenantId: null,
    metadata: Fm {
      a: '1625933573067',
      b: '1625933952461',
      lastSignInTime: 'Sat, 10 Jul 2021 16:19:12 GMT',
      creationTime: 'Sat, 10 Jul 2021 16:12:53 GMT'
    },*/
        }).catch((error) => {
        switch (error.code) {
        case 'auth/email-already-in-use':
          console.log('Email address ${this.state.email} already in use.');
          break;
        case 'auth/invalid-email':
          console.log('Email address ${this.state.email} is invalid.');
          break;
        case 'auth/operation-not-allowed':
          console.log('Error during sign up.');
          break;
        case 'auth/weak-password':
          console.log('Password is not strong enough. Add additional characters including special characters and numbers.');
          break;
        default:
          console.log(error.message);
          break;
      }
    });
   // console.log('test',test);
    try{
      
      let data ={
        email :'deoz@windowslive.com',
        password: '123456'
      }//displayName
      var test = await this.$fire.auth.createUserWithEmailAndPassword(
          'sweeppers@gmail.com',
          '123456'
      );
    
    }catch(error){
      switch (error.code) {
        case 'auth/email-already-in-use':
       //   console.log('Email address '+this.email+'already in use.');
          break;
        case 'auth/invalid-email':
          console.log('Email address ${this.state.email} is invalid.');
          break;
        case 'auth/operation-not-allowed':
          console.log('Error during sign up.');
          break;
        case 'auth/weak-password':
          console.log('Password is not strong enough. Add additional characters including special characters and numbers.');
          break;
        default:
          console.log(error.message);
          break;
      }
      //handleError(e)
    }
  },
  mounted() {
    this.$store.commit("SET_CURRENT", {
      title: "Register",
      dir: ''
    });
  },
  
  methods: {
    async createUser(e) {
      console.log('abc');
     
   
      /*try {
        await this.$fire.auth.createUserWithEmailAndPassword(
          'foo@foo.foo',
          'test'
        )
      } catch (e) {
        handleError(e)
      }*/
    }
  }
};
</script>
