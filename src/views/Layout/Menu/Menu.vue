<template>
  <Menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
    <menu-item key="1">
      <pie-chart-outlined/>
      <span>Option 1</span>
    </menu-item>
    <menu-item key="2">
      <desktop-outlined/>
      <span>Option 2</span>
    </menu-item>
    <sub-menu key="sub1">
      <template #title>
            <span>
              <user-outlined/>
              <span>User</span>
            </span>
      </template>
      <menu-item key="3">Tom</menu-item>
      <menu-item key="4">Bill</menu-item>
      <menu-item key="5">Alex</menu-item>
    </sub-menu>
    <sub-menu key="sub2">
      <template #title>
            <span>
              <team-outlined/>
              <span>Team</span>
            </span>
      </template>
      <menu-item key="6">Team 1</menu-item>
      <menu-item key="8">Team 2</menu-item>
    </sub-menu>
    <menu-item key="9">
      <file-outlined/>
      <span>File</span>
    </menu-item>
  </Menu>
</template>

<script lang="ts" setup>
import {Menu, MenuItem, SubMenu} from 'ant-design-vue'
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';

const selectedKeys = ref<string[]>(['1'])

</script>

<style lang="less" scoped>

</style>
