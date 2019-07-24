<template>
    
    <div class="col">

        <div class="card">

            <div class="card-body">

                <!-- Skills & Tools Table -->
                <table class="table table-borderless">
                    
                    <tr v-for="skills of mySkills">
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
