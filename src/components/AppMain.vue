<script>
import { store } from "../store.js" //state management
import MainComponent1 from "./MainComponent1.vue"

export default {
    name: "AppMain",
    components: {
        MainComponent1
    },
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
        <div class="row">
            <div class="col-5 title">
                <p>17 YEARS OF EXPERIENCE</p>
                <h1 class="d-flex"> We Are a <br> Web Design</h1>
                <p class="mt-5"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                    there live the
                    blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                    ocean.Separated they live in Bookmarksgrove.</p>
                <button class="btn btn-dark mb-5 mt-4 text-uppercase">Read More</button>
                <ul class="d-flex fw-bold p-0">
                    <li>Facebook </li>
                    <li>Instagram </li>
                    <li>Youtube </li>
                    <li>Twitter</li>
                </ul>
            </div>
            <div class="col-7">
                <img src="../assets/img/slide-1.png" alt="">
            </div>

        </div>

    </div>
    <MainComponent1 />
</template>

<style scoped>
img {
    width: 900px;
}

.title {
    margin-top: 100px;
    /* display: flex;
    align-items: center; */
}

.title h1 {
    font-size: 90px;
    font-weight: bold;
}

.btn {
    border-radius: 40px;
    padding: 15px 40px;
}

li {
    margin-right: 20px;
    list-style: none;
}

li:hover {
    cursor: pointer;
}
</style>