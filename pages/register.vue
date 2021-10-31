<template>

<div class="login-wrapper align-middle">
  
  
        <div class="frame ">
            <div class="nav" id="navbar">
                <ul class="links">
                    <li class="signin-inactive"><nuxt-link
            class="btn"
            :to="'/login'"
          >เข้าสู่ระบบ</nuxt-link></li>
                    <li class="signup-active"><nuxt-link
            class="btn"
            :to="'/register'"
          >สมัครสมาชิก</nuxt-link></li>
                </ul>
            </div>
          
            <div >
             <validation-observer ref="simpleRules" v-slot="{ handleSubmit }">
   
     
   
              <form class="form-signin" @submit.stop.prevent="handleSubmit(onSubmit)" method="post">

            

                    <div class="form-login">
                     <validation-provider
                        #default="{ errors }"
                        rules="required|email"
                        name="email"
                        >
                        <div class="input active">
                            <label for="fullname">อีเมล</label>
                            <input class="form-styling " autocomplete="off"  v-model="email"   type="email" name="email" placeholder="admin@test.com"  rules="required|email" /> 
                             <small class="text-danger">{{ errors[0] }}</small>
                        </div>
                     </validation-provider>
                      <validation-provider
                        #default="{ errors }"
                        rules="required"
                        vid="password"
                        name="password"
                        >
                       <div class="input">
                            <label for="fullname">รหัสผ่าน</label>
                            <input class="form-styling" autocomplete="off"  type="password" name="password" v-model="password"
                           
                               /> 
                              <small class="text-danger">{{ errors[0] }}</small>
                        </div>
                       </validation-provider>
                   
                           <validation-provider
                        #default="{ errors }"
                        rules="required|confirmed:password"
                        name="repeatPassword"
                        >
                         <div class="input">
                            <label for="fullname">ยืนยันรหัสผ่าน</label>
                            <input class="form-styling" autocomplete="off" v-model="repeatPassword"  type="password" name="repeatPassword" placeholder="ใส่รหัสผ่านอีกครั้ง" 
                             /> 
                            <small class="text-danger">{{ errors[0] }}</small>
                        </div>
                        </validation-provider>
                    </div> 
                    
                     <div class="regis-agree">
                          <validation-provider
                        #default="{ errors }"
                        rules="required"
                        name="exampleCheck1"
                        >
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" name="exampleCheck1" id="exampleCheck1" v-model="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">ยอมรับ<a>เงื่อนไข</a>และ<a>ข้อตกลง</a></label>
                             <small class="text-danger">{{ errors[0] }}</small>
                        </div>
                         </validation-provider>

                    </div>
                       
                   
                    <div class="btn-animate">  <button type="submit" class="btn btn-xs"  @click.prevent="validationForm" >
                  สมัครสมาชิก <img src="~/assets/mark/icons8-right_arrow.png" />
                  </button>   </div>
                  </form> 
                   </validation-observer>
                </div>
                
               
                  
            </div>
           
           
        </div> 
        
     

</template>

<script>
import _capitalize from "lodash/capitalize";
import { validationMixin } from "vuelidate";
import { required, sameAs, minLength } from "vuelidate/lib/validators"
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  components: {
    ValidationProvider,
    ValidationObserver
  },
   mixins: [validationMixin],
   watchQuery: ["page"],
    layout: 'login',
    layout (context) {
    return 'login'
  },
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
      exampleCheck1:'',
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
   
  },
  
   refresh() {
        this.$nuxt.refresh()
      },
  
  methods: {
    say(text){
      console.log('text',text);

    },
    

   sendMessage(){
     console.log(this.password,this.repeatPassword);
     if(this.password != this.repeatPassword){

     }
     console.log('55');
     return false;
   },
    validateState(name) {
      console.log('name',name);
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },
     makeToast(params) {
            
        this.$bvToast.toast(params.message, {
            title: 'Send Mail Contact',
            autoHideDelay: 5000,
            solid: true,
            variant: params.variant,
            
        })
    },
     register(){ 
      
       
    },
     validationForm() {
       let params = {};
      this.$refs.simpleRules.validate().then(success => {
       
        if(success){
          
          let params = {};
          try {
            let data = {
              email:this.email,
              password:this.password,
              group_id:2,
              is_active:1
            }
             this.$axios.$post('/users/v1/register',data).then(res=>{
                console.log('res',res);
                if(res.success){
                   params.variant = 'success';
                    params.message = res.message;
                    this.makeToast(params);
                    this.$router.push("/login");

                }else{
                   params.variant = 'danger';
                    params.message = res.message;
                    this.makeToast(params);

                }
            })
           
          }catch(error){
            params.variant = 'danger';
            params.message = 'Error during sign up.';
            this.makeToast(params);
          }
       
        
       

           /* this.$fire.auth.createUserWithEmailAndPassword(this.email, this.password)
              .then((u) => {
                params.variant = 'success';
                  params.message = 'Register Success';
                console.log('userauth',u.user.email);
                this.makeToast(params);
                this.$router.push("/login");
              }).catch((error) => {
                params.variant = 'danger';
                  switch (error.code) {
                    case 'auth/email-already-in-use':
                      params.message = 'Email address '+this.email+' already in use.';
                    
                      break;
                    case 'auth/invalid-email':
                      params.message = 'Email address '+this.email+' is invalid';
                    
                      break;
                    case 'auth/operation-not-allowed':
                       params.message = 'Error during sign up.';
                    
                      
                      break;
                    case 'auth/weak-password':
                      params.message = 'Password is not strong enough. Add additional characters including special characters and numbers.';
                      
                      break;
                    default:
                      console.log(error.message);
                      break;
                  }
                  this.makeToast(params);
          });*/
           
            
            
        }
         
      });
    },
   
   
    async createUser(e) {
      console.log('abc');
     
   
    }
  }
};
</script>
