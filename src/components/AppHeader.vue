<script>
import { store } from "../store" //state management

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
    <section class="">
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

li {
    margin-right: 20px;
    font-size: 20px;
}

.iconCell {
    font-size: 20px;
    margin-right: 20px;
}
</style>