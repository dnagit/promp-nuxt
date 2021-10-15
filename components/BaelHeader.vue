<template>

  <nav class="navbar navbar-light bg-light justify-content-between">
  <div class="btn-group" role="group" aria-label="Button group with nested dropdown" v-if="title=='index'">
  

    <div class="btn-group" role="group" >
      <button id="btnGroupDrop1" type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src="~/assets/icon/logocompany.png" class="icon" /> บริษัทฟาสต์เวิร์ค เทคโนโลยีส์ จำก...
      </button>
      <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
        <a class="dropdown-item" href="#"><img src="~/assets/icon/logocompany.png" class="icon" /> บริษัทฟาสต์เวิร์ค เทคโนโลยีส์ จำก...</a>
        <a class="dropdown-item" href="#"><img src="~/assets/icon/logocompany.png" class="icon" /> บริษัทฟาสต์เวิร์ค เทคโนโลยีส์ จำก...</a>
      </div>
    </div>
  </div>
  <div class="head-right"  v-else-if="title=='company'">
    <h5>My Company </h5>
    <span>2 list</span>
  </div>
  <div class="head-right"  v-else-if="title=='bussinesses'">
    <h5>Business Handbook </h5>
    <span>24 Documents</span>
  </div>
  <div class="head-right"  v-else-if="title=='health'">
    <h5>Legal Health Check </h5>
    <span>Please select all your business activites.</span>
  </div>
  <div class="head-right"  v-else-if="title=='services'">
    <h5>Sevice Request </h5>
    <span>Please choose what you want from the list of our serive.</span>
  </div>
  <div class="head-right"  v-else-if="title=='legals'">
    <h5>Legal Advice </h5>
    
  </div>
  
  
  <form class="form-inline">
    
    <div class="notification"><img src="~/assets/icon/icons-39.png" class="icon" /></div>
    <div class="btn-group" role="group" >
      <button id="btnGroupDrop1" type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <img src="~/assets/icon/user.png" class="user" /> {{ user.email }}
      </button>
      <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
        <a class="dropdown-item" href="#">Profile</a>
        <a class="dropdown-item" href="#" @click="logout">Logout</a>
      </div>
    </div>
  
   
  </form>
</nav>
</template>
<script>
import _capitalize from "lodash/capitalize";
export default {
  data() {
    return {
      title:'index',
      user: this.$auth.$storage.getLocalStorage('user')
    };
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
<style>
#navbar {
  z-index: 999;
}
.titlebar .item {
  overflow-x: none;
}
.results {
  padding-left: 0;
  transform: translateY(17px);
  width: 30vw;
}
.results li {
  list-style-type: none;
  margin-left: 0;
}
nav {
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  right: 0;
}
.sitename {
  color: #000;
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 18px;
}
.dropdown-menu{
  width: 100%;
}
@media only screen and (max-width: 40rem) {
  .results {
    width: 94vw;
  }
}
</style>