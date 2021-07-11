<template>
    <div class="main-left">
         <div class="brand-wrapper"><img src="~/static/images/logo.png" /></div>
         <ul>
            <li v-bind:class="{ active: isActive }"><nuxt-link :to="'/'"><img src="~/assets/icon/icons-43.png" class="icon" />Dashboard</nuxt-link></li>
            <li ><nuxt-link :to="'/company'"><img src="~/assets/icon/icons-12.png" class="icon" />
My Company</nuxt-link></li>
            <li ><nuxt-link :to="'/bussinesses'"><img src="~/assets/icon/icons-10.png" class="icon" />Business Handbook</nuxt-link></li>
            <li ><nuxt-link :to="'/health'"><img src="~/assets/icon/icons-11.png" class="icon" />Legal Health Check</nuxt-link></li>
            <li ><nuxt-link :to="'/services'"><img src="~/assets/icon/icons-17.png" class="icon" />Sevice Request</nuxt-link></li>
            <li ><nuxt-link :to="'/legals'"><img src="~/assets/icon/icons-15.png" class="icon" />Legal Advice</nuxt-link></li>
           
         </ul>
         <div class="b_upgrade">
           Become a Pro<br />
to get more Features
            <nuxt-link :to="'/'" class="upgrade">Upgrade</nuxt-link>
         </div>

    </div>
</template>
<script>
import _capitalize from "lodash/capitalize";
export default {
  data() {
    return {
      uri:'',
      isActive:true
    };
  },
  computed: {
    pagetitle() {
      return this.$store.state.current.title;
    },

    path() {
      const split = _get(this.$store, "state.current.dir").split("/");
      console.log('uri',split[1]);

      return split.length && split[1] !== "page" ? _capitalize(split[1]) : null;
    },
  },
};
</script>