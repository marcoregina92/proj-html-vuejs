<script>
import { store } from '../store'
export default {
    name: 'SearchBar',
    data() {
        return {
            store
        }
    },
    methods: {
    }
}
</script>


<template>
    <div class="search-container">
        <i class="fa-regular fa-circle-xmark" @click="store.clickSearch = false"></i>
        <div class="searchbar d-flex align-items-center justify-content-center ">
            <input type="text" placeholder="Search...">
            <i class="fa-solid fa-magnifying-glass me-3"></i>
        </div>
    </div>
</template>

<style scoped>
input {
    padding: 0;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    width: 50%;
    font-size: 1.5vw;
    margin-right: 20px;
}

i {
    font-size: 1.5vw;
}

.searchbar {
    width: 100%;
    height: 100vh;
    background-color: white;
    position: absolute;
    z-index: 1000;
}

.fa-circle-xmark {
    position: absolute;
    z-index: 1001;
    right: 0;
    padding: 20px;
    font-size: 2vw;
}

.fa-circle-xmark:hover {
    cursor: pointer;

}

input:focus {
    outline: none;
}
</style>