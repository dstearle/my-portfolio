<template>
    
    <div class="row py-2">

        <div class="col">

            <div class="card border-dark">
                
                <div class="card-body">

                    <form action="">

                        <!-- Name Input -->
                        <div class="form-group">

                            <input 
                                type="text" 
                                id="name" 
                                placeholder="Enter Name" 
                                class="form-control form-control-lg"
                                :class="{
                                    'is-invalid': $v.user.name.$error, 
                                    'is-valid': !$v.user.name.$error && $v.user.name.$dirty
                                }"
                                @input="$v.user.name.$touch()"
                                v-model="user.name"
                            >

                        </div>

                        <!-- Email Input -->
                        <div class="form-group" >

                            <input 
                                type="text" 
                                id="email" 
                                placeholder="Enter Email" 
                                class="form-control form-control-lg"
                                :class="{
                                    'is-invalid': $v.user.email.$error, 
                                    'is-valid': !$v.user.email.$error && $v.user.email.$dirty
                                }"
                                @input="$v.user.email.$touch()"
                                v-model="user.email"
                            >

                        </div>

                        <!-- Text Area -->
                        <div class="form-group pt-2">

                            <textarea
                                type="text"
                                id="message" 
                                placeholder="Interested in contacting me? Write me a message here..." 
                                rows="8" 
                                class="form-control form-control-lg"
                                :class="{
                                    'is-invalid': $v.user.message.$error, 
                                    'is-valid': !$v.user.message.$error && $v.user.message.$dirty
                                }"
                                @input="$v.user.message.$touch()"
                                v-model="user.message"
                            ></textarea>

                        </div>

                        <!-- Submit Button -->
                        <div class="pt-3">

                            <button 
                                type="submit" 
                                class="btn btn-dark btn-block"
                                :disabled="submitStatus"
                                @click="submitMessage"
                            >

                                {{ submitButton }}

                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>

    </div>

</template>

<script>

    import { required, email, minLength } from 'vuelidate/lib/validators'

    export default {

        data() {

            return {

                // Data to be collected from user
                user: {

                    name: '',
                    email: '',
                    message: '',

                },

                submitButton: 'Send',
                submitStatus: null
            }

        },

        // Form validation tool imported from Vuelidate
        validations: {

            user: {

                name: {
                    required,
                    minLength: minLength(4)
                },
                email: {
                    required,
                    email
                },
                message: {
                    required,
                    minLength: minLength(15)
                },

            }

        },

        methods: {

            // Logic for submit button
            submitMessage() {

                this.$v.$touch()

                // Checks for errors in the fields
                if (this.$v.$invalid) {
                    // Informs user to fix field errors
                    this.submitButton = 'Please fill the form correctly then try again'
                }

                // Submits the message if all fields are valid
                else {
                    // Indicates pending message
                    this.submitButton = 'Sending Message...'
                    // Sets the submit button to disabled
                    this.submitStatus = true
                    setTimeout(() => {
                    // Confirms message was sent after timeout
                    this.submitButton = 'Message Sent!'
                    }, 500)
                }
                
            },

        },

    }

</script>