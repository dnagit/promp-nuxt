<template>
<section>
  <svg class="Rectangle_691">
		<rect id="Rectangle_691" rx="18" ry="18" x="0" y="0" width="625" height="77">
		</rect>
	</svg>
	<svg class="Rectangle_695">
		<rect id="Rectangle_695" rx="18" ry="18" x="0" y="0" width="335" height="77">
		</rect>
	</svg>
	<div id="_cb">
		<span>เข้าสู่ระบบ</span>
	</div>
	<div id="_cc">
		<span><nuxt-link
		
		:to="'register'"
	  >สมัครสมาชิก</nuxt-link></span>
	</div>
  <svg class="Rectangle_1">
		<rect id="Rectangle_1" rx="8" ry="8" x="0" y="0" width="633" height="207">
		</rect>
	</svg>
	<div id="_bq">
		<span>รหัสผ่าน</span>
	</div>
	<svg class="Line_1" viewBox="0 0 633 1">
		<path id="Line_1" d="M 0 0 L 633 0">
		</path>
	</svg>
	<div id="_bs">
		<span>อีเมล</span>
	</div>
	<div id="Pimgmailcom">
		<span><input type="email" name="email" placeholder="Pim@gmail.com" value="" /></span>
	</div> 
  <div id="Pimgmailcom1">
		<span><input type="password" name="email" placeholder="*******" value="" /></span>
	</div> 
	
	
	<svg class="Rectangle_2">
		<rect id="Rectangle_2" rx="0" ry="0" x="0" y="0" width="9" height="104">
		</rect>
	</svg>
	<svg class="Rectangle_3">
		<rect onclick="application.goToTargetView(event)" id="Rectangle_3" rx="19" ry="19" x="0" y="0" width="339" height="89">
		</rect>
	</svg>
	<div id="_b">
		<span>เข้าสู่ระบบ</span>
	</div>
	<img id="icons8-right_arrow" src="~/assets/promp/icons8-right_arrow.png" srcset="~/assets/promp/icons8-right_arrow.png 1x, ~/assets/promp/icons8-right_arrow@2x.png 2x">
		
	<div onclick="application.goToTargetView(event)" id="_ca">
		<span><nuxt-link
	   
		:to="'forgotpass'"
	  >ลืมรหัสผ่าน?</nuxt-link></span>
	</div>
</section>


</template>
<style>

</style>
<script>
export default {
  watchQuery: ["page"],
    layout: 'login',
    layout (context) {
    return 'login'
  },
  async asyncData({ params, app, payload, route, store }) {
    await store.commit("SET_TITLE", "Login");
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
      title: "Login | " + this.$store.state.info.sitename,
    };
  },
  mounted() {
    this.$store.commit("SET_CURRENT", {
      title: "Login",
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
