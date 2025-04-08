import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import Button from "./Button.vue";
import ButtonGroup from "./ButtonGroup.vue";
import { h } from "vue";
import type { ButtonSize, ButtonType } from "./type";

describe("Button.vue", () => {
	const onClick = vi.fn();
	// Props: type
	it("should have the correct type class when type prop is set", () => {
		const types: ButtonType[] = ["primary", "success", "warning", "danger", "info"];
		types.forEach((type) => {
			const wrapper = mount(Button, {
				props: {
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
				[prop]: true,
			},
			global: {
				stubs: {
					XrIcon: true,
				},
			},
		});
		expect(wrapper.classes()).toContain(className);
	});

	// Props: disabled should disable button
	it("should have disabled attribute when disabled prop is true", () => {
		const wrapper = mount(Button, {
			props: {
				disabled: true,
			},
		});
		expect(wrapper.attributes('disabled')).toBeDefined();
	});

	// Props: loading should disable button
	it("should have disabled attribute when loading prop is true", () => {
		const wrapper = mount(Button, {
			props: {
				loading: true,
			},
			global: {
				stubs: {
					XrIcon: true,
				},
			},
		});
		expect(wrapper.attributes('disabled')).toBeDefined();
	});

	// Props: autofocus
	it("should have autofocus attribute when autofocus prop is true", () => {
		const wrapper = mount(Button, {
			props: {
				autofocus: true,
			},
		});
		expect(wrapper.attributes('autofocus')).toBeDefined();
	});

	// Props: icon
	it("should render icon when icon prop is set", () => {
		const wrapper = mount(Button, {
			props: {
				icon: "search",
			},
			global: {
				stubs: {
					XrIcon: true,
				},
			},
		});
		expect(wrapper.findComponent({ name: 'xr-icon' }).exists()).toBe(true);
	});

	// Props: loadingIcon
	it("should render loading icon when loading is true", () => {
		const wrapper = mount(Button, {
			props: {
				loading: true,
				loadingIcon: "loading",
			},
			global: {
				stubs: {
					XrIcon: {
						template: '<div class="stub-icon" :class="{ spin: spin }" :icon="icon"></div>',
						props: ['icon', 'spin'],
					},
				},
			},
		});
		const icon = wrapper.find('.stub-icon');
		expect(icon.exists()).toBe(true);
		expect(icon.attributes('icon')).toBe('loading');
		expect(icon.classes()).toContain('loading-icon');
	});

	// Props: useThrottle
	it("should throttle click events when useThrottle is true", async () => {
		const wrapper = mount(Button, {
			props: {
				useThrottle: true,
				throttleDuration: 1000,
			},
		});

		await wrapper.trigger("click");
		await wrapper.trigger("click");
		expect(wrapper.emitted().click).toHaveLength(1);
	});

	// Props: useThrottle = false
	it("should not throttle click events when useThrottle is false", async () => {
		const wrapper = mount(Button, {
			props: {
				useThrottle: false,
			},
		});

		await wrapper.trigger("click");
		await wrapper.trigger("click");
		expect(wrapper.emitted().click).toHaveLength(2);
	});

	// Slots: default slot
	it("should render default slot content", () => {
		const wrapper = mount(Button, {
			slots: {
				default: "Button Text",
			},
		});
		expect(wrapper.text()).toBe("Button Text");
	});

	// Slots: loading slot
	it("should render custom loading slot when provided", () => {
		const wrapper = mount(Button, {
			props: {
				loading: true,
			},
			slots: {
				loading: '<div class="custom-loading">Loading...</div>',
			},
		});
		expect(wrapper.find('.custom-loading').exists()).toBe(true);
		expect(wrapper.find('.custom-loading').text()).toBe('Loading...');
	});

	// Props: nativeType
	it("should have the correct native type attribute when nativeType prop is set", () => {
		const wrapper = mount(Button, {
			props: {
				nativeType: "submit",
				tag: "button",
			},
			global: {
				stubs: {
					XrIcon: true,
				},
			},
		});
		expect(wrapper.element.tagName).toBe("BUTTON");
		expect((wrapper.element as HTMLButtonElement).type).toBe("submit");
	});

	// Props: tag
	it("should render the custom tag when tag prop is set", () => {
		const wrapper = mount(Button, {
			props: {
				tag: "a",
			},
		});
		expect(wrapper.element.tagName.toLowerCase()).toBe("a");
	});

	// Events: click
	it("should emit a click event when the button is clicked", async () => {
		const wrapper = mount(Button, {
			props: {
			},
		});
		await wrapper.trigger("click");
		expect(wrapper.emitted().click).toHaveLength(1);
	});
});

describe("ButtonGroup.vue", () => {
	// ButtonGroup rendering
	it("should render button group with slot content", () => {
		const wrapper = mount(ButtonGroup, {
			slots: {
				default: [
					h(Button, { type: "primary" }, () => "Button 1"),
					h(Button, { type: "success" }, () => "Button 2"),
				],
			},
			global: {
				stubs: {
					XrIcon: true,
				},
			},
		});

		expect(wrapper.classes()).toContain('xr-button-group');
		expect(wrapper.findAllComponents(Button)).toHaveLength(2);
	});

	// ButtonGroup props inheritance
	it("should pass type prop to child buttons", () => {
		const wrapper = mount(ButtonGroup, {
			props: {
				type: "danger",
			},
			slots: {
				default: [
					h(Button, null, () => "Button 1"),
					h(Button, null, () => "Button 2"),
				],
			},
			global: {
				stubs: {
					XrIcon: true,
				},
			},
		});

		const buttons = wrapper.findAllComponents(Button);
		buttons.forEach(button => {
			expect(button.classes()).toContain('xr-button--danger');
		});
	});

	it("should pass size prop to child buttons", () => {
		const wrapper = mount(ButtonGroup, {
			props: {
				size: "large",
			},
			slots: {
				default: [
					h(Button, null, () => "Button 1"),
					h(Button, null, () => "Button 2"),
				],
			},
			global: {
				stubs: {
					XrIcon: true,
				},
			},
		});

		const buttons = wrapper.findAllComponents(Button);
		buttons.forEach(button => {
			expect(button.classes()).toContain('xr-button--large');
		});
	});

	it("should pass disabled prop to child buttons", () => {
		const wrapper = mount(ButtonGroup, {
			props: {
				disabled: true,
			},
			slots: {
				default: [
					h(Button, null, () => "Button 1"),
					h(Button, null, () => "Button 2"),
				],
			},
			global: {
				stubs: {
					XrIcon: true,
				},
			},
		});

		const buttons = wrapper.findAllComponents(Button);
		buttons.forEach(button => {
			expect(button.classes()).toContain('is-disabled');
			expect(button.attributes('disabled')).toBeDefined();
		});
	});
});