<script>
import { store } from "../store.js" //state management
import MainComponent1 from "./MainComponent1.vue"
import MainComponent2 from "./MainComponent2.vue"
import MainComponent3 from "./MainComponent3.vue"
import MainComponent4 from "./MainComponent4.vue"
import MainComponent5 from "./MainComponent5.vue"
import MainComponent6 from "./MainComponent6.vue"




export default {
    name: "AppMain",
    components: {
        MainComponent1,
        MainComponent2,
        MainComponent3,
        MainComponent4,
        MainComponent5,
        MainComponent6
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
    <MainComponent1 />
    <MainComponent2 />
    <MainComponent3 />
    <MainComponent4 />
    <MainComponent5 />
    <MainComponent6 />
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