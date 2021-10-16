<template>
  <div class="container-main">
    <nuxt />
       
  </div>
  
</template>
<script>


export default {
  components: { },
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
