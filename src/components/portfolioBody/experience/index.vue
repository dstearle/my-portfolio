<template>
    
    <div id="portfolio" class="container py-5">

        <h3 class="text-primary pt-5 pb-4">Work Experience</h3>
                    
        <ripe-metrics></ripe-metrics>

    </div>
    
</template>

<script>

    import RipeMetrics from "./employment/RipeMetrics.vue";
    
    export default {

        components: {
            
            ripeMetrics: RipeMetrics,
            
        },
        
    }

</script>