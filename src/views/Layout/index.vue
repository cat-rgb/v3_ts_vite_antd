<template>
  <layout class="h-screen">
    <layout-sider
        breakpoint="lg"
        collapsed-width="0"
    >
      <div class="logo"/>
      <Menu></Menu>
    </layout-sider>
    <layout>
      <layout-header class="bg-gradient-to-r from-green-400 to-blue-500"/>
      <layout-content class="bg-gray-50 p-2">
        <RouterView></RouterView>
      </layout-content>
    </layout>
  </layout>
</template>

<script lang="ts" setup>
import {RouterView} from 'vue-router'
import Menu from '@/views/Layout/Menu/index'
import {Layout, LayoutSider, LayoutHeader, LayoutContent} from "ant-design-vue";

</script>

<style lang="less" scoped>
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
</style>
