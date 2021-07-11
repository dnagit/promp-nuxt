<template>

  <nav class="navbar navbar-light bg-light justify-content-between">
  <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
  

  <div class="btn-group" role="group">
      <button id="btnGroupDrop1" type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       <img src="~/assets/icon/logocompany.png" class="icon" /> บริษัทฟาสต์เวิร์ค เทคโนโลยีส์ จำก...
      </button>
      <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
        <a class="dropdown-item" href="#"><img src="~/assets/icon/logocompany.png" class="icon" /> บริษัทฟาสต์เวิร์ค เทคโนโลยีส์ จำก...</a>
        <a class="dropdown-item" href="#"><img src="~/assets/icon/logocompany.png" class="icon" /> บริษัทฟาสต์เวิร์ค เทคโนโลยีส์ จำก...</a>
      </div>
    </div>
  </div>
  <form class="form-inline">
    <div class="notification"><img src="~/assets/icon/icons-39.png" class="icon" /></div>
    <img src="~/assets/icon/user.png" class="user" />
   <div class="h-profile">
     Patsanan…<br />
     <span style="font-size:14px;">Smart</span>
   </div>
  </form>
</nav>
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
<style>
#navbar {
  z-index: 999;
}
.titlebar .item {
  overflow-x: none;
}
.results {
  padding-left: 0;
  transform: translateY(17px);
  width: 30vw;
}
.results li {
  list-style-type: none;
  margin-left: 0;
}
nav {
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  right: 0;
}
.sitename {
  color: #000;
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 18px;
}
@media only screen and (max-width: 40rem) {
  .results {
    width: 94vw;
  }
}
</style>