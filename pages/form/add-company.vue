<template>
<div class="main-form">
    <div class="head-form">
        <b-container class="container-desktop">
        <b-row>
            <b-col>
                <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
                    <div class="timeline-step active">
                        <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                              <div class="h6  mb-4 number-cirle">
                                <span>1</span>
                            </div>
                            <div class="inner-circle"></div>
                          
                          
                        </div>
                    </div>
                    <div class="timeline-step">
                        <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                              <div class="h6  mb-4 number-cirle">
                                <span>2</span>
                            </div>
                            <div class="inner-circle"></div>
                           
                            
                        </div>
                    </div>
                    <div class="timeline-step">
                        <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                             <div class="h6  mb-4 number-cirle">
                                <span>3</span>
                            </div>
                            <div class="inner-circle"></div>
                            
                            
                        </div>
                    </div>
                    <div class="timeline-step">
                        <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                             <div class="h6  mb-4 number-cirle">
                                <span>4</span>
                            </div>
                            <div class="inner-circle"></div>
                            
                            
                        </div>
                    </div>
                    <div class="timeline-step">
                        <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                            <div class="h6  mb-4 number-cirle">
                                <span>5</span>
                            </div>
                            <div class="inner-circle"></div>
                            
                           
                        </div>
                    </div>
                    <div class="timeline-step">
                        <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                             <div class="h6  mb-4 number-cirle">
                                <span>6</span>
                            </div>
                            <div class="inner-circle"></div>
                            
                            
                        </div>
                    </div>
                    <div class="timeline-step">
                        <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top" title="" data-content="And here's some amazing content. It's very engaging. Right?" data-original-title="2003">
                             <div class="h6  mb-4 number-cirle">
                                <span>7</span>
                            </div>
                            <div class="inner-circle"></div>
                            
                            
                        </div>
                    </div>
                </div>
                
            </b-col>
        </b-row>
   
    </b-container>
    </div>
    <b-container class="container-desktop mt-2">
        <b-row>
            <b-col md="3">
                <span class="head-register">Registration</span><br />
                กรอกข้อมูลเพื่อจดทะเบียนจัดตั้งบริษัท
                <hr />
                <section class="timeline_area section_padding_130">
                    <div class="container">
                        
                        <div class="row">
                            <div class="col-12">
                                <!-- Timeline Area-->
                                <div class="apland-timeline-area">
                                    <!-- Single Timeline Content-->
                                    <div class="single-timeline-area" :class="step_id==(key+1)?'active':''" v-for="(step,key) in step" :key="key">
                                        <div class="timeline-date wow fadeInLeft" data-wow-delay="0.1s" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInLeft;">
                                        
                                        </div>
                                        <div class="step-left">{{ step }}</div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </b-col>
            <b-col md="9" class="mt-3">
                <div class="form-company">
                    <b-row>
                        <b-col md="9">
                            <h3>{{ step[(step_id-1)] }}</h3>
                        </b-col>
                         <b-col md="3" class="text-right">
                            <b-button class="btn-recommend"> 
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="41" height="41" viewBox="0 0 41 41">
                                    <image id="icons8-question-60" width="41" height="41" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAEb0lEQVRoge2bX4iVRRjGf+/uYi6CWSkWm4RkUpR2Ud1YlN5sXUioFIE3BZFd1EWFYNlFBKYUERKk0R+JiAiiP0RBUqBRrkYWKFFqGalImVpimrqt/rr4ZndPhz3rdr45u2dtn5s5550zzzzvec83M+/MHBjDGM4pRE4ytQNYCHTk5i6BP4BPIuKbrKzqYvWozYu1amSJgjoL+Ao4D3gP2AqczsGdAdOBu4HxwJIsjOrL6VtcnYUwM9RFSd/OXISfJsLOLISZoY5L+npaMnG2prI7E19WRESvrtZcDo8atI20gGqoNwD3ADOBI8BGYF1EnBhRYZVQN6RnZG4JjlCfVc8MMKXsVmeW1KhqGY5KshwOP5Y4Tqmr1fnqXerXyb5HnViCv3kcVi9QjyWOhVV17eqWVPdkCY1N5fCC1H5TjfpbUv13JTSq2iyD1pfAO8DzNeo3p3J62Y6awuGI+AW4Y5CPdKTySNm+Rss8vCyVG8oS9UVYXQB0ApNrfPY08EZEfFS206FCnQGsooh+N/BUDtI29d0B5r6B8HENjtLT0gCaVqndifdY9ehdB2ffoLWMImk/CDwH7B6k3eZB6nJiBYWuHuAlYEVE7MvCrO4tG52cEbZYcR3M+YtJvKq20D8Cfp6LPAMuBHoiYmNu4jbSSB0RTbFDERGqy4H2RvA3xTxcjYh4ulHcTTkPq0+ob6uXNIK89KI686A1uWIafKQsXwVvU62lK3EYWANcC7yfm7zpHI4IgQcaxd+Uz3AjMeZwnTiVyrq3YBoJ9fz08mQuh79O5UPqhEycWaAGsDy93Rq9U1JE/edM6sXAdmAK8Ht63TNIk2PAfRFxqIrnfuAm4N7ezXOLjbtXgUl1yrsCuIwivb012+aWOlPdNIQUsxe3VbVvUX9LddMq7Df/B85a2K8ugozTUkTsAm5ULwemDcK9LtUfqrJ3UvxCdlSlgr2P3TZgaR3SfgW+78sVckV4KFAnqT0WiX17hb1d3Z6kPFzVZm6yl97egeGflhZTHLx91nt0oo4H3gJmAbuAtQ1VMFwRVieo+1J3dyZbp/ptsh1Wrxyg3aiN8IvApcAJYJ76A7AeuBrYAcyJiB0NVzEcEVavqTF67lGXquMGaZs1wsOVPOwEVgJTgePAXooNwS0RcWaYNADD5HBE/A08Phx9nQ1jycO5jv+lw38BqFNGWEst9Oo6noVNXZ+G/dfTqqdpoHao25K+R3Nwhno9xanDeIpEfn9JzpPAkoj412l+Wl2tZOiPUStFktEC/AhcFxFHS2rrEzNb7aqxOKgHbw7Qx5o6eLrNvD/dBhAR24E5Fsl2rfPhoWAq8AUwX70oIg5X1B1I5SsUZ75nw2ngQEScLKGn8VA/TNF5rco+P9m7RkpbQ6DOUI8n555RW5N9gvqnxcWzq0ZaZ1aot9t/et9lkQCE+kKyfTDSGrNDnWd//qv6s/3XjFUfHGmN2aFOtLhSuGeAEfinkdA0bH/EUGcDs+m/cdAVEc1062AMYxiN+Ac3ImSr99loPgAAAABJRU5ErkJggg=="/>
                                </svg>

                                คำแนะนำการกรอกข้อมูล
                            </b-button>
                        </b-col>
                    </b-row>
                    <hr />
                    
                    <div v-if="step_id==1" class="mt-3">
                       
                        <validation-observer ref="step1" v-slot="{ handleSubmit }">
                            <b-form @submit.stop.prevent="handleSubmit(onSubmit)" method="post">
                                <validation-provider
                                    #default="{ errors }"
                                    rules="required"
                                    name="company_th"
                                    >
                                     <b-form-group
                                        id="company_th-group"
                                        label="ชื่อบริษัท (ภาษาไทย) *"
                                        label-for="company_th"
                                       
                                    >
                                        <b-form-input
                                        id="company_th"
                                        v-model="form.company_th"
                                        type="text"
                                        placeholder="ชื่อบริษัท (ภาษาไทย)"
                                        
                                        ></b-form-input>
                                        <small class="text-danger">{{ errors[0] }}</small>
                                    </b-form-group>
                                    
                                </validation-provider>
                                <validation-provider
                                    #default="{ errors }"
                                    rules="required"
                                    name="company_en"
                                    >
                                     <b-form-group
                                        id="company_en-group"
                                        label="ชื่อบริษัท (ภาษาอังกฤษ) *"
                                        label-for="company_en"
                                       
                                    >
                                        <b-form-input
                                        id="company_en"
                                        v-model="form.company_en"
                                        type="text"
                                        placeholder="ชื่อบริษัท (ภาษาอังกฤษ)"
                                        
                                        ></b-form-input>
                                        <small class="text-danger">{{ errors[0] }}</small>
                                    </b-form-group>
                                    
                                </validation-provider>
                                <validation-provider
                                    #default="{ errors }"
                                    rules="min:0"
                                    name="stamp"
                                    >
                                     <b-form-group
                                        id="stamp-group"
                                        label="ตราประทับ"
                                        label-for="stamp"
                                         description="ในกรณีที่ตราประทับมีชื่อบริษัท จะต้องระบุคำว่า บริษัท นำหน้าชื่อ และคำว่า จำกัด ตามหลังชื่อด้วย"
                                       
                                    >
                                        <b-form-file
                                        v-model="form.stamp"
                                       
                                        placeholder="Choose a file or drop it here..."
                                        drop-placeholder="Drop file here..."
                                        ></b-form-file>
                                        <small class="text-danger">{{ errors[0] }}</small>
                                    </b-form-group>
                                    
                                </validation-provider>
                                <validation-provider
                                    #default="{ errors }"
                                    rules="min:0"
                                    name="checked"
                                    >
                                     <b-form-group>
                                        <b-form-checkbox v-model="form.checked" value="me">สั่งทำตรายาง (ราคา ตรายาง 200 บาท)</b-form-checkbox>
                                    <small class="text-danger">{{ errors[0] }}</small>
                                </b-form-group>
                                    
                                </validation-provider>
                                <validation-provider
                                    #default="{ errors }"
                                    rules="min:0"
                                    name="objective"
                                    >
                                    <b-form-group label="วัตถุประสงค์บริษัท*" >
                                        <b-form-radio v-model="form.objective" name="some-radios" value="ธุรกิจค้าขาย">ธุรกิจค้าขาย</b-form-radio>
                                        <b-form-radio v-model="form.objective"  name="some-radios" value="ธุรกิจบริการ">ธุรกิจบริการ</b-form-radio>
                                        <b-form-radio v-model="form.objective" name="some-radios" value="ธุรกิจการผลิตสินค้าอุตสาหกรรมหรือหัตถกรรม">ธุรกิจการผลิตสินค้าอุตสาหกรรมหรือหัตถกรรม</b-form-radio>
      
                                        <b-form-radio v-model="form.objective"  name="some-radios" value="ธุรกิจเกษตรกรรม">ธุรกิจเกษตรกรรม</b-form-radio>
                                        <b-form-radio v-model="form.objective" name="some-radios" value="ธุรกิจเกษตรกรรม">สำนักงานผู้แทน</b-form-radio>
                                        <b-form-input
                                            id="company_en"
                                            v-model="form.objective_other"
                                            type="text"
                                            placeholder="อื่น ๆ ระบุ"
                                            required
                                        ></b-form-input>
                                        <small class="text-danger">{{ errors[0] }}</small>
                                    </b-form-group>
                                   
                                </validation-provider>

                               
                                <hr />
                                
                                <b-button type="submit" variant="warning" @click.prevent="validationStep1">
                                    ถัดไป
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48.006" height="24.048" viewBox="0 0 48.006 24.048">
  <path id="icons8-up_arrow" d="M12.024,0,.664,10.508a2,2,0,1,0,2.719,2.938L10.024,7.3V45.977a2,2,0,1,0,4,0V7.3l6.641,6.145a2,2,0,1,0,2.719-2.937Z" transform="translate(48.006) rotate(90)" fill="#fff"/>
</svg>

                                </b-button>
                            </b-form>
                        </validation-observer>

                    </div>
                    <div v-if="step_id==2" class="mt-3">
                        <validation-observer ref="step2" v-slot="{ handleSubmit }">
                            <b-form @submit.stop.prevent="handleSubmit(onSubmit)" method="post">
                                <b-row>
                                    <b-col md="3">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            name="addess_no"
                                            >
                                            <b-form-group
                                                id="addess_no-group"
                                                label="บ้านเลขที่*"
                                                label-for="addess_no"
                                            
                                            >
                                                <b-form-input
                                                id="addess_no"
                                                v-model="form.addess_no"
                                                type="text"
                                                placeholder="บ้านเลขที่*"
                                                
                                                ></b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>
                                    </b-col>
                                    <b-col md="3">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="min:0"
                                            name="building"
                                            >
                                            <b-form-group
                                                id="building-group"
                                                label="อาคาร"
                                                label-for="building"
                                            
                                            >
                                                <b-form-input
                                                id="building"
                                                v-model="form.building"
                                                type="text"
                                                placeholder="อาคาร"
                                                
                                                ></b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>
                                    </b-col>
                                    <b-col md="3">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="min:0"
                                            name="level"
                                            >
                                            <b-form-group
                                                id="level-group"
                                                label="ชั้น"
                                                label-for="level"
                                            
                                            >
                                                <b-form-input
                                                id="level"
                                                v-model="form.level"
                                                type="text"
                                                placeholder="ขั้น"
                                                
                                                ></b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>
                                    </b-col>
                                    <b-col md="3">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="min:0"
                                            name="room_no"
                                            >
                                            <b-form-group
                                                id="room_no-group"
                                                label="ห้องเลขที่"
                                                label-for="room_no"
                                            
                                            >
                                                <b-form-input
                                                id="room_no"
                                                v-model="form.room_no"
                                                type="text"
                                                placeholder="ห้องเลขที่"
                                                
                                                ></b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>
                                    </b-col>
                                    <b-col md="6">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="min:0"
                                            name="soi"
                                            >
                                            <b-form-group
                                                id="soi-group"
                                                label="ซอย"
                                                label-for="soi"
                                            
                                            >
                                                <b-form-input
                                                id="soi"
                                                v-model="form.soi"
                                                type="text"
                                                placeholder="ซอย"
                                                
                                                ></b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>
                                    </b-col>
                                    <b-col md="6">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="min:0"
                                            name="road"
                                            >
                                            <b-form-group
                                                id="road-group"
                                                label="ถนน"
                                                label-for="road"
                                            
                                            >
                                                <b-form-input
                                                id="road"
                                                v-model="form.road"
                                                type="text"
                                                placeholder="ถนน"
                                                
                                                ></b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>
                                    </b-col>
                                    <b-col md="6">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            name="province"
                                            >
                                            <b-form-group
                                                id="province-group"
                                                label="จังหวัด*"
                                                label-for="province"
                                            
                                            >
                                                <b-form-select v-model="form.province" :options="provinces"></b-form-select>
                                               
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>

                                    </b-col>
                                    <b-col md="6">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            name="states"
                                            >
                                            <b-form-group
                                                id="province-group"
                                                label="เขต/อำเภอ*"
                                                label-for="states"
                                            
                                            >
                                                <b-form-input
                                                id="states"
                                                v-model="form.states"
                                                type="text"
                                                placeholder="เขต/อำเภอ"
                                                
                                                ></b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>

                                    </b-col>
                                    <b-col md="6">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            name="city"
                                            >
                                            <b-form-group
                                                id="city-group"
                                                label="แขวง/ตำบล*"
                                                label-for="city"
                                            
                                            >
                                                <b-form-input
                                                id="city"
                                                v-model="form.city"
                                                type="text"
                                                placeholder="แขวง/ตำบล"
                                                
                                                ></b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>

                                    </b-col>
                                    <b-col md="6">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            name="postcode"
                                            >
                                            <b-form-group
                                                id="postcode-group"
                                                label="รหัสไปรษณีย์*"
                                                label-for="postcode"
                                            
                                            >
                                                <b-form-input
                                                id="postcode"
                                                v-model="form.postcode"
                                                type="text"
                                                placeholder="รหัสไปรษณีย์"
                                                
                                                ></b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>

                                    </b-col>
                                    <b-col md="6">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="min:0"
                                            name="copy_house"
                                            >
                                            <b-form-group
                                                id="copy_house-group"
                                                label="สำเนาทะเบียนบ้านของที่ตั้งสำนักงาน"
                                                label-for="copy_house"
                                                
                                            
                                            >
                                                <b-form-file
                                                v-model="form.copy_house"
                                                :state="Boolean(form.copy_house)"
                                                placeholder="Choose a file or drop it here..."
                                                drop-placeholder="Drop file here..."
                                                ></b-form-file>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>
                                    </b-col>
                                    <b-col md="6"></b-col>
                                    <b-col md="6">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            name="phone"
                                            >
                                            <b-form-group
                                                id="phone-group"
                                                label="โทรศัพท์*"
                                                label-for="phone"
                                            
                                            >
                                                <b-form-input
                                                id="phone"
                                                v-model="form.phone"
                                                type="text"
                                                placeholder="โทรศัพท์"
                                                
                                                ></b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>

                                    </b-col>
                                    <b-col md="6">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="required|email"
                                            name="email"
                                            >
                                            <b-form-group
                                                id="email-group"
                                                label="อีเมล*"
                                                label-for="email"
                                            
                                            >
                                                <b-form-input
                                                id="postcode"
                                                v-model="form.email"
                                                type="text"
                                                placeholder="อีเมล"
                                                
                                                ></b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>

                                    </b-col>
                                    <b-col md="12">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="min:0"
                                            name="map"
                                            >
                                            <b-form-group
                                                id="map-group"
                                                label="แผนที่"
                                                label-for="map"
                                            
                                            >
                                                <b-form-input
                                                id="map"
                                                v-model="form.map"
                                                type="text"
                                                placeholder="Link Google Map"
                                                
                                                ></b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>

                                    </b-col>
                                    <b-col md="12">
                                        <iframe
                                        width="100%"
                                        height="450"
                                        style="border:0"
                                        loading="lazy"
                                        allowfullscreen
                                        :src="'https://www.google.com/maps/embed/v1/place?key=AIzaSyCJaku1y9v58C1uPsRFtyKHlFv4CneGdJg&q='+form.map">
                                        </iframe>
                                    </b-col>
                                </b-row>
                                <hr />
                                <b-button type="button" variant="outline-warning" @click.prevent="backstep(1)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48.006" height="24.048" viewBox="0 0 48.006 24.048">
  <path id="icons8-up_arrow" d="M12.024,0,.664,10.508a2,2,0,1,0,2.719,2.938L10.024,7.3V45.977a2,2,0,1,0,4,0V7.3l6.641,6.145a2,2,0,1,0,2.719-2.937Z" transform="translate(0 24.048) rotate(-90)" fill="#ffc00f"/>
