<template>
    
    <div id="portfolio" class="container py-5">

        <!-- Section Title -->
        <h3 class="text-primary pt-5 pb-4">Work Experience</h3>
                    
        <ripe-metrics></ripe-metrics>

        <!-- Section Title -->
        <h3 class="text-primary pt-5 pb-4">Personal Projects</h3>

        <!-- Personal Projects -->
        <div class="container card-columns">

            <laravel-qa></laravel-qa>

            <shrimp-king></shrimp-king>

            <vue-Lists></vue-Lists>
            
        </div>

    </div>
    
</template>

<script>

    import RipeMetrics from "./employment/RipeMetrics.vue";
    import LaravelQa from "./projects/LaravelQa.vue";
    import ShrimpKing from "./projects/ShrimpKing.vue";
    import VueLists from "./projects/VueLists";
    
    export default {

        components: {
            
            ripeMetrics: RipeMetrics,

            laravelQa: LaravelQa,

            shrimpKing: ShrimpKing,

            vueLists: VueLists,
            
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