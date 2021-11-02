<template>
       <div>
           <b-button variant="primary" @click="generateReport" >generateReport</b-button>
           <client-only>
     <vue-html2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="false"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="meeting"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="portrait"
        pdf-content-width="800px"
 
       
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        ref="html2Pdf"
    >
        <section slot="pdf-content">
            <div class="page">
                 <img src="~/assets/from_meeting_new/from_meeting_new-1.png" class="form-1" />
                <div class="position-abs-1">Digital Agency Limited</div>
            </div>
             <div class="page">
                 <img src="~/assets/from_meeting_new/from_meeting_new-2.png" class="form-1" />
                <div class="position-abs-2">test</div>
            </div>
           
           
            
            <!-- PDF Content Here -->
        </section>
    </vue-html2pdf>
           </client-only>
   </div>

    
</template>
<script>

export default {
    methods: {
        /*
            Generate Report using refs and calling the
            refs function generatePdf()
        */
        generateReport () {
            this.$refs.html2Pdf.generatePdf()
        }
    },
 
   
}
</script>
<style lang="scss">
.page{
    position: relative;
}
.form-1{
    width: 100%;
   
    
  
    
}
.position-abs-1,.position-abs-2{
    position: absolute;
    z-index: 5;
}
.position-abs-1{
    top: 110px;
    left:290px;
}
.position-abs-2{
    top: 0px;
}
.pdf-content{
    
    background: url('~/assets/from_meeting_new/from_meeting_new-1.png');
    width: 100%;
    height: 100vh;

}
</style>