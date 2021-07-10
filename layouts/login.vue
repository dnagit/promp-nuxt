<template>
  <section class="container-fluid">
        <div class="row bg-login">
            <div class="col-sm-6 login-section-wrapper">
                 <div class="brand-wrapper"><img src="~/static/images/logo.png" /></div>
                 <div v-if="$auth.looggedIn">
                   {{ $auth.user.email }}
                   <v-btn text>Logout</v-btn>
                   
                 </div>
                 <div v-else><v-btn text>Logout</v-btn></div>
                <nuxt />
            </div>
            <div class="col-md-12 col-lg-6 bg-login-right align-middle text-center">
                <div class="login-text-right">
                    <h1>YOUR <span>FRIEND</span></h1>
                    <h2>FOR BUSINESS</h2>
                    <p>LISTEN | UNDERSTAND | CREATE SOLUTION</p>
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
