<template>
  <a-row class="c-row">
    <a-col :span="8">
      <c-card></c-card>
    </a-col>
    <a-col :span="8">
      <c-card></c-card>
    </a-col>
    <a-col :span="8">
      <c-card></c-card>
    </a-col>
  </a-row>
  <a-row class="c-row">
    <a-col :span="8">
      <c-card></c-card>
    </a-col>
    <a-col :span="8">
      <c-card></c-card>
    </a-col>
    <a-col :span="8">
      <c-card></c-card>
    </a-col>
  </a-row>
  <a-row class="c-row">
    <a-col :span="8">
      <c-card></c-card>
    </a-col>
    <a-col :span="8">
      <c-card></c-card>
    </a-col>
    <a-col :span="8">
      <c-card></c-card>
    </a-col>
  </a-row>
</template>

<script>
import cCard from "@/components/c-card";
export default {
  components: {
    cCard,
  },
};
</script>

<style>
.c-row {
  padding: 20px;
}
.c-row > * {
  padding: 0 20px;
}
</style>