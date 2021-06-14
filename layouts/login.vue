<template>
  <section class="container xs-text-5 md-text-4">
        <div class="row bg-login">
            <div class="col-md-12 col-lg-6">
                <nuxt />
            </div>
            <div class="col-md-12 col-lg-6 bg-login-right">

            </div>
        </div>
        
   
  </section>
</template>
<script>
export default {
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
