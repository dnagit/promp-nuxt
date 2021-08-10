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
      <input type="text" class="form-control" id="company_registration" placeholder="เลขทะเบียนบริษัท">
    </div>
  </div>
  
  

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
