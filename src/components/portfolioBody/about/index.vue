<template>
    
    <div id="about" class="container py-5">

        <!-- Introduction Title -->
        <h3 class="text-primary pt-5 pb-4">Introduction</h3>
        
        <p class="container">
            Hi there I'm Dallas, a full stack web developer based in San Diego. I love camping, trying out new breweries and taking my son to the zoo.
            For the past year I have been interning for a start up company here in San Diego called RipeMetrics. 
            I am always searching for new opportunities for work wherever they may be, so contact me today and lets see how I can help build your project! 
        </p>
            
        <!-- Education Title -->
        <h3 class="text-primary py-4">Education</h3>

        <app-education></app-education>

        <!-- Skills & Tools Title -->
        <h3 class="text-primary py-4">Skills & Tools</h3>

        <app-skills-tools></app-skills-tools>

    </div>
    
</template>

<script>

    import Education from "./Education.vue";
    import SkillsTools from "./SkillsTools.vue";

    export default {

        components: {
            
            appEducation: Education,

            appSkillsTools: SkillsTools,
            
        },
        
    }

</script>
