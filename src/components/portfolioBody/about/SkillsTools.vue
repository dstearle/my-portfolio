<template>
    
    <div class="col">

        <div class="card">

            <div class="card-body">

                <table class="table table-bordered">
                    
                    <tr v-for="skills of mySkills">
                        <td class="text-center">{{ skills.col1 }}</td>
                        <td class="text-center">{{ skills.col2 }}</td>
                        <td class="text-center">{{ skills.col3 }}</td>
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
                ]
            }
        }
    }
</script>
