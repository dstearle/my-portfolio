<template>
   
    <div class="container">
       
        <div class="row">
           
            <div id="home">

                <app-navbar></app-navbar>
               
                <app-portfolio-title></app-portfolio-title>
                
                <router-view></router-view>

                <app-footer></app-footer>
                
            </div>
            
        </div>
        
    </div>
    
</template>

<script>
    
    import Navbar from "./components/Navbar.vue";
    import PortfolioTitle from "./components/PortfolioTitle";
    import Footer from "./components/Footer.vue";

    export default {
        
        components: {
            
            appNavbar: Navbar,
            appPortfolioTitle: PortfolioTitle,
            appFooter: Footer,
            
        },

    }
    
</script>
