<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
};
</script>



<template>
    <swiper :navigation="true" :modules="modules" class="mySwiper">
        <swiper-slide>
            <div class="container">
                <div class="row">
                    <div class="col-5 title">
                        <p class="color-green">17 YEARS OF EXPERIENCE</p>
                        <h1 class=""> We Are a <br> Web Design <span class="color-green">Agency</span></h1>
                        <p class="mt-5"> Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia,
                            there live the
                            blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                            language
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
        </swiper-slide>
        <swiper-slide>
            <div class="container">
                <div class="row">
                    <div class="col-5 title">
                        <p class="color-green">17 YEARS OF EXPERIENCE</p>
                        <h1 class=""> A Group of <br> Expert <span class="color-green">Planners</span></h1>
                        <p class="mt-5"> Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia,
                            there live the
                            blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                            language
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
                        <img src="../assets/img/slide-2.png" alt="">
                    </div>

                </div>

            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="container">
                <div class="row">
                    <div class="col-5 title">
                        <p class="color-green">17 YEARS OF EXPERIENCE</p>
                        <h1 class=""> Focus <br> on Your <span class="color-green">Business</span></h1>
                        <p class="mt-5"> Far far away, behind the word mountains, far from the countries Vokalia and
                            Consonantia,
                            there live the
                            blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                            language
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
                        <img src="../assets/img/slide-3.png" alt="">
                    </div>

                </div>

            </div>
        </swiper-slide>
    </swiper>
</template>


<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    height: 100%;
    object-fit: cover;
}

img {
    width: 900px;
}

.title {
    margin-top: 100px;
}

.title h1 {
    font-size: 65px;
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

.color-green {
    color: #04d9a6
}
</style>
