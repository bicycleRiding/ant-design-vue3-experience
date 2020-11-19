<template>
  <page-header />
  <router-view />
</template>

<script>
import pageHeader from "@/components/page-header.vue";
export default {
  components: { pageHeader },
};
</script>

<style>
@import url("./css/style.css");
</style>
