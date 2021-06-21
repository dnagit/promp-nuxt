<template>
  <div class="container-main bg-grey">
    <div class="row">
      <div class="col-2">
        <bael-left />
      </div>
      <div class="col-10 main-right">
        <nuxt />
      </div>
    </div>
     
       
  </div>
  
</template>
<script>
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
