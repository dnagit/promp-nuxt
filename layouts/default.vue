<template>
  <div class="container-main bg-grey">
    <div class="row ">
      <div class="col-2">
        <bael-left />
      </div>
      <div class="col-10 main-right">
        <bael-header />
        <nuxt />
      </div>
    </div>
     
       
  </div>
  
</template>
<script>
import BaelHeader from '../components/BaelHeader.vue';
import BaelLeft from '../components/BaelLeft.vue';

export default {
  components: { BaelLeft },
  data() {
     return {
      email: { email: "" },
    };
   
  },
  async middleware({ store, $content }) {
    await store.dispatch("fetchInfo", $content);
  },
};
</script>
