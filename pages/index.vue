<template>
  <div>
    <div class="row dashboard">
      <div class="col-4">
        <div class="block d-flex justify-content-between bd-highlight mb-3">
          <div class="p-1 bd-highlight">
            Assigned<br />
          <b>{{  this.count.assignedcount  }}</b>
          </div>
          <div class="bd-highlight">
            
              <img src="~/assets/icon/Group-5.png" class="d-img"  /> 
            
          </div>
          
        </div>
      </div>
      <div class="col-4">
      <div class="block d-flex justify-content-between bd-highlight mb-3">
          <div class="p-1 bd-highlight">
            Processing<br />
          <b>{{  this.count.processingcount+this.count.pendingcount  }}</b>
          </div>
          <div class="bd-highlight">
            
              <img src="~/assets/icon/Group-6.png" class="d-img"  /> 
            
          </div>
          
        </div>
      </div>
      <div class="col-4">
        <div class="block d-flex justify-content-between bd-highlight mb-3">
          <div class="p-1 bd-highlight">
            Complete<br />
          <b>{{  this.count.completecount  }}</b>
          </div>
          <div class="bd-highlight">
            
              <img src="~/assets/icon/Group-4.png" class="d-img"  /> 
            
          </div>
          
        </div>
      </div>
      

    </div>
    <div class="row d-data justify-content-between">
      <div class="col-8 ">
        
    
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">My job request ({{ this.count.assignedcount}})</a>
          <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Pending Payment({{ this.count.pendingcount}})</a>
        
        </div>
  
      </div>
      <div class="col-4  ">
      
    
        <form class="form-inline">
          Status:
          <select class="status">
            <option>All</option>
          </select>
          <select class="datebiker">
            <option>29 April 2022</option>
          </select>
          
        </form>
        
  
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        
      
   
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          
          <div class="t-radius job-dashboard">
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Job Request</th>
                  <th scope="col">Date time</th>
                  <th scope="col">Lawyer</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody v-if="assigneds.length > 0">
                <tr v-for="(ass,key) in assigneds" :key="key">
                  <td>{{ ass.job_name }}(J{{ ass.id | padStr(5)}})</td>
                  <td>{{ ass.created_at | formatDate }}</td>
                  <td><!--<img src="~/assets/icon/user.png" class="icon" /> Patsanan--></td>
                  <td><nuxt-link :to="'/job/'+ass.id" class="btn btn-xs btn-primary">Assigned</nuxt-link></td>
                </tr>
                
              </tbody>
              <tbody v-else>
                <tr>
                  <td colspan="4"><center>No data</center></td>
                </tr>
                
              </tbody>
            </table>
             
            
          </div>
          <div class="row mt-3">
              <span class="col-8 justify-content-start align-middle show-pagination">
                Show {{ this.assigneds.length}} from {{ this.count.assignedcount}}
              </span>
             <!-- <ul class="col-4 pagination  justify-content-end">
                <li class="page-item "><a class="page-link" href="#"></a></li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">></a></li>
              </ul>-->
          </div>
        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          <div class="t-radius job-dashboard">
          <table class="table">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Job Request</th>
                  <th scope="col">Date time</th>
                  <th scope="col">Lawyer</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
             <tbody v-if="pendings.length > 0">
                <tr v-for="(ass,key) in pendings" :key="key">
                  <td>{{ ass.job_name }}(J{{ ass.id | padStr(5)}})</td>
                  <td>{{ ass.created_at | formatDate}}</td>
                  <td><!--<img src="~/assets/icon/user.png" class="icon" /> Patsanan--></td>
                  <td><nuxt-link :to="'/job/'+ass.id" class="btn btn-xs btn-primary">Pending payment</nuxt-link></td>
                </tr>
                
              </tbody>
              <tbody v-else>
                <tr>
                  <td colspan="4"><center>No data</center></td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
        
      </div>  
      </div>
    </div>
  </div>
  
  
</template>

<script>
import BaelGrid from "~/components/BaelGrid";
import FullGrid from "~/components/FullGrid";
//import _chunk from "lodash/chunk";




export default {
  middleware: ['router-auth'],
  data(){
    return {
      date_today:new Date()
    };
  },
  watchQuery: ["page"],
  
  async asyncData({ params, app, payload, route, store }) {
    await store.commit("SET_TITLE", "Categories");
  },
  data() {
    return {
      count:{
        assignedcount:0,
        pendingcount:0,
        processingcount:0,
        completecount:0

      },
      pendings:[],
      assigneds:[],
      perPage:10,
      offsetPending:0,
      offsetAssigned:0,
      user: {
        email: '',
        uid:''
      }
    };
  },
  mounted() {
    this.$store.commit("SET_CURRENT", {
      title: "Dashboard",
      dir: ''
    });
     let user =  this.$auth.$storage.getLocalStorage('user');
 
    if(user){
      console.log('u',user);
       this.user.email = user.email;
      this.user.uid = user.id
    }
     this.getJobscounts();
     this.getJobs();
  },

  transition(to, from) {
    if (!from) return "fade";
    return +to.query.page > +from.query.page ? "slide-right" : "slide-left";
  },
  name: "Index",
  components: { BaelGrid, FullGrid },
  computed: {
    getLayout() {
      return this.$store.state.info.altlayout ? "FullGrid" : "BaelGrid";
    },
  },
  filters: {
    formatDate(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        hh = d.getHours(),
        mm = d.getMinutes();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join('/')+' '+hh+':'+mm;

    },
    getcomma: function(text){
        if(!text){
            return ''

        }
        var nStr = text;
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 ;
    },
    padStr :function(number, numDigits){
      
      let outString ='';
      let counter = numDigits - number.toString().length;
      let str = new Array(counter + 1).join("0");
     return (str+number.toString());

    }
  },
  
  methods:{
    async getJobscounts(){
      //console.log('user',this.user.email);
      const counts = await this.$axios.$get('/jobs/v1/getJobCount/'+this.user.uid);
      this.count = counts.data;
      let countall = this.count.assignedcount+this.count.processingcount+this.count.completecount+this.count.pendingcount;
      console.log('countall',counts);
      if(countall == 0){
        this.addJobs();

      }
  
       //let app = this.$fire.auth.signInWithEmailAndPassword('de','123')
       // const messageRef = this.$fire.database.ref('cases')
       console.log('app',this.count);
    },
     makeid(length){
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
         charactersLength));
      }
      
      return result;

    },
    async getJobs(){
      //offsetAssigned
      //offsetPending
      //perPage
      let  filterAssigned ={
        perPage:this.perPage,
        offset:this.offsetAssigned,
        uid:this.user.uid,
        status_id:1

      }
       const assigned = await this.$axios.$post('/jobs/v1/getjobs',filterAssigned);
       this.assigneds = assigned.data;
       let  filterpending ={
        perPage:this.perPage,
        offset:this.offsetPending,
        uid:this.user.uid,
        status_id:2

      }
       const pending = await this.$axios.$post('/jobs/v1/getjobs',filterpending);
       this.pendings = pending.data;
       //console.log('assigned',assigned);

    },
    async addJobs(){
        
        let data = {
          created_by:this.user.uid,
          status_id:1,
          job_name:'จดทะเบียนบริษัท',
          price:1000,
          status_id:1,
          action_id:1
         

        }
      const rest = await this.$axios.$post('/jobs/v1/addjob',data);
      if(rest.success){
        this.count.assignedcount  =1;
        this.getJobs();

      }
      
      console.log('rest',rest);

    }
  }
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
