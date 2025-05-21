// 从 Vue 中导入 inject 函数和 Ref 类型
// inject: Vue 的依赖注入函数，用于获取由上层组件提供的值
// Ref: TypeScript 类型，表示一个响应式引用，包装了一个值使其成为响应式
import { inject, type Ref } from "vue";

// 从 lodash-es 导入 omit 函数
// omit: 创建一个新对象，省略指定的属性
import { omit } from "lodash-es";

// 从 vue3-i18n 导入国际化相关函数和类型
// createI18n: 创建国际化实例的函数
// i18nSymbol: 用于依赖注入的唯一标识符(InjectionKey)
// I18nInstance: TypeScript 接口，定义了国际化实例的结构
import { createI18n, i18nSymbol, type I18nInstance } from "vue3-i18n";

// 导入 Language 类型定义，但不导入实际代码
// Language: 定义语言包结构的接口
import type { Language } from "@xier-element/locale";

// 导入默认的英语语言包
import English from "@xier-element/locale/lang/en";

/**
 * 国际化 Hook，用于在组件中获取翻译功能
 * @param localeOverrides - 可选参数，响应式的自定义语言配置
 * @returns 国际化实例(去除了install方法)，包含t()等翻译方法
 */
export function useLocale(localeOverrides?: Ref<Language>) {
  // 如果没有提供自定义语言配置
  if (!localeOverrides) {
    return omit(
      // <I18nInstance>(...) 是 TypeScript 的类型断言语法
      // 它告诉编译器将括号内的表达式强制视为 I18nInstance 类型
      <I18nInstance>(
        // inject 尝试从上层组件获取 i18nSymbol 对应的值
        // 如果找不到，则使用第二个参数作为默认值
        inject(
          i18nSymbol,
          // 创建默认的 i18n 实例，使用英文作为默认语言
          createI18n({ locale: English.name, messages: { en: English.el } })
        )
      ),
      // 从返回的对象中移除 "install" 方法，因为在 Hook 使用场景中不需要它
      "install"
    );
  }

  // 如果提供了自定义语言配置
  return omit(
    // 创建新的 i18n 实例
    createI18n({
      // 使用提供的语言名称作为当前语言
      locale: localeOverrides.value.name,
      // 设置消息资源，包括:
      messages: {
        en: English.el,                                       // 1. 英语作为备用语言
        [localeOverrides.value.name]: localeOverrides.value.el, // 2. 用户提供的语言
        // [localeOverrides.value.name] 是计算属性名语法，使用变量作为属性名
      },
    }),
    // 同样移除 "install" 方法
    "install"
  );
}

// 导出 useLocale 作为默认导出
export default useLocale;