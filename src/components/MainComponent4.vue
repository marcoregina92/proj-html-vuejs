<script>
import { store } from "../store.js" //state management

export default {
    name: "MainComponent4",
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
        <div class="mask">

        </div>
        <div class="squareDx">
            <div class="boxProjects">
                <h2 class="display-1">280</h2>
                <h4 class="">PROJECTS</h4>
                <h2 class="display-1">+3,500</h2>
                <h4 class="">USERS' COMMENTS</h4>
                <h2 class="display-1">100%</h2>
                <h4 class="">HAPPY CLIENT</h4>
            </div>
        </div>

        <div class="squareSx">
            <h3 class="display-2 font-weight-bold">We <span class="color-green">Love</span> What <br> We Do</h3>
            <p class="p-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there
                live the blind
                texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.Separated they live in Bookmarksgrove. Far far away, behind the word mountains. large language ocean.
                far from the countries Vokalia and Consonantia</p>
        </div>

    </div>
</template>


<style scoped>
.boxProjects {
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-top: 80px;
}

.myContainer {
    display: flex;
    justify-content: space-evenly;
    height: 800px;
}

.mask {
    position: absolute;
    width: 800px;
    height: 600px;
    left: 64px;
    background: linear-gradient(90deg, rgba(140, 225, 100, 1) 0%, rgba(78, 221, 129, 1) 30%, rgba(16, 218, 160, 1) 100%);
    border-radius: 20px;
    opacity: 0.5;
}

.squareDx {
    width: 800px;
    height: 600px;
    left: 120px;
    border-radius: 25px;
    background-position: 80%;
    background-image: url(../assets/img/person-with-long-curly-hair-PZ99QM2-2x.jpg);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.squareSx {
    width: 800px;
    height: 600px;
    background-color: white;
    position: relative;
    right: 116px;
    top: 79px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

}

.color-green {
    color: #04d9a6
}
</style>