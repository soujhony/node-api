<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
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
                            <div class="text-center text-muted mb-4">
                                <small>We are so glad you are back! 
                                    <br />
                                Remember to choose a strong password</small>
                            </div>
                            <form role="form">
                                <base-input alternative
                                            class="mb-3"
                                            :value="email"
                                            addon-left-icon="ni ni-email-83">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="New Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <base-input alternative
                                            type="password"
                                            placeholder="Confirm New Password"
                                            addon-left-icon="ni ni-lock-circle-open">
                                </base-input>
                                <base-input alternative
                                            type="hidden"
                                            :value="token">
                                </base-input>
                                <div class="text-muted font-italic">
                                    <small>password strength:
                                        <span class="text-success font-weight-700">strong</span>
                                    </small>
                                </div>
                                <hr />
                                <base-checkbox>
                                    I am not a robot
                                </base-checkbox>
                                <div class="text-center">
                                    <base-button type="primary" class="my-4">Reset password</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    data: function() {
         return  {
           token: this.$route.params.token,
           email: this.$route.params.email
         }
    },
};
</script>
<style>
</style>
