<script>
import { store } from "../store.js" //state management

export default {
    name: "AppFooter",
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
    <div class="container-fluid">
        <div class="row p-2 mt-5">
            <div class="col-3">
                <img src="../assets/img/cropped-Group-39-2x.png" alt="">
                <p class="mt-3">While the lovely valley teems with vapour around me, and the meridian sun strikes the upper
                    surface of
                    the impenetrable foliage of my trees.While the lovely valley teems with vapour around me.</p>

            </div>
            <div class="col-3">
                <h5 class="text-uppercase">Quick Links</h5>
                <ul class="quickLinks">
                    <li v-for="link in store.quickLinks">
                        <a :href="link.url">{{ link.name }}</a>
                    </li>
                </ul>
            </div>
            <div class="col-3">
                <h5 class="text-uppercase">Contact</h5>
                <p>{{ store.contacts.name }}</p>
                <p>{{ store.contacts.email }}</p>
                <p>{{ store.contacts.telNumber }}</p>
            </div>
            <div class="col-3">
                <h5 class="text-uppercase">Location on Map</h5>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.91374998499!2d-73.99724446723553!3d40.71991516308658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259888b3babfd%3A0x884f495e34f5b820!2s173%20B%20Mott%20St%2C%20New%20York%2C%20NY%2010013%2C%20Stati%20Uniti!5e0!3m2!1sit!2sit!4v1702378175665!5m2!1sit!2sit"
                    width="400" height="250" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>

    <section>
        <div class="footerBottom">
            <div class="d-flex align-center">
                <p class="m-0 text-uppercase">© 2020 phlox business theme</p>
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
.quickLinks {
    list-style-type: none;
}

a {
    text-decoration: none;
    color: black;
}

.footerBottom {
    height: 100px;
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
</style>