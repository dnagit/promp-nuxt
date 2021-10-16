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
            <tbody>
            <tr>
                <td class="pl-5">จดทะเบียนบริษัท</td>
                
                <td><nuxt-link to="/register-company?job_id=defd" class="btn btn-xs btn-default"><img src="~assets/icon/icon-go.png" class="img-process" />ดำเนินการ</nuxt-link></td>
                <td><nuxt-link to="/job/defd" class="btn btn-xs btn-danger">Incomplete</nuxt-link></td>
            </tr>
            <tr>
                <td class="pl-5 font-dis">รอตรวจสอบข้อมูลการจดทะเบียนจัดตั้งบริษัท</td>
                
                <td></td>
                <td></td>
            </tr>
             <tr>
                <td class="pl-5 font-dis">ยืนยันตัวตน</td>
                
                <td></td>
                <td></td>
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
        date_today:new Date()
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
     
}
</script>