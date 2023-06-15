<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"><Menu></Menu></el-aside>
      <el-container>
        <el-header><NavBar /></el-header>
        <el-main><Main></Main></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import NavBar from "./components/NavBar.vue";
import Menu from "./components/Menu.vue";
import Main from "./components/Main.vue";
</script>
<style scoped lang="scss">
.common-layout {
  width: 100%;
  height: 100%;
  .el-container {
    width: 100%;
    height: 100%;
  }
  ::v-deep .el-header {
    padding: 0;
  }
  .el-aside {
    background:#383839;
  }
}
</style>
