<template>
<div class="tab-content job-process">
    <div class="t-radius job-dashboard">
        <table class="table">
            <thead class="thead-light">
            <tr>
                <th class="col-10 text-center">Required Action</th>
        
                <th class="col"></th>
                <th  class="col">Status</th>
            </tr>
            </thead>
            <tbody v-if="actions.length > 0">
                <tr v-for="(action,key) in actions" :key="key">
                    <td class="pl-5" :class="job.action_id==action.id?'':'font-dis'">{{ action.title }}</td>
                    
                    <td>
                        <nuxt-link :to="'/register-company?job_id='+job_id" class="btn btn-xs btn-default" v-if="action.id == 1 && job.action_id == 1"><img src="~assets/icon/icon-go.png" class="img-process" />ดำเนินการ</nuxt-link>
                    </td>
                    <td>
                        <nuxt-link :to="'/job/'+job_id" class="btn btn-xs btn-danger" v-if="job.action_id==action.id">Incomplete</nuxt-link>
                        <nuxt-link :to="'/job/'+job_id"  class="btn btn-xs btn-outline-success" v-if="job.action_id>action.id">Complete</nuxt-link>
                    </td>
                </tr>
            
            
            <!--<tr>
                <td>เปลี่ยนชื่อบริษัทใหม่</td>
                <td>12/04/2020  12:00</td>
                <td><img src="~/assets/icon/user.png" class="icon" /> Patsanan</td>
                <td><span class="btn btn-xs btn-outline-warning">Processing</span></td>
            </tr>
            <tr>
                <td>ขอใบอนุญาตประกอบกิจการ...</td>
                <td>12/04/2020  12:00</td>
                <td><img src="~/assets/icon/user.png" class="icon" /> Patsanan</td>
                <td><span class="btn btn-xs btn-outline-warning">Processing</span></td>
            </tr>
            <tr>
                <td>ขอใบอนุญาตตั้งสถานบริการ       </td>
                <td>12/04/2020  12:00</td>
                <td><img src="~/assets/icon/user.png" class="icon" /> Patsanan</td>
                <td><span class="btn btn-xs btn-outline-success">Completed</span></td>
            </tr>
            <tr>
                <td>ปรึกษาเรื่องขยายธุรกิจไปต่าง...</td>
                <td>12/04/2020  12:00</td>
                <td><img src="~/assets/icon/user.png" class="icon" /> Patsanan</td>
                <td><span class="btn btn-xs btn-outline-success">Completed</span></td>
            </tr>-->
            </tbody>
        </table>
            

    </div>  
</div>
  
</template>
<script>
import BaelGrid from "~/components/BaelGrid";
import FullGrid from "~/components/FullGrid";
export default {
    middleware: ['router-auth'],
    data(){
        return {
            date_today:new Date(),
         job_id:this.$route.params.slug,
            job:{
                action_id:''
            },
            actions:[]
        };
    },
    watchQuery: ["page"],
    async asyncData({ params, app, payload, route, store }) {
        await store.commit("SET_TITLE", "Categories");
    },
    mounted() {
        console.log('params',this.$route.params);
        this.$store.commit("SET_CURRENT", {
        title: "Job Detail",
        dir: ''
        });
        this.getActions();
        this.getJob();
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
    methods:{
        async getActions(){
              const actions = await this.$axios.$get('/jobs/v1/getactions');
              if( actions.data){
                  this.actions = actions.data
              }
              
            console.log('actions',actions);

        },
        async getJob(){
            const job = await this.$axios.$get('/jobs/v1/get/'+this.job_id);
            this.job = job.data;
            console.log('job',job);

        }
    }
     
}
</script>