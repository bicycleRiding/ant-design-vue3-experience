<template>
  <main class="c-not-found">
    <a-empty>
      <template #description>
        <p>无此资源</p>
        <a-button>
          <router-link to="/">回到首页</router-link>
        </a-button>
      </template>
    </a-empty>
  </main>
</template>

<script>
import { Empty } from "ant-design-vue";
export default {
  components: {
    aEmpty: Empty,
  },
};
</script>

<style scoped>
.c-not-found {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>