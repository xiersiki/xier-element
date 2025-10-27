import {
  ref, // 创建响应式引用
  getCurrentInstance, // 判断当前是否处于组件 setup 上下文
  inject, // 注入上层 provide 的值
  computed, // 创建计算属性（依赖跟踪）
  provide, // 向下层组件提供依赖
  unref, // 取出 ref 或普通值的实际内容
} from "vue";
import type { MaybeRef, Ref, App } from "vue"; // 类型：可能是 ref 或普通值 / 引用类型 / Vue 应用实例
import {
  configProviderContextKey, // 注入/提供的上下文 key（Symbol）
  type ConfigProviderContext, // 全局配置类型（所有属性可选）
} from "./constants";
import { createI18n, i18nSymbol } from "vue3-i18n"; // 第三方 i18n 工具及其注入 key
import type { TranslatePair } from "@xier-element/locale"; // 语言包键值结构类型
import English from "@xier-element/locale/lang/en"; // 默认英文语言包
import { merge } from "lodash-es"; // 深合并工具（会修改目标对象）
import { debugWarn } from "@xier-element/utils"; // 内部调试警告函数

const globalConfig = ref<ConfigProviderContext>(); // 保存全局级（最外层）配置的引用（供非组件环境访问）

// 函数重载声明 1：传 key 时返回该 key 对应配置项的 Ref（去掉 void）
export function useGlobalConfig<
  K extends keyof ConfigProviderContext,
  D extends ConfigProviderContext[K]
>(key: K, defaultVal?: D): Ref<Exclude<ConfigProviderContext[K], void>>;
// 函数重载声明 2：不传 key 时返回整个配置对象 Ref
export function useGlobalConfig(): Ref<ConfigProviderContext>;
// 具体实现
export function useGlobalConfig(
  key?: keyof ConfigProviderContext, // 可选：希望直接读取的配置字段名
  defaultVal = void 0 // 默认值（当该字段不存在时使用）
) {
  const config = getCurrentInstance() // 如果在组件 setup 中
    ? inject(configProviderContextKey, globalConfig) // 优先注入最近一层提供的上下文；没有就用 globalConfig 兜底
    : globalConfig; // 若不在组件上下文（比如纯函数），直接用 globalConfig

  // 如果传了 key，则返回一个 computed 针对该字段；否则返回完整配置 Ref
  return key ? computed(() => config.value?.[key] ?? defaultVal) : config;
}

// 内部函数：根据当前上下文配置创建一个新的 i18n 实例（注意：每次调用都会新建实例）
const _createI18n = (opts?: ConfigProviderContext) => {
  // mergeMsg：把外部扩展的翻译（extendsI18nMsg）合并进当前 messages 对象
  const mergeMsg = (msg: TranslatePair) =>
    merge(msg, opts?.extendsI18nMsg ?? {});
  if (!opts?.locale)
    // 如果没有 locale 指定，走默认英文
    return createI18n({
      locale: "en", // 默认语言名
      messages: mergeMsg({
        en: English.el, // 英文语言包内容
      }),
    });

  // 有 locale：只注册当前这一个语言（没有 fallback 英文）
  return createI18n({
    locale: opts.locale?.name || "en", // 当前语言名称（缺省仍回退 en）
    messages: mergeMsg({
      [opts.locale?.name || "en"]: opts.locale?.el || {}, // 当前语言字典
    }),
  });
};

// 对外暴露：在根组件或局部组件中提供全局配置 & i18n 实例
export function provideGlobalConfig(
  config: MaybeRef<ConfigProviderContext> = { locale: English }, // 传入的配置（支持 ref 或普通对象），默认英文
  app?: App, // 若传入 app，表示在应用初始化阶段全局安装
  global = false // 是否标记为“全局配置”（只有第一次或显式 global=true 时会写入 globalConfig）
) {
  const instance = getCurrentInstance(); // 判断当前是否在组件 setup
  const oldConfig = instance ? useGlobalConfig() : void 0; // 若有父级 ConfigProvider，取其配置用于合并
  const provideFn = app?.provide ?? (instance ? provide : void 0); // 选择使用 app.provide（应用级）或组件级 provide

  if (!provideFn) {
    // 既不在组件内也没传 app，无法提供上下文
    debugWarn(
      "provideGlobalConfig",
      "provideGlobalConfig() can only be used inside setup()"
    );
    return;
  }

  // 计算属性：动态合并旧配置与新配置（merge 会原地修改 oldConfig.value —— 有副作用）
  const context = computed(() => {
    const cfg = unref(config); // 取出真实对象
    if (!oldConfig?.value) return cfg; // 没有父配置，直接用当前
    return merge(oldConfig.value, cfg); // 有父配置：深合并（注意：父对象被污染）
  });

  // 每次 context 重新计算都会重新创建一个新的 i18n 实例（但下面只注入一次 i18n.value，后续不会替换）
  const i18n = computed(() => {
    return _createI18n(context.value);
  });

  // 提供合并后的配置（是一个 computed，后代取到的是响应式包装）
  provideFn(configProviderContextKey, context);

  // 提供当前创建出的 i18n 实例值（注意：是静态快照，不会随着 context 改变自动换实例）
  provideFn(i18nSymbol, i18n.value);

  // 如果传入 app，则全局安装该 i18n 实例（调用其 install）
  if (app) app.use(i18n.value);

  // 记录全局配置（仅第一次或显式 global 时写入）
  if (global || !globalConfig.value) globalConfig.value = context.value;

  return context; // 返回合成后的配置 computed，调用方可继续使用
}
