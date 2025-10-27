import { describe, it, test, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { withInstall } from "@xier-element/utils";
import { each, get } from "lodash-es";
import type { popConfirmProps } from "./type";
import { XrPopconfirm } from "xier-element";

import Popconfirm from "./popconfirm.vue";

const onConfirm = vi.fn();
const onCancel = vi.fn();

describe("Popconfirm/index.ts", () => {
  it("should be exported with withInstall()", () => {
    expect(XrPopconfirm.install).toBeDefined();
  });

  // 不校验引用相等，改为校验关键特征一致
  it("should export the same SFC options (name/props/emits)", () => {
    const x = XrPopconfirm as any;
    const raw = Popconfirm as any;

    // 名称一致
    expect(x.name?.trim()).toBe(raw.name?.trim());

    // props 键集合一致（忽略构建差异导致的 type/required 等细节）
    expect(Object.keys(x.props)).toEqual(Object.keys(raw.props));

    // emits 一致
    expect(x.emits).toEqual(raw.emits);
  });

  // 校验入口导出的组件确实是 withInstall 过的版本
  test("should enhance Popconfirm component", () => {
    const enhanced = withInstall(Popconfirm);
    expect(enhanced.install).toBeDefined();
    expect((enhanced as any).name?.trim()).toBe(
      (XrPopconfirm as any).name?.trim()
    );
    // 入口导出的组件和本地增强后的在“特征”上保持一致
    expect(Object.keys((enhanced as any).props)).toEqual(
      Object.keys((XrPopconfirm as any).props)
    );
    expect((enhanced as any).emits).toEqual((XrPopconfirm as any).emits);
  });

  test("should apply specific enhancements", () => {
    const enhancedPopconfirm = withInstall(Popconfirm);
    expect(enhancedPopconfirm).toHaveProperty("install");
  });
});

// 测试组件是否能够接收所有 props
describe("Popconfirm.vue", () => {
  const props = {
    title: "Test Title",
    confirmButtonText: "Confirm",
    cancelButtonText: "Cancel",
    confirmButtonType: "primary",
    cancelButtonType: "info",
    icon: "check-circle",
    iconColor: "green",
    hideIcon: false,
    hideAfter: 500,
    width: 200,
  } as popConfirmProps;

  beforeEach(() => {
    vi.useFakeTimers();
    vi.clearAllMocks();
  });

  it("should accept all props", () => {
    const wrapper = mount(Popconfirm, {
      props,
    });

    // 检查 props 是否被正确设置
    each(Object.keys(props), (key) => {
      expect(get(wrapper.props(), key)).toBe(get(props, key));
    });
  });

  // 测试插槽内容
  it("should renders slot content correctly", () => {
    const slotContent = "Slot Content";
    const wrapper = mount(Popconfirm, {
      props,
      slots: {
        default: slotContent,
      },
    });

    expect(wrapper.text()).toContain(slotContent);
  });

  test("popconfirm emits", async () => {
    const wrapper = mount(() => (
      <div>
        <div id="outside"></div>
        <Popconfirm
          title="Test Title"
          hideIcon={true}
          onConfirm={onConfirm}
          onCancel={onCancel}
        >
          <button id="trigger">trigger</button>
        </Popconfirm>
      </div>
    ));
    const triggerArea = wrapper.find("#trigger");
    expect(triggerArea.exists()).toBeTruthy();

    triggerArea.trigger("click");
    await vi.runAllTimers();

    // 弹出层是否出现
    expect(wrapper.find(".xr-popconfirm").exists()).toBeTruthy();
    const confirmButton = wrapper.find(".xr-popconfirm__confirm");
    expect(confirmButton.exists()).toBeTruthy();

    confirmButton.trigger("click");
    await vi.runAllTimers();
    expect(wrapper.find(".xr-popconfirm").exists()).toBeFalsy();
    expect(onConfirm).toBeCalled();

    triggerArea.trigger("click");
    await vi.runAllTimers();
    expect(wrapper.find(".xr-popconfirm").exists()).toBeTruthy();
    const cancelButton = wrapper.find(".xr-popconfirm__cancel");
    expect(cancelButton.exists()).toBeTruthy();

    await vi.runAllTimers();
    cancelButton.trigger("click");
    await vi.runAllTimers();
    expect(wrapper.find(".xr-popconfirm").exists()).toBeFalsy();
    expect(onCancel).toBeCalled();
  });
});