</svg>

                                    ย้อนกลับ
                                   
                                </b-button>
                                <b-button type="submit" variant="warning" @click.prevent="validationStep2">
                                    ถัดไป
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48.006" height="24.048" viewBox="0 0 48.006 24.048">
  <path id="icons8-up_arrow" d="M12.024,0,.664,10.508a2,2,0,1,0,2.719,2.938L10.024,7.3V45.977a2,2,0,1,0,4,0V7.3l6.641,6.145a2,2,0,1,0,2.719-2.937Z" transform="translate(48.006) rotate(90)" fill="#fff"/>
</svg>

                                </b-button>
                            </b-form>
                        </validation-observer>
                    </div>
                    <div v-if="step_id==3" class="mt-3">
                        <validation-observer ref="step3" v-slot="{ handleSubmit }">
                            <b-form @submit.stop.prevent="handleSubmit(onSubmit)" method="post">
                                <b-row>
                                    <b-col md="6">
                                         <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            name="amount_cap"
                                            >
                                            <b-form-group
                                                id="amount_cap-group"
                                                label="ทุนจดทะเบียนบริษัทกําหนดไว้เป็นจํานวน (บาท)*"
                                                label-for="amount_cap"
                                            
                                            >
                                                <b-form-input
                                                id="amount_cap"
                                                v-model="form.amount_cap"
                                                type="text"
                                                placeholder="จำนวนทุนจดทะเบียน"
                                                @keyup="calshare"
                                                
                                                ></b-form-input>  
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>

                                        
                                    </b-col>
                                    <b-col md="6">
                                         <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            name="share_value"
                                            >
                                            <b-form-group
                                                id="share_value-group"
                                                label="มูลค่าหุ้น(บาท ต่อ หุ้น)*"
                                                label-for="share_value"
                                            
                                            >
                                                <b-form-input
                                                id="share_value"
                                                v-model="form.share_value"
                                                type="text"
                                                placeholder="มูลค่าหุ้น"
                                                @change="calshare"
                                                ></b-form-input>  
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>
                                    </b-col>
                                    <b-col md="6" class="form-flex">
                                        <span>จำนวนหุ้นทั้งหมด</span>
                                        <b-form-input
                                                id="share_total"
                                                v-model="form.share_total"
                                                type="text"
                                                placeholder="จำนวนหุ้น"
                                                style="width:200px"
                                                readonly
                                                ></b-form-input> 
                                        <span style="padding-left:10px">หุ้น แบ่งออกเป็น</span>  
                                    </b-col>
                                    
                                    <b-col md="6" class="form-flex">
                                        <span>หุ้นสามัญจำนวน</span>
                                        <b-form-input
                                                id="ordinary_total"
                                                v-model="form.ordinary_total"
                                                type="text"
                                                placeholder="จำนวนหุ้น"
                                                style="width:250px"
                                                readonly
                                                
                                                ></b-form-input> 
                                        <span style="padding-left:10px">หุ้น</span>
                                    </b-col>
                                    <b-col md="6"></b-col>
                                    <b-col md="6" class="form-flex">
                                        
                                        <span>หุ้นบุริมสิทธิ์จำนวน</span>
                                        <b-form-input
                                                id="number_share_pre"
                                                v-model="form.number_share_pre"
                                                type="text"
                                                placeholder="จำนวนหุ้น"
                                                style="width:250px"
                                                readonly
                                                
                                                ></b-form-input> 
                                        <span style="padding-left:10px">หุ้น</span>
                                    </b-col>
                                    <b-col md="6" class="form-flex">
                                        
                                        <span>ชำระหุ้นแล้วร้อยละ</span>
                                         <b-form-select v-model="form.payment_percent" :options="options" style="width:150px" @change="calshare"></b-form-select>
                                       
                                        <span>ของทุนจุดทะเบียน</span>
                                    </b-col>
                                    <b-col md="6" class="form-flex">
                                        
                                        <span>คิดเป็นจำนวนเงิน</span>
                                        <b-form-input
                                                id="payment_amount"
                                                v-model="form.payment_amount"
                                                type="text"
                                                placeholder="จำนวนเงิน"
                                                style="width:250px; "
                                                readonly
                                                
                                                ></b-form-input> 
                                        <span style="padding-left:10px">บาท</span>
                                    </b-col>
                                </b-row>
                                 <hr />
                                <b-button type="button" variant="outline-warning" @click.prevent="backstep(2)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48.006" height="24.048" viewBox="0 0 48.006 24.048">
  <path id="icons8-up_arrow" d="M12.024,0,.664,10.508a2,2,0,1,0,2.719,2.938L10.024,7.3V45.977a2,2,0,1,0,4,0V7.3l6.641,6.145a2,2,0,1,0,2.719-2.937Z" transform="translate(0 24.048) rotate(-90)" fill="#ffc00f"/>
</svg>

                                    ย้อนกลับ
                                   
                                </b-button>
                                <b-button type="submit" variant="warning" @click.prevent="validationStep3">
                                    ถัดไป
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48.006" height="24.048" viewBox="0 0 48.006 24.048">
  <path id="icons8-up_arrow" d="M12.024,0,.664,10.508a2,2,0,1,0,2.719,2.938L10.024,7.3V45.977a2,2,0,1,0,4,0V7.3l6.641,6.145a2,2,0,1,0,2.719-2.937Z" transform="translate(48.006) rotate(90)" fill="#fff"/>
