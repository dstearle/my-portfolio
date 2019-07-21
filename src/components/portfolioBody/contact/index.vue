<template>
    
    <div class="container">

        <h3 class="text-primary py-4">Contact</h3>

        <div class="row">

            <!-- Email Copy -->
            <div class="contactButton col-md-12 col-lg-4">
                <button 
                    class="btn btn-dark btn-block"
                    data-toggle="popover" 
                    data-placement="top"
                    data-trigger="hover"
                    data-content="YABA DABBA DOO!"
                >
                    <img src="./../../../assets/images/favEmail.png" class="contactFav" alt="Email Favicon">
                    <span> dallas.st.earle@gmail.com</span>
                </button>
            </div>

            <!-- LinkedIn -->
            <div class="contactButton col-md-12 col-lg-4">
                <a 
                    class="btn btn-dark btn-block" 
                    href="https://www.linkedin.com/in/dallas-earle-98baa87b" 
                    role="button"
                >
                    <img src="./../../../assets/images/favLinkedIn.png" class="contactFav" alt="LinkdIn Favicon">
                    <span> Dallas Earle</span>
                </a>
            </div>

            <!-- Github -->
            <div class="contactButton col-md-12 col-lg-4">
                <a 
                    class="btn btn-dark btn-block" 
                    href="https://github.com/dstearle" 
                    role="button"
                >
                    <img src="./../../../assets/images/favGithub.png" class="contactFav" alt="Github Favicon">
                    <span> dstearle</span>
                </a>
            </div>

        </div>

    </div>

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

    .contactFav {max-height: 1.5rem; max-width: 1.5rem;}

    @media (min-width: 576px) {
        .contactButton {
            padding-top: 5px;
            padding-bottom: 5px;
        }
    }

</style>
