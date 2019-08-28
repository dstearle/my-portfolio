<template>
    
    <div class="container">

        <div class="card mb-3">

            <div class="card-body">

                <!-- Skills & Tools Table -->
                <table class="table table-borderless">
                    
                    <tr v-for="skills of mySkills" v-bind:key="skills">
                        <!-- Column 1 -->
                        <td class="text-center p-4">{{ skills.col1 }}</td>
                        <!-- Column 2 -->
                        <td class="text-center p-4">{{ skills.col2 }}</td>
                        <!-- Column 3 -->
                        <td class="text-center p-4">{{ skills.col3 }}</td>
                    </tr>

                </table>

            </div>

        </div>

        <!-- Skills & Tools Text Area -->
        <p>
            As a web developer I am very flexible when it comes to working with a wide variety of tools. 
            Whether your company uses frameworks such as Angular or React or if you primarily use template builders
            such as Wordpress or Drupal, I am able to do it all! I personally build my websites and applications using Vue.js 
            and Bootstrap since that is what I have the most experience with, however I will gladly build whatever you need 
            using a different tool set if necessary.
        </p>

    </div>

</template>

<script>

    export default {

        data() {

            return {
                mySkills: [
                    { col1: "HTML5", col2: "CSS", col3: "JAVASCRIPT"},
                    { col1: "VUE.JS", col2: "BOOTSTRAP", col3: "LARAVEL"},
                    { col1: "PHP", col2: "SQL", col3: "MYSQL"},
                    { col1: "C#", col2: "XML", col3: ".NET"},
                    { col1: "GIT", col2: "VERSION CONTROL", col3: "AWS"},
                ]
            }
            
        }

    }
    
</script>
