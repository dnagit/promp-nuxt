<template>
<section>
  <div id="_ec">
		<span>ลืมรหัสผ่าน</span>
	</div>
	<div id="_">
		<span>โปรดกรอกอีเมลของคุณ เพื่อส่งคำขอเปลี่ยนรหัสผ่าน</span>
	</div>
	<div id="Group_54">
		<div id="_ee">
			<span><nuxt-link
           
            :to="'login'"
          >กลับไปที่่หน้าเข้าสู่ระบบ</nuxt-link></span>
		</div>
	</div>
	<svg class="Rectangle_3_ef">
		<rect onclick="application.goToTargetView(event)" id="Rectangle_3_ef" rx="15" ry="15" x="0" y="0" width="339" height="89">
		</rect>
	</svg>
  <nuxt-link
           
            :to="'forgotcomplete'"
          >	<div id="_eg">
		<span>ยืนยัน</span>
	</div>
	<img id="icons8-right_arrow_eh" src="~/assets/promp/icons8-right_arrow_eh.png" srcset="~/assets/promp/icons8-right_arrow_eh.png 1x, ~/assets/promp/icons8-right_arrow_eh@2x.png 2x"></nuxt-link>

		
	<svg class="Rectangle_1_ei">
		<rect id="Rectangle_1_ei" rx="8" ry="8" x="0" y="0" width="633" height="104">
		</rect>
	</svg>
	<div id="_ej">
		<span>อีเมล</span>
	</div>
	<div id="Pimgmailcom_ek">
		<span><input type="email" name="email" placeholder="Pim@gmail.com" value="" /></span>
	</div>
	<svg class="Rectangle_2_el">
		<rect id="Rectangle_2_el" rx="8" ry="8" x="0" y="0" width="9" height="104">
		</rect>
	</svg>
	<svg class="icons8-import" viewBox="1 1 28.413 28.413">
		<path id="icons8-import" d="M 26.13422012329102 1 C 27.93561935424805 1 29.41259574890137 2.47697639465332 29.41259574890137 4.278377056121826 L 29.41259574890137 26.13422012329102 C 29.41259574890137 27.93561744689941 27.93561935424805 29.41259574890137 26.13422012329102 29.41259574890137 L 4.27837610244751 29.41259574890137 C 2.476978063583374 29.41259574890137 1 27.93561744689941 1 26.13422012329102 L 1 20.67025947570801 L 3.185585498809814 20.67025947570801 L 3.185585498809814 26.13422012329102 C 3.185585498809814 26.74891471862793 3.663681030273438 27.22701072692871 4.27837610244751 27.22701072692871 L 26.13422012329102 27.22701072692871 C 26.74891471862793 27.22701072692871 27.22701072692871 26.74891471862793 27.22701072692871 26.13422012329102 L 27.22701072692871 4.278377056121826 C 27.22701072692871 3.663681030273438 26.74891471862793 3.185584545135498 26.13422012329102 3.185584545135498 L 4.27837610244751 3.185584545135498 C 3.663681030273438 3.185584545135498 3.185585498809814 3.663681030273438 3.185585498809814 4.278377056121826 L 3.185585498809814 9.742338180541992 L 1 9.742338180541992 L 1 4.278377056121826 C 1 2.47697639465332 2.476978063583374 1 4.27837610244751 1 L 26.13422012329102 1 Z M 13.51588249206543 7.607979297637939 L 21.12274169921875 15.206298828125 L 13.51588249206543 22.81315422058105 L 11.97914409637451 21.25934028625488 L 16.93939781188965 16.2990894317627 L 1 16.2990894317627 L 1 14.11350727081299 L 16.93939781188965 14.11350727081299 L 11.97914409637451 9.144718170166016 L 13.51588249206543 7.607979297637939 Z">
		</path>
	</svg>
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
    await store.commit("SET_TITLE", "Forgot Password");
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
      title: "Forgot Password | " + this.$store.state.info.sitename,
    };
  },
  mounted() {
    this.$store.commit("SET_CURRENT", {
      title: "Forgot Password",
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
