<template>
  <div class="login">
    <div>
      <div class="loginTitle">
        <p>用户登录</p>
        <el-icon><Open /></el-icon>
      </div>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        :size="formSize"
      >
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" prefix-icon="Avatar" />
        </el-form-item>

        <el-form-item prop="password" class="passwordForm">
          <el-input
            v-model="ruleForm.password"
            :type="eyeShow ? 'password' : 'text'"
            prefix-icon="Lock"
          />
          <span class="pswIcon" @click="changeEyes">
            <el-icon v-if="eyeShow"><Hide /></el-icon>
            <el-icon v-else><View /></el-icon>
          </span>
        </el-form-item>
        <el-form-item prop="username">
          <el-button type="primary" style="width: 100%; margin-bottom: 30px"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Avatar, Lock, Hide } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { IruleForm } from "@/views/Login/types";
// 处理登录框显示密码还是显示文本
const eyeShow = ref<boolean>(true);
const changeEyes = function () {
  eyeShow.value = !eyeShow.value;
};

const ruleFormRef = ref<FormInstance>();
const ruleForm = ref<IruleForm>({
  username: "super-admin",
  password: "123456",
});
const rules = reactive<FormRules>({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 6, message: "密码长度至少为6位", trigger: "blur" },
  ],
});
</script>
<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  background: rgb(4, 11, 26);
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    width: 500px;
    height: 300px;
    align-items: center;
    .loginTitle {
      display: flex;
      justify-content: space-around;
      margin-bottom: 15px;
      color: #fff;
      & > p {
        flex: 9;
        text-align: center;
      }
      & > .el-icon {
        flex: 1;
      }
    }
    ::v-deep .el-form-item__label {
      color: #fff;
    }
    // border: 1px solid #f00;
  }
  .passwordForm {
    position: relative;
  }
  .pswIcon {
    position: absolute;
    right: 10px;
  }
}
</style>
