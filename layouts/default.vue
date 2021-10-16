<template>
  <div class="container-main bg-grey">
    <div class="row " v-if="title!='job-slug'">
      <div class="col-2">
        <bael-left />
      </div>
      <div class="col-10 main-right">
        <bael-header />
        <nuxt />
      </div>
    </div>
     <div class="row " v-else>
      <div class="col-2">
        <bael-left />
      </div>
      <div class="col-8 main-right">
        <bael-header />
        <nuxt />
      </div>
      <div class="col-2">
        <bael-right />
      </div>
    </div>
     
       
  </div>
  
</template>
<script>
import BaelHeader from '../components/BaelHeader.vue';
import BaelLeft from '../components/BaelLeft.vue';
import BaeRight from '../components/BaelRight.vue'

export default {
  components: { BaelLeft,BaeRight },
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