</svg>

                                </b-button>
                            </b-form>
                            
                        </validation-observer>
                    </div>
                    <div v-if="step_id==4" class="mt-3">
                        <validation-observer ref="step4" v-slot="{ handleSubmit }">
                            <b-form @submit.stop.prevent="handleSubmit(onSubmit)" method="post">
                                <b-row v-for="(shareholder,key) in form.shareholders" :key="key" class="mb-3">
                                    <b-col md="10"><h5>ผู้ถื้อหุ้น {{ key+1 }}</h5></b-col>
                                    <b-col md="2" class="text-right">
                                        <b-button variant="outline-secondary" v-if="key > 2" @click="removeshare(key)">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 37 37">
                                                <defs>
                                                    <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 64 64">
                                                    <image width="64" height="64" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEbUlEQVR4nO2bT2gcVRzHP795kxoFJSGpolaMSLRY8eCfxuK5eFIQsUKN0It/mp3Z7CktiBq9qKWHbCbZgK0aELzEUknx1JNQqE31oFEoRUGwQsBsAlrDxuzMz0Nmw7JN4s5kJ9PS+Vxm3773+813vjszb96+N5CRkZFxEyNJ72BwcLAvCILnVbU7YuifxpgzxWLxQiLCQhIzwHXdW0TkpKr2bzHV58Brnuctt0JXI3YSSQFUdRSoHbwCV1R1pZlYEWkDdrH6A70KLAFvJqEzkTMgn8/3quolwAJmgBc9z7sSJcfAwMB9xpgvgb1A4Pv+w6VS6ZdWa7VanRAgCIL9dblfj3rwAKVS6XdjzBth0TLG7G+ZwDoSMUBE1m54XV1ds3HzdHR0/FhX3LklURsQ+xI4fPhwZ3t7e+d6ddVqdRDIA9i2/WDcfYS5fg0/jtq2XVyvTaVSWZyYmFiMkz+yAY7jvCQi7wJ74uwwQWZV9b2xsbFTUYJMlMaO4wyJyMfAnZGkbQ93iciBvr6+qzMzM+ebDWr6DHAcZ7eIzLLadS4Cnoj8EUNoy1HVewEX6ASqQRDsGR8fv9xMbNPPASLySq29ZVnPFovFi3HEJoXrul8DFwDbGNMPvNNMXJReoHYzm7veDh7A87wZYC4sNn3jjWJAOdzuLBQKd0eI2xYcx7mHsKtU1flm46I8Cp8BHMD4vj/tOM6Rtra236LJTIaVlZUeETlGeFMXkelmYyN1g67rTgPPRZO37Xzled4LzTaO9CRo2/bLwCSrg5vrDQU+tW37YJSgWE+Crus+DdT62kkRabrfbSWqug84FBb3eZ73bdQcsYbDxpg53/drxW9GR0cn4+TZKq7r/ktogDFm7n+ar0sig6EbicT+EAEYHh625ufn9wVB8EOpVLraWJ/P53ur1aquN84fGhq6fWlp6bHu7u7zw8PDQVIaEz0DyuXyURE5Z4y5ZoBSKBR6VPUnY8zPuVzu/sb6SqVySkTOLSwsHElSY9KXQG+4faixolqt9gA7gB0i8kBjvar2httrYlvJTX8PyAxIW0DaZAakLSBtMgPSFpA2mQFpC0ibzIC0BaRNZkDaAtImMyBtAWmTGZC2gLTJDEhbQNpkBqQtIG0yAxLOX23YrmGMqf9uvRWkG8a2kkRnhoBPgEdE5LPGiiAILorIlKqqiHy3Tuwx4JBlWSeTFJioAeFs7TMb1C0DBzaJPQGcSEjaGrEugUqlslRXvLVFWiKjqrfVPvu+/0+cHLEMKJfLZeAqgIg8FSdHi9gbbv/u6uoqb9pyA2IZMDU15avqWQBV7c/lctu+ajSfzz8qIrXVIGfjziDH7gUsyzrO6rKUNsuyTudyucfj5oqK4zhPquppoA3QIAiOx821pfcFXNf9EKifvr4ERF4aH5FdwO668kee5x2Nm2yrL0yI67pvAW+zOtW9nSwD73ue9wFbWLTVkjdGCoVCj+/7B4EngDtakXMT/gK+N8Z8MTIycl2sU8zIyMi4YfkP0StKOqaS3koAAAAASUVORK5CYII="/>
                                                    </pattern>
                                                </defs>
                                                <rect id="icons8-delete-64" width="37" height="37" rx="18.5" fill="url(#pattern)"/>
                                            </svg>

                                            ลบ
                                        </b-button>
                                    </b-col>
                                    <b-col md="12">
                                         <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            name="type_value"
                                            >
                                            <b-form-group
                                               
                                               
                                              
                                                name="radio-options"
                                            >
                                            <div  class="radio-flex">

                                                <b-form-radio v-model="form.shareholders[key].type_value" :name="'title['+key+']'" value="บุคคลธรรมดา">บุคคลธรรมดา</b-form-radio>
                                                <b-form-radio v-model="form.shareholders[key].type_value"  :name="'title['+key+']'" value="นิติบุคคล">นิติบุคคล</b-form-radio>
                                            </div>
                                            </b-form-group>
                                              <small class="text-danger">{{ errors[0] }}</small>
                                        
                                         </validation-provider>
                                    </b-col>
                                    <template v-if="form.shareholders[key].type_value=='บุคคลธรรมดา'">
                                        <b-col md="2">
                                            <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            :name="'title'+key"
                                            >
                                                <b-form-group
                                                    :id="'title-group'+key"
                                                    label="คำนำหน้า*"
                                                    label-for="title"
                                                
                                                >
                                                    <b-form-select v-model="form.shareholders[key].title" :options="options_title" ></b-form-select>
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                           
                                        </b-col>
                                        <b-col md="5">
                                             <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            :name="'firstname'+key"
                                            >
                                                <b-form-group
                                                    :id="'firstname-group'+key"
                                                    label="ชื่อ*"
                                                    label-for="firstname"
                                                
                                                >
                                                 <b-form-input
                                                    :id="'firstname'+key"
                                                    v-model="form.shareholders[key].firstname"
                                                    type="text"
                                                    placeholder="ชื่อ"
                                                    
                                                    > </b-form-input>
                                                   
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                            
                                        </b-col>
                                        <b-col md="5">
                                            <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            :name="'lastname'+key"
                                            >
                                                <b-form-group
                                                    :id="'lastname-group'+key"
                                                    label="นามสกุล*"
                                                    label-for="lastname"
                                                
                                                >
                                                 <b-form-input
                                                    :id="'lastname'+key"
                                                    v-model="form.shareholders[key].lastname"
                                                    type="text"
                                                    placeholder="นามสกุล"
                                                    
                                                    >  </b-form-input>
                                                   
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                        </b-col>
                                        <b-col md="6">
                                             <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            :name="'idcard'+key"
                                            >
                                                <b-form-group
                                                    :id="'idcard-group'+key"
                                                    label="เลขบัตรประชาชน*"
                                                    label-for="idcard"
                                                
                                                >
                                                 <b-form-input
                                                    :id="'idcard'+key"
                                                    v-model="form.shareholders[key].idcard"
                                                    type="text"
                                                    placeholder="เลขบัตรประชาชน"
                                                    
                                                    > </b-form-input>
                                                   
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                            
                                        </b-col>
                                        <b-col md="6">
                                            <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            :name="'occupation'+key"
                                            >
                                                <b-form-group
                                                    :id="'occupation-group'+key"
                                                    label="อาชีพ*"
                                                    label-for="occupation"
                                                
                                                >
                                                 <b-form-input
                                                    :id="'occupation'+key"
                                                    v-model="form.shareholders[key].occupation"
                                                    type="text"
                                                    placeholder="อาชีพ*"
                                                    
                                                    >  </b-form-input>
                                                   
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                        </b-col>
                                        <b-col md="6">
                                             <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            :name="'phone'+key"
                                            >
                                                <b-form-group
                                                    :id="'phone-group'+key"
                                                    label="หมายเลขโทรศัพท์*"
                                                    label-for="phone"
                                                
                                                >
                                                 <b-form-input
                                                    :id="'phone'+key"
                                                    v-model="form.shareholders[key].phone"
                                                    type="text"
                                                    placeholder="หมายเลขโทรศัพท์"
                                                    
                                                    > </b-form-input>
                                                   
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                            
                                        </b-col>
                                        <b-col md="6">
                                            <validation-provider
                                            #default="{ errors }"
                                            rules="min:0"
                                            :name="'idcardfile'+key"
                                            >
                                                <b-form-group
                                                    :id="'idcardfile-group'+key"
                                                    label="อัพโหลดบัตรประชาชน"
                                                    label-for="idcardfile"
                                                
                                                >
                                                  <b-form-file
                                                    v-model="form.shareholders[key].idcardfile"
                                                    :state="Boolean(form.shareholders[key].idcardfile)"
                                                    placeholder="Choose a file or drop it here..."
                                                    drop-placeholder="Drop file here..."
                                                    ></b-form-file>
                                                   
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                        </b-col>
                                    </template>
                                    <template v-else>
                                        <b-col md="8">
                                            <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            :name="'legal_name'+key"
                                            >
                                                <b-form-group
                                                    :id="'legal_name-group'+key"
                                                    label="ชื่อนิติบุคคล*"
                                                    label-for="legal_name"
                                                
                                                >
                                                 <b-form-input
                                                    :id="'legal_name'+key"
                                                    v-model="form.shareholders[key].legal_name"
                                                    type="text"
                                                    placeholder="ชื่อ"
                                                    
                                                    > </b-form-input>
                                                   
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                            
                                        </b-col>
                                        <b-col md="4">
                                            <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            :name="'legal_number'+key"
                                            >
                                                <b-form-group
                                                    :id="'legal_number-group'+key"
                                                    label="เลขทะเบียนนิติบุคคล*"
                                                    label-for="legal_number"
                                                
                                                >
                                                 <b-form-input
                                                    :id="'legal_number'+key"
                                                    v-model="form.shareholders[key].legal_number"
                                                    type="text"
                                                    placeholder="เลขทะเบียนนิติบุคคล"
                                                    
                                                    > </b-form-input>
                                                   
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                        </b-col>
                                        <b-col md="6">
                                             <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            :name="'legal_phone'+key"
                                            >
                                                <b-form-group
                                                    :id="'legal_phone-group'+key"
                                                    label="หมายเลขโทรศัพท์*"
                                                    label-for="legal_phone"
                                                
                                                >
                                                 <b-form-input
                                                    :id="'legal_phone'+key"
                                                    v-model="form.shareholders[key].legal_phone"
                                                    type="text"
                                                    placeholder="หมายเลขโทรศัพท์"
                                                    
                                                    > </b-form-input>
                                                   
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                            
                                        </b-col>
                                        <b-col md="6">
                                            <validation-provider
                                            #default="{ errors }"
                                            rules="min:0"
                                            :name="'legal_file'+key"
                                            >
                                                <b-form-group
                                                    :id="'legal_file-group'+key"
                                                    label="อัพโหลดหนังสือรับรอง"
                                                    label-for="legal_file"
                                                
                                                >
                                                  <b-form-file
                                                    v-model="form.shareholders[key].legal_file"
                                                    :state="Boolean(form.shareholders[key].legal_file)"
                                                    placeholder="Choose a file or drop it here..."
                                                    drop-placeholder="Drop file here..."
                                                    ></b-form-file>
                                                   
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                        </b-col>
                                        <b-col md="12" >
                                            ชื่อกรรมการผู้มัอำนาจลงนาม
                                            <b-row v-for="(value,k) in form.shareholders[key].legal_people" :key="'child'+k">
                                                <b-col md="3">
                                                     <validation-provider
                                                        #default="{ errors }"
                                                        rules="required"
                                                        :name="'title'+key+'_'+k"
                                                        >
                                                            <b-form-group
                                                                :id="'title-group'+key"
                                                                label="คำนำหน้า*"
                                                                label-for="title"
                                                            
                                                            >
                                                                <b-form-select v-model="form.shareholders[key].legal_people[k].title" :options="options_title" ></b-form-select>
                                                                <small class="text-danger">{{ errors[0] }}</small>
                                                            </b-form-group>
                                                        </validation-provider>
                                                </b-col>
                                                <b-col md="4">
                                                    <validation-provider
                                                        #default="{ errors }"
                                                        rules="required"
                                                        :name="'firstname'+key+'_'+k"
                                                        >
                                                            <b-form-group
                                                                :id="'firstname-group'+key+'_'+k"
                                                                label="ชื่อ*"
                                                                label-for="firstname"
                                                            
                                                            >
                                                            <b-form-input
                                                                :id="'firstname'+key+'_'+k"
                                                                v-model="form.shareholders[key].legal_people[k].firstname"
                                                                type="text"
                                                                placeholder="ชื่อ"
                                                                
                                                                > </b-form-input>
                                                            
                                                                <small class="text-danger">{{ errors[0] }}</small>
                                                            </b-form-group>
                                                        </validation-provider>
                                                </b-col>
                                                <b-col md="4">
                                                    <validation-provider
                                                        #default="{ errors }"
                                                        rules="required"
                                                        :name="'lastname'+key+'_'+k"
                                                        >
                                                            <b-form-group
                                                                :id="'lastname-group'+key+'_'+k"
                                                                label="นามสกุล*"
                                                                label-for="lastname"
                                                            
                                                            >
                                                            <b-form-input
                                                                :id="'lastname'+key+'_'+k"
                                                                v-model="form.shareholders[key].legal_people[k].lastname"
                                                                type="text"
                                                                placeholder="นามสกุล"
                                                                
                                                                > </b-form-input>
                                                            
                                                                <small class="text-danger">{{ errors[0] }}</small>
                                                            </b-form-group>
                                                        </validation-provider>
                                                </b-col>
                                                <b-col md="1">
                                                    <label></label>
                                                    <div>
                                                    <a class="cursor" v-if="k>0" @click="removePeople(key,k)">
                                                        
                                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42.479" height="42.479" viewBox="0 0 42.479 42.479">
                                                            <defs>
                                                                <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 64 64">
                                                                <image width="64" height="64" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEbUlEQVR4nO2bT2gcVRzHP795kxoFJSGpolaMSLRY8eCfxuK5eFIQsUKN0It/mp3Z7CktiBq9qKWHbCbZgK0aELzEUknx1JNQqE31oFEoRUGwQsBsAlrDxuzMz0Nmw7JN4s5kJ9PS+Vxm3773+813vjszb96+N5CRkZFxEyNJ72BwcLAvCILnVbU7YuifxpgzxWLxQiLCQhIzwHXdW0TkpKr2bzHV58Brnuctt0JXI3YSSQFUdRSoHbwCV1R1pZlYEWkDdrH6A70KLAFvJqEzkTMgn8/3quolwAJmgBc9z7sSJcfAwMB9xpgvgb1A4Pv+w6VS6ZdWa7VanRAgCIL9dblfj3rwAKVS6XdjzBth0TLG7G+ZwDoSMUBE1m54XV1ds3HzdHR0/FhX3LklURsQ+xI4fPhwZ3t7e+d6ddVqdRDIA9i2/WDcfYS5fg0/jtq2XVyvTaVSWZyYmFiMkz+yAY7jvCQi7wJ74uwwQWZV9b2xsbFTUYJMlMaO4wyJyMfAnZGkbQ93iciBvr6+qzMzM+ebDWr6DHAcZ7eIzLLadS4Cnoj8EUNoy1HVewEX6ASqQRDsGR8fv9xMbNPPASLySq29ZVnPFovFi3HEJoXrul8DFwDbGNMPvNNMXJReoHYzm7veDh7A87wZYC4sNn3jjWJAOdzuLBQKd0eI2xYcx7mHsKtU1flm46I8Cp8BHMD4vj/tOM6Rtra236LJTIaVlZUeETlGeFMXkelmYyN1g67rTgPPRZO37Xzled4LzTaO9CRo2/bLwCSrg5vrDQU+tW37YJSgWE+Crus+DdT62kkRabrfbSWqug84FBb3eZ73bdQcsYbDxpg53/drxW9GR0cn4+TZKq7r/ktogDFm7n+ar0sig6EbicT+EAEYHh625ufn9wVB8EOpVLraWJ/P53ur1aquN84fGhq6fWlp6bHu7u7zw8PDQVIaEz0DyuXyURE5Z4y5ZoBSKBR6VPUnY8zPuVzu/sb6SqVySkTOLSwsHElSY9KXQG+4faixolqt9gA7gB0i8kBjvar2httrYlvJTX8PyAxIW0DaZAakLSBtMgPSFpA2mQFpC0ibzIC0BaRNZkDaAtImMyBtAWmTGZC2gLTJDEhbQNpkBqQtIG0yAxLOX23YrmGMqf9uvRWkG8a2kkRnhoBPgEdE5LPGiiAILorIlKqqiHy3Tuwx4JBlWSeTFJioAeFs7TMb1C0DBzaJPQGcSEjaGrEugUqlslRXvLVFWiKjqrfVPvu+/0+cHLEMKJfLZeAqgIg8FSdHi9gbbv/u6uoqb9pyA2IZMDU15avqWQBV7c/lctu+ajSfzz8qIrXVIGfjziDH7gUsyzrO6rKUNsuyTudyucfj5oqK4zhPquppoA3QIAiOx821pfcFXNf9EKifvr4ERF4aH5FdwO668kee5x2Nm2yrL0yI67pvAW+zOtW9nSwD73ue9wFbWLTVkjdGCoVCj+/7B4EngDtakXMT/gK+N8Z8MTIycl2sU8zIyMi4YfkP0StKOqaS3koAAAAASUVORK5CYII="/>
                                                                </pattern>
                                                            </defs>
                                                            <rect id="icons8-delete-64" width="42.479" height="42.479" rx="21.24" fill="url(#pattern)"/>
                                                        </svg>

                                                    </a>
                                                    </div>
                                                </b-col>
                                            </b-row>
                                            <a class="b-2 cursor" @click="addPepoles(key)">
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 30 30">
                                                    <image id="icons8-plus-_-30" data-name="icons8-plus-+-30" width="30" height="30" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAACPElEQVRIie2Wv24TQRDGv9nbVMHnfwUSsSJQKPwIkFxIHSJhU4OQED0gCkokeAR6JKTQWii2I/rksPwG6aJICaTBjs+W3NzeDgVBOq/vvI4TQ5Ov25nZ/e232lktcK1/JJq2sOvnlx2KKtC0BcJtAKXz1AkYRyBuqkjuFDe6x1cCHraKS4rVO2a8AOBYyjURapGgt/n7vaOZwf29XJUFbwO4YdugoQGBnrper55WINISwX7uFQuuzQAFgAyDvwbf3ZdpBYmOz53WJm1sSmkCPU5yPgbutAslqaIDWJyS0GvQUjD0vgU+kFgoL3q/fsaDY46cMPpggwKAuzpoud6Zb6sDkAkRvjeDI+Cun18mwrMpFruQCHjeaRdK8dgI2KGoCnvLzCJHhqqSCgbT5hygf0T0MB0M3J0bGFiJD6SRvGlWk9Br7uqglbZa1gvGOqPv572E234rPrD3qZr+PY/JOsd0fAogEw+wEH7gZ8cm/nUa+Fk2cwydxPoRH5iOD207vYRG1jbAvDsvKhOaqWAVyR0A0Ry4KnKcRiq4uNE9ZuDzVVMJ+FS81z0xYqMatopLoVYHMC7Z2GJaexBSMPSehduXOiwvPhieTgQDQOC7mwA1cPnnUxOLqrt+1jATiX2c9frfQPwGSO6LaaEgfp0EBWxfHz/3iMFfYDn2pKnE+om7PmimFUx8uVyvVxc6WgHTRwBqCqAG0bbUYXkSFLjA97bTLpRkqCog2gJwB/HvLXAI5l21IOvm7b3Wf9dvgk6/8KBFbfoAAAAASUVORK5CYII="/>
                                                </svg>

                                                เพิ่มชื่อกรรมการผู้มัอำนาจลงนาม
                                            </a>
                                        </b-col>
                                        
                                    </template>
                                    <b-col md="6" class="form-flex">
                                         <b-form-radio class="pr-2" v-model="form.shareholders[key].type_share" :name="'shareholders['+key+']'" value="ผู้ถือหุ้นสามัญ">ผู้ถือหุ้นสามัญ*</b-form-radio>
                                          <validation-provider
                                            #default="{ errors }"
                                            rules="required|numeric"
                                            :name="'sharevalue'+key"
                                            >
                                            <b-form-group
                                                :id="'sharevalue-group'+key"
                                               
                                                label-for="sharevalue"
                                            
                                            >
                                                <b-form-input
                                                :id="'sharevalue'+key"
                                                v-model="form.shareholders[key].sharevalue"
                                                type="text"
                                                placeholder=""
                                                @change="changeshare(key)"
                                                
                                                > </b-form-input>
                                                
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                        </validation-provider>
                                        <div>หุ้น</div>
                                    </b-col>
                                    <b-col md="6" class="form-flex">
                                         <div class="pr-2">ชำระค่าหุ้นแล้ว</div>
                                       
                                          <validation-provider
                                            #default="{ errors }"
                                            rules="numeric"
                                            :name="'shareprice'+key"
                                            >
                                            <b-form-group
                                                :id="'shareprice-group'+key"
                                               
                                                label-for="shareprice"
                                            
                                            >
                                                <b-form-input
                                                :id="'shareprice'+key"
                                                v-model="form.shareholders[key].shareprice"
                                                type="text"
                                                placeholder="จำนวนเงิน"
                                                readonly
                                                
                                                > </b-form-input>
                                                
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                        </validation-provider>
                                         บาท
                                    </b-col>
                                    <b-col md="6">
                                    </b-col>
                                    <b-col md="6" class="form-flex">
                                        <b-form-checkbox v-model="form.shareholders[key].sharepayment" value="cash" aria-readonly="true" class="pr-2">ด้วยเงิน</b-form-checkbox>
                                        <b-form-checkbox v-model="form.shareholders[key].sharepayment" value="labor" disabled>ด้วยทรัพย์สิน/แรงงาน</b-form-checkbox>
                                    </b-col>
                                    <b-col md="6" class="form-flex disabled">
                                         <b-form-radio class="pr-2" v-model="form.shareholders[key].type_share" :name="'shareholders['+key+']'" disabled value="ถือหุ้นบุริมสิทธิ์">ถือหุ้นบุริมสิทธิ์</b-form-radio>
                                          
                                            <b-form-group
                                                
                                               
                                              
                                                class="pr-2"
                                            
                                            >
                                                <b-form-input
                                               
                                                readonly
                                                type="text"
                                                placeholder=""
                                                
                                                > </b-form-input>
                                                
                                               
                                            </b-form-group>
                                       
                                        <div>หุ้น</div>
                                    </b-col>
                                    <b-col md="6" class="form-flex">
                                         <div class="pr-2">ชำระค่าหุ้นแล้ว</div>
                                       
                                            <b-form-group
                                               
                                            class="pr-2"
                                            >
                                                <b-form-input
                                               
                                               
                                                type="text"
                                                placeholder="จำนวนเงิน"
                                                readonly
                                                
                                                > </b-form-input>
                                                
                                               
                                            </b-form-group>
                                        
                                         บาท
                                    </b-col>
                                    <b-col md="6">
                                    </b-col>
                                    <b-col md="6" class="form-flex">
                                        <b-form-checkbox  value="cash" disabled class="pr-2">ด้วยเงิน</b-form-checkbox>
                                        <b-form-checkbox value="labor" disabled>ด้วยทรัพย์สิน/แรงงาน</b-form-checkbox>
                                    </b-col>
                                    <b-col md="12">
                                        <hr />
                                    </b-col>
                                    
                                </b-row>
                                <b-button type="button" variant="outline-warning" class="btn-add-share mb-3" @click="add_share">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41">
                                        <path id="icons8-add" d="M22.5,2A20.5,20.5,0,1,0,43,22.5,20.5,20.5,0,0,0,22.5,2Zm6.15,22.55h-4.1v4.1A2.051,2.051,0,0,1,22.5,30.7h0a2.051,2.051,0,0,1-2.05-2.05v-4.1h-4.1A2.051,2.051,0,0,1,14.3,22.5h0a2.051,2.051,0,0,1,2.05-2.05h4.1v-4.1A2.051,2.051,0,0,1,22.5,14.3h0a2.051,2.051,0,0,1,2.05,2.05v4.1h4.1A2.051,2.051,0,0,1,30.7,22.5h0A2.051,2.051,0,0,1,28.65,24.55Z" transform="translate(-2 -2)" fill="#fcbf10"/>
                                    </svg>

                                    เพิ่มผู้ถือหุ้น
                                </b-button>
                                <hr />
                                <b-button type="button" variant="outline-warning" @click.prevent="backstep(3)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48.006" height="24.048" viewBox="0 0 48.006 24.048">
  <path id="icons8-up_arrow" d="M12.024,0,.664,10.508a2,2,0,1,0,2.719,2.938L10.024,7.3V45.977a2,2,0,1,0,4,0V7.3l6.641,6.145a2,2,0,1,0,2.719-2.937Z" transform="translate(0 24.048) rotate(-90)" fill="#ffc00f"/>
</svg>

                                    ย้อนกลับ
                                   
                                </b-button>
                                <b-button type="submit" variant="warning" @click.prevent="validationStep4">
                                    ถัดไป
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48.006" height="24.048" viewBox="0 0 48.006 24.048">
  <path id="icons8-up_arrow" d="M12.024,0,.664,10.508a2,2,0,1,0,2.719,2.938L10.024,7.3V45.977a2,2,0,1,0,4,0V7.3l6.641,6.145a2,2,0,1,0,2.719-2.937Z" transform="translate(48.006) rotate(90)" fill="#fff"/>
</svg>

                                </b-button>
                            </b-form>
                        </validation-observer>
                    </div>
                    <div v-if="step_id==5" class="mt-3">
                        <validation-observer ref="step5" v-slot="{ handleSubmit }">
                            <b-form @submit.stop.prevent="handleSubmit(onSubmit)" method="post">
                                    
                                <b-row v-for="(founder,key) in form.founders" :key="key" class="mb-3">
                                    <b-col md="10"><h5>ผู้ก่อตั้งคนที่ {{ key+1 }}</h5></b-col>
                                    <b-col md="2" class="text-right">
                                        <b-button variant="outline-secondary" v-if="key > 2" @click="removefounder(key)">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 37 37">
                                                <defs>
                                                    <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 64 64">
                                                    <image width="64" height="64" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEbUlEQVR4nO2bT2gcVRzHP795kxoFJSGpolaMSLRY8eCfxuK5eFIQsUKN0It/mp3Z7CktiBq9qKWHbCbZgK0aELzEUknx1JNQqE31oFEoRUGwQsBsAlrDxuzMz0Nmw7JN4s5kJ9PS+Vxm3773+813vjszb96+N5CRkZFxEyNJ72BwcLAvCILnVbU7YuifxpgzxWLxQiLCQhIzwHXdW0TkpKr2bzHV58Brnuctt0JXI3YSSQFUdRSoHbwCV1R1pZlYEWkDdrH6A70KLAFvJqEzkTMgn8/3quolwAJmgBc9z7sSJcfAwMB9xpgvgb1A4Pv+w6VS6ZdWa7VanRAgCIL9dblfj3rwAKVS6XdjzBth0TLG7G+ZwDoSMUBE1m54XV1ds3HzdHR0/FhX3LklURsQ+xI4fPhwZ3t7e+d6ddVqdRDIA9i2/WDcfYS5fg0/jtq2XVyvTaVSWZyYmFiMkz+yAY7jvCQi7wJ74uwwQWZV9b2xsbFTUYJMlMaO4wyJyMfAnZGkbQ93iciBvr6+qzMzM+ebDWr6DHAcZ7eIzLLadS4Cnoj8EUNoy1HVewEX6ASqQRDsGR8fv9xMbNPPASLySq29ZVnPFovFi3HEJoXrul8DFwDbGNMPvNNMXJReoHYzm7veDh7A87wZYC4sNn3jjWJAOdzuLBQKd0eI2xYcx7mHsKtU1flm46I8Cp8BHMD4vj/tOM6Rtra236LJTIaVlZUeETlGeFMXkelmYyN1g67rTgPPRZO37Xzled4LzTaO9CRo2/bLwCSrg5vrDQU+tW37YJSgWE+Crus+DdT62kkRabrfbSWqug84FBb3eZ73bdQcsYbDxpg53/drxW9GR0cn4+TZKq7r/ktogDFm7n+ar0sig6EbicT+EAEYHh625ufn9wVB8EOpVLraWJ/P53ur1aquN84fGhq6fWlp6bHu7u7zw8PDQVIaEz0DyuXyURE5Z4y5ZoBSKBR6VPUnY8zPuVzu/sb6SqVySkTOLSwsHElSY9KXQG+4faixolqt9gA7gB0i8kBjvar2httrYlvJTX8PyAxIW0DaZAakLSBtMgPSFpA2mQFpC0ibzIC0BaRNZkDaAtImMyBtAWmTGZC2gLTJDEhbQNpkBqQtIG0yAxLOX23YrmGMqf9uvRWkG8a2kkRnhoBPgEdE5LPGiiAILorIlKqqiHy3Tuwx4JBlWSeTFJioAeFs7TMb1C0DBzaJPQGcSEjaGrEugUqlslRXvLVFWiKjqrfVPvu+/0+cHLEMKJfLZeAqgIg8FSdHi9gbbv/u6uoqb9pyA2IZMDU15avqWQBV7c/lctu+ajSfzz8qIrXVIGfjziDH7gUsyzrO6rKUNsuyTudyucfj5oqK4zhPquppoA3QIAiOx821pfcFXNf9EKifvr4ERF4aH5FdwO668kee5x2Nm2yrL0yI67pvAW+zOtW9nSwD73ue9wFbWLTVkjdGCoVCj+/7B4EngDtakXMT/gK+N8Z8MTIycl2sU8zIyMi4YfkP0StKOqaS3koAAAAASUVORK5CYII="/>
                                                    </pattern>
                                                </defs>
                                                <rect id="icons8-delete-64" width="37" height="37" rx="18.5" fill="url(#pattern)"/>
                                            </svg>

                                            ลบ
                                        </b-button>
                                    </b-col>
                                    <b-col md="2">
                                            <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            :name="'ftitle'+key"
                                            >
                                                <b-form-group
                                                    :id="'ftitle-group'+key"
                                                    label="คำนำหน้า*"
                                                    label-for="ftitle"
                                                
                                                >
                                                    <b-form-select v-model="form.founders[key].title" :options="options_title" ></b-form-select>
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                           
                                        </b-col>
                                        <b-col md="5">
                                             <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            :name="'ffirstname'+key"
                                            >
                                                <b-form-group
                                                    :id="'ffirstname-group'+key"
                                                    label="ชื่อ*"
                                                    label-for="ffirstname"
                                                
                                                >
                                                 <b-form-input
                                                    :id="'ffirstname'+key"
                                                    v-model="form.founders[key].firstname"
                                                    type="text"
                                                    placeholder="ชื่อ"
                                                    
                                                    > </b-form-input>
                                                   
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                            
                                        </b-col>
                                        <b-col md="5">
                                            <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            :name="'flastname'+key"
                                            >
                                                <b-form-group
                                                    :id="'flastname-group'+key"
                                                    label="นามสกุล*"
                                                    label-for="flastname"
                                                
                                                >
                                                 <b-form-input
                                                    :id="'flastname'+key"
                                                    v-model="form.founders[key].lastname"
                                                    type="text"
                                                    placeholder="นามสกุล"
                                                    
                                                    >  </b-form-input>
                                                   
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                        </b-col>
                                        <b-col md="6">
                                             <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            :name="'fphone'+key"
                                            >
                                                <b-form-group
                                                    :id="'fphone-group'+key"
                                                    label="หมายเลขโทรศัพท์*"
                                                    label-for="fphone"
                                                
                                                >
                                                 <b-form-input
                                                    :id="'fphone'+key"
                                                    v-model="form.founders[key].phone"
                                                    type="text"
                                                    placeholder="หมายเลขโทรศัพท์"
                                                    
                                                    > </b-form-input>
                                                   
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                            
                                        </b-col>
                                        <b-col md="6">
                                            <validation-provider
                                            #default="{ errors }"
                                            rules="min:0"
                                            :name="'fidcardfile'+key"
                                            >
                                                <b-form-group
                                                    :id="'fidcardfile-group'+key"
                                                    label="อัพโหลดบัตรประชาชน"
                                                    label-for="fidcardfile"
                                                
                                                >
                                                  <b-form-file
                                                    v-model="form.founders[key].idcardfile"
                                                    :state="Boolean(form.founders[key].idcardfile)"
                                                    placeholder="Choose a file or drop it here..."
                                                    drop-placeholder="Drop file here..."
                                                    ></b-form-file>
                                                   
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                        </b-col>
                                        <b-col md="12">
                                            <validation-provider
                                                #default="{ errors }"
                                                rules="min:0"
                                                :name="'isdirector'+key"
                                                >
                                                <b-form-group>
                                                    <b-form-checkbox v-model="form.founders[key].isdirector"  unchecked-value="" value="1">เป็นกรรมการบริษัท</b-form-checkbox>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                                
                                            </validation-provider>
                                        </b-col>
                                        <b-col md="12">
                                            <hr />
                                        </b-col>

                                    </b-row>
                                <b-button type="button" variant="outline-warning" class="btn-add-share mb-3" @click="add_fo">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41">
                                        <path id="icons8-add" d="M22.5,2A20.5,20.5,0,1,0,43,22.5,20.5,20.5,0,0,0,22.5,2Zm6.15,22.55h-4.1v4.1A2.051,2.051,0,0,1,22.5,30.7h0a2.051,2.051,0,0,1-2.05-2.05v-4.1h-4.1A2.051,2.051,0,0,1,14.3,22.5h0a2.051,2.051,0,0,1,2.05-2.05h4.1v-4.1A2.051,2.051,0,0,1,22.5,14.3h0a2.051,2.051,0,0,1,2.05,2.05v4.1h4.1A2.051,2.051,0,0,1,30.7,22.5h0A2.051,2.051,0,0,1,28.65,24.55Z" transform="translate(-2 -2)" fill="#fcbf10"/>
                                    </svg>

                                    เพิ่มผู้ก่อตั้ง
                                </b-button>
                                <hr />
                                <b-button type="button" variant="outline-warning" @click.prevent="backstep(4)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48.006" height="24.048" viewBox="0 0 48.006 24.048">
  <path id="icons8-up_arrow" d="M12.024,0,.664,10.508a2,2,0,1,0,2.719,2.938L10.024,7.3V45.977a2,2,0,1,0,4,0V7.3l6.641,6.145a2,2,0,1,0,2.719-2.937Z" transform="translate(0 24.048) rotate(-90)" fill="#ffc00f"/>
