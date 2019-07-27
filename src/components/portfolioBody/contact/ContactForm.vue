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
                        <div class="form-group">
                            <textarea 
                                id="message" 
                                placeholder="Interested in contacting me? Write me a message here..." 
                                rows="3" 
                                class="form-control"
                                :class="{'is-invalid': $v.message.$error}"
                                @input="$v.message.$touch()"
                                v-model="message"
                            ></textarea>
                        </div>

                        <div class="pt-3">
                            <button type="submit" class="btn btn-dark btn-block">Send</button>
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
            handleSubmit() {
            // Send data to the server or update your stores and such.
            }
        }

    }

</script>

