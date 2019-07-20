<template>
   
    <div class="container">
       
        <div class="row">
           
            <div>
               
                <app-portfolio-title></app-portfolio-title>
                
                <hr>
                
                <router-view></router-view>

                <app-footer></app-footer>
                
            </div>
            
        </div>
        
    </div>
    
</template>

<script>
    
    import PortfolioTitle from "./components/PortfolioTitle";
    import Footer from "./components/Footer.vue";

    export default {
        
        components: {
            
            appPortfolioTitle: PortfolioTitle,

            appFooter: Footer,
            
        },

    }
    
</script>

<style>
    
    body {
        
        padding: 30px;
        
    }

    .slide-enter-active {

        animation: slide-in 200ms ease-out forwards;

    }

    .slide-leave-active {

        animation: slide-out 200ms ease-out forwards;

    }

    @keyframes slide-in {

        from {

            transform: translateY(-30px);
            opacity: 0;

        }

        to {

            transform: translateY(0px);
            opacity: 1;

        }

    }

       @keyframes slide-out {

        from {

            transform: translateY(0px);
            opacity: 1;

        }

        to {

            transform: translateY(-30px);
            opacity: 0;

        }

    } 

</style>
