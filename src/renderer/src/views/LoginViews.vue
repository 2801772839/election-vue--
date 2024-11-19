<template>
  <div id="userLoginPage">
    <h2 style="margin-bottom: 16px">GitHub 用户登录</h2>
    <a-form
      :model="form"
      :style="{ width: '480px', margin: '0 auto' }"
      label-align="left"
      auto-label-width
    >
      <a-form-item field="githubUsername" label="用户名">
        <a-input v-model="form.githubUsername" placeholder="请输入 GitHub 用户名" />
      </a-form-item>
      <a-form-item field="githubPassword" label="密码">
        <a-input-password v-model="form.githubPassword" placeholder="请输入 GitHub 密码" />
      </a-form-item>
      <a-form-item>
        <div
          style="display: flex; width: 100%; align-items: center; justify-content: space-between"
        >
          <a-button type="primary" @click="loginUser"> GitHub登录 </a-button>
          <a-link href="/user/register">新用户注册</a-link>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  githubUsername: '',
  githubPassword: ''
})
const loginUser = () => {
  router.push('/')
}
</script>
