<template>
  <div class="form-company">
    <h1>ข้อมูลบริษัท</h1>
    <form>
     
  <div class="form-group row">
      
    <label for="company_namee" class="col-sm-2 col-form-label">ชื่อบริษัท</label>
    <div class="col-sm-10">
      <input type="text"  class="form-control" id="company_namee" placeholder="ชื่อบริษัท" value="">
    </div>
  </div>
  <div class="form-group row">
    <label for="bussiness_type" class="col-sm-2 col-form-label">ประเภทกิจการ</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="bussiness_type" placeholder="ประเภทกิจการ">
    </div>
  </div>
  <div class="form-group row">
    <label for="company_registration" class="col-sm-2 col-form-label">เลขทะเบียนบริษัท</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="company_registration" placeholder="เลขทะเบียนบริษัท">
    </div>
  </div>
  <div class="form-group row">
    <label for="company_registration" class="col-sm-2 col-form-label">วันที่จดทะเบียน</label>
    <div class="col-sm-10">
      <client-only><date-picker
placeholder="MM/DD/YYYY"
format="MM/dd/yyyy"
v-model="date_today" /></client-only>
    </div>
  </div>
  <h5>สำนักงานที่ตั้ง</h5>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label for="house_no">บ้านเลขที่</label>
      <input type="text" class="form-control" id="house_no" placeholder="บ้านเลขที่" value="" required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="building_name">ชื่ออาคาร</label>
      <input type="text" class="form-control" id="building_name" placeholder="ชื่ออาคาร"  required>
    </div>
    <div class="col-md-4 mb-3">
      <label for="floor">ชั้น</label>
      <input type="text" class="form-control" id="floor" placeholder="ชั้น"  required>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationDefault03">City</label>
      <input type="text" class="form-control" id="validationDefault03" placeholder="City" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault04">State</label>
      <input type="text" class="form-control" id="validationDefault04" placeholder="State" required>
    </div>
    <div class="col-md-3 mb-3">
      <label for="validationDefault05">Zip</label>
      <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
  

</form>
  </div>
   
</template>

<script>
import BaelGrid from "~/components/BaelGrid";
import FullGrid from "~/components/FullGrid";
import _chunk from "lodash/chunk";

export default {
   head() {
    return {
      title: "My Company | " + this.$store.state.info.sitename,
    };
  },

  async asyncData({ $content, params, error, store }) {
    
   
   
  },
  
  data(){
    return{
      
    date_today:new Date()
    }
  },
    components: {datepicker},
  transition(to, from) {
    if (!from) return "fade";
    return +to.query.page > +from.query.page ? "slide-right" : "slide-left";
  },
  name: "Company",
  components: { BaelGrid, FullGrid },
  computed: {
    getLayout() {
      return this.$store.state.info.altlayout ? "FullGrid" : "BaelGrid";
    },
  },
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
