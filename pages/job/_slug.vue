<template>
    
</template>
<script>
import BaelGrid from "~/components/BaelGrid";
import FullGrid from "~/components/FullGrid";
export default {
    middleware: ['router-auth'],
    data(){
        return {
        date_today:new Date()
        };
    },
    watchQuery: ["page"],
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
    transition(to, from) {
        if (!from) return "fade";
        return +to.query.page > +from.query.page ? "slide-right" : "slide-left";
    },
    name: "Index",
    components: { BaelGrid, FullGrid },
    computed: {
        getLayout() {
        return this.$store.state.info.altlayout ? "FullGrid" : "BaelGrid";
        },
    },
     
}
</script>