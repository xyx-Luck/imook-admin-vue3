<template>
  <div class="demo-collapse">
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item
        :title="item.title"
        :name="item.id"
        v-for="item in store.getters.profileFunc"
        :key="item.id"
      >
        <div v-html="item.content"></div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const activeName = ref("");
const store = useStore();
store.dispatch("profile/getfunc");
</script>
<style scoped>
::deep .el-collapse-item__content>div{
   text-align:left;
}
</style>
