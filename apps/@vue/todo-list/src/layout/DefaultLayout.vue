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
  <main class="grid place-items-center py-4">
    <slot></slot>
  </main>
  <Footer />
</template>
