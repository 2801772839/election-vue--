<template>
  <div>
    <div class="logo">1</div>
    <a-menu
      :selected-keys="selectedKeys"
      :defaultSelectedKeys="['pytho']"
      :style="{ width: '100%' }"
      hide-trigger
      @menu-item-click="doMenuClick"
    >
      <a-menu-item key="/pytho">
        <IconCalendar />
        PY语言
      </a-menu-item>
      <a-menu-item key="/center">
        <IconCalendar />
        聚合中心
      </a-menu-item>
    </a-menu>
  </div>
</template>
<script setup lang="ts">
import router from '../routers'
import { ref } from 'vue'

const doMenuClick = (key: string) => {
  router.push({
    path: key
  })
}
// 当前选中的菜单项
const selectedKeys = ref(['/'])
// 路由跳转时，自动更新选中的菜单项
router.afterEach((to, from, failure) => {
  selectedKeys.value = [to.path]
})
</script>
<style>
.menu-item {
  display: flex;
  align-items: center;
  padding: 0 20px; /* 根据需要调整内边距 */
}

.content-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
}

.text {
  flex-grow: 1; /* 文字占用剩余空间 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* 超出部分显示省略号 */
}
</style>
