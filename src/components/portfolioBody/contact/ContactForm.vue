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
                                :class="{'is-invalid': $v.name.$error, 'is-valid': !$v.name.$error && $v.name.$dirty}"
                                @input="$v.name.$touch()"
                                v-model="name"
                            >
                        </div>

                        <!-- Email Input -->
                        <div class="form-group" >
                            <input 
                                type="text" 
                                id="email" 
                                placeholder="Enter Email" 
                                class="form-control form-control-lg"
                                :class="{'is-invalid': $v.email.$error, 'is-valid': !$v.email.$error && $v.email.$dirty}"
                                @input="$v.email.$touch()"
                                v-model="email"
                            >
                        </div>

                        <!-- Text Area -->
                        <div class="form-group pt-2">
                            <textarea 
                                id="message" 
                                placeholder="Interested in contacting me? Write me a message here..." 
                                rows="5" 
                                class="form-control form-control-lg"
                                :class="{'is-invalid': $v.message.$error, 'is-valid': !$v.message.$error && $v.message.$dirty}"
                                @input="$v.message.$touch()"
                                v-model="message"
                            ></textarea>
                        </div>

                        <!-- Submit Button -->
                        <div class="pt-3">
                            <button type="submit" class="btn btn-dark btn-block" @click="submitMessage">
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
                name: '',
                email: '',
                message: '',
                submitButton: 'Send',
                submitStatus: null
            }
        },

        // Form validation tool imported from Vuelidate
        validations: {

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

        },

        methods: {
            // Logic for submit button
            submitMessage() {
                this.$v.$touch()
                // Checks for errors in the fields
                if (this.$v.$invalid) {
                    this.submitButton = 'Please fill the form correctly'
                }
                // Submits the message if all fields are valid
                else {
                    // Indicates pending message
                    this.submitButton = 'Sending Message...'
                    setTimeout(() => {
                    // Confirms message was sent after timeout
                    this.submitButton = 'Message Sent!'
                    }, 500)
                }
            },

        }

    }

</script>