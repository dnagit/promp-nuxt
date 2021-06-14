<template>
  <section class="container-fluid">
        <div class="row bg-login">
            <div class="col-sm-6 login-section-wrapper">
                <nuxt />
            </div>
            <div class="col-md-12 col-lg-6 bg-login-right align-middle text-center">
                <div class="login-text-right">
                    <h1>YOUR <span>FRIEND</span></h1>
                    <h2>FOR BUSINESS</h2>
                    <p>LISTEN | UNderstand | create solution</p>
                </div>
                
                
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
