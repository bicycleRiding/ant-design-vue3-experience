<template>
  <a-card hoverable title="介绍" class="introduce" :headStyle="headStyle">
    <a-card hoverable title="日志" @click="toPage('日志')"
      >每周五更新, 记录生活与学习</a-card
    >
    <a-card
      hoverable
      title="读书"
      @click="toPage('读书')"
      style="margin-top: 20px"
      >每月初更新, 记录读书的感悟</a-card
    >
  </a-card>
</template>

<script>
import { useToPage } from "@/use/useRouter.js";
export default {
  setup() {
    const toPage = useToPage();
    return {
      headStyle: {
        fontSize: "20px",
        color: "#37474F",
        borderColor: "#8D6E63",
      },
      toPage,
    };
  },
};
</script>

<style scoped>
.introduce {
  position: fixed;
  bottom: 50%;
  left: 50%;
  width: 40vw;
  transform: translate(-50%, 60%);
  background-color: antiquewhite;
}

@media screen and (max-width: 500px) {
  .introduce {
    width: 350px;
  }
}
</style>