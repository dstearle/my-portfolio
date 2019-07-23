<template>
    
    <div>

        <app-about></app-about>

        <app-experience></app-experience>

        <br><br><br>

        <app-contact></app-contact>

    </div>
    
</template>

<script>
    
    import About from "./portfolioBody/about/index.vue";
    import Experience from "./portfolioBody/experience/index";
    import Contact from "./portfolioBody/contact/index.vue";

    export default {
        
        components: {
            
            appAbout: About,

            appExperience: Experience,

            appContact: Contact,
            
        },

    }
    
</script>
