<template>
  <div class="row">
    <div class="col-3">
      <div class="bussiness-filter">
        <p>Document Type</p>
        <div id="accordion">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style="float:left">
                 Business Handbook 
                </button>
                 <img src="~/assets/icon/icons-85.png" class="icon justify-content-end" style="float:right; margin-top:13px;" />
                <div style="clear:both"></div>
              </h5>
              
            </div>

          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                  ธุรกิจร้านอาหารและเครื่องดื่ม
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                  ธุรกิจโรงแรมและโฮสเทล
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                  ธุรกิจสถานบันเทิง
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                  ธุรกิจจำหน่ายสินค้าออนไลน์
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                  ธุรกิจสปา
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                  ธุรกิจนำเข้าส่งออกสินค้า
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                  ธุรกิจจำหน่ายอาหารเสริม
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                  ธุรกิจแฟรนไชส์
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                  ธุรกิจสถานเสริมความงาม
                </label>
              </div>
              <hr />
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                  Laws and Regulations
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                  Articles 
                </label>
              </div>
            </div>
          </div>
        </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style="float:left">
                 Last updated
                </button>
                 <img src="~/assets/icon/icons-85.png" class="icon justify-content-end" style="float:right; margin-top:13px;" />
                <div style="clear:both"></div>
              </h5>
            </div>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
              <div class="card-body">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                  <label class="form-check-label" for="defaultCheck1">
                    Recently 
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                  <label class="form-check-label" for="defaultCheck1">
                    1 Week 
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                  <label class="form-check-label" for="defaultCheck1">
                    1 Month 
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                  <label class="form-check-label" for="defaultCheck1">
                    1 Year 
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                  <label class="form-check-label" for="defaultCheck1">
                   My favorite
                  </label>
                </div>
              </div>
            </div>
          </div>
          
        
        </div>
      </div>

    </div>
    <div class="col-9">
      <div class="row d-data justify-content-end">
        <div class="col-9  ">
        </div>
      <div class="col-3  ">
      
    
        <form class="form-inline">
          Sort by:
          <select class="status">
            <option>Latest update</option>
          </select>
          
        </form>
        
  
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
                  <th scope="col">Title</th>
                  <th scope="col">Type</th>
                  <th scope="col">Date Modify</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>กฎหมายเกี่ยวกับการทำธุรกิจสปาในต่างประเทศ</td>
                  <td>International</td>
                  <td>12/08/2020</td>
                  <td>
                    <span class="btn btn-xs btn-outline-warning"><img src="~/assets/icon/eye.png" class="icon" /> View</span>
                    <img src="~/assets/icon/icons8-heart.png" class="icon" /> 
                    
                  </td>
                </tr>
                <tr>
                  <td>กฎหมายเกี่ยวกับการทำธุรกิจสปาในต่างประเทศ</td>
                  <td>International</td>
                  <td>12/08/2020</td>
                  <td>
                    <span class="btn btn-xs btn-outline-warning"><img src="~/assets/icon/eye.png" class="icon" /> View</span>
                    <img src="~/assets/icon/icons8-heart.png" class="icon" /> 
                    
                  </td>
                </tr>
                <tr>
                  <td>กฎหมายเกี่ยวกับการทำธุรกิจสปาในต่างประเทศ</td>
                  <td>International</td>
                  <td>12/08/2020</td>
                  <td>
                    <span class="btn btn-xs btn-outline-warning"><img src="~/assets/icon/eye.png" class="icon" /> View</span>
                    <img src="~/assets/icon/icons8-heart.png" class="icon" /> 
                    
                  </td>
                </tr>
                <tr>
                  <td>กฎหมายเกี่ยวกับการทำธุรกิจสปาในต่างประเทศ</td>
                  <td>International</td>
                  <td>12/08/2020</td>
                  <td>
                    <span class="btn btn-xs btn-outline-warning"><img src="~/assets/icon/eye.png" class="icon" /> View</span>
                    <img src="~/assets/icon/icons8-heart.png" class="icon" /> 
                    
                  </td>
                </tr>
                <tr>
                  <td>กฎหมายเกี่ยวกับการทำธุรกิจสปาในต่างประเทศ</td>
                  <td>International</td>
                  <td>12/08/2020</td>
                  <td>
                    <span class="btn btn-xs btn-outline-warning"><img src="~/assets/icon/eye.png" class="icon" /> View</span>
                    <img src="~/assets/icon/icons8-heart.png" class="icon" /> 
                    
                  </td>
                </tr>
                <tr>
                  <td>กฎหมายเกี่ยวกับการทำธุรกิจสปาในต่างประเทศ</td>
                  <td>International</td>
                  <td>12/08/2020</td>
                  <td>
                    <span class="btn btn-xs btn-outline-warning"><img src="~/assets/icon/eye.png" class="icon" /> View</span>
                    <img src="~/assets/icon/icons8-heart.png" class="icon" /> 
                    
                  </td>
                </tr>
                <tr>
                  <td>กฎหมายเกี่ยวกับการทำธุรกิจสปาในต่างประเทศ</td>
                  <td>International</td>
                  <td>12/08/2020</td>
                  <td>
                    <span class="btn btn-xs btn-outline-warning"><img src="~/assets/icon/eye.png" class="icon" /> View</span>
                    <img src="~/assets/icon/icons8-heart.png" class="icon" /> 
                    
                  </td>
                </tr>
                <tr>
                  <td>กฎหมายเกี่ยวกับการทำธุรกิจสปาในต่างประเทศ</td>
                  <td>International</td>
                  <td>12/08/2020</td>
                  <td>
                    <span class="btn btn-xs btn-outline-warning"><img src="~/assets/icon/eye.png" class="icon" /> View</span>
                    <img src="~/assets/icon/icons8-heart.png" class="icon" /> 
                    
                  </td>
                </tr>
                <tr>
                  <td>กฎหมายเกี่ยวกับการทำธุรกิจสปาในต่างประเทศ</td>
                  <td>International</td>
                  <td>12/08/2020</td>
                  <td>
                    <span class="btn btn-xs btn-outline-warning"><img src="~/assets/icon/eye.png" class="icon" /> View</span>
                    <img src="~/assets/icon/icons8-heart.png" class="icon" /> 
                    
                  </td>
                </tr>
                <tr>
                  <td>กฎหมายเกี่ยวกับการทำธุรกิจสปาในต่างประเทศ</td>
                  <td>International</td>
                  <td>12/08/2020</td>
                  <td>
                    <span class="btn btn-xs btn-outline-warning"><img src="~/assets/icon/eye.png" class="icon" /> View</span>
                    <img src="~/assets/icon/icons8-heart.png" class="icon" /> 
                    
                  </td>
                </tr>
              </tbody>
            </table>
             
            
          </div>
          <div class="row mt-3">
              <span class="col-8 justify-content-start align-middle show-pagination">
                Show 1 from 10
              </span>
              <ul class="col-4 pagination  justify-content-end">
                <li class="page-item "><a class="page-link" href="#"></a></li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">></a></li>
              </ul>
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
  </div>
</template>

<script>
import BaelGrid from "~/components/BaelGrid";
import FullGrid from "~/components/FullGrid";
import _chunk from "lodash/chunk";
export default {
  head() {
    return {
      title: "Business Handbook | " + this.$store.state.info.sitename,
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
