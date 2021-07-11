<template>
  <div>
    <div class="row dashboard">
      <div class="col-4">
        <div class="block d-flex justify-content-between bd-highlight mb-3">
          <div class="p-1 bd-highlight">
            Assigned<br />
          <b>5</b>
          </div>
          <div class="bd-highlight">
            
              <img src="~/assets/icon/Group-5.png" class="d-img"  /> 
            
          </div>
          
        </div>
      </div>
      <div class="col-4">
      <div class="block d-flex justify-content-between bd-highlight mb-3">
          <div class="p-1 bd-highlight">
            Processing<br />
          <b>2</b>
          </div>
          <div class="bd-highlight">
            
              <img src="~/assets/icon/Group-6.png" class="d-img"  /> 
            
          </div>
          
        </div>
      </div>
      <div class="col-4">
        <div class="block d-flex justify-content-between bd-highlight mb-3">
          <div class="p-1 bd-highlight">
            Delivered<br />
          <b>3</b>
          </div>
          <div class="bd-highlight">
            
              <img src="~/assets/icon/Group-4.png" class="d-img"  /> 
            
          </div>
          
        </div>
      </div>
      

    </div>
    <div class="row d-data justify-content-between">
      <div class="col-8 ">
        
    
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">My job request (10)</a>
          <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Pending Payment(2)</a>
        
        </div>
  
      </div>
      <div class="col-4  ">
      
    
        <form class="form-inline">
          Status:
          <select class="status">
            <option>All</option>
          </select>
          <select class="datebiker">
            <option>29 April 2021</option>
          </select>
          
        </form>
        
  
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        
      
   
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          
          <div class="t-radius">
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Job Request</th>
                  <th scope="col">Date time</th>
                  <th scope="col">Lawyer</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>จดทะเบียนบริษัท</td>
                  <td>12/04/2020  12:00</td>
                  <td><img src="~/assets/icon/user.png" class="icon" /> Patsanan</td>
                  <td><span class="btn btn-xs btn-outline-warning">Processing</span></td>
                </tr>
                <tr>
                  <td>เปลี่ยนชื่อบริษัทใหม่</td>
                  <td>12/04/2020  12:00</td>
                  <td><img src="~/assets/icon/user.png" class="icon" /> Patsanan</td>
                  <td><span class="btn btn-xs btn-outline-warning">Processing</span></td>
                </tr>
                <tr>
                  <td>ขอใบอนุญาตประกอบกิจการ...</td>
                  <td>12/04/2020  12:00</td>
                  <td><img src="~/assets/icon/user.png" class="icon" /> Patsanan</td>
                  <td><span class="btn btn-xs btn-outline-warning">Processing</span></td>
                </tr>
                <tr>
                  <td>ขอใบอนุญาตตั้งสถานบริการ       </td>
                  <td>12/04/2020  12:00</td>
                  <td><img src="~/assets/icon/user.png" class="icon" /> Patsanan</td>
                  <td><span class="btn btn-xs btn-outline-success">Completed</span></td>
                </tr>
                <tr>
                  <td>ปรึกษาเรื่องขยายธุรกิจไปต่าง...</td>
                  <td>12/04/2020  12:00</td>
                  <td><img src="~/assets/icon/user.png" class="icon" /> Patsanan</td>
                  <td><span class="btn btn-xs btn-outline-success">Completed</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          <table class="table">
              <thead class="thead-light">
                <tr>
                  <th scope="col">Job Request</th>
                  <th scope="col">Date time</th>
                  <th scope="col">Lawyer</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>จดทะเบียนบริษัท</td>
                  <td>12/04/2020  12:00</td>
                  <td><img src="~/assets/icon/user.png" class="icon" /> Patsanan</td>
                  <td><span class="btn btn-xs btn-outline-danger">Pending payment</span></td>
                </tr>
                <tr>
                  <td>เปลี่ยนชื่อบริษัทใหม่</td>
                  <td>12/04/2020  12:00</td>
                  <td><img src="~/assets/icon/user.png" class="icon" /> Patsanan</td>
                  <td><span class="btn btn-xs btn-outline-danger">Pending payment</span></td>
                </tr>
                <tr>
                  <td>ขอใบอนุญาตประกอบกิจการ...</td>
                  <td>12/04/2020  12:00</td>
                  <td><img src="~/assets/icon/user.png" class="icon" /> Patsanan</td>
                  <td><span class="btn btn-xs btn-outline-danger">Pending payment</span></td>
                </tr>
                <tr>
                  <td>ขอใบอนุญาตตั้งสถานบริการ       </td>
                  <td>12/04/2020  12:00</td>
                  <td><img src="~/assets/icon/user.png" class="icon" /> Patsanan</td>
                  <td><span class="btn btn-xs btn-outline-danger">Pending payment</span></td>
                </tr>
                <tr>
                  <td>ปรึกษาเรื่องขยายธุรกิจไปต่าง...</td>
                  <td>12/04/2020  12:00</td>
                  <td><img src="~/assets/icon/user.png" class="icon" /> Patsanan</td>
                  <td><span class="btn btn-xs btn-outline-danger">Pending payment</span></td>
                </tr>
              </tbody>
            </table>
        </div>
        
      </div>  
      </div>
    </div>
  </div>
  
  
</template>

<script>
import BaelGrid from "~/components/BaelGrid";
import FullGrid from "~/components/FullGrid";
import _chunk from "lodash/chunk";




export default {
  data(){
    return {
      date_today:new Date()
    };
  },
  async asyncData({ $content, params, error, store }) {
    const blogPosts = await $content("blog")
      .sortBy("createdAt", "desc")
      .only(["title", "path"])
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });
    const chunk = _chunk(blogPosts, 12);
    if (blogPosts.length > 12) {
      store.commit("SET_PAGINATION", {
        active: true,
        page: 1,
        itemsOnPage: chunk[0].length,
        totalItems: blogPosts.length,
        totalPages: chunk.length,
      });
    } else {
      store.commit("SET_PAGINATION", {
        active: false,
        page: 1,
        itemsOnPage: blogPosts.length,
        totalItems: blogPosts.length,
        totalPages: chunk.length,
      });
    }
    return {
      posts: chunk,
      count: blogPosts.length,
    };
  },

  transition(to, from) {
    if (!from) return "fade";
    return +to.query.page > +from.query.page ? "slide-right" : "slide-left";
  },
  name: "Index",
  components: { BaelGrid, FullGrid },
  computed: {
    getLayout() {
      return this.$store.state.info.altlayout ? "FullGrid" : "BaelGrid";
    },
  },
};
</script>

<style>
.browse a {
  width: 100%;
}
.search:focus {
  outline: none;
}
.footer__heading {
  text-transform: uppercase;
}
nav .r {
  grid-gap: 0;
}
.r.full-height {
  grid-gap: 0;
}
@media only screen and (max-width: 40rem) {
  .xs-collapse {
    visibility: hidden;
    visibility: collapse;
    border: 0 !important;
    border-color: none !important;
    padding: 0 !important;
  }
  .xs-visible {
    visibility: visible;
  }
}
</style>
