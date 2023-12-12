<script>
import { store } from "../store.js" //state management

export default {
    name: "MainComponent1",
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
        <div class="row mt-5">
            <div class="col-4">
                <h2>We Are Here To <br>
                    Make You <span class="greenColor"> Website </span> <br>
                    Look More <span class="greenColor">Elegant</span> <br> and Stylish!</h2>
            </div>
            <div class="col-8">
                <div class="boxcard">
                    <div class="card" v-for="item in store.contentCard">
                        <i :class="'fa-solid ' + item.icon"></i>
                        <h3 class="mt-4">{{ item.name }}</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia Separated...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.myContainer {
    width: 90%;
    margin: 0 auto;
}

.boxcard {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
}

.card {
    width: 400px;
    height: 300px;
    margin: 20px;
    padding: 30px;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.card:hover {
    background: linear-gradient(90deg, rgba(140, 225, 100, 1) 0%, rgba(78, 221, 129, 1) 30%, rgba(16, 218, 160, 1) 100%);
    border: 0;

}

h2 {
    font-size: 58px;
    margin-top: 100px;
    font-weight: bold;
}

i {
    font-size: 80px;
    color: #04d9a6;
}

.greenColor {
    color: #04d9a6;

}
</style>