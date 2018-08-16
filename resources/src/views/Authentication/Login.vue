<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-primary">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container pt-lg-md">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <template>
                            <div class="text-muted text-center mb-3">
                                <small>Sign in with</small>
                            </div>
                            <div class="btn-wrapper text-center">
                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/github.svg">
                                    Github
                                </base-button>

                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/google.svg">
                                    Google
                                </base-button>
                            </div>
                        </template>
                        <template>
                            <div class="text-center text-muted mb-4">
                                <small>Or sign in with credentials</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="ni ni-email-83"
                                            v-model="user.email">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Password"
                                            addon-left-icon="ni ni-lock-circle-open"
                                            v-model="user.password">
                                </base-input>
                                <base-checkbox>
                                    Remember me
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button 
                                        type="primary" 
                                        class="my-4"
                                        @click.prevent="loginUser(user)">Sign In</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                    <div class="row mt-3">
                        <div class="col-6">
                            <router-link to="/forgot-password" class="text-light">Forgot password?</router-link>
                        </div>
                        <div class="col-6 text-right">
                            <router-link to="/register" class="text-light">Register</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapActions } from 'vuex';
import Auth from '../../services/Auth';

export default {
  name: 'login',
  data () {
    return {
    	user: {
    		email: '',
    		password: ''
    	}
    }
  },
	methods: {
  	...mapActions({
  		setFeedback: 'feedback/setFeedback',
        setDelayedFeedback: 'feedback/setDelayedFeedback',
  		login: 'auth/login'
  	}),
  	loginUser (user) {
  		this.login(user)
		.then(() => this.$router.push({path: '/profile'}))
		.catch((error) => this.setFeedback({message: error.data, type: 'warning'}));
    }
  }
}
</script>
<style>
</style>
