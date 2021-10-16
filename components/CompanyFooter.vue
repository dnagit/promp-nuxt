<template>
  <footer class="company-footer">
    <b-container>
        <b-row>
            <b-col md="3" class="text-center">
                <img src="~/static/images/logo.png" class="logo-footer" /><br/>
                <h5>YOUR FRIEND FOR BUSINESS</h5>
                <div class="social">
                    <div><img src="~/assets/icon/icons8-facebook.png" /></div>
                    <div>|</div>
                    <div><img src="~/assets/icon/icons8-google.png" /></div>
                    <div>|</div>
                    <div><img src="~/assets/icon/icons8-linkedin.png" /></div>
                </div>
                
            </b-col>
            <b-col md="2">
                <h5>OUR OFFICE</h5>
                <ul>
                    <li><nuxt-link to="/">Bangkok</nuxt-link></li>
                    <li><nuxt-link to="/">Seoul</nuxt-link></li>
                </ul>
            </b-col>
            <b-col md="2">
                 <h5>ABOUT US</h5>
                <ul>
                    <li><nuxt-link to="/">EXPERTISE</nuxt-link></li>
                    <li><nuxt-link to="/">TEAM & CULTURE</nuxt-link></li>
                    <li><nuxt-link to="/">CAREER</nuxt-link></li>
                    <li><nuxt-link to="/">PRIVACY POLICY</nuxt-link></li>
                </ul>
            </b-col>
            <b-col md="2">
                 <h5>CONTACT US</h5>
                  <ul>
                    <li>CONTACT@PROMPT-LEGAL.CO.TH</li>
                    
                </ul>
            </b-col>
            <b-col md="3" class="footer-5">
                <h5>PRESS & MEDIA</h5>
                <b>Ms. Lakkanasiri: Introducing Our New <br />
Senior Partner</b><br /><br />
We are delighted to announce our new <br />
senior partner, Ms. Lakkanasiri <br />
Kajonpradabkul, who joined us since July <br />
2020.   Lakkanasiri has more than 30  […]<br /><br />

<b>PROMPT has moved head office to</b><br />
One Pacific Place.<br /><br />

<b>PROMPT attended an open house event</b><br />
at Thammasat University
            </b-col>
        </b-row>
        
    </b-container> 
   
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    
  },
};
</script>

