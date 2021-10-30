<template>
  <div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      search: '',
      headers: [
        { text: 'ชื่อขนม', value: 'name' },
        { text: 'ชื่อร้าน', value: 'store' },
        { text: 'ราคา (บาท)', value: 'price' },
        { text: 'Actions', value: 'action', sortable: false }
      ],
      desserts: [
        {
          name: 'โมจิรสองุ่น',
          store: 'โมจิเฮ้',
          price: 100
        }
      ]
    }
  },
   mounted () {
    this.fetchData()
  },
  methods: {
     async fetchData () {
         let filter = {
                perpage : 100,
                offset : 0,
                type_code: 2
    

            }
           
        const facts = await this.$axios.$post('/api/facility/v1/lists',filter);
        console.log('facts',facts);
       // this.desserts = await this.$axios.$get('/api/moji')
    },
  }
}
</script>