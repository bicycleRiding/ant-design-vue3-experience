<template>
  <a-menu class="c-menu" mode="horizontal" v-model:selectedKeys="selectedKeys">
    <a-menu-item key="life">Life</a-menu-item>
    <a-menu-item key="about">About</a-menu-item>
  </a-menu>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup(props, ctx) {
    const selectedKeys = ref(["life"]);

    watch(selectedKeys, (keys) => ctx.emit("get-selected-keys", keys));

    return {
      selectedKeys,
    };
  },
};
</script>

<style>
</style>