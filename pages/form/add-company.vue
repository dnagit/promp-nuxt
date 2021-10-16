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
                                        :state="Boolean(form.stamp)"
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
                                    <b-form-group label="วัตถุประสงค์บริษัท*" v-slot="{ ariaDescribedby }">
                                        <b-form-radio v-model="form.objective" :aria-describedby="ariaDescribedby" name="some-radios" value="ธุรกิจค้าขาย">ธุรกิจค้าขาย</b-form-radio>
                                        <b-form-radio v-model="form.objective" :aria-describedby="ariaDescribedby" name="some-radios" value="ธุรกิจบริการ">ธุรกิจบริการ</b-form-radio>
                                        <b-form-radio v-model="form.objective" :aria-describedby="ariaDescribedby" name="some-radios" value="ธุรกิจการผลิตสินค้าอุตสาหกรรมหรือหัตถกรรม">ธุรกิจการผลิตสินค้าอุตสาหกรรมหรือหัตถกรรม</b-form-radio>
      
                                        <b-form-radio v-model="form.objective" :aria-describedby="ariaDescribedby" name="some-radios" value="ธุรกิจเกษตรกรรม">ธุรกิจเกษตรกรรม</b-form-radio>
                                        <b-form-radio v-model="form.objective" :aria-describedby="ariaDescribedby" name="some-radios" value="ธุรกิจเกษตรกรรม">สำนักงานผู้แทน</b-form-radio>
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
                                            name="provice"
                                            >
                                            <b-form-group
                                                id="provice-group"
                                                label="จังหวัด*"
                                                label-for="provice"
                                            
                                            >
                                                <b-form-input
                                                id="provice"
                                                v-model="form.provice"
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
                                            name="states"
                                            >
                                            <b-form-group
                                                id="provice-group"
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
                                <b-row v-for="(shareholder,key) in form.shareholders" :key="key">
                                    <b-col md="10"><h5>ผู้ก่อตั้งคนที่ {{ key+1 }}</h5></b-col>
                                    <b-col md="2">

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

                                                <b-form-radio v-model="form.shareholders[key].type_value" :aria-describedby="ariaDescribedby" :name="'title['+key+']'" value="บุคคลธรรมดา">บุคคลธรรมดา</b-form-radio>
                                                <b-form-radio v-model="form.shareholders[key].type_value" :aria-describedby="ariaDescribedby" :name="'title['+key+']'" value="นิติบุคคล">นิติบุคคล</b-form-radio>
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
                                        <b-col md="12" v-for="(value,k) in form.shareholders[key].legal_people" :key="'child'+k">
                                            ชื่อกรรมการผู้มัอำนาจลงนาม
                                            <b-row>
                                                <b-col md="2">
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
                                                <b-col md="2"></b-col>
                                            </b-row>
                                        </b-col>
                                        
                                    </template>
                                    
                                </b-row>
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

                </div>
                
            </b-col>
        </b-row>
    </b-container>
   
</div>

</template>
<script>
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
            step_id:4,
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
            form:{
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
                provice:null,
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
                options_types:[
                    { text: 'บุคคลธรรมดา', value: 'บุคคลธรรมดา' },
                    { text: 'นิติบุคคล', value: 'นิติบุคคล' }
                ],
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
                        legal_people:[
                            {
                                title:'',
                                firstname:null,
                                lastname:null

                            }
                        ]
                    },
                    
                ]
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
            this.$refs.step4.validate().then(success => {
                if(success){
                    console.log('input4',this.form);
                    this.step_id=5;

                }
                console.log('step4',success);
            });
        },
    }
     
}
</script>