</svg>

                                    ย้อนกลับ
                                   
                                </b-button>
                                <b-button type="submit" variant="warning" @click.prevent="validationStep5">
                                    ถัดไป
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48.006" height="24.048" viewBox="0 0 48.006 24.048">
  <path id="icons8-up_arrow" d="M12.024,0,.664,10.508a2,2,0,1,0,2.719,2.938L10.024,7.3V45.977a2,2,0,1,0,4,0V7.3l6.641,6.145a2,2,0,1,0,2.719-2.937Z" transform="translate(48.006) rotate(90)" fill="#fff"/>
</svg>

                                </b-button>
                                
                            </b-form>
                         </validation-observer>
                    </div>
                    <div v-if="step_id==6" class="mt-3">
                        <validation-observer ref="step6" v-slot="{ handleSubmit }">
                            <b-form @submit.stop.prevent="handleSubmit(onSubmit)" method="post">
                                    
                                <b-row v-for="(direct,key) in form.director" :key="key" class="mb-3">
                                    <b-col md="10"><h5>กรรมการ {{ key+1 }}</h5></b-col>
                                    <b-col md="2" class="text-right">
                                        <b-button variant="outline-secondary" v-if="key > 0" @click="removedirector(key)">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 37 37">
                                                <defs>
                                                    <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 64 64">
                                                    <image width="64" height="64" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEbUlEQVR4nO2bT2gcVRzHP795kxoFJSGpolaMSLRY8eCfxuK5eFIQsUKN0It/mp3Z7CktiBq9qKWHbCbZgK0aELzEUknx1JNQqE31oFEoRUGwQsBsAlrDxuzMz0Nmw7JN4s5kJ9PS+Vxm3773+813vjszb96+N5CRkZFxEyNJ72BwcLAvCILnVbU7YuifxpgzxWLxQiLCQhIzwHXdW0TkpKr2bzHV58Brnuctt0JXI3YSSQFUdRSoHbwCV1R1pZlYEWkDdrH6A70KLAFvJqEzkTMgn8/3quolwAJmgBc9z7sSJcfAwMB9xpgvgb1A4Pv+w6VS6ZdWa7VanRAgCIL9dblfj3rwAKVS6XdjzBth0TLG7G+ZwDoSMUBE1m54XV1ds3HzdHR0/FhX3LklURsQ+xI4fPhwZ3t7e+d6ddVqdRDIA9i2/WDcfYS5fg0/jtq2XVyvTaVSWZyYmFiMkz+yAY7jvCQi7wJ74uwwQWZV9b2xsbFTUYJMlMaO4wyJyMfAnZGkbQ93iciBvr6+qzMzM+ebDWr6DHAcZ7eIzLLadS4Cnoj8EUNoy1HVewEX6ASqQRDsGR8fv9xMbNPPASLySq29ZVnPFovFi3HEJoXrul8DFwDbGNMPvNNMXJReoHYzm7veDh7A87wZYC4sNn3jjWJAOdzuLBQKd0eI2xYcx7mHsKtU1flm46I8Cp8BHMD4vj/tOM6Rtra236LJTIaVlZUeETlGeFMXkelmYyN1g67rTgPPRZO37Xzled4LzTaO9CRo2/bLwCSrg5vrDQU+tW37YJSgWE+Crus+DdT62kkRabrfbSWqug84FBb3eZ73bdQcsYbDxpg53/drxW9GR0cn4+TZKq7r/ktogDFm7n+ar0sig6EbicT+EAEYHh625ufn9wVB8EOpVLraWJ/P53ur1aquN84fGhq6fWlp6bHu7u7zw8PDQVIaEz0DyuXyURE5Z4y5ZoBSKBR6VPUnY8zPuVzu/sb6SqVySkTOLSwsHElSY9KXQG+4faixolqt9gA7gB0i8kBjvar2httrYlvJTX8PyAxIW0DaZAakLSBtMgPSFpA2mQFpC0ibzIC0BaRNZkDaAtImMyBtAWmTGZC2gLTJDEhbQNpkBqQtIG0yAxLOX23YrmGMqf9uvRWkG8a2kkRnhoBPgEdE5LPGiiAILorIlKqqiHy3Tuwx4JBlWSeTFJioAeFs7TMb1C0DBzaJPQGcSEjaGrEugUqlslRXvLVFWiKjqrfVPvu+/0+cHLEMKJfLZeAqgIg8FSdHi9gbbv/u6uoqb9pyA2IZMDU15avqWQBV7c/lctu+ajSfzz8qIrXVIGfjziDH7gUsyzrO6rKUNsuyTudyucfj5oqK4zhPquppoA3QIAiOx821pfcFXNf9EKifvr4ERF4aH5FdwO668kee5x2Nm2yrL0yI67pvAW+zOtW9nSwD73ue9wFbWLTVkjdGCoVCj+/7B4EngDtakXMT/gK+N8Z8MTIycl2sU8zIyMi4YfkP0StKOqaS3koAAAAASUVORK5CYII="/>
                                                    </pattern>
                                                </defs>
                                                <rect id="icons8-delete-64" width="37" height="37" rx="18.5" fill="url(#pattern)"/>
                                            </svg>

                                            ลบ
                                        </b-button>
                                    </b-col>
                                    <b-col md="2">
                                            <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            :name="'dtitle'+key"
                                            >
                                                <b-form-group
                                                    :id="'dtitle-group'+key"
                                                    label="คำนำหน้า*"
                                                    label-for="dtitle"
                                                
                                                >
                                                    <b-form-select v-model="form.director[key].title" :options="options_title" ></b-form-select>
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                           
                                        </b-col>
                                        <b-col md="5">
                                             <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            :name="'dfirstname'+key"
                                            >
                                                <b-form-group
                                                    :id="'dfirstname-group'+key"
                                                    label="ชื่อ*"
                                                    label-for="dfirstname"
                                                
                                                >
                                                 <b-form-input
                                                    :id="'dfirstname'+key"
                                                    v-model="form.director[key].firstname"
                                                    type="text"
                                                    placeholder="ชื่อ"
                                                    
                                                    > </b-form-input>
                                                   
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                            
                                        </b-col>
                                        <b-col md="5">
                                            <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            :name="'dlastname'+key"
                                            >
                                                <b-form-group
                                                    :id="'dlastname-group'+key"
                                                    label="นามสกุล*"
                                                    label-for="dlastname"
                                                
                                                >
                                                 <b-form-input
                                                    :id="'dlastname'+key"
                                                    v-model="form.director[key].lastname"
                                                    type="text"
                                                    placeholder="นามสกุล"
                                                    
                                                    >  </b-form-input>
                                                   
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                        </b-col>
                                        <b-col md="6">
                                             <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            :name="'dphone'+key"
                                            >
                                                <b-form-group
                                                    :id="'dphone-group'+key"
                                                    label="หมายเลขโทรศัพท์*"
                                                    label-for="dphone"
                                                
                                                >
                                                 <b-form-input
                                                    :id="'dphone'+key"
                                                    v-model="form.director[key].phone"
                                                    type="text"
                                                    placeholder="หมายเลขโทรศัพท์"
                                                    
                                                    > </b-form-input>
                                                   
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                            
                                        </b-col>
                                        <b-col md="6">
                                            <validation-provider
                                                #default="{ errors }"
                                                rules="min:0"
                                                :name="'issign'+key"
                                                >
                                                <b-form-group>
                                                    <b-form-checkbox v-model="form.director[key].issign"  unchecked-value="" value="1">มีอำนาจลงนาม</b-form-checkbox>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                                
                                            </validation-provider>
                                            
                                        </b-col>
                                        <b-col md="12">
                                            <hr />
                                        </b-col>
                                        

                                </b-row>
                                <b-button type="button" variant="outline-warning" class="btn-add-share mb-3" @click="add_director">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41">
                                        <path id="icons8-add" d="M22.5,2A20.5,20.5,0,1,0,43,22.5,20.5,20.5,0,0,0,22.5,2Zm6.15,22.55h-4.1v4.1A2.051,2.051,0,0,1,22.5,30.7h0a2.051,2.051,0,0,1-2.05-2.05v-4.1h-4.1A2.051,2.051,0,0,1,14.3,22.5h0a2.051,2.051,0,0,1,2.05-2.05h4.1v-4.1A2.051,2.051,0,0,1,22.5,14.3h0a2.051,2.051,0,0,1,2.05,2.05v4.1h4.1A2.051,2.051,0,0,1,30.7,22.5h0A2.051,2.051,0,0,1,28.65,24.55Z" transform="translate(-2 -2)" fill="#fcbf10"/>
                                    </svg>

                                    เพิ่มกรรมการ
                                </b-button>
                                <h5>อำนาจกรรมการ</h5>
                                <b-row>
                                    <b-col md="12">
                                        <b-form-radio class="pr-2" v-model="form.director_power" name="director_power" value="not_specified">อำนาจกรรมการแบบไม่ระบุชื่อกรรมการที่มีอำนาจลงนาม</b-form-radio>
                                            
                                    </b-col>
                                   
                                    <b-col md="12">
                                        <div style="padding-left:35px;">โปรดระบุจำนวนกรรมการที่ต้องลงลายมือชื่อเพื่อผูกพันบริษัท</div>
                                        
                                    </b-col>
                                    <b-col md="12"  >
                                        <div style="padding-left:35px;" class="form-flex">
                                            <span>กรรมการ </span>
                                            <b-form-input
                                                    id="director_count"
                                                    v-model="form.director_count"
                                                    type="text"
                                                    placeholder="จำนวน"
                                                    style="width:250px; "
                                                
                                                    
                                            ></b-form-input> 
                                            <span style="padding-left:10px">คน ลงลายมือชื่อ</span>
                                        </div>
                                    </b-col>
                                    <b-col md="12">
                                        <b-form-radio class="pr-2" v-model="form.director_power" name="director_power" value="specified">อำนาจกรรมการแบบระบุชื่อกรรมการที่มีอำนาจลงนาม</b-form-radio>
                                            
                                    </b-col>
                                    <b-col md="6" class="mt-2">
                                        <div style="padding-left:35px;">
                                             <validation-provider
                                                #default="{ errors }"
                                                rules="min:0"
                                                name="specify_director"
                                                >
                                                    <b-form-group
                                                        id="specify_director"
                                                        label="โปรดระบุอำนาจกรรมการ"
                                                        label-for="specify_director"
                                                    
                                                    >
                                                    <b-form-input
                                                        id="specify_director"
                                                        v-model="form.specify_director"
                                                        type="text"
                                                        placeholder="อำนาจกรรมการ"
                                                        
                                                        > </b-form-input>
                                                    
                                                        <small class="text-danger">{{ errors[0] }}</small>
                                                    </b-form-group>
                                                </validation-provider>
                                                
                                        </div>
                                        
                                    </b-col>
                                </b-row>

                                <hr />
                                <b-button type="button" variant="outline-warning" @click.prevent="backstep(5)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48.006" height="24.048" viewBox="0 0 48.006 24.048">
  <path id="icons8-up_arrow" d="M12.024,0,.664,10.508a2,2,0,1,0,2.719,2.938L10.024,7.3V45.977a2,2,0,1,0,4,0V7.3l6.641,6.145a2,2,0,1,0,2.719-2.937Z" transform="translate(0 24.048) rotate(-90)" fill="#ffc00f"/>
</svg>

                                    ย้อนกลับ
                                   
                                </b-button>
                                <b-button type="submit" variant="warning" @click.prevent="validationStep6">
                                    ถัดไป
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48.006" height="24.048" viewBox="0 0 48.006 24.048">
  <path id="icons8-up_arrow" d="M12.024,0,.664,10.508a2,2,0,1,0,2.719,2.938L10.024,7.3V45.977a2,2,0,1,0,4,0V7.3l6.641,6.145a2,2,0,1,0,2.719-2.937Z" transform="translate(48.006) rotate(90)" fill="#fff"/>
