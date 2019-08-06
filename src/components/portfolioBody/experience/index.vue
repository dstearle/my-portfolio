<template>
    
    <div id="portfolio" class="container py-5">

        <h3 class="text-primary pt-5 pb-4">Work Experience</h3>
                    
        <ripe-metrics></ripe-metrics>

        <h3 class="text-primary pt-5 pb-4">Personal Projects</h3>

        <div class="card-columns">

            <laravel-qa></laravel-qa>

            <vue-stock-trader></vue-stock-trader>

            <laravel-qa></laravel-qa>
            
        </div>

    </div>
    
</template>

<script>

    import RipeMetrics from "./employment/RipeMetrics.vue";
    import LaravelQa from "./projects/LaravelQa.vue";
    import VueStockTrader from "./projects/VueStockTrader.vue";
    
    export default {

        components: {
            
            ripeMetrics: RipeMetrics,

            laravelQa: LaravelQa,

            vueStockTrader: VueStockTrader,
            
        },
        
    }

</script>

<style>

    .project-card {min-height: 580px;}

    @media (min-width: 576px) {
        .card-columns {
            column-count: 1;
        }
    }

    @media (min-width: 768px) {
        .card-columns {
            column-count: 1;
        }
    }

    @media (min-width: 992px) {
        .card-columns {
            column-count: 3;
        }
    }

    @media (min-width: 1200px) {
        .card-columns {
            column-count: 3;
        }
    }

</style>