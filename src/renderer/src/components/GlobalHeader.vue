<template>
  <a-layout-header style="padding-left: 20px; display: flex; align-items: center">
    <!-- 头像和下拉菜单 -->
    <a-dropdown placement="bottomRight">
      <a-avatar :image-url="githubAvatarUrl" style="margin-left: auto; cursor: pointer"></a-avatar>
      <template #content>
        <a-doption @click="handleClick" v-if="!isLoggedIn">登录</a-doption>
        <a-doption>设置</a-doption>
        <a-doption @click="logout">注销</a-doption>
      </template>
    </a-dropdown>
  </a-layout-header>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import message from '@arco-design/web-vue/es/message'

const route = useRoute()
const router = useRouter()

const question = route.params.question
console.log('1111', question)

const handleClick = () => {
  router.push('/user/login')
}

// 定义一个响应式变量来存储 GitHub 头像 URL
const isLoggedIn = ref(false)
const githubAvatarUrl = ref('')

// 定义一个方法来处理注销操作
const logout = () => {
  // 在这里调用清除 GitHub 登录信息的函数
  message.info('注销成功, 将在3s 后跳转登录页面')
  setTimeout(() => {
    router.push('/user/login')
  }, 3000)
}
</script>
<style scoped></style>
