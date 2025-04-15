import { describe, test, expect, it, vi } from "vitest";
import { mount } from "@vue/test-utils";
import XrAlert from "./alert.vue";
import type { AlertType } from "./type";
import { find } from "lodash-es";
import { XrIcon } from "../Icon";
/**
 * 2.1 Props 测试
showIcon 属性：
验证 showIcon 为 true 时，是否显示图标。
验证 showIcon 为 false 时，是否隐藏图标。
center 属性：
验证 center 为 true 时，内容是否居中。
effect 属性：
验证组件根据 effect 值（light 或 dark）渲染正确的主题样式。
duration 属性：
验证 duration 为正值时，是否在指定时间后自动关闭。
验证 duration 为 0 时，是否不自动关闭。
验证 duration 为负值时，是否强制设为 0。
*/
/**
type 属性：
验证组件根据不同的 type 值（success、warning、info、error）渲染正确的样式。
验证非法值时，使用默认类型 info。
 */
describe("alter的props测试", () => {
    const type: AlertType[] = ['success', 'warning', 'info', 'danger']
    test('should have the correct type class when type prop is set', () => {
        type.forEach((type) => {
            const wrapper = mount(XrAlert, {
                props: {
                    type,
                    title: type
                }
            })
            expect(wrapper.classes()).toContain(`xr-alert__${type}`)
        })
    })
    test('should use default type "info" when an invalid type is provided', () => {
        const wrapper = mount(XrAlert, {
            props: {
                type: "invalid" as AlertType, // 非法值
                title: "Test Title",
            },
        });
        expect(wrapper.classes()).toContain('xr-alert__info')
    })
    /**
     * title 属性：
        验证组件是否正确渲染标题内容。
        验证未传递 title 时，是否仅展示内容区域。
        description 属性：
        验证组件是否正确渲染描述内容。
        验证 description 为空时，是否仅展示标题或默认提示文本。
     */
})
describe('alert 的title和description的测试', () => {
    test('should render title and description correctly', () => {
        const wrapper = mount(XrAlert, {
            props: {
                title: 'Test Title',
                description: 'This is a test description',
            },
        });
        // 验证标题是否正确渲染
        const title = wrapper.find('.xr-alert__title');
        expect(title.exists()).toBe(true);
        expect(title.text()).toBe('Test Title');
        // 验证描述是否正确渲染
        const description = wrapper.find('.xr-alert__description');
        expect(description.exists()).toBe(true);
        expect(description.text()).toBe('This is a test description');
    })
    test('should render only description when title is not provided', () => {
        const wrapper = mount(XrAlert, {
            props: {
                description: 'This is a test description',
            },
        });
        // 验证标题不存在
        const title = wrapper.find('.xr-alert__title');
        expect(title.exists()).toBe(false);
        // 验证描述是否正确渲染
        const description = wrapper.find('.xr-alert__description');
        expect(description.exists()).toBe(true);
        expect(description.text()).toBe('This is a test description');
    })

    // test('should render only title when description is not provided', () => {
    //     const wrapper = mount(XrAlert, {
    //         props: {
    //             title: 'Test Title',
    //         },
    //     });

    //     // 验证标题是否正确渲染
    //     const title = wrapper.find('.xr-alert__title');
    //     expect(title.exists()).toBe(true);
    //     expect(title.text()).toBe('Test Title');

    //     // 验证描述不存在
    //     const description = wrapper.find('.xr-alert__description');
    //     expect(description.exists()).toBe(false);
    // })
    test('should handle empty description gracefully', () => {
        const wrapper = mount(XrAlert, {
            props: {
                title: 'Test Title',
                description: '',
            },
        });

        // 验证标题是否正确渲染
        const title = wrapper.find('.xr-alert__title');
        expect(title.exists()).toBe(true);
        expect(title.text()).toBe('Test Title');

        // 验证描述是否为空
        const description = wrapper.find('.xr-alert__description');
        expect(description.exists()).toBe(true);
        expect(description.text()).toBe('');
    });
})

/**
 * closable 属性：
验证 closable 为 true 时，是否显示关闭按钮。
验证 closable 为 false 时，是否隐藏关闭按钮。
closeText 属性：
验证自定义关闭按钮文本是否正确显示。
 */
