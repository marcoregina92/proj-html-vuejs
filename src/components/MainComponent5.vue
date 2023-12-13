<script>
import { store } from "../store.js" //state management

export default {
    name: "MainComponent5",
    data() {
        return {
            store
        }

    },
    methods: {

    },
    mounted() {

    }
}
</script>


<template>
    <div class="container">
        <div class="row mt-5 mb-5">
            <div class="col-3">
                <h2 class="liveChat">WithLive Chat <br>
                    24/7Support</h2>
            </div>
            <div class="col-3">
                <div class="card">
                    <h3 class="display-6 text-center p-3">DESIGNING</h3>
                    <h2 class="price text-center p-3">$ 10 /Design</h2>
                    <ul>
                        <li><i class="fas fa-check m-2"></i>Creative Design Enables</li>
                        <li><i class="fas fa-check m-2"></i>Vibrant Color Usage</li>
                        <li><i class="fas fa-check m-2"></i>Eye Catching Design</li>
                        <li><i class="fas fa-check m-2"></i>Extreme Typography</li>
                        <li><i class="fas fa-check m-2"></i>Exceptional Design</li>
                    </ul>
                </div>
            </div>
            <div class="col-3">
                <div class="card">
                    <h3 class="display-6 text-center p-3 color-green">DEVELOPMENT</h3>
                    <h2 class="price text-center p-3">$ 10 /Design</h2>
                    <ul>
                        <li><i class="fas fa-check m-2"></i>Creative Design Enables</li>
                        <li><i class="fas fa-check m-2"></i>Vibrant Color Usage</li>
                        <li><i class="fas fa-check m-2"></i>Eye Catching Design</li>
                        <li><i class="fas fa-check m-2"></i>Extreme Typography</li>
                        <li><i class="fas fa-check m-2"></i>Exceptional Design</li>
                    </ul>
                </div>
            </div>
            <div class="col-3">
                <div class="card">
                    <h3 class="display-6 text-center p-3">SEO</h3>
                    <h2 class="price text-center p-3">$ 10 /Product</h2>
                    <ul>
                        <li><i class="fas fa-check m-2"></i>Creative Design Enables</li>
                        <li><i class="fas fa-check m-2"></i>Vibrant Color Usage</li>
                        <li><i class="fas fa-check m-2"></i>Eye Catching Design</li>
                        <li><i class="fas fa-check m-2"></i>Extreme Typography</li>
                        <li><i class="fas fa-check m-2"></i>Exceptional Design</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>


<style scoped>
.liveChat {
    font-size: 40px;
}

h3 {
    font-size: 30px;
    border-top: 15px solid #04d9a6;
    border-radius: 5px;
    margin: 0;
}

ul {
    list-style-type: none;
}

.price {
    font-size: 33px;
    background-color: #04d9a6;
    color: white;
    font-weight: 100;
}

.card {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>