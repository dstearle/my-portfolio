<template>
    
    <div>

        <!-- Title & Profile Photo -->
        <app-portfolio-title></app-portfolio-title>

        <!-- Introduction, Education & Skills -->
        <app-about></app-about>

        <!-- Work Experience -->
        <app-experience></app-experience>

        <!--Portfolio Projects -->
        <app-projects></app-projects>

        <br><br><br>

        <!-- Contact Info & Form -->
        <app-contact></app-contact>

        <!-- Footer -->
        <app-footer></app-footer>

    </div>
    
</template>

<script>
    
    import PortfolioTitle from "./PortfolioTitle.vue";
    import About from "./portfolioBody/about/index.vue";
    import Experience from "./portfolioBody/experience/index";
    import Projects from "./portfolioBody/projects/index";
    import Contact from "./portfolioBody/contact/index.vue";
    import Footer from "./Footer.vue";

    export default {
        
        components: {
            
            appPortfolioTitle: PortfolioTitle,

            appAbout: About,

            appExperience: Experience,

            appProjects: Projects,

            appContact: Contact,

            appFooter: Footer,
            
        },

    }
    
</script>
