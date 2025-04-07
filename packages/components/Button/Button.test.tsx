import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "./Button.vue";
import type { ButtonSize, ButtonType } from "./type";

describe("Button.vue", () => {
	// 默认 props
	const defaultProps = {
		loadingIcon: "spinner", // 必传：你的 Button 定义了 required 的 prop
	};

	// Props: type
	it("should have the correct type class when type prop is set", () => {
		const types: ButtonType[] = ["primary", "success", "warning", "danger", "info"];
		types.forEach((type) => {
			const wrapper = mount(Button, {
				props: {
					...defaultProps,
					type,
				},
			});
			expect(wrapper.classes()).toContain(`xr-button--${type}`);
		});
	});

	// Props: size
	it("should have the correct size class when size prop is set", () => {
		const sizes: ButtonSize[] = ["large", "default", "small"];
		sizes.forEach((size) => {
			const wrapper = mount(Button, {
				props: {
					...defaultProps,
					size,
				},
			});
			expect(wrapper.classes()).toContain(`xr-button--${size}`);
		});
	});

	// Props: plain, round, circle, disabled, loading
	it.each([
		["plain", "is-plain"],
		["round", "is-round"],
		["circle", "is-circle"],
		["disabled", "is-disabled"],
		["loading", "is-loading"],
	])("should have the correct class when prop %s is set to true", (prop, className) => {
		const wrapper = mount(Button, {
			props: {
				...defaultProps,
				[prop]: true,
			},
			global: {
				stubs: {
					XrIcon: true, // ✅ 替换 ErIcon 为你组件中实际用的 XrIcon（避免 render 报错）
				},
			},
		});
		expect(wrapper.classes()).toContain(className);
	});

	// Props: nativeType
	it("should have the correct native type attribute when nativeType prop is set", () => {
		const wrapper = mount(Button, {
			props: {
				...defaultProps,
				nativeType: "submit",
				tag: "button", // ✅ 注意：必须显式设置 tag 为 button 才能渲染成 <button>
			},
		});
		expect(wrapper.element.tagName).toBe("BUTTON");
		expect((wrapper.element as HTMLButtonElement).type).toBe("submit");
	});

	// Props: tag
	it("should render the custom tag when tag prop is set", () => {
		const wrapper = mount(Button, {
			props: {
				...defaultProps,
				tag: "a",
			},
		});
		expect(wrapper.element.tagName.toLowerCase()).toBe("a");
	});

	// Events: click
	it("should emit a click event when the button is clicked", async () => {
		const wrapper = mount(Button, {
			props: {
				...defaultProps,
			},
		});
		await wrapper.trigger("click");
		expect(wrapper.emitted().click).toHaveLength(1);
	});
});
