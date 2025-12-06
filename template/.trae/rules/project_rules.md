# 项目规范文档

## 技术栈

### 核心框架
- React 18
- TypeScript
- EMP (基于 @astro-ui/emp)

### 状态管理
- Valtio：轻量级状态管理方案

### 路由
- React Router v6

### 包管理
- pnpm：高性能的包管理工具
- 私有 npm 源：npm-registry.yy.com

## 目录结构

```
src/
  ├── components/       # 组件目录
  │   └── Sparkler/     # 组件示例
  ├── libs/             # 工具库
  ├── rpc/              # 网络请求相关
  ├── boostrap.tsx      # 应用入口
  ├── index.tsx         # 主文件
  ├── store.ts          # 全局状态
  └── showCaseConfig.ts # 展示配置
```

## 代码规范

### TypeScript 配置
- 继承 `@astro-ui/emp/tsbase.json` 的基础配置
- 使用绝对路径导入（baseUrl: "./"）

### 代码风格
- 使用 Biome 进行代码格式化和检查
- 继承 `@astro-ui/emp/biome` 的规范配置
- 执行 `pnpm lint` 进行代码检查和自动修复

### Git 提交规范
- 使用 commitlint 规范提交信息
- 继承 `@astro-ui/emp/config-conventional` 配置

## 组件开发规范

### 组件结构
- 每个组件使用独立目录
- 包含 index.tsx 主文件
- 样式文件使用 .module.scss 命名
- 可选的 Store.ts 用于组件状态管理

### 样式规范
- 使用 CSS Modules 避免样式冲突
- 支持 rem 单位（remRootValue: 100）
- 类名使用小写字母和下划线命名

## 构建和部署

### 开发环境
```bash
# 本地开发
pnpm dev

# unpkg 模式开发
pnpm dev:unpkg
```

### 生产构建
```bash
# 标准构建
pnpm build

# unpkg 模式构建
pnpm build:unpkg
```

### 诊断模式
```bash
# 构建诊断
pnpm build:doctor

# 开发诊断
pnpm dev:doctor
```

## 微前端配置

### 模块导出
- 在 emp.config.ts 中配置 exposes
- 示例：导出 Sparkler 组件

### 远程模块
- 在 emp.config.ts 中配置 remotes
- 支持运行时动态注册远程模块

## 网络请求

### 环境配置
- 支持 test 和 prod 环境
- 自动识别测试环境（URL 包含 -test 或 test 参数）

### API 封装
- 使用 @astro/utils 中的 Http 类
- 支持多实例管理
- 支持自定义配置（base URL, credentials 等）