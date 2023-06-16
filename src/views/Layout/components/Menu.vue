<template>
  <div
    class="menu"
    :style="store.getters.isCollapse ? 'width:50px' : 'width:200px'"
  >
    <div class="userTitle">
      <el-avatar :size="40" :src="store.getters.userInfo.avatar" />
      <p>{{ store.getters.userInfo.username }}</p>
    </div>

    <el-menu
      active-text-color="#ffd04b"
      background-color="#383839"
      class="el-menu-vertical-demo"
      :default-active="activeMenu"
      text-color="#fff"
      :collapse="isCollapse"
      unique-opened
      router
    >
      <template v-for="menu in routes" :key="menu.path">
        <el-menu-item :index="menu.path" v-if="menu.children.length == 0">
          <!-- <el-icon><location /></el-icon> -->
          <el-icon default="location"></el-icon>
          <span>{{ menu.meta.title }}</span>
        </el-menu-item>
        <el-sub-menu :index="menu.path" v-else>
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ menu.meta.title }}</span>
          </template>

          <el-menu-item
            :index="subMenu.path"
            v-for="subMenu in menu.children"
            :key="subMenu.path"
          >
            <el-icon><location /></el-icon>
            <span>{{ subMenu.meta.title }}</span>
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
import { filterRouters, generateMenus } from "@/utils/route.js";
import { ref, onMounted, computed, defineProps } from "vue";
import store from "@/store";
console.log("store", store);
const router = useRouter();
const route = useRoute();
//当前活跃的菜单
const activeMenu = computed(() => {
  const { path } = route.path;
  return path;
});
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes());
  return generateMenus(filterRoutes);
});
</script>
<style lang="scss" scoped>
.userTitle {
  height: 69px;
  line-height: 69px;
  display: flex;
  align-items: center;
  // padding-left: 30px;
  background: #383839;
  & > p {
    margin-left: 10px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }
}
::v-deep .el-menu {
  border-right: 1px solid #383839;
}
.menu {
  height: 100%;
  background: #383839;
}
</style>
