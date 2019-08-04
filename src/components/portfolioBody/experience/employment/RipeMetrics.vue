<template>
    
    <div class="container">

        <div class="card-columns">

            <!-- Company Logo Card -->
            <div class="card company-card">
            
                <div class="card-body">

                    <!-- Company Logo -->
                    <div class="text-center">
                        <img src="./../../../../assets/images/ripeMetricsLogo.png" class="companyLogo">
                    </div>

                    <!-- Stretched Hyperlink To Company Website -->
                    <a href="https://ripemetrics.com/" class="stretched-link"></a>

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
                "We’re a Canopy San Diego company and our mission is to elevate Customer Experience for the cannabis industry. 
                We provide business intelligence tools helping cannabis companies capture the voice of customer feedback to make better-informed decisions, increase loyalty and cut marketing waste." 
                - Excerpt from RipeMetrics
            </p>

        </div>

        <!-- Accomplishments -->
        <div>

            <h5>What Did I Accomplish There?</h5>

            <p>
                As an intern at RipeMetrics I worked with a team of web developers and designers to help build and redesign the company's API.
                Working locally and in sandbox environments like AWS, I refactored parts of existing code and made new features in both the front-end and back-end.
                My biggest contribution was reworking a major part of the main dashboard for their API in which I made a styled chart that represents a company's NPS score over different periods
                of time and gauges that represent product and order scores.
            </p>

        </div>

    </div>

</template>

<style scoped>

    .companyLogo {height: 200px; width: 400px;}

    .job-card {min-height: 280px;}

    .company-card {min-height: 280px;}
    .company-card:hover {
        background-color: red;
        opacity: 0.6;
    }

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