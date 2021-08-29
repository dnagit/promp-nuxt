<template>
<div>
  <div class="row" v-if="!formaction">
    
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
                  <th scope="col"><input  type="checkbox" @click="selectAll" v-model="allSelected" value="" ></th>
                  <th scope="col">Types of Registration</th>
                  <th scope="col">Processing time</th>
                  <th scope="col">Price (Baht)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(frm,id) in forms" :key="id">
                  <td><input type="checkbox" @click="changeInput($event)" v-model="formIds" :value="frm.id" ></td>
                  <td>{{ frm.name }}</td>
                  <td>{{ frm.process_time }}</td>
                  <td>{{ frm.price }}</td>
                  
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
        <div class="request-left">{{ itmc }} items</div>
        <div class="request-right">
          ฿{{ total }}
          <button class="btn btn-xs" @click="nextform()">Submit Request <img src="~/assets/mark/icons8-up_arrow.png" /></button>
         
        </div>
    </div>
  </div>
  <div v-if="formaction">
    <div class="row" v-if="formIds.includes('1')">
        <div class="col-12">
          <h5>จัดตั้งบริษัทจํากัด</h5>
          <hr />
        </div>
        
    </div>
    <div class="row" v-if="formIds.includes('2')">
        <div class="col-12">
          <h5>แก้ไขรายชื่อกรรมการ</h5>
          <hr />
        </div>
        
    </div>
    <div class="row" v-if="formIds.includes('3')">
        <div class="col-12">
          <h5>แก้ไขจํานวนหรือชื่อกรรมการซึ่งลงชื่อผูกพันบริษัท</h5>
          <hr />
        </div>
        
    </div>
    <div class="row" v-if="formIds.includes('4')">
        <div class="col-12">
          <h5>เปลี่ยนแปลงข้อมูลผู้ถือหุ้น</h5>
          <hr />
        </div>
        
    </div>
    <div class="row" v-if="formIds.includes('5')">
        <div class="col-12">
          <h5>เปลี่ยนแปลงทุนจดทะเบียนของบริษัท</h5>
          <hr />
        </div>
        
    </div>
    <div class="row" v-if="formIds.includes('6')">
        <div class="col-12">
          <h5>เปลี่ยนแปลงจำนวนหุ้นหรือมูลค่าหุ้น</h5>
          <hr />
        </div>
        
    </div>
    <div class="row" v-if="formIds.includes('7')">
        <div class="col-12">
          <h5>เปลี่ยนแปลงชื่อบริษัท</h5>
          <hr />
        </div>
        
    </div>
    <div class="row" v-if="formIds.includes('8')">
        <div class="col-12">
          <h5>เปลี่ยนแปลงจำนวนหุ้นหรือมูลค่าหุ้น</h5>
          <hr />
        </div>
        
    </div>
    <div class="row" v-if="formIds.includes('9')">
        <div class="col-12">
          <h5>เปลี่ยนแปลงชื่อบริษัท</h5>
          <hr />
        </div>
        
    </div>
    <div class="row" v-if="formIds.includes('10')">
        <div class="col-12">
          <h5>แก้ไขเพิ่มเติมตราของบริษัท</h5>
          <hr />
        </div>
        
    </div>
    <div class="row" v-if="formIds.includes('11')">
        <div class="col-12">
          <h5>แก้ไขเพิ่มเติมที่ตั้งสํานักงานแห่งใหญ่ และ / หรือ สํานักงานสาขา</h5>
          <hr />
        </div>
        
    </div>
    <div class="row" v-if="formIds.includes('12')">
        <div class="col-12">
          <h5>แก้ไขวัตถุประสงค์ของบริษัท	</h5>
          <hr />
        </div>
        
    </div>
    <div class="row" v-if="formIds.includes('13')">
        <div class="col-12">
          <h5>แก้ไขข้อบังคับของบริษัท	</h5>
          <hr />
        </div>
        
    </div>
    <div class="row">
       <div class="fixed_request">
        <div class="request-left">{{ itmc }} items</div>
        <div class="request-right">
          ฿{{ total }}
          <button class="btn btn-xs">Submit Request <img src="~/assets/mark/icons8-up_arrow.png" /></button>
         
        </div>
    </div>
    </div>
  </div>
</div>
</template>

