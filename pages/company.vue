<template>
   <div class="row dashboard company">
     <div class="col-3">
        <div class="block ">
           <img src="~/assets/icon/logocompany.png"  /> <br />
          บริษัทฟาสต์เวิร์ค เทคโนโลยีส์  จำกัด 
           <div class="detail">
             เลขผู้เสียภาษี : 0105559038520<br />
             Date of Incorporation : 12/01/2564<br />
             ประเภทกิจการ : สปา, นวดเพื่อรักษา
           </div>

        </div>
      </div>
       <div class="col-3">
        <div class="block ">
           <img src="~/assets/icon/logocompany.png"  /> <br />
          บริษัทฟาสต์เวิร์ค เทคโนโลยีส์  จำกัด 
           <div class="detail">
             เลขผู้เสียภาษี : 0105559038520<br />
             Date of Incorporation : 12/01/2564<br />
             ประเภทกิจการ : สปา, นวดเพื่อรักษา
           </div>

        </div>
      </div>
       <div class="col-3">
      
          <div class="block add-company ">
              <nuxt-link :to="'/form/company'">
           <img src="~/assets/icon/icons8-add.png"  /> </nuxt-link>
            Add company
             
          </div>
       
      </div>
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
