<template>
    
    <div class="container">

        <div id="mainPhotoDiv">
            
            <img src="./../../../assets/images/DallasProfilePic.jpg" class="imgclass1" alt="Dallas Head Shot">
            
        </div>

        <h3>Introduction</h3>
        
        <br>

        <p>
            Hey there! My name is Dallas and I am currently a Fullstack Webdeveloper interning for a start up company called RipeMetrics. I have been
            living in San Diego since 2018 and have been working hard to learn the skills and knowledge needed to become an amazing developer. I love 
        </p>
    
        <br><br>
        
        <app-education></app-education>

    </div>
    
</template>

<script>

    import Education from "./Education.vue";

    export default {

        components: {
            
            appEducation: Education,
            
        },
        
    }

</script>


<style>

    .imgclass1 {border: none; border-radius: 50%; max-height: 250px; max-width: 400px;}

</style>
