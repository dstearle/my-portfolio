<template>
    
    <div class="container">
                
        <div class="card-columns">
            
            <!-- Palomar College -->
            <div class="card">

                <!-- Card Title -->
                <div class="card-header">
                    
                    <h6>Palomar College (2017-2019)</h6>

                </div>

                <div class="card-body">

                    <!-- Palomar College Seal -->
                    <div class="text-center pb-3">

                        <img 
                            src="./../../../assets/images/palomarSeal.gif" 
                            class="collegeSeal"
                            alt="Palomar College Seal"
                        >

                    </div>

                    <!-- Degrees -->
                    <div class="col text-center">

                        <div>Associates: Computer Science IT</div>

                        <div>Certificate: Web Development</div>

                    </div>

                </div>

            </div>
    
            <!-- CSU San Bernardino -->
            <div class="card">

                <!-- Card Title -->
                <div class="card-header">

                    <h6>CSU San Bernardino (2009-2013)</h6>

                </div>

                <div class="card-body">

                    <!-- CSU San Bernardino Seal -->
                    <div class="text-center pb-3">

                        <img 
                            src="./../../../assets/images/csusbSeal.png" 
                            class="collegeSeal"
                            alt="CSUSB Seal"
                        >

                    </div>

                    <!-- Degrees -->
                    <div class="col text-center">

                        <div>Bachelors: Anthropology</div>

                        <div>Minor: Criminal Justice</div>

                    </div>

                </div>

            </div>
            
        </div>
        
        <!-- Education Text Area -->
        <p>
            In 2017 I started taking computer science classes through Palomar College to see what the world of web development and tech was like.
            I first started with a certificate program for web development and learned many of the basic skills needed to code such as basic html, css and javascript. 
            When I had finished my certificate program, I felt that this was definitely a career I could see myself thriving in so I decided to continue my education by completing an associates degree in computer science where I further refined my skills.
            Although I may have completed both a cerficate program and an associates computer sciences, there is always more to learn in the world of web development!
        </p>

    </div>

</template>

<style scoped>

    .collegeSeal {height: 175px; width: 175px;}

    @media (min-width: 576px) {
        .card-columns {
            column-count: 1;
        }
    }

    @media (min-width: 768px) {
        .card-columns {
            column-count: 2;
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

