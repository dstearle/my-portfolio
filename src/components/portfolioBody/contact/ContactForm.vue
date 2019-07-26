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
                                v-bind:class="isValid"
                                v-model="user.name"
                            >
                        </div>

                        <!-- Email Input -->
                        <div class="form-group">
                            <input 
                                type="text" 
                                id="email" 
                                placeholder="Enter Email" 
                                class="form-control form-control-lg"
                                v-model="user.email"
                            >
                        </div>

                        <!-- Text Area -->
                        <div class="form-group">
                            <textarea 
                                id="message" 
                                placeholder="Interested in contacting me? Write me a message here..." 
                                rows="3" 
                                class="form-control"
                                v-model="user.message"
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

    export default {

        data() {
            return {
                user: {
                    email: '',
                    name: '',
                    message: '',
                    valid: false,
                }
            }
        },

        computed: {
            isValid: function() {
                
                return this.user.valid ? 'is-valid' : 'is-invalid'
                return console.log(this.user.valid) 
                
            }
        },

        methods: {
            handleSubmit() {
            // Send data to the server or update your stores and such.
            }
        }

    }

</script>
