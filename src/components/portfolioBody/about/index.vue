<template>
    
    <div id="about" class="container py-5">

        <!-- Introduction Title -->
        <h3 class="text-primary pt-5 pb-4">Introduction</h3>
        
        <p>
            I am currently a Full Stack Web Developer interning for a start up company in San Diego called RipeMetrics. 
            Currently I am searching for new opportunities for work wherever they may be, so contact me today and lets see how I can help build your project! 
        </p>
            
        <!-- Education Title -->
        <h3 class="text-primary py-4">Education</h3>

        <app-education></app-education>

    </div>
    
</template>

<script>

    import Education from "./Education.vue";

    export default {

        components: {
            
            appEducation: Education,
            
        },
        
    }

</script>


<style>

    .imgclass1 {border: none; border-radius: 50%; max-height: 250px; max-width: 400px;}

</style>
