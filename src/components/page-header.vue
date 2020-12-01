<template>
  <a-page-header class="c-header">
    <template #title>
      <h1 class="c-header-title">时间路口</h1>
    </template>
    <template #extra>
      <a-menu v-model:selectedKeys="current" mode="horizontal" class="c-menu">
        <a-menu-item key="首页" title="介绍"> 首页 </a-menu-item>
        <a-menu-item key="日志" title="每周五更新"> 日志 </a-menu-item>
        <a-menu-item key="读书" title="每月初更新"> 读书 </a-menu-item>
      </a-menu>
    </template>
  </a-page-header>
</template>

<script>
import { PageHeader } from "ant-design-vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

export default {
  components: {
    aPageHeader: PageHeader,
  },
  setup(props, ctx) {
    const current = ref(["首页"]);
    watch(current, (val) => ctx.emit("get-selected-key", val[0]));
    const route = useRoute();
    watch(
      () => route.name,
      (name) => (current.value[0] = name)
    );

    return {
      current,
    };
  },
};
</script>

<style scoped>
.c-header {
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: #607d8b;
  box-shadow: 1px 1px 1px #607d8b;
}

.c-menu {
  display: flex;
}

.c-menu > li {
  flex: 1;
  display: flex;
  justify-content: center;
}

.c-header-title {
  color: white;
}
</style>