</svg>

                                </b-button>
                            </b-form>
                         </validation-observer>
                    </div>
                    <div v-if="step_id==7" class="mt-3">
                        
                        <validation-observer ref="step7" v-slot="{ handleSubmit }">
                            <b-form @submit.stop.prevent="handleSubmit(onSubmit)" method="post">
                                <b-row>
                                    <b-col md="6">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            name="meeting_date"
                                            >
                                            <b-form-group
                                                id="meeting_date"
                                                label="วันที่*"
                                                label-for="meeting_date"
                                            
                                            >
                                            <b-form-datepicker id="meeting_date" v-model="form.meeting_date" class="mb-2" ></b-form-datepicker>
                                               
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                        </validation-provider>

                                    </b-col>
                                     <b-col md="6">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            name="meeting_time"
                                            >
                                            <b-form-group
                                                id="meeting_time"
                                                label="เวลา*"
                                                label-for="meeting_time"
                                            
                                            >
                                            <b-form-timepicker
                                            id="meeting_time"
                                             v-model="form.meeting_time"
                                            ></b-form-timepicker>
                                            
                                               
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                        </validation-provider>

                                    </b-col>
                                    <b-col md="2">
                                        <h5>สถานที่</h5>
                                    </b-col>
                                    <b-col md="10">
                                        <b-form-checkbox
                                            id="same_address"
                                            v-model="form.same_address"
                                            name="same_address"
                                            value="yes"
                                            unchecked-value="no"
                                            @change="chage_sameaddress"
                                            >
                                           ใช้ข้อมูลสถานที่ตั้งสำนักงาน
                                        </b-form-checkbox>
                                        
                                    </b-col>
                                    <b-col md="3">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            name="meeting_addess_no"
                                            >
                                            <b-form-group
                                                id="meeting_addess_no-group"
                                                label="บ้านเลขที่*"
                                                label-for="meeting_addess_no"
                                            
                                            >
                                                <b-form-input
                                                id="meeting_addess_no"
                                                v-model="form.meeting_addess_no"
                                                type="text"
                                                placeholder="บ้านเลขที่*"
                                                
                                                ></b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>
                                    </b-col>
                                    <b-col md="3">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="min:0"
                                            name="meeting_building"
                                            >
                                            <b-form-group
                                                id="meeting_building-group"
                                                label="อาคาร"
                                                label-for="meeting_building"
                                            
                                            >
                                                <b-form-input
                                                id="meeting_building"
                                                v-model="form.meeting_building"
                                                type="text"
                                                placeholder="อาคาร"
                                                
                                                ></b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>
                                    </b-col>
                                    <b-col md="3">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="min:0"
                                            name="meeting_level"
                                            >
                                            <b-form-group
                                                id="meeting_level-group"
                                                label="ชั้น"
                                                label-for="meeting_level"
                                            
                                            >
                                                <b-form-input
                                                id="meeting_level"
                                                v-model="form.meeting_level"
                                                type="text"
                                                placeholder="ขั้น"
                                                
                                                ></b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>
                                    </b-col>
                                    <b-col md="3">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="min:0"
                                            name="meeting_room_no"
                                            >
                                            <b-form-group
                                                id="meeting_room_no-group"
                                                label="ห้องเลขที่"
                                                label-for="meeting_room_no"
                                            
                                            >
                                                <b-form-input
                                                id="meeting_room_no"
                                                v-model="form.meeting_room_no"
                                                type="text"
                                                placeholder="ห้องเลขที่"
                                                
                                                ></b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>
                                    </b-col>
                                    <b-col md="6">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="min:0"
                                            name="meeting_soi"
                                            >
                                            <b-form-group
                                                id="meeting_soi-group"
                                                label="ซอย"
                                                label-for="meeting_soi"
                                            
                                            >
                                                <b-form-input
                                                id="soi"
                                                v-model="form.meeting_soi"
                                                type="text"
                                                placeholder="ซอย"
                                                
                                                ></b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>
                                    </b-col>
                                    <b-col md="6">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="min:0"
                                            name="meeting_road"
                                            >
                                            <b-form-group
                                                id="meeting_road-group"
                                                label="ถนน"
                                                label-for="meeting_road"
                                            
                                            >
                                                <b-form-input
                                                id="meeting_road"
                                                v-model="form.meeting_road"
                                                type="text"
                                                placeholder="ถนน"
                                                
                                                ></b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>
                                    </b-col>
                                    <b-col md="6">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            name="meeting_province"
                                            >
                                            <b-form-group
                                                id="meeting_province-group"
                                                label="จังหวัด*"
                                                label-for="meeting_province"
                                            
                                            >
                                                <b-form-input
                                                id="meeting_rovice"
                                                v-model="form.meeting_province"
                                                type="text"
                                                placeholder="จังหวัด"
                                                
                                                ></b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>

                                    </b-col>
                                    <b-col md="6">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            name="meeting_states"
                                            >
                                            <b-form-group
                                                id="meeting_states-group"
                                                label="เขต/อำเภอ*"
                                                label-for="meeting_states"
                                            
                                            >
                                                <b-form-input
                                                id="meeting_states"
                                                v-model="form.meeting_states"
                                                type="text"
                                                placeholder="เขต/อำเภอ"
                                                
                                                ></b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>

                                    </b-col>
                                    <b-col md="6">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            name="meeting_city"
                                            >
                                            <b-form-group
                                                id="meeting_city-group"
                                                label="แขวง/ตำบล*"
                                                label-for="meeting_city"
                                            
                                            >
                                                <b-form-input
                                                id="meeting_city"
                                                v-model="form.meeting_city"
                                                type="text"
                                                placeholder="แขวง/ตำบล"
                                                
                                                ></b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>

                                    </b-col>
                                    <b-col md="6">
                                        <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            name="meeting_postcode"
                                            >
                                            <b-form-group
                                                id="meeting_postcode-group"
                                                label="รหัสไปรษณีย์*"
                                                label-for="postcode"
                                            
                                            >
                                                <b-form-input
                                                id="postcode"
                                                v-model="form.meeting_postcode"
                                                type="text"
                                                placeholder="รหัสไปรษณีย์"
                                                
                                                ></b-form-input>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                            
                                        </validation-provider>

                                    </b-col>
                                    <b-col md="12">
                                        <hr />
                                    </b-col>
                                    <b-col md="12">
                                        <h5>ประธานที่ประชุม</h5>
                                    </b-col>
                                    <b-col md="2">
                                        <validation-provider
                                        #default="{ errors }"
                                        rules="required"
                                        name="president_title"
                                        >
                                            <b-form-group
                                                id="president_title"
                                                label="คำนำหน้า*"
                                                label-for="president_title"
                                            
                                            >
                                                <b-form-select v-model="form.president_title" :options="options_title" ></b-form-select>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                        </validation-provider>
                                        
                                    </b-col>
                                        <b-col md="5">
                                             <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            name="president_firstname"
                                            >
                                                <b-form-group
                                                    id="president_firstname-group"
                                                    label="ชื่อ*"
                                                    label-for="president_firstname"
                                                
                                                >
                                                 <b-form-input
                                                    id="president_firstname"
                                                    v-model="form.president_firstname"
                                                    type="text"
                                                    placeholder="ชื่อ"
                                                    
                                                    > </b-form-input>
                                                   
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                            
                                        </b-col>
                                        <b-col md="5">
                                            <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            name="'president_lastname'"
                                            >
                                                <b-form-group
                                                    id="president_lastname-group"
                                                    label="นามสกุล*"
                                                    label-for="president_lastname"
                                                
                                                >
                                                 <b-form-input
                                                    id="president_lastname"
                                                    v-model="form.president_lastname"
                                                    type="text"
                                                    placeholder="นามสกุล"
                                                    
                                                    >  </b-form-input>
                                                   
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                        </b-col>
                                        <b-col md="12"><hr /></b-col>
                                        <b-col md="12"><h5>จำนวนเงินที่ผู้ก่อตั้งได้ใช้จ่ายไปเพื่อประโยชน์ของบริษัทก่อนวันจดทะเบียนจัดตั้งบริษัท</h5></b-col>
                                      
                                        <b-col md="12" class="form-flex">
                                            <b-form-checkbox v-model="form.payment_register" class="pr-3"  unchecked-value="" value="1">มี</b-form-checkbox>
                                         
                                          <validation-provider
                                            #default="{ errors }"
                                            rules="numeric"
                                            name="payment_price"
                                            >
                                            <b-form-group
                                                id="payment_price-group"
                                               
                                                label-for="payment_price"
                                            
                                            >
                                                <b-form-input
                                                id="payment_price"
                                                v-model="form.payment_price"
                                                type="text"
                                                placeholder="จำนวน"
                                             
                                                
                                                > </b-form-input>
                                                
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                        </validation-provider>
                                        <div>บาท</div>
                                    </b-col>
                                    <b-col md="12" >
                                         <validation-provider
                                            #default="{ errors }"
                                            rules="min:0"
                                            name="payment_detial"
                                            >
                                            <b-form-group
                                                id="payment_detial-group"
                                               
                                                label-for="payment_detial"
                                            
                                            >
                                                <b-form-input
                                                id="payment_detial"
                                                v-model="form.payment_detial"
                                                type="text"
                                                placeholder="โปรดระบบุรายละเอียด"
                                             
                                                
                                                > </b-form-input>
                                                
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                        </validation-provider>
                                    </b-col>
                                     <b-col md="12"><hr /></b-col>
                                    <b-col md="12"><h5>ค่าใช้จ่ายในการจัดตั้งบริษัท</h5></b-col>
                                    <b-col md="12" class="form-flex">
                                         <div class="mr-3">กำหนดค่าใช้จ่ายในการจัดตั้งบริษัทจำนวน*</div>
                                         
                                          <validation-provider
                                            #default="{ errors }"
                                            rules="required|numeric"
                                            name="expenses"
                                            >
                                            <b-form-group
                                                id="expenses-group"
                                               
                                                label-for="expenses"
                                            
                                            >
                                                <b-form-input
                                                id="expenses"
                                                v-model="form.expenses"
                                                type="text"
                                                placeholder="จำนวน"
                                             
                                                
                                                > </b-form-input>
                                                
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                        </validation-provider>
                                        <div>บาท</div>
                                    </b-col>
                                    <b-col md="12"><hr /></b-col>
                                    <b-col md="2">
                                        <h5>ข้อบังคับบริษัท</h5>
                                    </b-col>
                                    <b-col md="10">
                                        <b-form-checkbox
                                            id="same_address"
                                            v-model="form.standard_rule"
                                            name="standard_rule"
                                            value="yes"
                                            unchecked-value=""
                                           
                                            >
                                             ใช้ข้อบังคับมาตรฐาน <small>ดูข้อบังคับแบบมาตรฐาน ที่นี่</small>
                                        </b-form-checkbox>
                                        
                                    </b-col>
                                    <b-col  md="4">อัพโหลดไฟล์ข้อบังคับแบบกำหนดเอง</b-col>
                                    <b-col md="8" >
                                        
                                        <b-form-file
                                           disabled
                                            ></b-form-file>
                                    </b-col>
                                    <b-col md="12"><hr /></b-col>
                                    <b-col md="12">
                                        <h5>รอบปีบัญชี</h5>
                                    </b-col>
                                    <b-col md="12" class="form-flex">
                                         <div class="mr-5">รอบปีบัญชีของบริษัทเริ่มต้นวันที่*</div>
                                         
                                          <validation-provider
                                            #default="{ errors }"
                                            rules="required|numeric"
                                            name="blling_day"
                                            >
                                            <b-form-group
                                                id="blling_day-group"
                                               
                                                label-for="blling_day"
                                            
                                            >
                                                <b-form-input
                                                id="blling_day"
                                                v-model="form.blling_day"
                                                type="text"
                                                placeholder="วันที่"
                                             
                                                
                                                > </b-form-input>
                                                
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                        </validation-provider>
                                         <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            name="blling_month"
                                            >
                                            <b-form-group
                                                id="blling_month-group"
                                               
                                                label-for="blling_month"
                                            
                                            >
                                                <b-form-input
                                                id="blling_month"
                                                v-model="form.blling_month"
                                                type="text"
                                                placeholder="เดือน"
                                             
                                                
                                                > </b-form-input>
                                                
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                        </validation-provider>
                                        
                                        <div class="pl-5">ของทุกปี</div>
                                    </b-col>
                                   <b-col md="12"><hr /></b-col>
                                    <b-col md="2">
                                        <h5>ผู้สอบบัญชี</h5>
                                    </b-col>
                                    <b-col md="10">
                                        <b-form-checkbox
                                            id="isauditor"
                                            v-model="form.isauditor"
                                            name="isauditor"
                                            value="yes"
                                            unchecked-value=""
                                           
                                            >
                                            ใช้บริการผู้สอบบัญชี
                                        </b-form-checkbox>
                                        
                                    </b-col>
                                    <b-col md="2">
                                        <validation-provider
                                        #default="{ errors }"
                                        rules="required"
                                        name="auditor_title"
                                        >
                                            <b-form-group
                                                id="auditor_title"
                                                label="คำนำหน้า*"
                                                label-for="auditor_title"
                                            
                                            >
                                                <b-form-select v-model="form.auditor_title" :options="options_title" ></b-form-select>
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                        </validation-provider>
                                        
                                    </b-col>
                                        <b-col md="5">
                                             <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            name="auditor_firstname"
                                            >
                                                <b-form-group
                                                    id="auditor_firstname-group"
                                                    label="ชื่อ*"
                                                    label-for="auditor_firstname"
                                                
                                                >
                                                 <b-form-input
                                                    id="auditor_firstname"
                                                    v-model="form.auditor_firstname"
                                                    type="text"
                                                    placeholder="ชื่อ"
                                                    
                                                    > </b-form-input>
                                                   
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                            
                                        </b-col>
                                        <b-col md="5">
                                            <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            name="'auditor_lastname'"
                                            >
                                                <b-form-group
                                                    id="auditor_lastname-group"
                                                    label="นามสกุล*"
                                                    label-for="auditor_lastname"
                                                
                                                >
                                                 <b-form-input
                                                    id="auditor_lastname"
                                                    v-model="form.auditor_lastname"
                                                    type="text"
                                                    placeholder="นามสกุล"
                                                    
                                                    >  </b-form-input>
                                                   
                                                    <small class="text-danger">{{ errors[0] }}</small>
                                                </b-form-group>
                                            </validation-provider>
                                        </b-col>
                                        <b-col md="12" class="form-flex">
                                         <div class="mr-5">เลขที่ใบอนุญาต*</div>
                                            
                                          <validation-provider
                                            #default="{ errors }"
                                            rules="required"
                                            name="license_number"
                                            >
                                            <b-form-group
                                                id="license_number-group"
                                               
                                                label-for="license_number"
                                            
                                            >
                                                <b-form-input
                                                id="license_number"
                                                v-model="form.license_number"
                                                type="text"
                                                placeholder="เลขที่ใบอนุญาต"
                                             
                                                
                                                > </b-form-input>
                                                
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                        </validation-provider>
                                        <div class="pl-5 pr-3">กำหนดค่าตอบแทน*</div>
                                         <validation-provider
                                            #default="{ errors }"
                                            rules="required|numeric"
                                            name="compensation"
                                            >
                                            <b-form-group
                                                id="compensation-group"
                                               
                                                label-for="compensation"
                                            
                                            >
                                                <b-form-input
                                                id="compensation"
                                                v-model="form.compensation"
                                                type="text"
                                                placeholder="บาท"
                                             
                                                
                                                > </b-form-input>
                                                
                                                <small class="text-danger">{{ errors[0] }}</small>
                                            </b-form-group>
                                        </validation-provider>
                                        
                                        <div class="pl-3">บาท</div>
                                    </b-col>
                                </b-row>
                                 <hr />
                                  <b-button type="button" variant="outline-warning" @click.prevent="backstep(6)">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48.006" height="24.048" viewBox="0 0 48.006 24.048">
                                            <path id="icons8-up_arrow" d="M12.024,0,.664,10.508a2,2,0,1,0,2.719,2.938L10.024,7.3V45.977a2,2,0,1,0,4,0V7.3l6.641,6.145a2,2,0,1,0,2.719-2.937Z" transform="translate(0 24.048) rotate(-90)" fill="#ffc00f"/>
                                        </svg>

                                        ย้อนกลับ
                                        
                                </b-button>
                                <b-button type="submit" variant="warning" @click.prevent="validationStep7">
                                    NextStep
                                    

                                </b-button>
                            </b-form>
                        </validation-observer>
                      
                    </div>
                    <div v-if="step_id==8" class="mt-3">
                        <h5>ข้อมูลบริษัท</h5>
                       
                    
                       
                                <b-form-group
                                id="company_th-group"
                                label="ชื่อบริษัท (ภาษาไทย) *"
                                label-for="company_th"
                                
                            >
                              {{ form.company_th }}
                                
                            </b-form-group>
                            
                        
                       
                                <b-form-group
                                id="company_en-group"
                                label="ชื่อบริษัท (ภาษาอังกฤษ) *"
                                label-for="company_en"
                                
                            >
                               {{ form.company_en }}
                            </b-form-group>
                            
                        
                      
                                <b-form-group
                                id="stamp-group"
                                label="ตราประทับ"
                                label-for="stamp"
                                   
                                
                            >
                             {{ form.stamp?'มี':'ไม่มี'}}
                            </b-form-group>
                            
                       
                        
                        
                        
                       
                            <b-form-group label="วัตถุประสงค์บริษัท*" >
                                 {{ form.objective }}
                            </b-form-group>
                            
                       

                               
                               
                                
                               
                         <hr />
                          <h5>ที่ตั้งสำนักงาน</h5>
                        <b-row>
                            <b-col md="3">
                               
                                    <b-form-group
                                        id="addess_no-group"
                                        label="บ้านเลขที่*"
                                        label-for="addess_no"
                                    
                                    >
                                       {{ form.addess_no }}
                                      
                                    </b-form-group>
                                    
                              
                            </b-col>
                            <b-col md="3">
                               
                                    <b-form-group
                                        id="building-group"
                                        label="อาคาร"
                                        label-for="building"
                                    
                                    >
                                       {{ form.building }}
                                    </b-form-group>
                                    
                               
                            </b-col>
                            <b-col md="3">
                               
                                    <b-form-group
                                        id="level-group"
                                        label="ชั้น"
                                        label-for="level"
                                    
                                    >
                                      {{ form.level }}
                                    </b-form-group>
                                    
                                
                            </b-col>
                            <b-col md="3">
                                
                                    <b-form-group
                                        id="room_no-group"
                                        label="ห้องเลขที่"
                                        label-for="room_no"
                                    
                                    >
                                      {{ form.room_no }}
                                    </b-form-group>
                                    
                                
                            </b-col>
                            <b-col md="6">
                               
                                    <b-form-group
                                        id="soi-group"
                                        label="ซอย"
                                        label-for="soi"
                                    
                                    >
                                       {{ form.soi }}
                                    </b-form-group>
                                    
                                
                            </b-col>
                            <b-col md="6">
                               
                                    <b-form-group
                                        id="road-group"
                                        label="ถนน"
                                        label-for="road"
                                    
                                    >
                                       {{ form.road }}
                                    </b-form-group>
                                    
                               
                            </b-col>
                            <b-col md="6">
                               
                                    <b-form-group
                                        id="province-group"
                                        label="จังหวัด*"
                                        label-for="province"
                                    
                                    >
                                    {{ form.province }}
                                    </b-form-group>
                                    
                                

                            </b-col>
                            <b-col md="6">
                               
                                    <b-form-group
                                        id="province-group"
                                        label="เขต/อำเภอ*"
                                        label-for="states"
                                    
                                    >
                                       {{ form.states }}
                                    </b-form-group>
                                    
                                

                            </b-col>
                            <b-col md="6">
                               
                                    <b-form-group
                                        id="city-group"
                                        label="แขวง/ตำบล*"
                                        label-for="city"
                                    
                                    >
                                       {{ form.city }}
                                    </b-form-group>
                                    
                                

                            </b-col>
                            <b-col md="6">
                               
                                    <b-form-group
                                        id="postcode-group"
                                        label="รหัสไปรษณีย์*"
                                        label-for="postcode"
                                    
                                    >
                                       {{ form.postcode }}
                                    </b-form-group>
                                    
                                
                            </b-col>
                            <b-col md="6">
                               
                                    <b-form-group
                                        id="copy_house-group"
                                        label="สำเนาทะเบียนบ้านของที่ตั้งสำนักงาน"
                                        label-for="copy_house"
                                        
                                    
                                    >
                                     {{ form.copy_house }}
                                    </b-form-group>
                                    
                                
                            </b-col>
                            <b-col md="6"></b-col>
                            <b-col md="6">
                              
                                    <b-form-group
                                        id="phone-group"
                                        label="โทรศัพท์*"
                                        label-for="phone"
                                    
                                    >
                                        {{ form.phone }}
                                    </b-form-group>
                                    
                              

                            </b-col>
                            <b-col md="6">
                               
                                    <b-form-group
                                        id="email-group"
                                        label="อีเมล*"
                                        label-for="email"
                                    
                                    >
                                        {{ form.email }}
                                    </b-form-group>
                                    
                                

                            </b-col>
                           
                            
                        </b-row>
                        <hr />
                        <h5>ทุนจดทะเบียน</h5>
                        <b-row>
                            <b-col md="6">
                                   
                                    <b-form-group
                                        id="amount_cap-group"
                                        label="ทุนจดทะเบียนบริษัทกําหนดไว้เป็นจํานวน (บาท)*"
                                        label-for="amount_cap"
                                    
                                    >
                                       {{ form.amount_cap }}
                                    </b-form-group>
                                    
                               
                                
                            </b-col>
                            <b-col md="6">
                                   
                                    <b-form-group
                                        id="share_value-group"
                                        label="มูลค่าหุ้น(บาท ต่อ หุ้น)*"
                                        label-for="share_value"
                                    
                                    >
                                       {{ form.share_value }}
                                    </b-form-group>
                                    
                               
                            </b-col>
                            <b-col md="6" class="form-flex">
                                <span>จำนวนหุ้นทั้งหมด</span>
                                <span style="padding-left:10px;">{{ form.share_total }}</span>
                                <span style="padding-left:10px">หุ้น แบ่งออกเป็น</span>  
                            </b-col>
                            
                            <b-col md="6" class="form-flex">
                                <span>หุ้นสามัญจำนวน</span>
                                <span style="padding-left:10px;">{{ form.ordinary_total }}</span>
                              
                                <span style="padding-left:10px">หุ้น</span>
                            </b-col>
                            <b-col md="6"></b-col>
                            <b-col md="6" class="form-flex">
                                
                                <span>หุ้นบุริมสิทธิ์จำนวน</span>
                                 <span style="padding-left:10px;">{{ form.number_share_pre }}</span>
                               
                                <span style="padding-left:10px">หุ้น</span>
                            </b-col>
                            <b-col md="6" class="form-flex">
                                
                                <span>ชำระหุ้นแล้วร้อยละ</span>
                                <span style="padding-left:10px;">{{ form.payment_percent }}</span>
                                   
                                
                                <span>ของทุนจุดทะเบียน</span>
                            </b-col>
                            <b-col md="6" class="form-flex">
                                
                                <span>คิดเป็นจำนวนเงิน</span>
                                <span style="padding-left:10px;">{{ form.payment_amount }}</span>
                                
                                <span style="padding-left:10px">บาท</span>
                            </b-col>
                        </b-row>
                        <hr />
                        <h5>ผู้ถือหุ้น</h5>
                         <b-row v-for="(shareholder,key) in form.shareholders" :key="key" class="mb-3">
                                    <b-col md="12"><h5>ผู้ถื้อหุ้น {{ key+1 }}</h5></b-col>
                                   
                                    <b-col md="12">
                                         
                                            <b-form-group
                                               
                                               
                                              
                                                name="radio-options"
                                            >
                                            <div  class="radio-flex">
                                                

                                                <b-form-radio v-model="form.shareholders[key].type_value" :name="'title['+key+']'" disabled value="บุคคลธรรมดา">บุคคลธรรมดา</b-form-radio>
                                                <b-form-radio v-model="form.shareholders[key].type_value"  :name="'title['+key+']'" disabled value="นิติบุคคล">นิติบุคคล</b-form-radio>
                                            </div>
                                            </b-form-group>
                                            
                                    </b-col>
                                    <template v-if="form.shareholders[key].type_value=='บุคคลธรรมดา'">
                                        <b-col md="2">
                                           
                                                <b-form-group
                                                    :id="'title-group'+key"
                                                    label="คำนำหน้า*"
                                                    label-for="title"
                                                
                                                >
                                                   {{ form.shareholders[key].title }}
                                                   
                                                </b-form-group>
                                          
                                           
                                        </b-col>
                                        <b-col md="5">
                                            
                                                <b-form-group
                                                    :id="'firstname-group'+key"
                                                    label="ชื่อ*"
                                                    label-for="firstname"
                                                
                                                >
                                                 {{ form.shareholders[key].firstname }}
                                                   
                                                
                                                </b-form-group>
                                            
                                            
                                        </b-col>
                                        <b-col md="5">
                                           
                                                <b-form-group
                                                    :id="'lastname-group'+key"
                                                    label="นามสกุล*"
                                                    label-for="lastname"
                                                
                                                >
                                                {{ form.shareholders[key].lastname }}
                                                   
                                                   
                                                </b-form-group>
                                            
                                        </b-col>
                                        <b-col md="6">
                                             
                                                <b-form-group
                                                    :id="'idcard-group'+key"
                                                    label="เลขบัตรประชาชน*"
                                                    label-for="idcard"
                                                
                                                >
                                                 {{ form.shareholders[key].idcard }}
                                                   
                                                   
                                                </b-form-group>
                                           
                                            
                                        </b-col>
                                        <b-col md="6">
                                            
                                                <b-form-group
                                                    :id="'occupation-group'+key"
                                                    label="อาชีพ*"
                                                    label-for="occupation"
                                                
                                                >
                                                 {{ form.shareholders[key].occupation }}
                                                   
                                                 
                                                </b-form-group>
                                           
                                        </b-col>
                                        <b-col md="6">
                                             
                                                <b-form-group
                                                    :id="'phone-group'+key"
                                                    label="หมายเลขโทรศัพท์*"
                                                    label-for="phone"
                                                
                                                >
                                                 {{  form.shareholders[key].phone }}
                                                   
                                                   
                                                </b-form-group>
                                            
                                            
                                        </b-col>
                                        <b-col md="6">
                                            
                                                <b-form-group
                                                    :id="'idcardfile-group'+key"
                                                    label="อัพโหลดบัตรประชาชน"
                                                    label-for="idcardfile"
                                                
                                                >
                                                  {{ form.shareholders[key].idcardfile }}
                                                   
                                                    
                                                </b-form-group>
                                            
                                        </b-col>
                                    </template>
                                    <template v-else>
                                        <b-col md="8">
                                            
                                                <b-form-group
                                                    :id="'legal_name-group'+key"
                                                    label="ชื่อนิติบุคคล*"
                                                    label-for="legal_name"
                                                
                                                >
                                                {{ form.shareholders[key].legal_name }}
                                                   
                                                   
                                                </b-form-group>
                                           
                                            
                                        </b-col>
                                        <b-col md="4">
                                            
                                                <b-form-group
                                                    :id="'legal_number-group'+key"
                                                    label="เลขทะเบียนนิติบุคคล*"
                                                    label-for="legal_number"
                                                
                                                >
                                                  {{ form.shareholders[key].legal_number }}
                                                   
                                                   
                                                </b-form-group>
                                            
                                        </b-col>
                                        <b-col md="6">
                                            
                                                <b-form-group
                                                    :id="'legal_phone-group'+key"
                                                    label="หมายเลขโทรศัพท์*"
                                                    label-for="legal_phone"
                                                
                                                >
                                                 {{ form.shareholders[key].legal_phone }}
                                                </b-form-group>
                                           
                                        </b-col>
                                        <b-col md="6">
                                            
                                                <b-form-group
                                                    :id="'legal_file-group'+key"
                                                    label="อัพโหลดหนังสือรับรอง"
                                                    label-for="legal_file"
                                                
                                                >
                                                  {{ form.shareholders[key].legal_file }}
                                                   
                                                    
                                                </b-form-group>
                                          
                                        </b-col>
                                        <b-col md="12" >
                                            ชื่อกรรมการผู้มัอำนาจลงนาม
                                            <b-row v-for="(value,k) in form.shareholders[key].legal_people" :key="'child'+k">
                                                <b-col md="3">
                                                     
                                                            <b-form-group
                                                                :id="'title-group'+key"
                                                                label="คำนำหน้า*"
                                                                label-for="title"
                                                            
                                                            >
                                                               {{ form.shareholders[key].legal_people[k].title }}
                                                               
                                                            </b-form-group>
                                                        
                                                </b-col>
                                                <b-col md="4">
                                                    
                                                            <b-form-group
                                                                :id="'firstname-group'+key+'_'+k"
                                                                label="ชื่อ*"
                                                                label-for="firstname"
                                                            
                                                            >
                                                            {{ form.shareholders[key].legal_people[k].firstname }}
                                                            
                                                                
                                                            </b-form-group>
                                                       
                                                </b-col>
                                                <b-col md="5">
                                                   
                                                            <b-form-group
                                                                :id="'lastname-group'+key+'_'+k"
                                                                label="นามสกุล*"
                                                                label-for="lastname"
                                                            
                                                            >
                                                           {{ form.shareholders[key].legal_people[k].lastname }}
                                                            
                                                                
                                                            </b-form-group>
                                                       
                                                </b-col>
                                               
                                            </b-row>
                                           
                                        </b-col>
                                        
                                    </template>
                                    <b-col md="6" class="form-flex">
                                         <b-form-radio class="pr-2" v-model="form.shareholders[key].type_share" :name="'shareholders['+key+']'" disabled value="ผู้ถือหุ้นสามัญ">ผู้ถือหุ้นสามัญ*</b-form-radio>
                                         
                                            <b-form-group
                                                :id="'sharevalue-group'+key"
                                               
                                                label-for="sharevalue"
                                            
                                            >
                                                {{ form.shareholders[key].sharevalue }}
                                                
                                               
                                            </b-form-group>
                                       
                                        <div>หุ้น</div>
                                    </b-col>
                                    <b-col md="6" class="form-flex">
                                         <div class="pr-2">ชำระค่าหุ้นแล้ว</div>
                                       
                                         
                                            <b-form-group
                                                :id="'shareprice-group'+key"
                                               
                                                label-for="shareprice"
                                            
                                            >
                                                {{ form.shareholders[key].shareprice }}
                                                
                                               
                                            </b-form-group>
                                       
                                         บาท
                                    </b-col>
                                    <b-col md="6">
                                    </b-col>
                                    <b-col md="6" class="form-flex">
                                        <b-form-checkbox v-model="form.shareholders[key].sharepayment" value="cash" aria-readonly="true" class="pr-2">ด้วยเงิน</b-form-checkbox>
                                        <b-form-checkbox v-model="form.shareholders[key].sharepayment" value="labor" disabled>ด้วยทรัพย์สิน/แรงงาน</b-form-checkbox>
                                    </b-col>
                                    <b-col md="6" class="form-flex disabled">
                                         <b-form-radio class="pr-2" v-model="form.shareholders[key].type_share" :name="'shareholders['+key+']'" disabled value="ถือหุ้นบุริมสิทธิ์">ถือหุ้นบุริมสิทธิ์</b-form-radio>
                                          
                                            <b-form-group
                                                
                                               
                                              
                                                class="pr-2"
                                            
                                            >
                                               -
                                                
                                               
                                            </b-form-group>
                                       
                                        <div>หุ้น</div>
                                    </b-col>
                                    <b-col md="6" class="form-flex">
                                         <div class="pr-2">ชำระค่าหุ้นแล้ว</div>
                                       
                                            <b-form-group
                                               
                                            class="pr-2"
                                            >
                                                -
                                                
                                               
                                            </b-form-group>
                                        
                                         บาท
                                    </b-col>
                                    <b-col md="6">
                                    </b-col>
                                    <b-col md="6" class="form-flex">
                                        <b-form-checkbox  value="cash" disabled class="pr-2">ด้วยเงิน</b-form-checkbox>
                                        <b-form-checkbox value="labor" disabled>ด้วยทรัพย์สิน/แรงงาน</b-form-checkbox>
                                    </b-col>
                                    <b-col md="12">
                                        <hr />
                                    </b-col>
                                    
                        </b-row>
                       
                        <h5>ผู้ก่อตั้ง</h5>
                         <b-row v-for="(founder,key) in form.founders" :key="key" class="mb-3">
                        <b-col md="10"><h5>ผู้ก่อตั้งคนที่ {{ key+1 }}</h5></b-col>
                        <b-col md="2" class="text-right">
                            <b-button variant="outline-secondary" v-if="key > 2" @click="removefounder(key)">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20" viewBox="0 0 37 37">
                                    <defs>
                                        <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 64 64">
                                        <image width="64" height="64" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEbUlEQVR4nO2bT2gcVRzHP795kxoFJSGpolaMSLRY8eCfxuK5eFIQsUKN0It/mp3Z7CktiBq9qKWHbCbZgK0aELzEUknx1JNQqE31oFEoRUGwQsBsAlrDxuzMz0Nmw7JN4s5kJ9PS+Vxm3773+813vjszb96+N5CRkZFxEyNJ72BwcLAvCILnVbU7YuifxpgzxWLxQiLCQhIzwHXdW0TkpKr2bzHV58Brnuctt0JXI3YSSQFUdRSoHbwCV1R1pZlYEWkDdrH6A70KLAFvJqEzkTMgn8/3quolwAJmgBc9z7sSJcfAwMB9xpgvgb1A4Pv+w6VS6ZdWa7VanRAgCIL9dblfj3rwAKVS6XdjzBth0TLG7G+ZwDoSMUBE1m54XV1ds3HzdHR0/FhX3LklURsQ+xI4fPhwZ3t7e+d6ddVqdRDIA9i2/WDcfYS5fg0/jtq2XVyvTaVSWZyYmFiMkz+yAY7jvCQi7wJ74uwwQWZV9b2xsbFTUYJMlMaO4wyJyMfAnZGkbQ93iciBvr6+qzMzM+ebDWr6DHAcZ7eIzLLadS4Cnoj8EUNoy1HVewEX6ASqQRDsGR8fv9xMbNPPASLySq29ZVnPFovFi3HEJoXrul8DFwDbGNMPvNNMXJReoHYzm7veDh7A87wZYC4sNn3jjWJAOdzuLBQKd0eI2xYcx7mHsKtU1flm46I8Cp8BHMD4vj/tOM6Rtra236LJTIaVlZUeETlGeFMXkelmYyN1g67rTgPPRZO37Xzled4LzTaO9CRo2/bLwCSrg5vrDQU+tW37YJSgWE+Crus+DdT62kkRabrfbSWqug84FBb3eZ73bdQcsYbDxpg53/drxW9GR0cn4+TZKq7r/ktogDFm7n+ar0sig6EbicT+EAEYHh625ufn9wVB8EOpVLraWJ/P53ur1aquN84fGhq6fWlp6bHu7u7zw8PDQVIaEz0DyuXyURE5Z4y5ZoBSKBR6VPUnY8zPuVzu/sb6SqVySkTOLSwsHElSY9KXQG+4faixolqt9gA7gB0i8kBjvar2httrYlvJTX8PyAxIW0DaZAakLSBtMgPSFpA2mQFpC0ibzIC0BaRNZkDaAtImMyBtAWmTGZC2gLTJDEhbQNpkBqQtIG0yAxLOX23YrmGMqf9uvRWkG8a2kkRnhoBPgEdE5LPGiiAILorIlKqqiHy3Tuwx4JBlWSeTFJioAeFs7TMb1C0DBzaJPQGcSEjaGrEugUqlslRXvLVFWiKjqrfVPvu+/0+cHLEMKJfLZeAqgIg8FSdHi9gbbv/u6uoqb9pyA2IZMDU15avqWQBV7c/lctu+ajSfzz8qIrXVIGfjziDH7gUsyzrO6rKUNsuyTudyucfj5oqK4zhPquppoA3QIAiOx821pfcFXNf9EKifvr4ERF4aH5FdwO668kee5x2Nm2yrL0yI67pvAW+zOtW9nSwD73ue9wFbWLTVkjdGCoVCj+/7B4EngDtakXMT/gK+N8Z8MTIycl2sU8zIyMi4YfkP0StKOqaS3koAAAAASUVORK5CYII="/>
                                        </pattern>
                                    </defs>
                                    <rect id="icons8-delete-64" width="37" height="37" rx="18.5" fill="url(#pattern)"/>
                                </svg>

                                ลบ
                            </b-button>
                        </b-col>
                        <b-col md="2">
                               
                                    <b-form-group
                                        :id="'ftitle-group'+key"
                                        label="คำนำหน้า*"
                                        label-for="ftitle"
                                    
                                    >
                                        {{ form.founders[key].title }}
                                    </b-form-group>
                              
                                
                            </b-col>
                            <b-col md="5">
                                 
                                    <b-form-group
                                        :id="'ffirstname-group'+key"
                                        label="ชื่อ*"
                                        label-for="ffirstname"
                                    
                                    >
                                    {{ form.founders[key].firstname }}
                                    </b-form-group>
                               
                                
                            </b-col>
                            <b-col md="5">
                               
                                    <b-form-group
                                        :id="'flastname-group'+key"
                                        label="นามสกุล*"
                                        label-for="flastname"
                                    
                                    >
                                     {{ form.founders[key].lastname }}
                                       
                                    </b-form-group>
                               
                            </b-col>
                            <b-col md="6">
                                  
                                    <b-form-group
                                        :id="'fphone-group'+key"
                                        label="หมายเลขโทรศัพท์*"
                                        label-for="fphone"
                                    
                                    >
                                    {{ form.founders[key].phone }}
                                    </b-form-group>
                               
                                
                            </b-col>
                            <b-col md="6">
                              
                                    <b-form-group
                                        :id="'fidcardfile-group'+key"
                                        label="อัพโหลดบัตรประชาชน"
                                        label-for="fidcardfile"
                                    
                                    >
                                {{ form.founders[key].idcardfile }}
                                    </b-form-group>
                                
                            </b-col>
                            <b-col md="12">
                                
                                    <b-form-group>
                                        <b-form-checkbox v-model="form.founders[key].isdirector"  disabled unchecked-value="" value="1">เป็นกรรมการบริษัท</b-form-checkbox>
                                   
                                </b-form-group>
                                    
                               
                            </b-col>
                            <b-col md="12">
                                    <hr />
                                </b-col>

                        </b-row>
                       
                        <h5>กรรมการ</h5>
                        <b-row v-for="(direct,key) in form.director" :key="key" class="mb-3">
                            <b-col md="12"><h5>กรรมการ {{ key+1 }}</h5></b-col>
                            
                            <b-col md="2">
                                  
                                        <b-form-group
                                            :id="'dtitle-group'+key"
                                            label="คำนำหน้า*"
                                            label-for="dtitle"
                                        
                                        >
                                            {{ form.director[key].title }}
                                        </b-form-group>
                                  
                                    
                                </b-col>
                                <b-col md="5">
                                      
                                        <b-form-group
                                            :id="'dfirstname-group'+key"
                                            label="ชื่อ*"
                                            label-for="dfirstname"
                                        
                                        >
                                        {{ form.director[key].firstname }}
                                        </b-form-group>
                                  
                                    
                                </b-col>
                                <b-col md="5">
                                 
                                        <b-form-group
                                            :id="'dlastname-group'+key"
                                            label="นามสกุล*"
                                            label-for="dlastname"
                                        
                                        >
                                            {{ form.director[key].lastname }}
                                        </b-form-group>
                                   
                                </b-col>
                                <b-col md="6">
                                        
                                        <b-form-group
                                            :id="'dphone-group'+key"
                                            label="หมายเลขโทรศัพท์*"
                                            label-for="dphone"
                                        
                                        >
                                          {{ form.director[key].phone }}
                                        </b-form-group>
                                   
                                    
                                </b-col>
                                <b-col md="6">
                                    
                                        <b-form-group>
                                            <b-form-checkbox v-model="form.director[key].issign"  disabled unchecked-value="" value="1">มีอำนาจลงนาม</b-form-checkbox>
                                      
                                    </b-form-group>
                                        
                                    
                                </b-col>
                                <b-col md="12">
                                    <hr />
                                </b-col>
                                

                        </b-row>
                        <h5>อำนาจกรรมการ</h5>
                        <b-row>
                            <b-col md="12">
                                <b-form-radio class="pr-2" v-model="form.director_power" name="director_power" disabled value="not_specified">อำนาจกรรมการแบบไม่ระบุชื่อกรรมการที่มีอำนาจลงนาม</b-form-radio>
                                    
                            </b-col>
                            
                            <b-col md="12">
                                <div style="padding-left:35px;">โปรดระบุจำนวนกรรมการที่ต้องลงลายมือชื่อเพื่อผูกพันบริษัท</div>
                                
                            </b-col>
                            <b-col md="12"  >
                                <div style="padding-left:35px;" class="form-flex">
                                    <span>กรรมการ </span>
                                    <span style="padding-left:10px">{{ form.director_count }}</span>
                                    <span style="padding-left:10px">คน ลงลายมือชื่อ</span>
                                </div>
                            </b-col>
                            <b-col md="12">
                                <b-form-radio class="pr-2" v-model="form.director_power" disabled name="director_power" value="specified">อำนาจกรรมการแบบระบุชื่อกรรมการที่มีอำนาจลงนาม</b-form-radio>
                                    
                            </b-col>
                            <b-col md="6" class="mt-2">
                                <div style="padding-left:35px;">
                                       
                                            <b-form-group
                                                id="specify_director"
                                                label="โปรดระบุอำนาจกรรมการ"
                                                label-for="specify_director"
                                            
                                            >
                                            {{ form.specify_director }}
                                               
                                            </b-form-group>
                                       
                                        
                                </div>
                                
                            </b-col>
                        </b-row>
                        <hr />
                        <h5>การประชุมจัดตั้งบริษัท</h5>
                        <b-row>
                            <b-col md="6">
                               
                                    <b-form-group
                                        id="meeting_date"
                                        label="วันที่*"
                                        label-for="meeting_date"
                                    
                                    >
                                        {{ form.meeting_date }}
                                        
                                       
                                    </b-form-group>
                                

                            </b-col>
                                <b-col md="6">
                                
                                    <b-form-group
                                        id="meeting_time"
                                        label="เวลา*"
                                        label-for="meeting_time"
                                    
                                    >
                                    {{ form.meeting_time }}
                                    </b-form-group>
                               
                            </b-col>
                            <b-col md="2">
                                <h5>สถานที่</h5>
                            </b-col>
                            <b-col md="10">
                                <b-form-checkbox
                                    id="same_address"
                                    v-model="form.same_address"
                                    name="same_address"
                                    value="yes"
                                    unchecked-value="no"
                                   
                                    disabled
                                    >
                                    ใช้ข้อมูลสถานที่ตั้งสำนักงาน
                                </b-form-checkbox>
                                
                            </b-col>
                            <b-col md="3">
                               
                                    <b-form-group
                                        id="meeting_addess_no-group"
                                        label="บ้านเลขที่*"
                                        label-for="meeting_addess_no"
                                    
                                    >
                                        {{ form.meeting_addess_no }}
                                    </b-form-group>
                                    
                                
                            </b-col>
                            <b-col md="3">
                               
                                    <b-form-group
                                        id="meeting_building-group"
                                        label="อาคาร"
                                        label-for="meeting_building"
                                    
                                    >
                                       {{ form.meeting_building }}
                                    </b-form-group>
                                    
                               
                            </b-col>
                            <b-col md="3">
                                
                                    <b-form-group
                                        id="meeting_level-group"
                                        label="ชั้น"
                                        label-for="meeting_level"
                                    
                                    >
                                       {{ form.meeting_level }}
                                    </b-form-group>
                                    
                              
                            </b-col>
                            <b-col md="3">
                                
                                    <b-form-group
                                        id="meeting_room_no-group"
                                        label="ห้องเลขที่"
                                        label-for="meeting_room_no"
                                    
                                    >
                                       {{ form.meeting_room_no }}
                                    </b-form-group>
                                    
                                
                            </b-col>
                            <b-col md="6">
                               
                                    <b-form-group
                                        id="meeting_soi-group"
                                        label="ซอย"
                                        label-for="meeting_soi"
                                    
                                    >
                                       {{ form.meeting_soi }}
                                    </b-form-group>
                                    
                          
                            </b-col>
                            <b-col md="6">
                            
                                    <b-form-group
                                        id="meeting_road-group"
                                        label="ถนน"
                                        label-for="meeting_road"
                                    
                                    >
                                      {{ form.meeting_road }}
                                    </b-form-group>
                                    
                               
                            </b-col>
                            <b-col md="6">
                               
                                    <b-form-group
                                        id="meeting_province-group"
                                        label="จังหวัด*"
                                        label-for="meeting_province"
                                    
                                    >
                                       {{ form.meeting_province }}
                                    </b-form-group>
                                    
                           

                            </b-col>
                            <b-col md="6">
                               
                                    <b-form-group
                                        id="meeting_states-group"
                                        label="เขต/อำเภอ*"
                                        label-for="meeting_states"
                                    
                                    >
                                      {{ form.meeting_states }}
                                    </b-form-group>
                                    
                              
                            </b-col>
                            <b-col md="6">
                               
                                    <b-form-group
                                        id="meeting_city-group"
                                        label="แขวง/ตำบล*"
                                        label-for="meeting_city"
                                    
                                    >
                                     {{ form.meeting_city }}
                                    </b-form-group>
                                    
                               

                            </b-col>
                            <b-col md="6">
                               
                                    <b-form-group
                                        id="meeting_postcode-group"
                                        label="รหัสไปรษณีย์*"
                                        label-for="postcode"
                                    
                                    >
                                        {{ form.meeting_postcode }}
                                    </b-form-group>
                                    
                              
                            </b-col>
                            <b-col md="12">
                                <hr />
                            </b-col>
                            <b-col md="12">
                                <h5>ประธานที่ประชุม</h5>
                            </b-col>
                            <b-col md="2">
                               
                                    <b-form-group
                                        id="president_title"
                                        label="คำนำหน้า*"
                                        label-for="president_title"
                                    
                                    >
                                        {{ form.president_title }}
                                    </b-form-group>
                              
                                
                            </b-col>
                                <b-col md="5">
                                     
                                        <b-form-group
                                            id="president_firstname-group"
                                            label="ชื่อ*"
                                            label-for="president_firstname"
                                        
                                        >
                                          {{ form.president_firstname }}
                                            
                                           
                                        </b-form-group>
                                   
                                    
                                </b-col>
                                <b-col md="5">
                                  
                                        <b-form-group
                                            id="president_lastname-group"
                                            label="นามสกุล*"
                                            label-for="president_lastname"
                                        
                                        >
                                        {{ form.president_lastname }}
                                        </b-form-group>
                                  
                                </b-col>
                                <b-col md="12"><hr /></b-col>
                                <b-col md="12"><h5>จำนวนเงินที่ผู้ก่อตั้งได้ใช้จ่ายไปเพื่อประโยชน์ของบริษัทก่อนวันจดทะเบียนจัดตั้งบริษัท</h5></b-col>
                                
                                <b-col md="12" class="form-flex">
                                    <b-form-checkbox v-model="form.payment_register" class="pr-3" disabled unchecked-value="" value="1">มี</b-form-checkbox>
                                    
                                  
                                    <b-form-group
                                        id="payment_price-group"
                                        
                                        label-for="payment_price"
                                    
                                    >
                                       {{ form.payment_price }}
                                    </b-form-group>
                               
                                <div>บาท</div>
                            </b-col>
                            <b-col md="12" >
                                   
                                    <b-form-group
                                        id="payment_detial-group"
                                        
                                        label-for="payment_detial"
                                    
                                    >
                                    {{ form.payment_detial }}
                                    </b-form-group>
                                
                            </b-col>
                                <b-col md="12"><hr /></b-col>
                            <b-col md="12"><h5>ค่าใช้จ่ายในการจัดตั้งบริษัท</h5></b-col>
                            <b-col md="12" class="form-flex">
                                    <div class="mr-3">กำหนดค่าใช้จ่ายในการจัดตั้งบริษัทจำนวน*</div>
                                    
                               
                                    <b-form-group
                                        id="expenses-group"
                                        
                                        label-for="expenses"
                                    
                                    >
                                      {{ form.expenses }}
                                    </b-form-group>
                                
                                <div>บาท</div>
                            </b-col>
                            <b-col md="12"><hr /></b-col>
                            <b-col md="2">
                                <h5>ข้อบังคับบริษัท</h5>
                            </b-col>
                            <b-col md="10">
                                <b-form-checkbox
                                    id="same_address"
                                    v-model="form.standard_rule"
                                    name="standard_rule"
                                    value="yes"
                                    unchecked-value=""
                                    disabled
                                    
                                    >
                                        ใช้ข้อบังคับมาตรฐาน <small>ดูข้อบังคับแบบมาตรฐาน ที่นี่</small>
                                </b-form-checkbox>
                                
                            </b-col>
                            <b-col  md="4">อัพโหลดไฟล์ข้อบังคับแบบกำหนดเอง</b-col>
                            <b-col md="8" >
                                
                                -
                            </b-col>
                            <b-col md="12"><hr /></b-col>
                            <b-col md="12">
                                <h5>รอบปีบัญชี</h5>
                            </b-col>
                            <b-col md="12" class="form-flex">
                                    <div class="mr-5">รอบปีบัญชีของบริษัทเริ่มต้นวันที่*</div>
                                    
                                  
                                    <b-form-group
                                        id="blling_day-group"
                                        
                                        label-for="blling_day"
                                    
                                    >
                                       {{ form.blling_day }}
                                    </b-form-group>
                               
                                 
                                    <b-form-group
                                        id="blling_month-group"
                                        
                                        label-for="blling_month"
                                    
                                    >
                                      {{ form.blling_month }}
                                        
                                    
                                    </b-form-group>
                               
                                
                                <div class="pl-5">ของทุกปี</div>
                            </b-col>
                            <b-col md="12"><hr /></b-col>
                            <b-col md="2">
                                <h5>ผู้สอบบัญชี</h5>
                            </b-col>
                            <b-col md="10">
                                <b-form-checkbox
                                    id="isauditor"
                                    v-model="form.isauditor"
                                    name="isauditor"
                                    value="yes"
                                    unchecked-value=""
                                    disabled
                                    
                                    >
                                    ใช้บริการผู้สอบบัญชี
                                </b-form-checkbox>
                                
                            </b-col>
                            <b-col md="2">
                               
                                    <b-form-group
                                        id="auditor_title"
                                        label="คำนำหน้า*"
                                        label-for="auditor_title"
                                    
                                    >
                                       {{ form.auditor_title }}
                                       
                                    </b-form-group>
                               
                                
                            </b-col>
                                <b-col md="5">
                                      
                                        <b-form-group
                                            id="auditor_firstname-group"
                                            label="ชื่อ*"
                                            label-for="auditor_firstname"
                                        
                                        >
                                            {{ form.auditor_firstname }}
                                        </b-form-group>
                                    
                                    
                                </b-col>
                                <b-col md="5">
                                   
                                        <b-form-group
                                            id="auditor_lastname-group"
                                            label="นามสกุล*"
                                            label-for="auditor_lastname"
                                        
                                        >
                                         {{ form.auditor_lastname }}
                                        </b-form-group>
                                    
                                </b-col>
                                <b-col md="12" class="form-flex">
                                    <div class="mr-5">เลขที่ใบอนุญาต*</div>
                                    
                                    
                                    <b-form-group
                                        id="license_number-group"
                                        
                                        label-for="license_number"
                                    
                                    >
                                        {{ form.license_number }}
                                        
                                       
                                    </b-form-group>
                                
                                <div class="pl-5 pr-3">กำหนดค่าตอบแทน*</div>
                                 
                                    <b-form-group
                                        id="compensation-group"
                                        
                                        label-for="compensation"
                                    
                                    >
                                       {{ form.compensation }}
                                        
                                     
                                    </b-form-group>
                               
                                
                                <div class="pl-3">บาท</div>
                            </b-col>
                        </b-row>
                        <hr />
                        <b-button type="button" variant="outline-warning" @click.prevent="backstep(7)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48.006" height="24.048" viewBox="0 0 48.006 24.048">
                                    <path id="icons8-up_arrow" d="M12.024,0,.664,10.508a2,2,0,1,0,2.719,2.938L10.024,7.3V45.977a2,2,0,1,0,4,0V7.3l6.641,6.145a2,2,0,1,0,2.719-2.937Z" transform="translate(0 24.048) rotate(-90)" fill="#ffc00f"/>
                                </svg>

                                ย้อนกลับ
                                
                        </b-button>
                        <b-button type="submit" variant="warning" @click.prevent="validationStep8">
                            ยืนยันข้อมูลการจดทะเบียน
                            

                        </b-button>
                    </div>

                </div>
                
            </b-col>
        </b-row>
    </b-container>
   
