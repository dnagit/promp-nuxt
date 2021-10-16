<template>
    <div class="job-right" >
       <div class="job-right-head">
           <b>Information </b><br />
           <small>Order #12223</small>
       </div>
       <hr />
       <div class="job-right-body">
           <b class="text-center py-3">Status</b>
            <div class="row">
                <!-- timeline item 1 left dot -->
                <div class="col-auto text-center flex-column d-none d-sm-flex active">
                
                <h5 class="m-2">
                    <span class="badge badge-pill bg-success border">&nbsp;</span>
                </h5>
                <div class="row h-50">
                    <div class="col border-right">&nbsp;</div>
                    <div class="col">&nbsp;</div>
                </div>
                </div>
                <div class="col py-2 active">
                <div class="card">
                    <div class="card-body">
                    <div class="float-right text-muted">12/02/2021</div>
                    Job assigned
                    
                    </div>
                </div>
                </div>
            </div>
            <div class="row">
                <!-- timeline item 1 left dot -->
                <div class="col-auto text-center flex-column d-none d-sm-flex">
                
                <h5 class="m-2">
                    <span class="badge badge-pill bg-light border">&nbsp;</span>
                </h5>
                <div class="row h-50">
                    <div class="col border-right">&nbsp;</div>
                    <div class="col">&nbsp;</div>
                </div>
                </div>
                <div class="col py-2">
                <div class="card">
                    <div class="card-body">
                    <div class="float-right text-muted"></div>
                    Processing
                    
                    </div>
                </div>
                </div>
            </div>
            <div class="row">
                <!-- timeline item 1 left dot -->
                <div class="col-auto text-center flex-column d-none d-sm-flex">
                
                <h5 class="m-2">
                    <span class="badge badge-pill bg-light border">&nbsp;</span>
                </h5>
               
                </div>
                <div class="col py-2">
                <div class="card">
                    <div class="card-body">
                    <div class="float-right text-muted"></div>
                    Complete
                    
                    </div>
                </div>
                </div>
            </div>

       


       </div>
       
        <hr class="hr-dot" />
        <div class="job-right-body">
            <b class="text-center py-3">Lawyer Infomation</b>
            <form class="form-inline mt-3">
    
                <img src="~/assets/icon/user.png" class="lawyer" /> 
                <div class="lawyer-text">
                    Patsanan Buranapattama
                    <div class="small">Lawyer</div>
                </div>
            
            
            </form>
        </div>
    
        <hr class="hr-dot" />



    </div>
</template>
<script>
import _capitalize from "lodash/capitalize";
export default {
  data() {
    return {
      uri:'',
      isActive:true
    };
  },
  methods:{
    toggle(){
      alert(1);
        console.log('toggle');
    }
  },
  computed: {
    pagetitle() {
      return this.$store.state.current.title;
    },

    path() {
      const split = _get(this.$store, "state.current.dir").split("/");
      console.log('uri',split[1]);

      return split.length && split[1] !== "page" ? _capitalize(split[1]) : null;
    },
  },
};
</script>