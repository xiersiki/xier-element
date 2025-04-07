import type { Meta, StoryObj, ArgTypes } from "@storybook/vue3";
import { fn, within, userEvent, expect } from "@storybook/test";
import { XrTag } from "xier-element";

type Story = StoryObj<typeof XrTag> & { argTypes?: ArgTypes };

const meta: Meta<typeof XrTag> = {
  title: "Example/Tag",
  component: XrTag,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "success", "info", "warning", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["medium", "small", "mini"],
    },
    effect: {
      control: { type: "select" },
      options: ["dark", "light", "plain"],
    },
    closable: {
      control: "boolean",
    },
    hit: {
      control: "boolean",
    },
    color: {
      control: "color",
    },
    isTransitions: {
      control: "boolean",
    },
  },
  args: { onClose: fn(), onClick: fn() },
};

const container = (val: string) => `
<div style="margin:5px">
  ${val}
</div>
`;

export const Default: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: { type: "text" },
    },
  },
  args: {
    type: "primary",
    effect: "light",
    content: "Tag",
  },
  render: (args) => ({
    components: { XrTag },
    setup() {
      return { args };
    },
    template: container(
      `<xr-tag v-bind="args">{{args.content}}</xr-tag>`
    ),
  }),
};

export const AllTypes: Story = {
  render: () => ({
    components: { XrTag },
    template: container(`
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <xr-tag>默认标签</xr-tag>
        <xr-tag type="success">成功标签</xr-tag>
        <xr-tag type="info">信息标签</xr-tag>
        <xr-tag type="warning">警告标签</xr-tag>
        <xr-tag type="danger">危险标签</xr-tag>
      </div>
    `),
  }),
};

export const AllEffects: Story = {
  render: () => ({
    components: { XrTag },
    template: container(`
      <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
        <xr-tag effect="dark">深色</xr-tag>
        <xr-tag type="success" effect="dark">深色</xr-tag>
        <xr-tag type="info" effect="dark">深色</xr-tag>
        <xr-tag type="warning" effect="dark">深色</xr-tag>
        <xr-tag type="danger" effect="dark">深色</xr-tag>
      </div>
      <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
        <xr-tag effect="light">浅色</xr-tag>
        <xr-tag type="success" effect="light">浅色</xr-tag>
        <xr-tag type="info" effect="light">浅色</xr-tag>
        <xr-tag type="warning" effect="light">浅色</xr-tag>
        <xr-tag type="danger" effect="light">浅色</xr-tag>
      </div>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <xr-tag effect="plain">朴素</xr-tag>
        <xr-tag type="success" effect="plain">朴素</xr-tag>
        <xr-tag type="info" effect="plain">朴素</xr-tag>
        <xr-tag type="warning" effect="plain">朴素</xr-tag>
        <xr-tag type="danger" effect="plain">朴素</xr-tag>
      </div>
    `),
  }),
};

export const WithBorder: Story = {
  render: () => ({
    components: { XrTag },
    template: container(`
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <xr-tag hit>默认边框</xr-tag>
        <xr-tag type="success" hit>成功边框</xr-tag>
        <xr-tag type="info" hit>信息边框</xr-tag>
        <xr-tag type="warning" hit>警告边框</xr-tag>
        <xr-tag type="danger" hit>危险边框</xr-tag>
      </div>
    `),
  }),
};

export const Closable: Story = {
  render: () => ({
    components: { XrTag },
    setup() {
      return { onClose: fn() };
    },
    template: container(`
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <xr-tag closable @close="onClose">可关闭标签</xr-tag>
        <xr-tag type="success" closable @close="onClose">可关闭标签</xr-tag>
        <xr-tag type="info" closable @close="onClose">可关闭标签</xr-tag>
        <xr-tag type="warning" closable @close="onClose">可关闭标签</xr-tag>
        <xr-tag type="danger" closable @close="onClose">可关闭标签</xr-tag>
      </div>
    `),
  }),
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const closeBtns = canvas.getAllByText('×');

    // 点击第一个关闭按钮来测试关闭事件
    await userEvent.click(closeBtns[0]);
    await expect(args.onClose).toHaveBeenCalled();
  },
};

export const Sizes: Story = {
  render: () => ({
    components: { XrTag },
    template: container(`
      <div style="display: flex; gap: 10px; align-items: center;">
        <xr-tag>默认大小</xr-tag>
        <xr-tag size="medium">中等大小</xr-tag>
        <xr-tag size="small">小型标签</xr-tag>
        <xr-tag size="mini">迷你标签</xr-tag>
      </div>
    `),
  }),
};

export const CustomColor: Story = {
  render: () => ({
    components: { XrTag },
    template: container(`
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <xr-tag color="#6366f1">自定义颜色</xr-tag>
        <xr-tag color="#10b981">自定义颜色</xr-tag>
        <xr-tag color="#f59e0b">自定义颜色</xr-tag>
        <xr-tag color="#ef4444">自定义颜色</xr-tag>
        <xr-tag color="#8b5cf6">自定义颜色</xr-tag>
      </div>
    `),
  }),
};

export default meta;