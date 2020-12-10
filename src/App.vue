<template>
  <a-config-provider :locale="locale">
    <page-header @get-selected-key="getSelectedKey" />

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
    <a-back-top />
  </a-config-provider>
</template>

<script>
import pageHeader from "c@/page-header.vue";
import { useRoute, useRouter } from "vue-router";
import { ConfigProvider, BackTop } from "ant-design-vue";
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";

export default {
  components: {
    pageHeader,
    aConfigProvider: ConfigProvider,
    aBackTop: BackTop,
  },
  setup() {
    const router = useRouter();

    const getSelectedKey = (key) => {
      router.push({
        name: key,
      });
    };
    const route = useRoute();

    return {
      getSelectedKey,
      Component: route.name,
      locale: zhCN,
    };
  },
};
</script>

<style>
@import url("./css/style.css");
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
