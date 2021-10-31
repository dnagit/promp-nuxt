import Vue from "vue";
import Auth from "@/api/auth";
import Blog from "@/api/blog";
import Settings from "@/api/settings";

// Initialize all or API factories
const factories = {
 auth: Auth(Vue.axios),
 blog: Blog(Vue.axios),
 settings: Settings(Vue.axios)
};

// Make them available in the app with this.$api
// https://vuejs.org/v2/cookbook/adding-instance-properties.html
Vue.$api = factories;