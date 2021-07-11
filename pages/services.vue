<template>
  <div class="row">
    <div class="col-3">
      <div class="servies-menu">
        <h5>Sevice List</h5>
        <ul>
          <li class="active">Corporate Registration</li>
          <li>License</li>
          <li>Contract and Legal Documents</li>
        </ul>
      </div>

    </div>
    <div class="col-9">
      <div class="row d-data justify-content-end">
        <div class="col-9  ">
        </div>
      <div class="col-3  ">
      
  
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        
      
   
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          
          <div class="t-radius">
            <table class="table bussiness">
              <thead class="thead-light">
                <tr>
                  <th scope="col"><input  type="checkbox" value="" ></th>
                  <th scope="col">Types of Registration</th>
                  <th scope="col">Processing time</th>
                  <th scope="col">Price (Baht)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input  type="checkbox" value="" ></td>
                  <td>จัดตั้งบริษัทจํากัด</td>
                  <td>7 - 10 Days</td>
                  <td>1,000</td>
                  
                </tr>
                <tr>
                  <td><input  type="checkbox" value="" ></td>
                  <td>แก้ไขรายชื่อกรรมการ</td>
                  <td>7 - 10 Days</td>
                  <td>1,000</td>
                  
                </tr>
                <tr>
                  <td><input  type="checkbox" value="" ></td>
                  <td>แก้ไขจํานวนหรือชื่อกรรมการซึ่งลงชื่อผูกพันบริษัท</td>
                  <td>7 - 10 Days</td>
                  <td>1,000</td>
                  
                </tr>
                <tr>
                  <td><input  type="checkbox" value="" ></td>
                  <td>เปลี่ยนแปลงข้อมูลผู้ถือหุ้น</td>
                  <td>7 - 10 Days</td>
                  <td>1,000</td>
                  
                </tr>
                <tr>
                  <td><input  type="checkbox" value="" ></td>
                  <td>เปลี่ยนแปลงทุนจดทะเบียนของบริษัท</td>
                  <td>7 - 10 Days</td>
                  <td>1,000</td>
                  
                </tr>
                <tr>
                  <td><input  type="checkbox" value="" ></td>
                  <td>เปลี่ยนแปลงจำนวนหุ้นหรือมูลค่าหุ้น</td>
                  <td>7 - 10 Days</td>
                  <td>1,000</td>
                  
                </tr>
                <tr>
                  <td><input  type="checkbox" value="" ></td>
                  <td>เปลี่ยนแปลงชื่อบริษัท</td>
                  <td>7 - 10 Days</td>
                  <td>1,000</td>
                  
                </tr>
                <tr>
                  <td><input  type="checkbox" value="" ></td>
                  <td>เปลี่ยนแปลงจำนวนหุ้นหรือมูลค่าหุ้น</td>
                  <td>7 - 10 Days</td>
                  <td>1,000</td>
                  
                </tr>
                <tr>
                  <td><input  type="checkbox" value="" ></td>
                  <td>เปลี่ยนแปลงชื่อบริษัท</td>
                  <td>7 - 10 Days</td>
                  <td>1,000</td>
                  
                </tr>
                <tr>
                  <td><input  type="checkbox" value="" ></td>
                  <td>แก้ไขเพิ่มเติมตราของบริษัท</td>
                  <td>7 - 10 Days</td>
                  <td>1,000</td>
                  
                </tr>
                <tr>
                  <td><input  type="checkbox" value="" ></td>
                  <td>แก้ไขเพิ่มเติมที่ตั้งสํานักงานแห่งใหญ่ และ / หรือ สํานักงานสาขา</td>
                  <td>7 - 10 Days</td>
                  <td>1,000</td>
                  
                </tr>
                <tr>
                  <td><input  type="checkbox" value="" ></td>
                  <td>แก้ไขวัตถุประสงค์ของบริษัท</td>
                  <td>7 - 10 Days</td>
                  <td>1,000</td>
                  
                </tr>
                <tr>
                  <td><input  type="checkbox" value="" ></td>
                  <td>แก้ไขข้อบังคับของบริษัท</td>
                  <td>7 - 10 Days</td>
                  <td>1,000</td>
                  
                </tr>
               
              </tbody>
            </table>
             
            
          </div>
          
        </div>
        
        
      </div>  
      </div>
    </div>
    </div>
    <div class="fixed_request">
         <div class="request-left">0 items</div>
        <div class="request-right">
          ฿0.00
          <button class="btn btn-xs">Submit Request <img src="~/assets/mark/icons8-up_arrow.png" /></button>
         
        </div>
    </div>
  </div>
</template>

<script>
import BaelGrid from "~/components/BaelGrid";
import FullGrid from "~/components/FullGrid";
import _chunk from "lodash/chunk";
export default {
  head() {
    return {
      title: "Sevice Request | " + this.$store.state.info.sitename,
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
  name: "Services",
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
