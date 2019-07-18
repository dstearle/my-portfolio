<template>
    
    <div class="container">

        <app-about></app-about>

        <app-experience></app-experience>

        <app-contact></app-contact>

    </div>
    
</template>

<script>
    
    import About from "./portfolioBody/about/index.vue";
    import Experience from "./portfolioBody/experience/index";
    import Contact from "./portfolioBody/Contact.vue";

    export default {
        
        components: {
            
            appAbout: About,

            appExperience: Experience,

            appContact: Contact,
            
        },

    }
    
</script>