</div>

</template>
<script>
import axios from 'axios'
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
    
    middleware: ['router-auth'],
    components: {
        ValidationProvider,
        ValidationObserver
    },
    data(){
        return {
            date_today:new Date(),
            job_id:this.$route.query.job_id,
            step_id:1,
            step:["ข้อมูลบริษัท","ที่ตั้งสำนักงาน","ทุนจดทะเบียน","ผู้ถือหุ้น","ผู้ก่อตั้ง","กรรมการ","การประชุมจัดตั้งบริษัท"],
            selected:null,
            options: [
             
                { value: 25, text: '25%' },
                { value: 50, text: '50%' },
                { value: 75, text: '75%' },
                { value: 100, text: '100%' }
            ],
            options_title: [
             
                { value: '', text: 'คำนำหน้า' },
                { value: 'นาย', text: 'นาย' },
                { value: 'นาง', text: 'นาง' },
                { value: 'นางสาว', text: 'นางสาว' }
            ],
            provinces:[
                    {
                        value:"",
                        text:"Select Province"
                    },
                     {
                        value: "กระบี่",
                        text: "กระบี่"
                       
                    },
                    {
                        value: "กรุงเทพมหานคร",
                        text: "กรุงเทพมหานคร"                     
                    },
                    {
                       
                        value: "กาญจนบุรี",
                        text: "กาญจนบุรี"
                        
                    },
                    {
                        value: "กาฬสินธุ์",
                        text: "กาฬสินธุ์"
                        
                    },
                    {
                       
                        value: "กำแพงเพชร",
                        text: "กำแพงเพชร"
                        
                    },
                    {
                        
                        value: "ขอนแก่น",
                        text: "ขอนแก่น"
                        
                    },
                    {
                        value: "จันทบุรี",
                        text: "จันทบุรี",
                       
                    },
                    {
                        value: "ฉะเชิงเทรา",
                        text: "ฉะเชิงเทรา",
                        
                    },
                    {
                        value: "ชลบุรี",
                        text: "ชลบุรี",
                       
                    },
                    {
                        value: "ชัยนาท",
                        text: "ชัยนาท",
                        
                    },
                    {
                        value: "0236ชัยภูมิ0000",
                        text: "ชัยภูมิ",
                        
                    },
                    {
                        value: "ชุมพร",
                        text: "ชุมพร",
                        
                    },
                    {
                        value: "เชียงราย",
                        text: "เชียงราย",
                        
                    },
                    {
                        value: "เชียงใหม่",
                        text: "เชียงใหม่",
                       
                    },
                    {
                        value: "ตรัง",
                        text: "ตรัง",
                       
                    },
                    {
                        value: "ตราด",
                        text: "ตราด",
                        
                    },
                    {
                        value: "ตาก",
                        text: "ตาก",
                     
                    },
                    {
                        value: "นครนายก",
                        text: "นครนายก",
                       
                    },
                    {
                        value: "นครปฐม",
                        text: "นครปฐม",
                        
                    },
                    {
                        value: "นครพนม",
                        text: "นครพนม",
                       
                    },
                    {
                        value: "นครราชสีมา",
                        text: "นครราชสีมา",
                       
                    },
                    {
                        value: "นครศรีธรรมราช",
                        text: "นครศรีธรรมราช",
                        
                    },
                    {
                        value: "นครสวรรค์",
                        text: "นครสวรรค์",
                
                    },
                    {
                        value: "นนทบุรี",
                        text: "นนทบุรี",
                        
                    },
                    {
                        value: "นราธิวาส",
                        text: "นราธิวาส",       
                    },
                    {
                        value: "น่าน",
                        text: "น่าน",
                        
                    },
                    {
                        value: "บึงกาฬ",
                        text: "บึงกาฬ",
                        
                    },
                    {
                        value: "บุรีรัมย์",
                        text: "บุรีรัมย์",
                        
                    },
                    {
                        value: "ปทุมธานี",
                        text: "ปทุมธานี",
                    },
                    {
                        value: "ประจวบคีรีขันธ์",
                        text: "ประจวบคีรีขันธ์",
                        
                    },
                    {
                        value: "ปราจีนบุรี",
                        text: "ปราจีนบุรี",
                        
                    },
                    {
                        value: "ปัตตานี",
                        text: "ปัตตานี",
                        
                    },
                    {
                        value: "พระนครศรีอยุธยา",
                        text: "พระนครศรีอยุธยา",
                       
                    },
                    {
                        value: "พะเยา",
                        text: "พะเยา",
                       
                    },
                    {
                        value: "พังงา",
                        text: "พังงา",
                        
                    },
                    {
                        value: "พัทลุง",
                        text: "พัทลุง",
                      
                    },
                    {
                        value: "พิจิตร",
                        text: "พิจิตร",
                        
                    },
                    {
                        value: "พิษณุโลก",
                        text: "พิษณุโลก",
                       
                    },
                    {
                        value: "เพชรบุรี",
                        text: "เพชรบุรี",
                       
                    },
                    {
                        value: "เพชรบูรณ์",
                        text: "เพชรบูรณ์",
                        
                    },
                    {
                        value: "แพร่",
                        text: "แพร่",
    
                    },
                    {
                        value: "ภูเก็ต",
                        text: "ภูเก็ต",
                       
                    },
                    {
                        value: "มหาสารคาม",
                        text: "มหาสารคาม",      
                    },
                    {
                        value: "02490000",
                        text: "มุกดาหาร",   
                    },
                    {
                        value: "แม่ฮ่องสอน",
                        text: "แม่ฮ่องสอน",
                       
                    },
                    {
                        value: "ยโสธร",
                        text: "ยโสธร",
                      
                    },
                    {
                        value: "ยะลา",
                        text: "ยะลา",
                        
                    },
                    {
                        value: "ร้อยเอ็ด",
                        text: "ร้อยเอ็ด",
                       
                    },
                    {
                        value: "ระนอง",
                        text: "ระนอง",
                       
                    },
                    {
                        value: "ระยอง",
                        text: "ระยอง",
                      
                    },
                    {
                        value: "ราชบุรี",
                        text: "ราชบุรี",
                      
                    },
                    {
                        value: "ลพบุรี",
                        text: "ลพบุรี",
                       
                    },
                    {
                        value: "ลำปาง",
                        text: "ลำปาง",
                       
                    },
                    {
                        value: "ลำพูน",
                        text: "ลำพูน",
                       
                    },
                    {
                        value: "เลย",
                        text: "เลย",
                        
                    },
                    {
                        value: "ศรีสะเกษ",
                        text: "ศรีสะเกษ",
                        
                    },
                    {
                        value: "สกลนคร",
                        text: "สกลนคร",
                       
                    },
                    {
                        value: "สงขลา",
                        text: "สงขลา",
                       
                    },
                    {
                        value: "สตูล",
                        text: "สตูล",
                       
                    },
                    {
                        value: "สมุทรปราการ",
                        text: "สมุทรปราการ",
                        
                    },
                    {
                        value: "สมุทรสงคราม",
                        text: "สมุทรสงคราม",
                   
                    },
                    {
                        value: "สมุทรสาคร",
                        text: "สมุทรสาคร",
                      
                    },
                    {
                        value: "สระแก้ว",
                        text: "สระแก้ว",
                        
                    },
                    {
                        value: "สระบุรี",
                        text: "สระบุรี",
                       
                    },
                    {
                        value: "สิงห์บุรี",
                        text: "สิงห์บุรี",
                       
                    },
                    {
                        value: "สุโขทัย",
                        text: "สุโขทัย",
                
                    },
                    {
                        value: "สุพรรณบุรี",
                        text: "สุพรรณบุรี",
                      
                    },
                    {
                        value: "สุราษฎร์ธานี",
                        text: "สุราษฎร์ธานี",
                       
                    },
                    {
                        value: "สุรินทร์",
                        text: "สุรินทร์",
                     
                    },
                    {
                        value: "หนองคาย",
                        text: "หนองคาย",
                       
                    },
                    {
                        value: "หนองบัวลำภู",
                        text: "หนองบัวลำภู",
                     
                    },
                    {
                        value: "อ่างทอง",
                        text: "อ่างทอง"
                      
                    },
                    {
                        value: "อำนาจเจริญ",
                        text: "อำนาจเจริญ"
                       
                    },
                    {
                        value: "อุดรธานี",
                        text: "อุดรธานี"
                        
                    },
                    {
                        value: "อุตรดิตถ์",
                        text: "อุตรดิตถ์"
                      
                    },
                    {
                        value: "อุทัยธานี",
                        text: "อุทัยธานี"
                       
                    },
                    {
                        value: "อุบลราชธานี",
                        text: "อุบลราชธานี"
                       
                    }
                ],
            
            form:{
                compensation:null,
                license_number:null,
                isauditor:'yes',
                auditor_title:'',
                auditor_firstname:null,
                auditor_lastname:null,
                blling_day:null,
                blling_month:null,
                standard_rule:'yes',
                expenses:null,
                payment_detial:null,
                payment_price:'',
                payment_register:'1',
                president_title:'',
                president_firstname:null,
                president_lastname:null,
                same_address:null,
                meeting_date:null,
                meeting_time:null,
                meeting_addess_no:null,
                meeting_building:null,
                meeting_level:null,
                meeting_room_no:null,
                meeting_soi:null,
                meeting_road:null,
                meeting_province:null,
                meeting_states:null,
                meeting_city:null,
                meeting_postcode:null,
                director_count:null,
                specify_director:null,
                director_power:'not_specified',
                company_th:null,
                company_en:null,
                stamp:null,
                checked:null,
                objective:null,
                objective_other:null,
                addess_no:null,
                building:null,
                level:null,
                room_no:null,
                soi:null,
                road:null,
                province:'',
                states:null,
                city:null,
                postcode:null,
                copy_house:null,
                phone:null,
                email:null,
                map:'sena fest',
                amount_cap:null,
                share_value:100,
                share_total:null,
                ordinary_total:null,
                number_share_pre:null,
                payment_percent:25,
                isdirector:'',
                options_types:[
                    { text: 'บุคคลธรรมดา', value: 'บุคคลธรรมดา' },
                    { text: 'นิติบุคคล', value: 'นิติบุคคล' }
                ],
                director:[],
                founders:[],
                shareholders:[
                    {
                        type_value:'บุคคลธรรมดา',
                        title:'',
                        firstname:null,
                        lastname:null,
                        idcard:null,
                        occupation:null,
                        phone:null,
                        idcardfile:null,
                        legal_name:null,
                        legal_number:null,
                        legal_phone:null,
                        legal_file:null,
                        type_share:'ผู้ถือหุ้นสามัญ',
                        sharevalue:null,
                        shareprice:null,
                        sharepayment:'cash',
                        legal_people:[
                            {
                                title:'',
                                firstname:null,
                                lastname:null

                            }
                        ]
                    },
                     {
                        type_value:'บุคคลธรรมดา',
                        title:'',
                        firstname:null,
                        lastname:null,
                        idcard:null,
                        occupation:null,
                        phone:null,
                        idcardfile:null,
                        legal_name:null,
                        legal_number:null,
                        legal_phone:null,
                        legal_file:null,
                        type_share:'ผู้ถือหุ้นสามัญ',
                        sharevalue:null,
                        shareprice:null,
                        sharepayment:'cash',
                        legal_people:[
                            {
                                title:'',
                                firstname:null,
                                lastname:null

                            }
                        ]
                    },
                     {
                        type_value:'นิติบุคคล',
                        title:'',
                        firstname:null,
                        lastname:null,
                        idcard:null,
                        occupation:null,
                        phone:null,
                        idcardfile:null,
                        legal_name:null,
                        legal_number:null,
                        legal_phone:null,
                        legal_file:null,
                        type_share:'ผู้ถือหุ้นสามัญ',
                        sharevalue:null,
                        shareprice:null,
                        sharepayment:'cash',
                        legal_people:[
                            {
                                title:'',
                                firstname:null,
                                lastname:null

                            }
                        ]
                    },
                   
                    
                ],
                
            }
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
        //this.getProvince();
        //console.log('router',this.$route.query.job_id);

    },
    transition(to, from) {
        if (!from) return "fade";
        return +to.query.page > +from.query.page ? "slide-right" : "slide-left";
    },
    name: "Index",
   
    computed: {
        getLayout() {
        return this.$store.state.info.altlayout ? "FullGrid" : "BaelGrid";
        },
    },
    watch: {
       
       
    },
    methods:{
        async getProvince(){
            var config = {
                headers: {'Access-Control-Allow-Origin': '*'},
                proxy: '*'
            };
           // const provinces = await this.$axios.$get('?api-key=pDkgl18SYBDccvl6EkUX0VUPfsUf5FR9',config);
           // let data = await  axios.get(`https://opend.data.go.th/govspending/bbgfmisprovince/?api-key=pDkgl18SYBDccvl6EkUX0VUPfsUf5FR9`,config);
           // console.log('data',data);
         
          
        },


        chage_sameaddress(){
            if(this.form.same_address == 'yes'){
                this.form.meeting_addess_no = this.form.addess_no;
                this.form.meeting_building = this.form.building;
                this.form.meeting_level = this.form.level;
                this.form.meeting_room_no = this.form.room_no;
                this.form.meeting_soi = this.form.soi;
                this.form.meeting_road =this.form.road;
                this.form.meeting_province = this.form.province;
                this.form.meeting_states = this.form.states;
                this.form.meeting_city = this.form.city;
                
                this.form.meeting_postcode = this.form.postcode;

            }else{
                this.form.meeting_addess_no = null;
                this.form.meeting_building = null;
                this.form.meeting_level = null;
                this.form.meeting_room_no = null;
                this.form.meeting_soi = null;
                this.form.meeting_road = null;
                this.form.meeting_province = null;
                this.form.meeting_states = null;
                this.form.meeting_city ='';
                this.forms.meeting_postcode = null;
               
            }
           // alert(this.form.same_address);
        },
        changedirect(key){
            if(this.form.founders[key].isdirector){
                this.form.founders[key].isdirector='';
                
            }else{
                this.form.founders[key].isdirector = '1';
            }
            console.log('isdirector',this.form.founders[key].isdirector);

        },
        add_share(){
            let shared_default = {
                type_value:'บุคคลธรรมดา',
                title:'',
                firstname:'null',
                lastname:null,
                idcard:null,
                occupation:null,
                phone:null,
                idcardfile:null,
                legal_name:null,
                legal_number:null,
                legal_phone:null,
                legal_file:null,
                type_share:'ผู้ถือหุ้นสามัญ',
                sharevalue:null,
                shareprice:null,
                sharepayment:'cash',
                director:[

                ],
                legal_people:[
                    {
                        title:'',
                        firstname:null,
                        lastname:null

                    }
                ]

            };
            /*let shares =  this.form.shareholders;
            shares.push(this.shared_default);
            this.form.shareholders = [];
            this.form.shareholders = shares;*/
            this.form.shareholders.push(shared_default);
            console.log('check',this.form.shareholders);
        },
        addPepoles(key){
            let people = {
                        title:'',
                        firstname:null,
                        lastname:null

                    };
            this.form.shareholders[key].legal_people.push(people);

        },
        removePeople(key,index){
            this.form.shareholders[key].legal_people.splice(index,1);
        },
        add_fo(){
            let founder = {
                title:'',
                firstname:'',
                lastname:'',
                phone:'',
                idcard:'',
                isdirector:''

            };
            this.form.founders.push(founder);

        },
        add_director(){
             let director = {
                title:'',
                firstname:'',
                lastname:'',
                phone:'',
                issign:''

            }
             this.form.director.push(director);

        },
        removefounder(index){
             this.form.founders.splice(index,1);

        },
        removedirector(index){
            this.form.director.splice(index,1);
        },  
        changeshare(key){
            let total = 0;
            let share_total = this.form.share_total;
            share_total = share_total*1;
            this.form.shareholders.map(share => {
                total += (share.sharevalue)*1
               
            });
            console.log(total,share_total);
             let sharevalue = this.form.shareholders[key].sharevalue;
            if(total > share_total){
                alert('เกินจำนวน หุ้นทั้งหมด');
                let diff = total-share_total;
                let balance = sharevalue-diff;
                sharevalue = balance;
                 this.form.shareholders[key].sharevalue = sharevalue;
               
            }
            
            
            let price = this.form.share_value*(this.form.payment_percent/100)
            this.form.shareholders[key].shareprice = sharevalue*price;
            

            //share_total
        },
        removeshare(index){
             this.form.shareholders.splice(index, 1)

        },
        calshare(){
            console.log('payment_percent', this.form.payment_percent);
            this.form.share_total = this.form.amount_cap/this.form.share_value;
            this.form.ordinary_total = this.form.share_total;
            this.form.payment_amount = this.form.amount_cap*(this.form.payment_percent/100);
             console.log('payment_percent', this.form.payment_amount);
        },
        
        validationStep1() {
            this.$refs.step1.validate().then(success => {
                if(success){
                    console.log('input',this.form);
                    this.step_id=2;

                }
                console.log('step1',success);
            });
        },
        backstep(step_id){
            this.step_id = step_id;

        },
        validationStep2() {
            this.$refs.step2.validate().then(success => {
                if(success){
                    console.log('input2',this.form);
                    this.step_id=3;

                }
                console.log('step1',success);
            });
        },
        validationStep3() {
            this.$refs.step3.validate().then(success => {
                if(success){
                    console.log('input3',this.form);
                    this.step_id=4;

                }
                console.log('step3',success);
            });
        },
        validationStep4() {
            let total = 0;
            let share_total = this.form.share_total;
            share_total = share_total*1;
            this.form.shareholders.map(share => {
                total += (share.sharevalue)*1
               
            });
            console.log(total,share_total);
           
            if(total < share_total){
                alert('จำนวนหุ้นยังไม่ถึงจำนวนหุ้นทั้งหมด');
                return false;
               
               
            }
            this.$refs.step4.validate().then(success => {
                let founders = [];
                if(success){
                    if(this.form.founders.length == 0){
                        this.form.shareholders.map(share => {
                            console.log('founders',share.type_share);
                            if(share.type_value == 'บุคคลธรรมดา'){
                                let founder = {
                                        title:share.title,
                                        firstname:share.firstname,
                                        lastname:share.lastname,
                                        phone:share.phone,
                                        idcard:share.idcard,
                                        isdirector:''

                                    }
                                    this.form.founders.push(founder);
                                
                            }
                            
                            //total += (share.sharevalue)*1
                        
                        });
                        let count =  this.form.founders.length;
                        if(count < 3){
                            let val = 3-count;
                            for(let i=0; i<val; i++){
                                let founder = {
                                        title:'',
                                        firstname:'',
                                        lastname:'',
                                        phone:'',
                                        idcard:'',
                                        isdirector:''

                                    };
                                this.form.founders.push(founder);


                            }

                        }

                    }
                     
                   // this.form.founders = founders;
                    console.log('founders',  this.form.founders);
                 
                   
                    /* {
                        title:'',
                        firstname:null,
                        lastname:null,
                         phone:null,
                         idcard:null,
                    }*/
                    this.step_id=5;

                }
                console.log('step4',success);
            });
        },
        validationStep5(){
            this.$refs.step5.validate().then(success => {
                if(success){
                     if(this.form.director.length == 0){
                        this.form.founders.map(founder => {
                            if(founder.isdirector == '1'){
                                let director = {
                                        title:founder.title,
                                        firstname:founder.firstname,
                                        lastname:founder.lastname,
                                        phone:founder.phone,
                                        issign:''

                                    }
                                    this.form.director.push(director);
                                
                            }
                        });
                        if(this.form.director.length == 0){
                             let director = {
                                title:'',
                                firstname:'',
                                lastname:'',
                                phone:'',
                                issign:''

                            }
                            this.form.director.push(director);
                        }
                     }
                    console.log('input5',this.form);
                    this.step_id=6;

                }
                console.log('step5',success);
            });

        },
         validationStep6(){
            this.$refs.step6.validate().then(success => {
                if(success){
                    //president_title
                    this.form.president_title = this.form.director[0].title;
                    this.form.president_firstname = this.form.director[0].firstname;
                    this.form.president_lastname = this.form.director[0].lastname;

                    console.log('input6',this.form);
                    this.step_id=7;

                }
                console.log('step6',success);
            });

        },
        validationStep7(){
            this.$refs.step7.validate().then(success => {
                if(success){
                    this.step_id=8;

                }
                console.log('step6',success);
            });

        },
        validationStep8(){
            //submit

        }
    }
     
}
</script>