<script lang="ts">
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <Header />
  <main class="p-4 w-11/12 mx-auto flex-grow">
    <slot></slot>
  </main>
  <Footer />
</template>
