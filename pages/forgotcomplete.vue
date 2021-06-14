<template>

<div class="forgotcomplete-wrapper align-middle">
    <img class="lettermail" src="~/assets/mark/Group 177.png" />
    <h1>โปรดตรวจสอบอีเมลของคุณ</h1>
    <p>
        เราได้ทำการส่งอีเมลที่ใช้ในการเปลี่ยนแปลงรหัส<br />ของคุณไปให้ทางอีเมลเรียบร้อยแล้ว
    </p>
     <div class="btn-animate"> 
          <nuxt-link
            class="btn-signin"
            :to="'login'"
          ><img src="~/assets/mark/icons8-enter2.png" /> กลับไปที่่หน้าเข้าสู่ระบบ</nuxt-link>
    </div>

    <div class="resend">
        ยังไม่ได้รับเมลใช่หรือไม่? โปรดตรวจสอบที่อีเมลขยะ<br />
หรือ ส่งด้วยอีเมลใหม่
    </div>
   
</div>    
     

</template>

<script>
export default {
  watchQuery: ["page"],
    layout: 'login',
    layout (context) {
    return 'login'
  },
  async asyncData({ params, app, payload, route, store }) {
    await store.commit("SET_TITLE", "Forgot Complete");
  },
  transition(to, from) {
    if (!from) return "fade";
    return +to.query.page > +from.query.page ? "slide-right" : "slide-left";
  },
  data() {
    return {};
  },
  head() {
    return {
      title: "Forgot Complete | " + this.$store.state.info.sitename,
    };
  },
  mounted() {
    this.$store.commit("SET_CURRENT", {
      title: "Forgot Complete",
      dir: ''
    });
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
};
</script>
