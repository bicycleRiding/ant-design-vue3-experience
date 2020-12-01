<template>
  <a-breadcrumb style="cursor: pointer">
    <a-breadcrumb-item>
      <slot />
      <template #overlay>
        <a-menu>
          <a-menu-item v-for="route of routeMenus" :key="route.name">
            <router-link :to="route.path">{{ route.name }}</router-link>
          </a-menu-item>
        </a-menu>
      </template>
    </a-breadcrumb-item>
    <a-breadcrumb-item>{{ currentPageID }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  props: {
    routeMenus: {
      type: Array,
      default: () => [],
    },
    currentPageID: {
      type: Number,
      default: 1,
    },
  },
};
</script>
