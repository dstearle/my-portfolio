<template>
   
    <div class="container">
       
        <div class="row">
            
            <!-- Navbar -->
            <app-navbar></app-navbar>
            
            <!-- Portfolio Body -->
            <router-view></router-view>
            
        </div>
        
    </div>
    
</template>

<script>
    
    import Navbar from "./components/Navbar.vue";

    export default {
        
        components: {
            
            appNavbar: Navbar,
            
        },

    }
    
</script>
