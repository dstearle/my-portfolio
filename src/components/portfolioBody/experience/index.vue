<template>
    
    <div id="portfolio" class="container py-5">

        <!-- Section Title -->
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

<style>

    .card-img-top {
        height: 280px;
    }

    @media (min-width: 576px) {
        .card-columns {
            column-count: 1;
        }

        .card-img-top {
            height: 400px;
        }
    }

    @media (min-width: 768px) {
        .card-columns {
            column-count: 1;
        }

        .card-img-top {
            height: 450px;
        }
    }

    @media (min-width: 992px) {
        .card-columns {
            column-count: 3;
        }

        .card-img-top {
            height: 215px;
        }
    }

    @media (min-width: 1200px) {
        .card-columns {
            column-count: 3;
        }

        .card-img-top {
            height: 215px;
        }
    }

</style>