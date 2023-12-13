<script>
import { store } from "../store.js" //state management

export default {
    name: "MainComponent3",
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
    <div class="d-flex align-items-center mb-5">
        <div class="title-container">
            <h2 class="display-4 fw-bold mb-5">Our recent <span class="color-green">web designs</span> & some examples
                of
                past
                <span class="color-green">projects</span>
            </h2>
        </div>
        <div class="paragraph-container d-flex align-items-end ">
            <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.Separated they live in Bookmarksgrove.Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
        </div>
    </div>

    <div class="myContainer">
        <div class="box-card ">
            <div class="mycard " v-for="design in store.designs">
                <div class="mask d-flex justify-content-end flex-column p-4 ">
                    <h4 class="text-white slideUp"> {{ design.name }}</h4>
                    <div class="d-flex text-uppercase">
                        <h5 class="me-2 text-white slideUp">{{ design.genre1 }}</h5>
                        <h5 class="text-white slideUp">{{ design.genre2 }}</h5>
                    </div>
                </div>
                <img :src="'../src/assets/img/' + design.image">
            </div>
        </div>

        <div class="d-flex justify-content-center m-5">
            <button class="btn text-uppercase">Read More</button>
        </div>
    </div>
</template>


<style scoped>
button {
    color: white;
    font-size: 13px;
    padding: 15px;
    background: linear-gradient(90deg, rgba(140, 225, 100, 1) 0%, rgba(78, 221, 129, 1) 30%, rgba(16, 218, 160, 1) 100%);
    width: 150px;
    border-style: none;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}


h4 {
    font-weight: 100;
}

.mask:hover .slideUp {
    animation-name: slideInUp;
    animation-duration: 2s;
    animation-fill-mode: both;
}

@keyframes slideInUp {
    0% {
        transform: translateY(100%);
        visibility: visible;
    }

    100% {
        transform: translateY(0);
    }
}

× @keyframes slide-top {
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-100px);
    }
}


.myContainer {
    width: 90%;
    margin: 0 auto;
}

.mask {
    position: absolute;
    width: 394px;
    height: 394px;
    background: linear-gradient(90deg, rgba(140, 225, 100, 1) 0%, rgba(78, 221, 129, 1) 30%, rgba(16, 218, 160, 1) 100%);
    opacity: 0;
    border-radius: 20px;
}

.mask:hover {
    transition: opacity 0.5s ease;
    opacity: 0.9;
}

.mycard:hover {
    transform: scale(1.1);
    transition: transform 0.8s ease
}

img {
    width: 100%;
    border-radius: 20px;
}

.color-green {
    color: #04d9a6;
}

.title-container {
    padding: 40px;
    width: 800px;
}

.paragraph-container {
    width: 800px;
    height: 300px;
}

.mycard {
    width: calc(100% / 4 - 10px);
    margin: 5px;
    border-radius: 25px;
}

.box-card {
    display: flex;
    flex-wrap: wrap;
}
</style>