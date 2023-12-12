<script>
import { store } from "../store.js" //state management

export default {
    name: "AppHeader",
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
    <section>
        <div class="headerTop">
            <div class="d-flex align-center">
                <i class="fas fa-phone iconCell"></i>
                <p class="m-0">(001) 88451234 88455438</p>
            </div>

            <div class="d-flex align-center">
                <ul class="socialIcon m-0">
                    <li><i class="fab fa-facebook-f"></i></li>
                    <li><i class="fab fa-twitter"></i></li>
                    <li><i class="fab fa-pinterest"></i></li>
                </ul>
            </div>
        </div>
    </section>

    <section>
        <div class="headerBottom d-flex">
            <img src="../assets/img/cropped-Group-39-2x.png" alt="">

            <div class="d-flex">
                <ul class="menuNav">
                    <li v-for="item in store.navItem" class="me-4 text-uppercase ">
                        <a href="#">{{ item }}</a>
                    </li>
                </ul>
            </div>



            <div>
                <button>PURCHASE</button>
                <i class="fas fa-search pointer" @click="store.clickSearch = true"></i>
            </div>
        </div>
    </section>
</template>

<style scoped>
.headerTop {
    color: white;
    display: flex;
    background-color: #3c3c3c;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
}

.socialIcon {
    list-style-type: none;
    display: flex;
}

.socialIcon li {
    margin-right: 20px;
    font-size: 20px;
}

.iconCell {
    font-size: 20px;
    margin-right: 20px;
}

.headerBottom {
    padding: 20px;
    display: flex;
    justify-content: space-between;
}


.menuNav {
    list-style-type: none;
    display: flex;
}

.menuNav a {
    text-decoration: none;
    color: #3c3c3c
}

.menuNav li {
    margin-right: 20px;
    align-self: center;
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
}

.pointer {
    cursor: pointer;
}
</style>