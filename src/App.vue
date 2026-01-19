<script setup>
import { useAutoSEO } from './seo/composables.js'

// 初始化SEO
useAutoSEO()
</script>

<template>
  <router-view />
</template>

<style>
/* 全局样式已在 main.js 中导入 */
</style>
