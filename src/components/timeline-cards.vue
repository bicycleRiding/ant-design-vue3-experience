<template>
  <a-timeline mode="alternate">
    <a-timeline-item
      v-for="(item, i) of cardList"
      :color="setTimeLineColor(i)"
      :key="item.id"
    >
      <a-card
        :title="item.title"
        hoverable
        :headStyle="{
          ...headStyle,
          backgroundColor: setTimeLineColor(i),
        }"
      >
        <main class="c-item-synopsis">{{ item.synopsis }}</main>
        <footer>
          <time>{{ item.createTime }}</time>
        </footer>
      </a-card>
    </a-timeline-item>
  </a-timeline>
</template>

<script>
import { Timeline } from "ant-design-vue";
import { useSetTimeLineColor } from "@/use/useTimeLine.js";

export default {
  props: {
    cardList: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    aTimeline: Timeline,
    aTimelineItem: Timeline.Item,
  },
  setup() {
    const setTimeLineColor = useSetTimeLineColor();
    return {
      headStyle: {
        fontSize: "20px",
        color: "#37474F",
        borderBottom: "0",
        backgroundColor: "#03A9F4",
      },
      setTimeLineColor,
    };
  },
};
</script>

<style scoped>
.c-item-synopsis {
  font-size: 18px;
  padding: 10px 0;
}
time {
  padding-left: 5px;
}
</style>