<script>
import BaelGrid from "~/components/BaelGrid";
import FullGrid from "~/components/FullGrid";
import BaelSearch from "~/components/BaelSearch";
import _chunk from "lodash/chunk";
export default {
  head() {
    return {
      title: "Sevice Request | " + this.$store.state.info.sitename,
    };
  },
  filters: {
    getcomma(text){
      if(!text){
        return ''

      }
			 var nStr = text;
			nStr += '';
			var x = nStr.split('.');
			var x1 = x[0];
			var x2 = x.length > 1 ? '.' + x[1] : '';
			var rgx = /(\d+)(\d{3})/;
			while (rgx.test(x1)) {
				x1 = x1.replace(rgx, '$1' + ',' + '$2');
			}
			return x1 ;
		},
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
  components: { BaelGrid, FullGrid,BaelSearch },
  computed: {
    getLayout() {
      return this.$store.state.info.altlayout ? "FullGrid" : "BaelGrid";
    },
  },
  data() {
    return {
       allSelected: false,
        formIds: [],
        total:'0.00',
        formaction:false,
        itmc:0,
        forms: [ 
              { "id": "1", "name": "จัดตั้งบริษัทจํากัด", "process_time": "7 - 10 Days", "price":"1,000"}, 
              { "id": "2", "name": "แก้ไขรายชื่อกรรมการ", "process_time": "7 - 10 Days", "price":"1,000"}, 
              { "id": "3", "name": "แก้ไขจํานวนหรือชื่อกรรมการซึ่งลงชื่อผูกพันบริษัท", "process_time": "7 - 10 Days", "price":"1,000"}, 
              { "id": "4", "name": "เปลี่ยนแปลงข้อมูลผู้ถือหุ้น", "process_time": "7 - 10 Days", "price":"1,000"}, 
              { "id": "5", "name": "เปลี่ยนแปลงทุนจดทะเบียนของบริษัท", "process_time": "7 - 10 Days", "price":"1,000"}, 
              { "id": "6", "name": "เปลี่ยนแปลงจำนวนหุ้นหรือมูลค่าหุ้น", "process_time": "7 - 10 Days", "price":"1,000"}, 
              { "id": "7", "name": "เปลี่ยนแปลงชื่อบริษัท", "process_time": "7 - 10 Days", "price":"1,000"}, 
              { "id": "8", "name": "เปลี่ยนแปลงจำนวนหุ้นหรือมูลค่าหุ้น", "process_time": "7 - 10 Days", "price":"1,000"}, 
              { "id": "9", "name": "เปลี่ยนแปลงชื่อบริษัท", "process_time": "7 - 10 Days", "price":"1,000"}, 
              { "id": "10", "name": "แก้ไขเพิ่มเติมตราของบริษัท", "process_time": "7 - 10 Days", "price":"1,000"}, 
              { "id": "11", "name": "แก้ไขเพิ่มเติมที่ตั้งสํานักงานแห่งใหญ่ และ / หรือ สํานักงานสาขา", "process_time": "7 - 10 Days", "price":"1,000"}, 
              { "id": "12", "name": "แก้ไขวัตถุประสงค์ของบริษัท", "process_time": "7 - 10 Days", "price":"1,000"}, 
              { "id": "13", "name": "แก้ไขข้อบังคับของบริษัท", "process_time": "7 - 10 Days", "price":"1,000"}, 
          ],
        };
  },
  
  methods:{
    filter(nationality){
    // We can't find 'Taiwan' in nationalityArr
      return this.formIds.filter(n=>n===nationality).length===0?false:true; // false
    },
    nextform(){
      this.formaction = true;
    },
    changeInput(event){
      var form = this.forms;
      
      var ind = form.findIndex(({ id }) => id === event.target.value);
      var price = this.forms[ind].price.replace(',','');
      console.log('ind',price);
      this.total = this.total.replace(',','');
      if(event.target.checked){
        this.formIds.push(event.target.value);
        this.itmc += 1;
        this.total = (this.total*1)+(price*1);
        
      }else{
         var formin = this.formIds;
        var index = formin.indexOf(event.target.value);
        console.log('index',index);
        this.formIds.splice(index,1);
        this.itmc -= 1;
       this.total = (this.total*1)-(price*1);
      }
      this.getcomma();
     // console.log('event', this.formIds);

    },
    getcomma(){
      
			 var nStr = this.total;
			nStr += '';
			var x = nStr.split('.');
			var x1 = x[0];
			var x2 = x.length > 1 ? '.' + x[1] : '';
			var rgx = /(\d+)(\d{3})/;
			while (rgx.test(x1)) {
				x1 = x1.replace(rgx, '$1' + ',' + '$2');
			}
		this.total = x1;
		},
    selectAll: function() {
        this.formIds = [];
        var formids = [];
        this.itmc = 0;
        this.total = 0;
        var total = 0;
        
        if (!this.allSelected) {
            this.itmc = this.forms.length;
          this.forms.map(function(value, key) {
            formids.push(value.id);
            var price = value.price.replace(',','');
           // console.log(price);
            total += (price*1);
            //console.log(key,value);
              //list.push(value);
          });
          this.formIds =formids;
          this.total = total;
          this.getcomma();
            /*for (frm in this.forms) {
              console.log('frm',frm);
               // this.formIds.push(this.forms[frm].id);
            }*/
        }
    },
  }
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
