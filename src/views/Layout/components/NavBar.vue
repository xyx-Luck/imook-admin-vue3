<template>
  <div class="navbar">
    <div>
      <!-- 左侧 -->
      <div class="navbar-left">
        <p class="navbar-icon">
          <el-icon size="40"><Expand /></el-icon>
          <el-icon size="40"><Fold /></el-icon>
        </p>
        <div>面包屑</div>
      </div>
      <!-- 右侧 -->
      <div class="navbar-right">
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar :size="40" :src="selfStore.getters.userInfo.avatar" />
            <el-icon class="el-icon--right">
              <el-icon><Tools /></el-icon>
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <router-link to="/">
                <el-dropdown-item>首页</el-dropdown-item>
              </router-link>
              <a href="#">
                <el-dropdown-item>github主页</el-dropdown-item>
              </a>
              <el-dropdown-item @click="doLogout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script setup>
import selfStore from "@/store";
import { Tools } from "@element-plus/icons-vue";
import { useStore } from "vuex";

const store = useStore();
console.log("selfStore", selfStore);
const doLogout = () => {
  store.dispatch("user/logout");
};
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 100%;
  line-height: 60px;
  border-bottom: 1px solid #d9d3d3;
  box-shadow: 1px 3px 3px #d9d3d3;
  & > div {
    display: flex;
    justify-content: space-between;
    .navbar-left {
      display: flex;
      justify-content: flex-start;
      p {
        height: 60px;
        line-height: 60px;
        &>.el-icon{
          margin-top:10px;
        }
      }
    }
  }
}
.el-dropdown {
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
}
</style>
