<script>
import { store } from "../store.js" //state management

export default {
    name: "MainComponent6",
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
    <div class="comment-container">
        <div class="text-container text-center">
            <div class=" h-100 container d-flex flex-column justify-content-center">
                <i class="fa-solid fa-quote-left"></i>
                <p>When it comes to barbequing, there are two main schools of thought for the techniques that you can use.
                    Freshly scrambled eggs with applewood smoked bacon - are amazing!</p>
                <div>
                    <div class="img-container mb-4">
                        <img src="../assets/img/businesswoman-analysing-document-P8WSNMC-1024x820.jpg" alt="businesswoman">
                    </div>
                    <h4 class="text-uppercase">Lissa Durbin</h4>
                    <h5 class="text-white">Client</h5>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
i {
    font-size: 50px;
    color: white
}

h4 {
    color: white;
}

.comment-container {
    height: 1000px;
    background-image: url('../assets/img/four-businesspeople-in-a-boardroom-with-paperwork-PC4V8H4.jpg');
    background-size: cover;
    background-position: center;
}

.text-container {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
}

.container {
    max-width: 1000px;
}

p {
    color: white;
    font-size: 30px;
    margin: 80px 0;
}

img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
}
</style>