<script>
import { RouterView } from "vue-router";
import MainNavBar from "./components/MainNavBar.vue";

export default {
  components: {
    RouterView,
    MainNavBar
  },
}
</script>

<template>
  <header>
    <MainNavBar />
  </header>
  <main class="container pt-4 pb-4">
    <RouterView />
  </main>
</template>