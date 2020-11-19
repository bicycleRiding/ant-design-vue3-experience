<template>
  <a-page-header title="blog-home" :breadcrumb="{ routes }" class="c-header">
    <section class="c-icon">
      <HomeOutlined />
      <a-divider type="vertical" class="c-divider"></a-divider>
      <UnorderedListOutlined />
    </section>
  </a-page-header>
</template>

<script>
import { PageHeader } from "ant-design-vue";
import { HomeOutlined, UnorderedListOutlined } from "@ant-design/icons-vue";
export default {
  components: {
    aPageHeader: PageHeader,
    HomeOutlined,
    UnorderedListOutlined,
  },
  setup() {
    const routes = [
      {
        path: "/",
        breadcrumbName: "Home",
      },
    ];
    return {
      routes,
    };
  },
};
</script>

<style scoped>
.c-header {
  border-bottom: 1px solid #cccccc;
}

.c-icon {
  font-size: 20px;
}

.c-icon > * {
  cursor: pointer;
  transition: all 0.5s ease-in-out;
}

.c-icon > *:hover {
  transition: all 0.5s ease-in-out;
  font-size: 25px;
}
</style>