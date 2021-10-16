<template>
<b-container class="container-desktop">
    <b-row class="text-center">
        <b-col md="12">
            <img src="~/assets/icon/icons8-city_buildings.png" />
        </b-col>
        <b-col md="12" class="mt-2">
            <h1>บริการ <span class="text-yellow">จดทะเบียนธุรกิจ</span></h1>
            
        </b-col>
        <b-col md="12" class="mt-3">
            คุณอาจอยากเตรียมเอกสารต่อไปนี้ก่อนเริ่มต้นกรอกข้อมูล

        </b-col>
    </b-row>
    <b-row class="justify-content-md-center mt-4">
        <b-col md="3">
            <div class="div-doc">
                <div class="pl-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46.531" height="60" viewBox="0 0 46.531 65.205">
                        <g id="Group_1531" data-name="Group 1531" transform="translate(-343.734 -551.897)">
                            <g id="Group_1488" data-name="Group 1488" transform="translate(343.734 551.897)">
                            <g id="Path_1408" data-name="Path 1408" fill="none">
                                <path d="M0,0H40.046l6.485,6.224V65.205H6.322L0,58.66Z" stroke="none"/>
                                <path d="M 3.000003814697266 2.999996185302734 L 3.000003814697266 57.447509765625 L 7.595607757568359 62.20507049560547 L 43.53149032592773 62.20507049560547 L 43.53149032592773 7.5025634765625 L 38.83965301513672 2.999996185302734 L 3.000003814697266 2.999996185302734 M 3.814697265625e-06 -7.62939453125e-06 L 40.04627990722656 -7.62939453125e-06 L 46.53149032592773 6.223594665527344 L 46.53149032592773 65.20507049560547 L 6.322425842285156 65.20507049560547 L 3.814697265625e-06 58.65983963012695 L 3.814697265625e-06 -7.62939453125e-06 Z" stroke="none" fill="#fff"/>
                            </g>
                            <line id="Line_332" data-name="Line 332" x2="26.965" transform="translate(9.791 34.279)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>
                            <line id="Line_333" data-name="Line 333" x2="26.965" transform="translate(9.791 41.757)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>
                            <line id="Line_334" data-name="Line 334" x2="26.709" y2="0.396" transform="translate(9.791 49.234)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>
                            <line id="Line_335" data-name="Line 335" x2="26.965" transform="translate(9.791 26.802)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>
                            <g id="Ellipse_254" data-name="Ellipse 254" transform="translate(18 9.131)" fill="none" stroke="#fff" stroke-width="3">
                                <circle cx="5" cy="5" r="5" stroke="none"/>
                                <circle cx="5" cy="5" r="3.5" fill="none"/>
                            </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="pl-3">
                    ทะเบียนบ้าน<br />
                    ของที่ตั้งสำนักงาน
                </div>
                

                 
            </div>
        </b-col>
       
        <b-col md="3">
            <div class="div-doc">
                <div class="pl-3">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="73" height="60" viewBox="0 0 73 73">
                        <image id="icons8-id-card-64" width="73" height="73" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAFKklEQVR4nO2aWahVVRiAv18zqYwGysaHsgwVoQJvLxFUUDQSNJg0EEUP1UNEUFL6WFBZNBcFvlUUBBZERjYSBZVDk2amEloWRTY5dc379bDWzeO590x7n3vPlfYHh3P2/tf697/+s/Za//rXgoqKioqKioqK/ykx3E11NnALMB2YMKoWFaMfWAk8FhGvdlJxiAPUh4HbAIF1wB/dsHCEORg4If++NyLmF9KiXmRipTqta+aNAupMdU22/6yiSl7JCk7tsn2jgnp6tv/5ogpWqb922a5RQx2nblGXt1tnXN31vsDWNh82SZ2nLld/Vb9TF6ozOjG6m0TEALCN1I7OUdeqG9ood7z6be5uW9Vl6u/5eod6TSEDuoD6s/pV0cotHaBOUL/IjX1CPTDfH6dekXtDv9pXyIiSZAfUslX9WL22ncrtOOCarPiFBvLzs/z1gm0oRXbAFnVJ/nyu7sw2PdWqcjsOeD4rO6VJmS9zLyj2LpZguFdAnaJ+lu2+pFZWPwi2w1GkIGllkzJfkSLIwwvo7zoRsR64Ll/eUCvbp4C+cYARsbNJmf78Pb6ZIjWAmTQftbdHxKrOTBxKRHyubgZOqr1fxAH9QKgTmjhhYv7+u4WuO4H7Wj1QvTEiFnZgYyO2Ure2KeKAdcA5wGnAh/VCdTzQB/wO/NJC1yLgWFr0AGBJATs7p81B8Mw8mCwdbpBT52b5syNnaVP7GsYB6gZ1bbPK7QZCL+ZGrlAvVI9U+9Rn1AH1J/XoEu0oTKcOKPIKAFwP7AKuAl6rk60FLo2ITQV1jyqFHBAR24Gr1SeBy4ApwG/Ae8BLEdFq8BszFO0BAETER8BHXbKlJ7TlAHUicC1wPnA0aX5/CFgD3FGjZz1wFzAXuJy0MlsNvBgR7wyj9zhSYFImYlwaES+XqL+HQUMGQXW6u1d+qtvUXXkAnF+38NipHpbL9NfE4KovqfvV6b7b8myq09m9QVCdDLwNHAksAB6PiI3qEuBs0r8N8Clp7v8AmAXsBzyQ5X3A/cBsUg5yds0jHgAWUywkH+T7EnX3pL4HqE9mL99eV+6ufH929uogt6qP5N9n1ZSfoL6b75/dNYOHb0NHPaCh501x+pXABuDROvHg+3wRe4aWk4HzgL+oiRJzyDzYW+a0bkaPqO0B6uH5HxsywKjjTRmggVxmgbrRlA1SXdSgzk71/RFuQ3d6QI3sn3pBROwC3ie905uBe4B57F4EvdGgzgAlp95uU2bweTN/L4iIP4DngGWkRi4ua9hoUebfWAj8QA6FI2LAlG2ZGhEt1xMA6sWk2aXM9tvHEXFV0cqFHRARO4BX6u79QHJKJ88v0wuhXBDV2/cxIhaRcgI9o6z393oqB/TagF7TzhhwstoycdkmTbPEvaDeAf3AoTkM/ouURZ2WP93ixy7q2gNTQvYAWmej/6PeAV+TjsX0RcQn6onAMd0zEUibJiPFGcD+NN+0aYx6bo7lv7HJ1tdYxJSUXZ/XJ6c3KNM8HxARb6r3kuL6FepPpKzOWOcA4AjSlt38iBiyX9GIRqfELiCdEjs5Kwc4KD/gz1KmjgxbgBWkhM1bjQrllW5/RJzY8RPUTerq4jb2nk6Xw/8LOnFAPzBppAwZJSaxe+ca6MwBa4Bj3MvODw6izgIOIaXpCym4Ik+Rn6lTu2rdCKPOMB0BVD2vVjbsLNBE0dPATaTZYC1jc0aop/YY7YMRcUetsCMHAKhzgJtJ4fHecpB6FWmK7GnuoaKioqKioqJiTPEvVHAnaI4ltvYAAAAASUVORK5CYII="/>
                    </svg>
                </div>
                <div class="pl-3">
                    สำเนาบัตร<br />
                    ประชาชน
                </div>

            </div>
            <div class="list-doc">
                <div class="p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="38" height="38" viewBox="0 0 38 38">
                        <image id="icons8-next-page-30-grey" width="38" height="38" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACXUlEQVRIie2WzUsVURjGf+/MvYsgl1mUhGELF7bw3jniQggyAhXU1rVrX9GiZeW/0B8QgW0l/KJFH9DuwjmIkFArEbIC2+mmcDxvi27hzL3zJWEbn+WZZ97feWbOxwsnOiZJWaNz7iIwA0wB/UBf+9E2sKWqK6q6ODIy8vmfgNfX1y/s7+8/EpE7QFhg98BCGIYPh4eHt44Mds7NAvPA6aIJprSnqreNMUtZhiAHeg9YOAIUoEdEXjrn7mYZuiZuJ13Im1hJeVW92S15B7jVavXVarWPZCRV1bEwDH9671eB3hLwvSAIBhuNxtfDgx2J6vX6XBYUIAiCH41Gw6nqOLBTAtzjvZ9LDyYSt7fMJvmrd0dVx40xG9baIRF5S3HygziO+0dHR7f/BkgZZgugAL0i8s45d8UYswFcBb4VvBPW6/WZwwMJsKpOFBT4ozPAG2vtUBRFn1T1BgWfXVUnM8EicrkkGKonH8gEA2crgCGVPAiC6Rzv+TzwsSkNLlokaX0HrhtjNpxzg9775Rzvl0ywqm5WgO6o6rUoij5Ya4eA98C5HH+idjrxakloIqmIvKZ4L69kglV1ETgoKFA1KUAcx3HiNyTA7Uv8eV4FEZmseGqhqs8On1odYIBarfYY2MspcmptbS0qCwV2ReRJR4BuTmvthIgsU3x8FsmLyGyz2exY7V33sTHmFfCA363MkaHA/W5QKGh9rLXTIvIC6KkI3RWRW81mcyXLkHtyGWOWgiAYAJ4CcQmgF5F5YDAPChXa21ar1de+2qZU9RLJ9nYTWI3jeCm9ek/03/ULnGrraFtjhTMAAAAASUVORK5CYII="/>
                    </svg>
                </div>
                <div class="pt-3 text-bold">สำเนาบัตรประชาชนผู้ถือหุ้น</div>
                

            </div>
            <div class="list-doc">
                <div class="p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="38" height="38" viewBox="0 0 38 38">
                        <image id="icons8-next-page-30-grey" width="38" height="38" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACXUlEQVRIie2WzUsVURjGf+/MvYsgl1mUhGELF7bw3jniQggyAhXU1rVrX9GiZeW/0B8QgW0l/KJFH9DuwjmIkFArEbIC2+mmcDxvi27hzL3zJWEbn+WZZ97feWbOxwsnOiZJWaNz7iIwA0wB/UBf+9E2sKWqK6q6ODIy8vmfgNfX1y/s7+8/EpE7QFhg98BCGIYPh4eHt44Mds7NAvPA6aIJprSnqreNMUtZhiAHeg9YOAIUoEdEXjrn7mYZuiZuJ13Im1hJeVW92S15B7jVavXVarWPZCRV1bEwDH9671eB3hLwvSAIBhuNxtfDgx2J6vX6XBYUIAiCH41Gw6nqOLBTAtzjvZ9LDyYSt7fMJvmrd0dVx40xG9baIRF5S3HygziO+0dHR7f/BkgZZgugAL0i8s45d8UYswFcBb4VvBPW6/WZwwMJsKpOFBT4ozPAG2vtUBRFn1T1BgWfXVUnM8EicrkkGKonH8gEA2crgCGVPAiC6Rzv+TzwsSkNLlokaX0HrhtjNpxzg9775Rzvl0ywqm5WgO6o6rUoij5Ya4eA98C5HH+idjrxakloIqmIvKZ4L69kglV1ETgoKFA1KUAcx3HiNyTA7Uv8eV4FEZmseGqhqs8On1odYIBarfYY2MspcmptbS0qCwV2ReRJR4BuTmvthIgsU3x8FsmLyGyz2exY7V33sTHmFfCA363MkaHA/W5QKGh9rLXTIvIC6KkI3RWRW81mcyXLkHtyGWOWgiAYAJ4CcQmgF5F5YDAPChXa21ar1de+2qZU9RLJ9nYTWI3jeCm9ek/03/ULnGrraFtjhTMAAAAASUVORK5CYII="/>
                    </svg>
                </div>
                <div class="pt-3 text-bold">สำเนาบัตรประชาชนผู้ก่อตั้ง</div>
                

            </div>
            <div class="list-doc">
                <div class="p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="38" height="38" viewBox="0 0 38 38">
                        <image id="icons8-next-page-30-grey" width="38" height="38" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACXUlEQVRIie2WzUsVURjGf+/MvYsgl1mUhGELF7bw3jniQggyAhXU1rVrX9GiZeW/0B8QgW0l/KJFH9DuwjmIkFArEbIC2+mmcDxvi27hzL3zJWEbn+WZZ97feWbOxwsnOiZJWaNz7iIwA0wB/UBf+9E2sKWqK6q6ODIy8vmfgNfX1y/s7+8/EpE7QFhg98BCGIYPh4eHt44Mds7NAvPA6aIJprSnqreNMUtZhiAHeg9YOAIUoEdEXjrn7mYZuiZuJ13Im1hJeVW92S15B7jVavXVarWPZCRV1bEwDH9671eB3hLwvSAIBhuNxtfDgx2J6vX6XBYUIAiCH41Gw6nqOLBTAtzjvZ9LDyYSt7fMJvmrd0dVx40xG9baIRF5S3HygziO+0dHR7f/BkgZZgugAL0i8s45d8UYswFcBb4VvBPW6/WZwwMJsKpOFBT4ozPAG2vtUBRFn1T1BgWfXVUnM8EicrkkGKonH8gEA2crgCGVPAiC6Rzv+TzwsSkNLlokaX0HrhtjNpxzg9775Rzvl0ywqm5WgO6o6rUoij5Ya4eA98C5HH+idjrxakloIqmIvKZ4L69kglV1ETgoKFA1KUAcx3HiNyTA7Uv8eV4FEZmseGqhqs8On1odYIBarfYY2MspcmptbS0qCwV2ReRJR4BuTmvthIgsU3x8FsmLyGyz2exY7V33sTHmFfCA363MkaHA/W5QKGh9rLXTIvIC6KkI3RWRW81mcyXLkHtyGWOWgiAYAJ4CcQmgF5F5YDAPChXa21ar1de+2qZU9RLJ9nYTWI3jeCm9ek/03/ULnGrraFtjhTMAAAAASUVORK5CYII="/>
                    </svg>
                </div>
                <div class="pt-3 text-bold">สำเนาบัตรประชาชนกรรมการ</div>
                

            </div>
            <div class="p-3">
                <nuxt-link :to="'/form/add-company?job_id='+job_id" class="btn-yellow">
                    เริ่มกรอกข้อมูล 
                    <svg xmlns="http://www.w3.org/2000/svg" width="48.006" height="24.047" viewBox="0 0 48.006 24.047">
                        <path id="icons8-up_arrow" d="M25,1.023,13.641,11.531a2,2,0,1,0,2.719,2.938L23,8.324V47a2,2,0,1,0,4,0V8.324l6.641,6.145a2,2,0,1,0,2.719-2.937Z" transform="translate(49.029 -12.976) rotate(90)" fill="#fff"/>
                    </svg>


                </nuxt-link>
            </div>
        </b-col>
       
        <b-col md="3">
            <div class="div-doc">
                <div class="pl-3">
                     <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60" height="60" viewBox="0 0 60 60">
                        <image id="icons8-stamp-60" width="60" height="60" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAADOklEQVRoge2az4scRRiGn283hqxGRT0ouAYDIooXTdCDxpN68mKMon/B5j9Q8CJ4UhBvgh68CuLGg8SDogeFgPgL1AVhxQiaRFbMgrrxZObxMDObTk9md6bn6+51Zp9LD9VVb7/vVHV119QEDaEeBB4E7gWu6xWvA18BX0TEr015qRX1qPqZ2nE4HfVD9XE12vZcCfU29ZMtQg7jpHpz2/7HQn1A/a1C2D5r6n11eEsfPupdwCngxi2qvQisAAeAR4HHgL2lOmvAwxHxY7bHNNQFdXWEHryl1O52dfkK9X5Qy1/EzkF9acQhe87uvfqqeqjQ/oUr1H2uzUxDUa9V/x4xcJGO+pa6r6fzeun8X+r+tvMNoC5VCFvkhBrqfgcnvGeyfM5lCdGdfCbhSeCpiNgA3iidOzqh9iaZgQ9tX2VblnrHD0rldydoA7mBt3oMjcrh3vGnUvligjYAe7KEgPkEjRvUOxjsiIUEbSA38AaXFgWT8B2DL0RrCbpA7pD+JklnAdhXKltN0k4N/HmiVpmPsoTS3qXVReA0cFWWZo9/gTsj4ucMsbQejogzwHKWXoG3s8Kmoy6q5yd84yqyrh5oO9eWqE8kBj7Wdp6RUF9LCPtm2zlGRt3raOviYayq17SdYyzUYxMEfrZt/2OjzqtnK4T9Rc18P7iM2oQj4iLwToWmyxHRyfbTp7bAPU5VaPNpuosCdQf+tkKb79NdFKg78B8V2vye7qJArdsadrdNxr0f5yLCOvxA7np4gIhQ/XrcNnX5mUlq36lTD29f6xIRMdaIGJcmAo81RCOiVk91z9I7jpkLXOss3ePjBq6xyzCamLSeHqd+RLxblxfYnaWnn93A087MBd6jPgTc07aRPurS9rUqsxLqBeDqGi+yk/gnCo+NV1q1Uj/PA2wGrvv51zb9nDM3ae0GnnZmLvDmelh9uU0jTRHqBvD/2pqszoU5uv+RPN62kwY4Djyy+exVLzK993QnIubh8oBnWzLTBGf6H4qB32vBSFOc6H8oDumbgC+Bg204qpHTwP0RsQ6FHo6I88AR4CQwDRtaAu8DR/phYciPeOqtdNfI1zfjLZ0/gZWIOFc+8R9smDD0VhPLPAAAAABJRU5ErkJggg=="/>
                    </svg>
                </div>
                <div class="pl-3">
                    ไฟล์ตราปรทับ<br />
                    ของบริษัท (ถ้ามี)
                </div>
               

            </div>
            
        </b-col>
    </b-row>
</b-container>
</template>
<script>

export default {
    middleware: ['router-auth'],
    data(){
        return {
            date_today:new Date(),
            job_id:this.$route.query.job_id
        };
    },
    watchQuery: ["page"],

    layout: 'company',
       
    async asyncData({ params, app, payload, route, store }) {
        await store.commit("SET_TITLE", "Categories");
    },
    mounted() {
        console.log('params',this.$route.params);
        this.$store.commit("SET_CURRENT", {
        title: "Job Detail",
        dir: ''
        });
    },
    created(){
        //console.log('router',this.$route.query.job_id);

    },
    transition(to, from) {
        if (!from) return "fade";
        return +to.query.page > +from.query.page ? "slide-right" : "slide-left";
    },
    name: "Index",
    components: {},
    computed: {
        getLayout() {
        return this.$store.state.info.altlayout ? "FullGrid" : "BaelGrid";
        },
    },
     
}
</script>