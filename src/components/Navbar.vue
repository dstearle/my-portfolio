<template>
    
    <nav class="navbar fixed-top navbar-expand navbar-light bg-light">

        <!-- Navbar Items -->
        <ul class="navbar-nav mr-auto mt-2">

            <!-- Home -->
            <li class="nav-item">
                <a class="nav-link" href="#home">Home</a>
            </li>

            <!-- About -->
            <li class="nav-item">
                <a class="nav-link" href="#about">About</a>
            </li>

            <!-- Portfolio -->
            <li class="nav-item">
                <a class="nav-link" href="#portfolio">Portfolio</a>
            </li>

            <!-- Contact -->
            <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
            </li>
            
        </ul>

        <ul class="navbar-nav ml-auto mt-2">

            <!-- Vue Logo -->
            <li class="nav-item">
                <div 
                    class="nav-link"
                    data-toggle="popover" 
                    data-placement="right"
                    data-trigger="hover"
                    data-content="I made this site using Vue.js!"
                >
                    <img class="vueLogo" src="./../assets/favicons/logo.png" alt="Vue.js Logo">
                </div>
            </li>

        </ul>
    
    </nav>
    
</template>

<script>

    export default {

        mounted() {
            // For contact button popovers
            $(function() {
              $('[data-toggle="popover"]').popover();
            });
        },
        
    }

</script>

<style scoped>

    .vueLogo {max-height: 1rem; max-width: 1rem;}

</style>
