<template>
    
    <div class="container">

        <app-about></app-about>

        <app-work-experience></app-work-experience>

        <app-contact></app-contact>

    </div>
    
</template>

<script>
    
    import About from "./portfolioBody/About";
    import WorkExperience from "./portfolioBody/experience/ExperienceIndex";
    import Contact from "./portfolioBody/Contact.vue";

    export default {
        
        components: {
            
            appAbout: About,

            appWorkExperience: WorkExperience,

            appContact: Contact,
            
        },

    }
    
</script>
