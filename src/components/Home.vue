<template>
    
    <div class="container">

        <app-about></app-about>

        <app-work-experience></app-work-experience>

    </div>
    
</template>

<script>
    
    import About from "./portfolioBody/About";
    import WorkExperience from "./portfolioBody/WorkExperience";

    export default {
        
        components: {
            
            appAbout: About,

            appWorkExperience: WorkExperience,
            
        },

    }
    
</script>
