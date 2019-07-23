<template>
    
    <div class="container">

        <div class="card-columns">

            <!-- Company Logo Card -->
            <div class="card job-card">
            
                <div class="card-body">

                    <!-- Company Logo -->
                    <div class="text-center">
                        <img src="./../../../../assets/images/ripeMetricsLogo.png" class="companyLogo">
                    </div>

                </div>
                
            </div>

            <!-- Employment Card -->
            <div class="card job-card">

                <!-- Company Name -->
                <div class="card-header">
                    <h6 class="highlight">RipeMetrics (2018 - Current)</h6>
                </div>

                <!-- Job Specifications -->
                <div class="card-body">
                    <!-- Position Title -->
                    <h6 class="card-title">Web Developer Intern</h6>
                    <!-- Duties -->
                    <ul class="card-text">
                        <li>Used Git for version control</li>
                        <li>Worked in local and sandbox environments</li>
                        <li>Learned & utilized Bootstrap, Vue.js & Laravel</li>
                        <li>Refactored code for the front end & back end</li>
                        <li>Worked in an Agile environment</li>
                        <li>Participated in pair programming</li>
                    </ul>
                </div>

            </div>

        </div>

        <!-- Company Info -->
        <div>

            <h5>Who Are RipeMetrics?</h5>

            <p>
                "We’re a Canopy San Diego company and our mission is to elevate Customer Experience for the cannabis industry. We provide business intelligence tools helping cannabis companies capture the voice of customer feedback to make better-informed decisions, increase loyalty and cut marketing waste." - Excerpt from RipeMetrics
            </p>

        </div>

        <!-- ??? -->
        <div>

            <h5>What Did I Accomplish There?</h5>

            <p>
                As an intern for RipeMetrics I was given many resources and experienced guidance on how a developer operates in a working environment. On a day to day basis I worked in an linux environment for version control (git) using my own isolated branch to submit changes to the master repo for review. When I first started working at RipeMetrics we did not have a cloud9 so we had to setup our own work environments on our laptops. This was a learning experience for me in that I was able to learn how to do this complicated setup on my own for future purposes but also see what it takes to create a developer's environment from scratch. Eventually we did switch over to cloud9 and ever since I have been working in that environment. The API I worked on for RipeMetrics used Vue.js and Bootstrap for the frontend and Laravel for the backend. Being brought in as a full-stack intern I had the unique opportunity of being the first intern to ever work in the backend.
            </p>

        </div>

    </div>

</template>

<style scoped>

    .companyLogo {height: 200px; width: 400px;}

    .job-card {min-height: 280px;}

    @media (min-width: 576px) {
        .card-columns {
            column-count: 1;
        }
    }

    @media (min-width: 768px) {
        .card-columns {
            column-count: 1;
        }
    }

    @media (min-width: 992px) {
        .card-columns {
            column-count: 2;
        }
    }

    @media (min-width: 1200px) {
        .card-columns {
            column-count: 2;
        }
    }

</style>