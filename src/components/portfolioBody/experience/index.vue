<template>
    
    <div id="portfolio" class="container py-5">

        <h3 class="text-primary pt-5 pb-4">Work Experience</h3>
                    
        <ripe-metrics></ripe-metrics>

        <h3 class="text-primary pt-5 pb-4">Personal Projects</h3>

        <laravel-qa></laravel-qa>

    </div>
    
</template>

<script>

    import RipeMetrics from "./employment/RipeMetrics.vue";
    import LaravelQa from "./projects/LaravelQa.vue";
    
    export default {

        components: {
            
            ripeMetrics: RipeMetrics,

            laravelQa: LaravelQa,
            
        },
        
    }

</script>