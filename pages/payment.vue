<template>
   <div class=" dashboard company text-center">
  
      <h3>Payment {{ status }}</h3><br />
      Job Id #{{ job_id }}<br />
      <nuxt-link to="/" class="btn btn-xs btn-warning p-2 mt-3">Back To Home</nuxt-link>
   </div>
</template>

<script>
import BaelGrid from "~/components/BaelGrid";
import FullGrid from "~/components/FullGrid";
import _chunk from "lodash/chunk";
export default {
   head() {
    return {
      title: "Checkout | " + this.$store.state.info.sitename,
    };
  },
  async asyncData({ $content, params, error, store }) {
    
   
   
  },
   data(){
      return {
          
          job_id:this.$route.query.job_id,
          job:{},
          status:'Failed',

      }
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
  mounted() {
    this.getTransition();
    console.log(this.$query);
    
  },
  methods:{
    async getTransition(){
      let tran =  await this.$axios.$get('/jobs/v1/checkcharge/'+this.job_id);
      if(tran.data){
        if(tran.data.status == 'successful' || tran.data.status ==  'pending'){
          this.status = 'Complete';

        }

      }
      console.log('checkcharge',tran);

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
