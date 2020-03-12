<template>
    
    <div id="projects" class="container py-5">

        <!-- Section Title -->
        <h3 class="text-primary pt-5 pb-4">Personal Projects</h3>

        <!-- Personal Projects -->
        <div class="container card-columns">

            <fire-sight></fire-sight>

            <shrimp-king></shrimp-king>

            <vue-Lists></vue-Lists>
            
        </div>

    </div>

</template>

<script>

    import FireSight from "./FireSight";
    import ShrimpKing from "./ShrimpKing.vue";
    import VueLists from "./VueLists";

    export default {
        
        components: {

            fireSight: FireSight,

            shrimpKing: ShrimpKing,

            vueLists: VueLists,

        }

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