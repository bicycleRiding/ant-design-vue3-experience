<template>
  <main class="c-blogs">
    <c-breadcrumb-menu :routeMenus="routeMenus" :currentPageID="currentPageID"
      >日志</c-breadcrumb-menu
    >
    <c-timeline-cards :cardList="blogs"></c-timeline-cards>

    <section class="c-blogs-footer">
      <a-pagination
        :default-current="currentPageID"
        :total="500"
        show-quick-jumper
        @change="paginationChange"
      />
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
import cTimelineCards from "c@/timeline-cards.vue";
import cBreadcrumbMenu from "c@/breadcrumb-menu.vue";
export default {
  components: {
    cTimelineCards,
    cBreadcrumbMenu,
  },
  setup() {
    const currentPageID = ref(1);
    const paginationChange = (id) => {
      currentPageID.value = id;
    };
    return {
      paginationChange,
      currentPageID,
      routeMenus: [
        {
          name: "首页",
          path: "/",
        },
        {
          name: "读书",
          path: "/books",
        },
      ],
      blogs: [
        {
          id: 0,
          title: "标题",
          synopsis: "简介",
          createTime: "2020-12-1",
        },
        {
          id: 1,
          title: "标题",
          synopsis: "简介",
        },
        {
          id: 2,
          title: "标题",
          synopsis: "简介",
        },
        {
          id: 3,
          title: "标题",
          synopsis: "简介",
        },
        {
          id: 4,
          title: "标题",
          synopsis: "简介",
        },
      ],
    };
  },
};
</script>

<style scoped>
.c-blogs {
  padding: 20px;
}

.c-blogs-footer {
  text-align: center;
  padding-bottom: 20px;
}
</style>