<script>
import AppHeader from "./components/AppHeader.vue"

import { store } from "./store.js" //state management

export default {
  components: {
    AppHeader
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
  <main>
    <AppHeader />
  </main>
</template>


<style scoped></style>
