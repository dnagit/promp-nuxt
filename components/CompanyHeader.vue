<template>
<div class="header">
    <nav class="navbar navbar-light bg-light justify-content-between">
        <ul>
            <li><nuxt-link to="/">LEGAL SERVICES</nuxt-link></li>
            <li>|</li>
            <li><nuxt-link to="/">LEGAL SOLUTIONS</nuxt-link></li>
            <li>|</li>
            <li><nuxt-link to="/">ACADEMY</nuxt-link></li>
        </ul>
        <form class="form-inline" v-if="title!='job-slug'">
    
            <div class="notification"><img src="~/assets/icon/icons-39.png" class="icon" /></div>
            <div class="btn-group" role="group" >
            <button id="btnGroupDrop1" type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="~/assets/icon/user.png" class="user" /> {{ user.email  }}
            </button>
            <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <a class="dropdown-item" href="#">Profile</a>
                <a class="dropdown-item" href="#" @click="logout">Logout</a>
            </div>
            </div>
        
        
        </form>
    </nav>
</div>
</template>
<script>
import _capitalize from "lodash/capitalize";
export default {
  data() {
    return {
      title:'index',
      user: {
        email: '',
        uid:''
      }
    };
  },
  mounted() {
     let user =  this.$auth.$storage.getLocalStorage('user');
 
    if(user){
      console.log('u',user);
       this.user.email = user.email;
      this.user.uid = user.id
    }
  },
  created(){
   
   
   // const split = _get(this.$store, "state.current.dir").split("/");
   this.title = this.$route.name;
    console.log('title', this.$route);
  },
  computed: {
    pagetitle() {
     
      return this.$store.state.current.title;
    },

    path() {
      const split = _get(this.$store, "state.current.dir").split("/");

      return split.length && split[1] !== "page" ? _capitalize(split[1]) : null;
    },
  },
    watch: {
      '$route.name'(newId, oldId) {
        this.title = newId;
        console.log('newId',newId);
          
        }
    },
  methods:{
    async logout(){
       let params = {};
     await  this.$auth.$storage.removeLocalStorage('user');
      this.$router.go("/login",()=>{
          params.variant = 'success';
          params.message = 'Logout Success';
          this.makeToast(params);
        
      });
    },
  
    makeToast(params) {
            
        this.$bvToast.toast(params.message, {
            title: 'Logout',
            autoHideDelay: 5000,
            solid: true,
            variant: params.variant,
            
        })
    },
  }
};
</script>