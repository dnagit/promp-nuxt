<template>

<section>
  	<svg class="Rectangle_1_cx">
		<rect id="Rectangle_1_cx" rx="8" ry="8" x="0" y="0" width="633" height="312">
		</rect>
	</svg>
	<svg class="Rectangle_2_cy">
		<rect id="Rectangle_2_cy" rx="0" ry="0" x="0" y="0" width="9" height="105">
		</rect>
	</svg>
  <svg class="Rectangle_691_d">
		<rect id="Rectangle_691_d" rx="18" ry="18" x="0" y="0" width="625" height="77">
		</rect>
	</svg>
	<svg class="Rectangle_692">
		<rect id="Rectangle_692" rx="18" ry="18" x="0" y="0" width="290" height="77">
		</rect>
	</svg>
	<div id="_ea">
		<span>สมัครสมาชิก</span>
	</div>
	<div onclick="application.goToTargetView(event)" id="_eb">
		<span><nuxt-link
           
            :to="'login'"
          >เข้าสู่ระบบ</nuxt-link></span>
	</div>
	<div id="_cz">
		<span>อีเมล</span>
	</div>
	<svg class="Line_48" viewBox="0 0 633 1">
		<path id="Line_48" d="M 0 0 L 633 0">
		</path>
	</svg>
	<div id="_c">
		<span>รหัสผ่าน</span>
	</div>
	<svg class="Line_49" viewBox="0 0 633 1">
		<path id="Line_49" d="M 0 0 L 633 0">
		</path>
	</svg>
	<div id="_da">
		<span>ยืนยันรหัสผ่าน</span>
	</div>
	<svg class="Rectangle_3_c">
		<rect onclick="application.goToTargetView(event)" id="Rectangle_3_c" rx="19" ry="19" x="0" y="0" width="339" height="89">
		</rect>
	</svg>
	<div id="_db">
		<span>สมัครสมาชิก</span>
	</div>
	<img id="icons8-right_arrow_c" src="~/assets/promp/icons8-right_arrow_c.png" srcset="~/assets/promp/icons8-right_arrow_c.png 1x, ~/assets/promp/icons8-right_arrow_c@2x.png 2x">
		
	<div id="patsanan">
		<span><input type="email" name="email"  placeholder="patsanan" value="" /></span>
	</div>
	<div id="patsanan1">
		<span><input type="password" name="password"  placeholder="ใส่รหัสผ่าน" value="" /></span>
	</div>

	<svg class="Rectangle_2949">
		<rect id="Rectangle_2949" rx="5" ry="5" x="0" y="0" width="24" height="25">
		</rect>
	</svg>
	<div id="_df">
		<span>ยอมรับ</span><span style="font-style:normal;font-weight:bold;color:rgba(39,39,39,1);text-decoration:underline;">เงื่อนไข</span><span>และ</span><span style="font-style:normal;font-weight:bold;color:rgba(39,39,39,1);text-decoration:underline;">ข้อตกลง</span>
	</div>
	
  <svg class="icons8-checkmark" viewBox="4 5.99 13.412 10.258">
		<path id="icons8-checkmark" d="M 16.60037803649902 5.990141868591309 C 16.39552879333496 5.996246337890625 16.20110511779785 6.081859588623047 16.05829429626465 6.228843688964844 L 7.942416191101074 14.34472179412842 L 5.345951557159424 11.74825668334961 C 5.038112640380859 11.44018745422363 4.538820266723633 11.44018745422363 4.230865955352783 11.74814224243164 C 3.922912120819092 12.05609607696533 3.922912120819092 12.55538845062256 4.230865955352783 12.86334228515625 L 7.384931087493896 16.01717758178711 C 7.692858695983887 16.32497787475586 8.191973686218262 16.32497787475586 8.49990177154541 16.01717758178711 L 17.17326354980469 7.343814849853516 C 17.40646743774414 7.117131233215332 17.47658538818359 6.770532608032227 17.34983444213867 6.471027374267578 C 17.22307968139648 6.171523094177246 16.92545890808105 5.980555534362793 16.60037803649902 5.990141868591309 Z">
		</path>
	</svg>
	<div id="_d">
		<span><input type="password" name="password_confirm"  placeholder="ใส่รหัสผ่านอีกครั้ง" value="" /></span>
	</div>
</section>
     

</template>

<script>
export default {
  watchQuery: ["page"],
    layout: 'login',
    layout (context) {
    return 'login'
  },
  async asyncData({ params, app, payload, route, store }) {
    await store.commit("SET_TITLE", "Register");
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
      title: "Register | " + this.$store.state.info.sitename,
    };
  },
  mounted() {
    this.$store.commit("SET_CURRENT", {
      title: "Register",
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
