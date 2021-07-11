<template>

<div class="login-wrapper align-middle">
  <div>{{ content }}</div>
  {{ state.email }}
    <button @click="$refresh">Refresh</button>
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
            <b-alert show>
              Hello Bootstrap!
          </b-alert>
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Holy guacamole!</strong> You should check in on some of those fields below.
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div >
              
              <form class="form-signin" @submit.prevent="refesh" method="post">

            

                    <div class="form-login">
                        <div class="input active">
                            <label for="fullname">อีเมล</label>
                            <input class="form-styling " type="email" name="email" placeholder="admin@test.com" required /> 
                        </div>
                        
                       <div class="input">
                            <label for="fullname">รหัสผ่าน</label>
                            <input class="form-styling" type="password" name="password" required  /> 
                        </div>
                         <div class="input">
                            <label for="fullname">ยืนยันรหัสผ่าน</label>
                            <input class="form-styling" type="password" name="repeatpassword" placeholder="ใส่รหัสผ่านอีกครั้ง"  required sameAs(password) /> 
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
                   
                    <div class="btn-animate">  <button type="submit" class="btn btn-xs" >
                  สมัครสมาชิก <img src="~/assets/mark/icons8-right_arrow.png" />
                  </button>   </div>
                  </form> 
                </div>
                
               
                  
            </div>
           
           
        </div> 
        
     

</template>

<script>
import _capitalize from "lodash/capitalize";
import { validationMixin } from "vuelidate";
import { required, sameAs, minLength } from "vuelidate/lib/validators"
export default {
  mixins: [validationMixin],
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
    return {
      state:{
        email:'sweeppers@gmail.com',
        password:'123456'

      },
      email: '',
      password: '',
      repeatPassword: '',
      form: {
        email: null,
        password: null,
        
      },
      errors: [],
    };
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

   created(){
    //console.log('abc');
    try{
      
      let data ={
        email :'deoz@windowslive.com',
        password: '123456'
      }//displayName
      /*await this.$fire.auth.createUserWithEmailAndPassword(
          'sweeppers@gmail.com',
          '123456'
      );*/
    
    }catch(error){
      switch (error.code) {
        case 'auth/email-already-in-use':
          console.log('Email address '+this.state.email+' already in use.');
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
   refresh() {
        this.$nuxt.refresh()
      },
  
  methods: {
    say(text){
      console.log('text',text);

    },

   
    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
    
   
   
    async createUser(e) {
      console.log('abc');
     
   
    }
  }
};
</script>
