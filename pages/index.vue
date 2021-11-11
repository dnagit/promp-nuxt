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
           <a class="nav-item nav-link" id="nav-processing-tab" data-toggle="tab" href="#nav-processing" role="tab" aria-controls="nav-profile" aria-selected="false">Processing({{ this.count.processingcount}})</a>
        
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
                    <th scope="col">Download</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
              <tbody v-if="pendings.length > 0">
                  <tr v-for="(ass,key) in pendings" :key="key">
                    <td>{{ ass.job_name }}(J{{ ass.id | padStr(5)}})</td>
                    <td>{{ ass.created_at | formatDate}}</td>
                    <td><!--<img src="~/assets/icon/user.png" class="icon" /> Patsanan--></td>
                    <td scope="col">
                      <b-dropdown text="Download" variant="outline-primary"  class="m-2">
                        <b-dropdown-item @click="generateReport(ass.id)">Meeting</b-dropdown-item>
                        <!--<b-dropdown-item @click="generateDocument(ass.id)">Document</b-dropdown-item>-->
                       
                      </b-dropdown>
                      
                    </td>
                    <td><nuxt-link :to="'/checkout?job_id='+ass.id" class="btn btn-xs btn-primary">Pending payment</nuxt-link></td>
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
          <div class="tab-pane fade show active" id="nav-processing" role="tabpanel" aria-labelledby="nav-processing-tab">
            
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
                <tbody v-if="processings.length > 0">
                  <tr v-for="(ass,key) in processings" :key="key">
                    <td>{{ ass.job_name }}(J{{ ass.id | padStr(5)}})</td>
                    <td>{{ ass.created_at | formatDate }}</td>
                    <td><!--<img src="~/assets/icon/user.png" class="icon" /> Patsanan--></td>
                    <td><nuxt-link :to="'/job/'+ass.id" class="btn btn-xs btn-primary">Processing</nuxt-link></td>
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
        </div>  
          <client-only>
            <vue-html2pdf
                :show-layout="false"
                :float-layout="true"
                :enable-download="false"
                :preview-modal="true"
                :paginate-elements-by-height="1400"
                filename="meeting"
                :pdf-quality="2"
                :manual-pagination="false"
                pdf-format="a4"
                pdf-orientation="portrait"
                pdf-content-width="790px"
        
              
                @hasStartedGeneration="hasStartedGeneration()"
                @hasGenerated="hasGenerated($event)"
                ref="html2Pdf"
            >
                <section slot="pdf-content">
                    <div class="page">
                        <img src="~/assets/from_meeting_new/from_meeting_new-1.png" class="form-1" />
                        <div class="position-abs-1" v-if="company">{{ company.company_th }}</div>
                        <div class="position-meeting_date-1" v-if="company">{{ company.meeting_date | formatDatePdf }}</div>
                        <div class="position-meeting_time-1" v-if="company">{{ company.meeting_time }}</div>
                        <div class="position-meeting_addess_no-1" v-if="company">
                          {{ company.meeting_addess_no }}
                          {{ company.meeting_building }}
                          {{ company.meeting_level }}
                          {{ company.meeting_room_no }}
                          {{ company.meeting_soi }}
                          {{ company.meeting_road }}
                           {{ company.meeting_city }}
                          {{ company.meeting_states }}
                          
                         

                        </div>
                        <div class="position-meeting_city-1" v-if="company">
                         
                          
                          {{ company.meeting_province }}
                          {{ company.meeting_postcode }}
                          
                          
                         

                        </div>
                         <div class="position-share_count-1" v-if="company">{{ company.share_count }}</div>
                         <div class="position-share_total-1" v-if="company">{{ company.share_total }}</div>
                         <div class="position-president_title-1" v-if="company">{{ company.president_title }}{{ company.president_firstname }} {{ company.president_lastname }}</div>
                        <div class="position-static-1" >ใช้ตามประมวลกฎหมายแพ่งและพาณิชย์เป็นข้อบังคับของบริษัท</div>
                        <div class="position-payment_register-1" >{{ company.expenses | getcomma}}</div>
                        <div class="position-share_value-1" v-if="company">{{ company.share_value | getcomma }}</div>
                        <div class="position-payment_percent-1" v-if="company">{{ company.payment_percent | calpayment(company.amount_cap) }}</div>
                        
                        
                        
                    </div>
                    <div class="page">
                        <img src="~/assets/from_meeting_new/from_meeting_new-2.png" class="form-1" />
                        <div class="position-director_count-2" v-if="company.directors">{{ company.directors.length }}</div>
                        <template v-if="company.directors">
                          <div v-for="(director,key) in company.directors" :key="key" :class="'position-director_'+(key+1)+'-2'">{{ director.title }}{{ director.firstname }} {{ director.lastname }}</div>
                        </template>
                        <div class="position-auditor_title-2" v-if="company">{{ company.auditor_title }}{{ company.auditor_firstname }} {{ company.auditor_lastname }}</div>
                         <div class="position-license_number-2" v-if="company">{{ company.license_number }}</div>
                          <div class="position-compensation-2" v-if="company">{{ company.compensation | getcomma }}</div>
                           <div class="position-president_title-2" v-if="company">{{ company.president_title }}{{ company.president_firstname }} {{ company.president_lastname }}</div>
                       
                        
                        
                    </div>
                  
                  
                    
                    <!-- PDF Content Here -->
                </section>
            </vue-html2pdf>
          </client-only>
           <client-only>
            <vue-html2pdf
                :show-layout="false"
                :float-layout="true"
                :enable-download="false"
                :preview-modal="true"
                :paginate-elements-by-height="1400"
                filename="meeting"
                :pdf-quality="2"
                :manual-pagination="false"
                pdf-format="a4"
                pdf-orientation="portrait"
                pdf-content-width="790px"
        
              
                @hasStartedGeneration="hasStartedGeneration()"
                @hasGenerated="hasGenerated($event)"
                ref="html2Pdf2"
            >
                <section slot="pdf-content">
                    <div class="page">
                        <img src="~/assets/from_meeting_new/from_meeting_new-1.png" class="form-1" />
                        
                        
                        
                    </div>
                    <div class="page">
                      
                       
                        
                        
                    </div>
                  
                  
                    
                    <!-- PDF Content Here -->
                </section>
            </vue-html2pdf>
          </client-only>
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
      processings:[],
      perPage:10,
      offsetPending:0,
      offsetAssigned:0,
      user: {
        email: '',
        uid:''
      },
      company:{}
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
    calpayment(percent,amount){
      const pay = amount*(percent/100);

       var nStr = pay;
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
    formatDatePdf(date) {
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

    return [day, month, year].join('/');

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
    async generateDocument(id){
      const detail = await this.$axios.$get('/company/v1/getmeeting/'+id);
      if(detail){
        this.company = detail.data;

      }
      console.log('detail',this.company);
     
          this.$refs.html2Pdf2.generatePdf()

    },
    async generateReport (id) {
      const detail = await this.$axios.$get('/company/v1/getmeeting/'+id);
      if(detail){
        this.company = detail.data;

      }
      console.log('detail',this.company);
     
          this.$refs.html2Pdf.generatePdf()
    },
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

       let  filterprocessing ={
        perPage:this.perPage,
        offset:this.offsetPending,
        uid:this.user.uid,
        status_id:3

      }
       const processings = await this.$axios.$post('/jobs/v1/getjobs',filterprocessing);
       this.processings = processings.data;



       
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
