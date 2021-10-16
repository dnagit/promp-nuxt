<template>
  <div class="container-main register-company">
    <company-header />
    <nuxt />
    <company-footer />
       
  </div>
  
</template>
<script>
import CompanyHeader from '../components/CompanyHeader.vue'
import CompanyFooter from '../components/CompanyFooter.vue'
export default {
  components: { CompanyHeader,CompanyFooter },
  data() {
     return {
      email: { email: "" },
      title:this.$route.name,
    };
   
  },
  async middleware({ store, $content }) {
    await store.dispatch("fetchInfo", $content);
  },
  watch: {
    '$route.name'(newId, oldId) {
      this.title = newId;
      console.log('newId',newId);
        
      }
  },
};
</script>
