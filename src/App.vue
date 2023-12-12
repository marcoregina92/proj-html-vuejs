<script>
import AppHeader from "./components/AppHeader.vue"
import AppMain from "./components/AppMain.vue"
import Slider from "./components/Slider.vue"
import AppFooter from "./components/AppFooter.vue"
import SearchBar from "./components/SearchBar.vue"


import { store } from "./store.js" //state management

export default {
  components: {
    AppHeader,
    AppMain,
    Slider,
    AppFooter,
    SearchBar,
  },
  data() {
    return {
      store
    }
  },
  mounted() {

  },
  methods: {
  }
}
</script>

<template>
  <header>
    <AppHeader />
    <SearchBar v-if="store.clickSearch" />
  </header>
  <main>
    <AppMain />
    <!-- <Slider /> -->
  </main>

  <footer>
    <AppFooter />
  </footer>
</template>


<style scoped></style>
