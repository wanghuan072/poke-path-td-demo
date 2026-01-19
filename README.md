# PokéPath TD 攻略站

专业的宝可梦塔防游戏攻略指南网站，使用 Vue 3 + Vite 构建。

## 项目简介

PokéPath TD 攻略站是一个为 PokéPath TD 游戏玩家提供全面攻略内容的网站，包含：
- 📖 宝可梦图鉴（数据、技能、进化信息）
- 🗺️ 路线攻略（9条路线的详细攻略）
- ⚔️ 属性克制表（18种属性的克制关系）
- 🏆 强度排行（Tier List）
- 🛠️ 实用工具（计算器、队伍构建器等）
- 📚 攻略指南（新手教程、高级策略）

## 技术栈

- **框架**: Vue 3.5.25
- **构建工具**: Vite 7.2.4
- **路由**: Vue Router 4.6.3
- **状态管理**: Pinia 3.0.4
- **代码规范**: ESLint + Prettier

## 项目结构

```
src/
├── assets/
│   └── styles/
│       └── main.css          # 全局样式（宝可梦风格设计系统）
├── components/
│   └── layout/
│       ├── Header.vue        # 头部导航
│       ├── Footer.vue        # 底部信息
│       └── MainLayout.vue    # 主布局组件
├── views/
│   └── Home.vue              # 首页
├── router/
│   └── index.js              # 路由配置
├── stores/
│   └── counter.js            # 状态管理（示例）
├── App.vue                   # 根组件
└── main.js                   # 入口文件
```

## 设计系统

采用宝可梦风格的设计系统，包含：
- **主色调**: 蓝色（水系/天空）、红色（火系）、黄色（电系）、绿色（草系）
- **圆角设计**: 符合宝可梦卡通风格
- **渐变效果**: 增强视觉吸引力
- **响应式布局**: 完美适配移动端和桌面端

## 开发指南

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
