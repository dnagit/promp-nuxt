<template>
   <div class="row dashboard company">
   <form id="checkoutForm" method="post" @submit.stop.prevent="submitClick" action="/charge">
        <input type="hidden" name="omiseToken" v-model="omiseToken">
        <input type="hidden" name="omiseSource" v-model="omiseSource">
        <button type="submit" id="checkoutButton">Checkout</button>
        </form>


   </div>
</template>

<script>
import BaelGrid from "~/components/BaelGrid";
import FullGrid from "~/components/FullGrid";
import _chunk from "lodash/chunk";
import axios from 'axios'
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
          omiseSource:''

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
  mounted() {
      OmiseCard.configure({
    publicKey: "pkey_test_5ps6z6u07cmv46ln2e5"
  });
    var button = document.querySelector("#checkoutButton");
  var form = document.querySelector("#checkoutForm");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    OmiseCard.open({
      amount: 100000,
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
  methods:{
     
      async checkout(){
        let data = {
          description: 'Job Id #1',
          amount: '100000',
          currency:'THB',
          capture:false,
          card:this.omiseToken


        }
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
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
          };
          let res =  await axios.post('https://api.omise.co/charges');
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
