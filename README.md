# xier-element Monorepo

> 一个基于 **Vue 3 + TypeScript** 的企业级组件库及其配套工具集，涵盖组件开发、主题样式、文档站点与示例应用。

## 核心亮点
- 🎯 **模块化架构**：组件、核心插件、主题、工具函数、文档与演示应用分包管理，职责清晰，可独立发布。
- ⚡ **现代开发栈**：Vite/VitePress/Storybook 驱动的极速开发体验，全面拥抱 ESM。
- 🧪 **质量保障**：Vitest + Vue Test Utils 覆盖组件单测，配套工作流保障文档构建稳定性。
- 🎨 **主题体系**：独立的 `@xier-element/theme` 包集中维护全量样式，可按需引用或定制。
- 📚 **多终端交付**：提供在线文档、演示 Playground、Storybook 组件索引，满足不同场景需求。

## 技术栈
- **语言**：TypeScript、Sass/SCSS
- **框架**：Vue 3
- **构建**：Vite、pnpm workspace、rollup 插件生态
- **文档与演示**：VitePress、Storybook、Playground（Vite）
- **测试**：Vitest、@vue/test-utils、jsdom
- **其它**：Font Awesome、Lodash-es

## 仓库结构
```
.
├─ packages/
│  ├─ components/        # 组件源码与测试（@xier-element/components）
│  ├─ core/              # 组件库聚合出口（xier-element）
│  ├─ docs/              # 文档站点（VitePress）
│  ├─ hooks/             # 通用 Vue Hooks
│  ├─ locale/            # 国际化资源
│  ├─ play/              # Playground / Storybook 演示工程
│  ├─ theme/             # 样式主题包
│  └─ utils/             # 工具库（安装器、通用函数等）
├─ libs/                 # 其他辅助库（按需扩展）
├─ pnpm-workspace.yaml   # mono 仓库声明
└─ package.json          # 根脚本、依赖和工程化配置
```

## 快速开始
### 环境准备
- **Node.js** ≥ 18（建议与 `.nvmrc` 保持一致）
- **pnpm** ≥ 10（仓库使用 pnpm workspace）

### 安装依赖
```bash
pnpm install
```

### 常用脚本
| 指令 | 说明 |
| --- | --- |
| `pnpm dev` | 启动 Playground（`@xier-element/play`）用于组件开发调试 |
| `pnpm play:dev` | 与 `pnpm dev` 等价，便于手动调用 |
| `pnpm story` | 打开 Storybook（`@xier-element/play`）组件演示 |
| `pnpm docs:dev` | 启动 VitePress 文档站点本地开发服务 |
| `pnpm docs:build` | 先构建组件库，再产出静态文档（CI 同款流程） |
| `pnpm build` | 构建 `xier-element` 核心库（调用 `pnpm --filter xier-element build`） |
| `pnpm test` | 运行 `@xier-element/components` 下的 Vitest 测试并生成覆盖率 |

> 其他包下的独立脚本（如 `@xier-element/play` 的 `storybook`、`@xier-element/core` 的 `release`）可使用 `pnpm --filter <package> <script>` 定向执行。

## 子包简介
| 包名 | 说明 |
| --- | --- |
| `xier-element` (`packages/core`) | 对外发布的主入口：聚合所有组件、注册 install、引入主题样式 |
| `@xier-element/components` | 单个组件实现与测试，提供按需加载的基础 |
| `@xier-element/theme` | 统一的样式产物（`index.css` 等） |
| `@xier-element/hooks` | 常用 Vue 组合式函数 |
| `@xier-element/locale` | 多语言文案资源 |
| `@xier-element/utils` | withInstall 等通用工具函数 |
| `@xier-element/docs` | VitePress 文档工程 |
| `@xier-element/play` | Vite + Storybook 的演示与 Playground |

## 开发流程建议
1. **新增/修改组件**：在 `packages/components` 目录内开发，并补充 Vitest 测试。
2. **联调验证**：通过 `pnpm dev` 或 `pnpm story` 进行交互调试。
3. **同步文档**：在 `packages/docs/components` 中添加/更新 Markdown 文档与 Demo。
4. **主题样式**：若涉及样式调整，请同步更新 `@xier-element/theme` 包并确认核心库能正常引入。
5. **提交前检查**：执行 `pnpm test`、必要时运行 `pnpm docs:build`，确保构建无误。

## 构建与发布
- **组件库构建**：`pnpm --filter xier-element build` 会同时生成 ESM、UMD、类型声明与聚合样式。
- **文档构建**：`pnpm docs:build` 会先构建组件库，再产出静态文档，CI 亦复用该流程。
- **发布流程**：`packages/core/package.json` 中提供 `pnpm --filter xier-element run release`，使用 `release-it` 完成版本发布（需要配置凭证）。

## 测试与质量
- 组件单测参考 `packages/components/**/*.test.ts(x)`。
- 测试覆盖率由 `pnpm test` 自动生成，可在 CI 中审查。
- 建议结合 Storybook、Playground 手动验证交互体验。

## CI / 工作流
仓库提供 GitHub Actions（见 `.github/workflows`），主要用于：
- 安装依赖与缓存
- 运行组件测试
- 构建 VitePress 文档（`pnpm docs:build`）

如需新增流程，可在 `.github/workflows` 中扩展。

## 贡献指南
1. Fork 本仓库或创建工作分支。
2. 保持代码风格与现有实现一致，必要时补充注释和测试。
3. 提交前请跑通测试与构建流程。
4. 在 PR 中描述变更背景、影响范围及验证方式。

## License
本项目采用 [ISC License](./LICENSE)。

---
如果你正在使用或二次开发本组件库，欢迎通过 Issue / PR 分享需求与建议，共同完善生态。祝开发顺利！
