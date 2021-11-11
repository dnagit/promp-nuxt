<template>
<div class="row">
    <div class="col-9 tab-content">
      <div class="t-radius">
          <table class="table">
              <thead class="thead-light">
              <tr>
                  <th class="col-10 text-center">Service Request</th>
          
                 
                  <th  class="col">Price</th>
              </tr>
              </thead>
              <tbody>
                <tr>
                    <td>{{ job.job_name }}</td>
                    <td>฿{{ job.price | getcomma }}</td>
                </tr>
                  
              <!--<tr>
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
              </tr>-->
              </tbody>
          </table>
              

      </div> 
    </div>
    <div class="col-3">
      <div class="bussiness-filter  mt-4">
        <h5>Order Recap</h5>
        <hr />
        <table class="table border-none">
            <tr>
              <td>Service fees</td>
              <td class="text-right">฿{{ job.price | getcomma }}</td>
            </tr>
              <tr>
              <td><b>Total</b></td>
              <td class="text-right">฿{{ job.price | getcomma }}</td>
            </tr>
        </table>
         <form id="checkoutForm" method="post" @submit.stop.prevent="submitClick" action="/charge">
            <input type="hidden" name="omiseToken" v-model="omiseToken">
            <input type="hidden" name="omiseSource" v-model="omiseSource">
            <button type="submit" id="checkoutButton">Checkout</button>
         </form>
      </div>
         
    </div>
     
</div>
  
</template>

<script>
import BaelGrid from "~/components/BaelGrid";
import FullGrid from "~/components/FullGrid";
import _chunk from "lodash/chunk";
//import axios from 'axios'
export default {
   head() {
    return {
      title: "Checkout | " + this.$store.state.info.sitename,
    };
  },
  async asyncData({ $content, params, error, store }) {
    
   
   
  },
  data(){
      return {
          omiseToken:'',
          omiseSource:'',
          job_id:this.$route.query.job_id,
          job:{},

      }
  },

  transition(to, from) {
    if (!from) return "fade";
    return +to.query.page > +from.query.page ? "slide-right" : "slide-left";
  },
  name: "Company",
  components: { BaelGrid, FullGrid },
  computed: {
    getLayout() {
      return this.$store.state.info.altlayout ? "FullGrid" : "BaelGrid";
    },
  },
  filters: {
    formatDate(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        hh = d.getHours(),
        mm = d.getMinutes();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join('/')+' '+hh+':'+mm;

    },
    calpayment(percent,amount){
      const pay = amount*(percent/100);

       var nStr = pay;
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
    formatDatePdf(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        hh = d.getHours(),
        mm = d.getMinutes();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [day, month, year].join('/');

    },
    getcomma: function(text){
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
    padStr :function(number, numDigits){
      
      let outString ='';
      let counter = numDigits - number.toString().length;
      let str = new Array(counter + 1).join("0");
     return (str+number.toString());

    }
  },
  mounted() {
    this.getJob();
   
    
    
  },
  methods:{
      async getJob(){
          let job =  await this.$axios.$get('/jobs/v1/get/'+this.job_id);
          if(job.data){
            this.job = job.data;
            this.getOmise();

          }
        
       

      },
       makeToast(params) {
            
        this.$bvToast.toast(params.message, {
            title: 'Payment',
            autoHideDelay: 5000,
            solid: true,
            variant: params.variant,
            
        })
    },
       getOmise(){
           OmiseCard.configure({
            publicKey: "pkey_test_5ps6z6u07cmv46ln2e5"
          });
            var button = document.querySelector("#checkoutButton");
          var form = document.querySelector("#checkoutForm");
          button.addEventListener("click", (event) => {
            event.preventDefault();
            OmiseCard.open({
              amount:  this.job.price+'00',
              currency: "THB",
              defaultPaymentMethod: "credit_card",
              onCreateTokenSuccess: (nonce) => {
                  console.log('charge',nonce);
                  if (nonce.startsWith("tokn_")) {
                      form.omiseToken.value = nonce;
                  } else {
                      form.omiseSource.value = nonce;
                  };
                  this.omiseToken = form.omiseToken.value;
                  this.checkout();
                  //console.log('token',form.omiseToken.value);
                // /form.submit();
              }
            });
                  });
          /* OmiseCard.configureButton('#checkout-button-alt', {
                amount: 100000,
                currency: 'THB',
                buttonLabel: 'Pay 1000 THB'
                });*/
            OmiseCard.attach();

      },
     
      async checkout(){
        let params = {};
        let data = {
          description: 'Job Id #'+this.job_id,
          amount: '100000',
          currency:'THB',
          capture:false,
          card:this.omiseToken,
          job_id:this.job_id,
          //return_uri:'https://promp-nuxt.netlify.app/payment?job_id='+this.job_id
          return_uri:'http://localhost:3000/payment?job_id='+this.job_id


        }
       /* axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        var config = {
            method: 'post',
            url: 'https://api.omise.co/charges',
             proxyHeaders: false,
            credentials: true,
            headers: { 
              'Access-Control-Allow-Origin':'*',
              'Authorization': 'Basic c2tleV90ZXN0XzVwczZ6NnUwaGFva3dkbzlnZGI=', 
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            data : data
          };*/
          let res =  await this.$axios.$post('/jobs/v1/createcharge',data);
          if(res.data){
            
            if(res.data.authorize_uri){
               window.location.href = res.data.authorize_uri;
            }else{
          
              params.variant = 'danger';
              params.message = 'Payment Failed!';
               this.makeToast(params);
            }
            

          }else{
              params.variant = 'danger';
              params.message = 'Payment Failed!';
               this.makeToast(params);
          }
          console.log('res',res);
           /*var omise = require('omise')({
            'secretKey': 'pkey_test_5ps6z6u07cmv46ln2e5',
           
            });*/
            /*omise.charges.create({
            'description': 'Charge for order ID: 888',
            'amount': '100000', // 1,000 Baht
            'currency': 'thb',
            'capture': false,
            'card': this.omiseToken
            }, function(err, resp) {
                console.log('resp',resp);
            if (resp.paid) {
                //Success
            } else {
                //Handle failure
                throw resp.failure_code;
            }
            });*/
        }
  }
};
</script>

<style>
#checkoutButton{
  background: #FCBF10;
  display: block;
  width: 100%;
  padding: 10px;
  color:#fff;
  font-weight: bold;
  border-radius: 10px;
}
.mt-4{
  margin-top: 40px !important;
}
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
.border-none td{
  border-top: 0px;
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