describe('alert 的 closable 和 closeText 属性测试', () => {
    test('should show close button when closable is true', async () => {
        const wrapper = mount(XrAlert, {
            props: {
                closable: true,
            },
        });
        // console.log(wrapper.html());
        // 验证关闭按钮是否存在
        const closeButton = wrapper.find('.xr-alert__close');
        expect(closeButton.exists()).toBe(true);
    });
    test('should hide close button when closable is false', () => {
        const wrapper = mount(XrAlert, {
            props: {
                closable: false,
            },
            global: {
                stubs: ["XrIcon"],
            },
        });

        // 验证关闭按钮是否不存在
        const closeButton = wrapper.find('.xr-alert__close');
        expect(closeButton.exists()).toBe(false);
    });

    test('should display custom close button text when closeText is provided', () => {
        const wrapper = mount(XrAlert, {
            props: {
                closable: true,
                closeText: 'Close Me',
            },
            global: {
                stubs: ["XrIcon"],
            },
        });

        // 验证关闭按钮是否存在
        const closeButton = wrapper.find('.xr-alert__close');
        expect(closeButton.exists()).toBe(true);

        // 验证关闭按钮的文本内容
        expect(closeButton.text()).toBe('Close Me');
    });
})
/*
2.2 事件测试
close 事件：
验证点击关闭按钮时，是否触发 close 事件。
验证 close 事件是否传递正确的参数（MouseEvent）。
before-close 事件：

验证 before-close 钩子是否在关闭前触发。
验证 before-close 钩子是否可以拦截关闭行为。
*/
describe('alert关闭事件测试', () => {
    test('should emit close event when close button is clicked', async () => {
        const onClose = vi.fn(); // 创建一个 mock 函数监听 close 事件
        const wrapper = mount(XrAlert, {
            props: {
                closable: true,
            },
            attrs: {
                onClose, // 监听 close 事件
            },
        });
        // 模拟点击关闭按钮
        const closeButton = wrapper.find('.xr-alert__close');
        await closeButton.trigger('click');
        // 验证 close 事件是否触发
        expect(onClose).toHaveBeenCalledTimes(1);
        // 验证 close 事件是否传递了 MouseEvent 参数
        const eventArg = onClose.mock.calls[0][0];
        expect(eventArg).toBeInstanceOf(MouseEvent);
        //点击关闭之后，wrapper应该不可见
        expect(wrapper.isVisible()).toBe(false)
    })
})
// 2.3 插槽测试
// default 插槽：
// 验证默认插槽内容是否正确渲染。
// title 插槽：
// 验证自定义标题内容是否正确渲染。
// icon 插槽：
// 验证自定义图标内容是否正确渲染。
describe('alert 的插槽测试', () => {
    test('should render default slot content correctly', () => {
        const wrapper = mount(XrAlert, {
            title: 'title a',
            slots: {
                default: '<p class="default-slot">This is default slot content</p>',
            },
            global: {
                stubs: ["XrIcon"],
            },
        });
        console.log(wrapper.html);
        const description = wrapper.find('.xr-alert__description')
        expect(description.text()).toBe('This is default slot content');
    });

    test('should render title slot content correctly', () => {
        const wrapper = mount(XrAlert, {
            slots: {
                title: '<h1 class="title-slot">This is title slot content</h1>',
            },
            global: {
                stubs: ["XrIcon"],
            },
        });
        // 验证具名插槽内容是否正确渲染
        const description = wrapper.find('.xr-alert__title')
        expect(description.text()).toBe('This is title slot content');
    });
});
// 2.4 动态行为测试
// type 动态切换：
// 验证动态切换 type 值时，组件样式是否正确更新。
// effect 动态切换：
// 验证动态切换 effect 值时，组件主题是否正确更新。
describe('alert 的动态行为测试', () => {
    test('should update type class when type prop changes', async () => {
        const wrapper = mount(XrAlert, {
            props: {
                type: 'success',
            },
        });

        // 初始状态
        expect(wrapper.classes()).toContain('xr-alert__success');

        // 动态修改 type
        await wrapper.setProps({ type: 'danger' });
        expect(wrapper.classes()).toContain('xr-alert__danger');
        expect(wrapper.classes()).not.toContain('xr-alert__success');
    });

    test('should update effect class when effect prop changes', async () => {
        const wrapper = mount(XrAlert, {
            props: {
            },
        });

        // 初始状态
        expect(wrapper.classes()).toContain('xr-alert__light');

        // 动态修改 effect
        await wrapper.setProps({ effect: 'dark' });
        expect(wrapper.classes()).toContain('xr-alert__dark');
        expect(wrapper.classes()).not.toContain('xr-alert__light');
    });
});
it.each([
    ["info", "circle-info"],
    ["success", "check-circle"],
    ["warning", "circle-exclamation"],
    ["danger", "circle-xmark"],
    ["non-compliance", "circle-info"], // 不符合 type 定义的
])("should has the correct icon when props type is %s", (type, iconName) => {
    const title = "Test Alert";
    const desc = "This is a test description";
    const wrapper = mount(XrAlert, {
        props: {
            title,
            closable: false,
            showIcon: true,
            type: type as AlertType,
        },
        slots: {
            default: desc,
        },
        global: {
            stubs: ["XrIcon"],
        },
    });

    const iconElement = wrapper.find('.xr-alert__icon');
    expect(iconElement.exists()).toBeTruthy();
    expect(iconElement.attributes("icon")).toBe(iconName);
});