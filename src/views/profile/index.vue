<template>
  <div class="profile">
    <div class="profileLeft">
      <el-card><Func></Func></el-card>
    </div>
    <div class="profileRight">
      <el-card>
        <el-tabs
          v-model="activeName"
          class="demo-tabs"
        >
          <el-tab-pane label="功能" name="func">
            <Func></Func>
          </el-tab-pane>
          <el-tab-pane label="章节" name="chapter"></el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import Func from './components/func.vue'
</script>

<style lang="scss" scoped>
.profile {
  display: flex;
  justify-content: flex-start;
  .profileLeft {
    flex: 1;
    margin-right: 15px;
  }
  .profileRight {
    flex: 3;
  }
}
</style>
