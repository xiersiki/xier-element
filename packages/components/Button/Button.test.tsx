import { describe, it, expect } from "vitest"; // 导入 Vitest 的测试 API
import { mount } from "@vue/test-utils"; // 导入 Vue Test Utils 的挂载函数，用于测试 Vue 组件

import Button from "./Button.vue"; // 导入要测试的按钮组件

describe("Button.vue", () => { // 描述测试套件，对应按钮组件
	// Props: type - 测试按钮类型属性
	it("should has the correct type class when type prop is set", () => { // 测试当设置 type 属性时是否有正确的类名
		const types = ["primary", "success", "warning", "danger", "info"]; // 定义所有支持的按钮类型
		types.forEach((type) => { // 遍历每种类型进行测试
			const wrapper = mount(Button, { // 挂载按钮组件
				props: { type: type as any }, // 设置 type 属性
			});
			expect(wrapper.classes()).toContain(`xr-button--${type}`); // 断言按钮是否包含对应类型的 CSS 类
		});
	});

	// Props: size - 测试按钮尺寸属性
	it("should has the correct size class when size prop is set", () => { // 测试当设置 size 属性时是否有正确的类名
		const sizes = ["large", "default", "small"]; // 定义所有支持的按钮尺寸
		sizes.forEach((size) => { // 遍历每种尺寸进行测试
			const wrapper = mount(Button, { // 挂载按钮组件
				props: { size: size as any }, // 设置 size 属性
			});
			expect(wrapper.classes()).toContain(`xr-button--${size}`); // 断言按钮是否包含对应尺寸的 CSS 类
		});
	});

	// Props: plain, round, circle - 测试按钮的样式变体属性
	it.each([ // 使用 it.each 进行数据驱动测试，减少重复代码
		["plain", "is-plain"],   // 朴素按钮
		["round", "is-round"],   // 圆角按钮
		["circle", "is-circle"], // 圆形按钮
		["disabled", "is-disabled"], // 禁用状态
		["loading", "is-loading"],   // 加载状态
	])(
		"should has the correct class when prop %s is set to true", // 测试描述，%s 会被替换为相应参数
		(prop, className) => { // 测试函数，接收属性名和预期的类名
			const wrapper = mount(Button, { // 挂载按钮组件
				props: { [prop]: true }, // 动态设置属性为 true
				global: { // 全局配置
					stubs: ["ErIcon"], // 存根 ErIcon 组件，避免实际渲染
				},
			});
			expect(wrapper.classes()).toContain(className); // 断言按钮是否包含对应的 CSS 类
		}
	);

	// Props: nativeType - 测试原生类型属性
	it("should has the correct native type attribute when native-type prop is set", () => {
		const wrapper = mount(Button, { // 挂载按钮组件
			props: { nativeType: "submit" }, // 设置 nativeType 为 submit
		});
		expect(wrapper.element.tagName).toBe("BUTTON"); // 断言渲染的元素是 BUTTON 标签
		expect((wrapper.element as any).type).toBe("submit"); // 断言元素的 type 属性为 submit
	});

	// Props: tag - 测试自定义标签属性
	it("should renders the custom tag when tag prop is set", () => {
		const wrapper = mount(Button, { // 挂载按钮组件
			props: { tag: "a" }, // 设置 tag 属性为 a
		});
		expect(wrapper.element.tagName.toLowerCase()).toBe("a"); // 断言渲染的元素是 a 标签（转小写比较）
	});

	// Events: click - 测试点击事件
	it("should emits a click event when the button is clicked", async () => {
		const wrapper = mount(Button, {}); // 挂载按钮组件
		await wrapper.trigger("click"); // 触发点击事件，使用 await 确保异步操作完成
		expect(wrapper.emitted().click).toHaveLength(1); // 断言 click 事件被触发了一次
	});
});