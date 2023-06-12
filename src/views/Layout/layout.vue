<template>
  <div class="common-layout">
    <!-- <el-container>
      <el-header>
        <NavBar />
      </el-header>
      <el-container>
        <el-aside width="200px"><Menu></Menu></el-aside>
        <el-main><Main></Main></el-main>
      </el-container>
    </el-container> -->

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
  .el-header{
    background:#4a4949;
  }
  .el-aside{
    background:#212121
  }
}
</style>
