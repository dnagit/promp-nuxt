<template>
    <div class="main-left">
         <div class="brand-wrapper"><img src="~/static/images/logo.png" /></div>
    </div>
</template>
<script>
import _capitalize from "lodash/capitalize";
export default {
  data() {
    return {};
  },
  computed: {
    pagetitle() {
      return this.$store.state.current.title;
    },

    path() {
      const split = _get(this.$store, "state.current.dir").split("/");

      return split.length && split[1] !== "page" ? _capitalize(split[1]) : null;
    },
  },
};
</script>