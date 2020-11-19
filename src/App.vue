<template>
  <page-header />
  <c-menu @get-selected-keys="getSelectedKeys" />
  <router-view />
  <a-back-top />
</template>

<script>
import { useKeysToPage } from "@/use/menu.js";
import pageHeader from "@/components/page-header.vue";
import cMenu from "@/components/c-menu.vue";
export default {
  components: { pageHeader, cMenu },
  setup() {
    const getSelectedKeys = useKeysToPage();
    return {
      getSelectedKeys,
    };
  },
};
</script>

<style>
@import url("./css/style.css");
</style>
