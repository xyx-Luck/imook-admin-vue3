<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item
      ><a href="/">promotion management</a></el-breadcrumb-item
    >
    <el-breadcrumb-item class="no-link">promotion list</el-breadcrumb-item>
    <el-breadcrumb-item class="no-link">promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup></script>
<style lang="scss" scoped>
.el-breadcrumb{
  height:60px;
  line-height: 60px;
  margin-left:8px;
  .no-link{
    color: #7a7777;
    font-size:14px;
    font-weight:bold;
  }
}
</style>
