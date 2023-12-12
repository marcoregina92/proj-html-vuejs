<script>
import { store } from "../store.js" //state management

export default {
    name: "MainComponent2",
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
    <div class="myContainer">
        <div class="d-flex">
            <div class="imagesBox">
                <img class="businessImage" src="../assets/img/businesswoman-analysing-document-P8WSNMC-1024x820.jpg"
                    alt="businesswoman">
                <div class="green-img">
                    <img src="../assets/img/busy-architect-PYVKWM4-1024x872.jpg" alt="busy-architect">
                </div>

            </div>
            <div class="textContainer">
                <h2 class="display-4 fw-bold">Learn more about</h2>
                <h2 class="display-4 fw-bold">our <span class="color-green">mission</span></h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                    blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                    ocean.Separated they live in Bookmarksgrove.</p>
                <button class="text-uppercase">Read more</button>
            </div>
        </div>
    </div>
</template>


<style scoped>
.myContainer {
    height: 1100px;
    background-color: #eeeeee;
}

.color-green {
    color: #04d9a6
}

.textContainer {
    margin: 300px 0;
    width: 600px;
}

.imagesBox {
    margin: 300px 0;
    position: relative;
    width: 800px;
    margin-right: 300px;
}

img {
    width: 100%;
    margin-left: 150px;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
}

button {
    color: white;
    font-size: 13px;
    padding: 15px;
    background: linear-gradient(90deg, rgba(140, 225, 100, 1) 0%, rgba(78, 221, 129, 1) 30%, rgba(16, 218, 160, 1) 100%);
    width: 150px;
    border-style: none;
    border-radius: 50px;
    margin-right: 30px;
    cursor: pointer;
    margin-top: 40px;
}

.businessImage {
    position: relative;
    z-index: 1;
}

.green-img {
    width: 100%;
    position: absolute;
    left: -3%;
    top: -10%;
    margin: 0;
    background: linear-gradient(90deg, rgba(140, 225, 100, 1) 0%, rgba(78, 221, 129, 1) 30%, rgba(16, 218, 160, 1) 100%);
    border-radius: 20px;
}

.green-img img {
    width: 100%;
    margin: 0;
    opacity: 0.2;
}
</style>
