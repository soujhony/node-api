<template>
    <div>
        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-6">
                                <h1 class="display-3  text-white">{{ email }} has been confirmed
                                    <span>Yay! Now we know you are who you say you are</span>
                                </h1>
                                <p class="lead  text-white">We won't send you any emails unless we really have to</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-check-bold" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Home</h6>
                                    <base-button tag="a" href="/" type="primary" class="mt-4">
                                        Take me to the home page
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-istanbul" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase">Components</h6>
                                    <base-button tag="a" href="/" type="warning" class="mt-4">
                                        Show me the Components
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-planet" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase">Login</h6>
                                    <base-button tag="a" href="/" type="success" class="mt-4">
                                        I am trying to login
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </div>
</template>
<script>
export default {
    data: function() {
         return  {
           email: this.$route.params.email
         }
    },
};
</script>
<style>
</style>
