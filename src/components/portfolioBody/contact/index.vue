<template>
    
    <div id="contact" class="container pt-5">

        <!-- Section Title -->
        <h3 class="text-primary pt-5 pb-4">Contact</h3>

        <div class="row">

            <!-- Email Copy -->
            <div class="contactButton col-md-12 col-lg-4">
                <button 
                    class="btn btn-dark btn-block"
                    data-toggle="popover" 
                    data-placement="top"
                    data-trigger="hover"
                    data-content="Click here to copy my email to your clipboard"
                    v-clipboard:copy="emailAddress"
                    @click="copyEmail"
                >
                    <img src="./../../../assets/favicons/favEmail.png" class="contactFav" alt="Email Favicon">
                    <span> {{ emailButton }}</span>
                </button>
            </div>

            <!-- LinkedIn -->
            <div 
                class="contactButton col-md-12 col-lg-4"
                data-toggle="popover" 
                data-placement="top"
                data-trigger="hover"
                data-content="Click here to visit my LinkedIn profile"
            >
                <a 
                    class="btn btn-dark btn-block" 
                    href="https://www.linkedin.com/in/dallas-earle-98baa87b" 
                    role="button"
                >
                    <img src="./../../../assets/favicons/favLinkedIn.png" class="contactFav" alt="LinkdIn Favicon">
                    <span> Dallas Earle</span>
                </a>
            </div>

            <!-- Github -->
            <div 
                class="contactButton col-md-12 col-lg-4"
                data-toggle="popover" 
                data-placement="top"
                data-trigger="hover"
                data-content="Click here to visit my Github profile"
            >
                <a 
                    class="btn btn-dark btn-block" 
                    href="https://github.com/dstearle" 
                    role="button"
                >
                    <img src="./../../../assets/favicons/favGithub.png" class="contactFav" alt="Github Favicon">
                    <span> dstearle</span>
                </a>
            </div>

        </div>

        <!-- Contact Form -->
        <app-contact-form></app-contact-form>

    </div>

</template>

<script>

    import ContactForm from "./ContactForm.vue"

    export default {

        data() {

            return {

                emailAddress: 'dallas.st.earle@gmail.com',
                emailButton: 'dallas.st.earle@gmail.com',

            }

        },

        components: {
            
            appContactForm: ContactForm,
            
        },

        mounted() {
            // For contact button popovers
            $(function() {
              $('[data-toggle="popover"]').popover();
            });
        },

        methods: {
            // Logic for email button
            copyEmail() {
                // Indicates email has been copied to clipboard
                this.emailButton = 'Copied!'
                setTimeout(() => {
                // Resets button text after timeout
                this.emailButton = 'dallas.st.earle@gmail.com'
                }, 2000)
            },

        },
        
    }

</script>


<style scoped>

    .contactFav {max-height: 1.5rem; max-width: 1.5rem;}

    @media (max-width: 575px) {
        .contactButton {
            padding-top: 5px;
            padding-bottom: 5px;
        }
    }

    @media (min-width: 576px) {
        .contactButton {
            padding-top: 5px;
            padding-bottom: 5px;
        }
    }

</style>
