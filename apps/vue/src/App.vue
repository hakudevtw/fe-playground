<script lang="ts">
import DefaultLayout from "@/layout/DefaultLayout.vue";

export default {
  components: {
    DefaultLayout,
  },
};
</script>

<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
</template>

<style scoped></style>
