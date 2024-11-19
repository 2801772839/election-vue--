<template>
  <a-layout id="basicLayout" style="height: 100vh">
    <!--   侧边栏    -->
    <a-layout-sider hide-trigger collapsible :collapsed="collapsed">
      <SideMenu />
    </a-layout-sider>
    <a-layout>
      <!--   头部    -->
      <GlobalHeader />
      <a-layout style="padding: 0 24px">
        <a-card style="height: 100%">
          <a-layout-content class="content"> <router-view /> </a-layout-content>
        </a-card>
        <GlobalFooter />
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import SideMenu from '../components/SideMenu.vue'
import GlobalHeader from '../components/GlobalHeader.vue'
import { ref } from 'vue'
import GlobalFooter from '../components/GlobalFooter.vue'

const collapsed = ref(false)
</script>
<style scoped>
#basicLayout {
  .content {
    max-width: 1200px;
    width: 100%;
    box-sizing: border-box;
    margin: 0 auto 28px;
    padding: 20px;
    background: linear-gradient(to right, #fefefe, #fff);
  }
}
</style>
