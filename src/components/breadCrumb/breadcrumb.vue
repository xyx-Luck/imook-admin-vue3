<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadCrumbData" :key="index">
      <span class="no-link" v-if="index === breadCrumbData.length - 1">{{
        item.meta.title
      }}</span>
      <span class="link" v-else @click="onLinkClick(item)">{{
        item.meta.title
      }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
let breadCrumbData = ref([]);
const getBreadCrumbData = () => {
  //过滤出有icon和title的
  breadCrumbData = route.matched.filter((item) => {
    return item.meta && item.meta.title;
  });
};
watch(
  route,
  () => {
    getBreadCrumbData();
  },
  { immediate: true }
);
const onLinkClick = (item) => {
  router.push(item.path);
};
</script>
<style lang="scss" scoped>
.el-breadcrumb {
  height: 60px;
  line-height: 60px;
  margin-left: 8px;
  .no-link {
    color: #cfc9c9;
    font-size: 14px;
    font-weight: bold;
  }
  .link {
    color: #2a2929;
    font-size: 14px;
    font-weight: bold;
  }
}
</style>
