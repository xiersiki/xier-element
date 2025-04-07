import type { Meta, StoryObj, ArgTypes } from "@storybook/vue3";
import { fn, within, userEvent, expect } from "@storybook/test";
import { XrButton } from "xier-element";
// import "xier-element/dist/theme/Button.css";

type Story = StoryObj<typeof XrButton> & { argTypes?: ArgTypes };

const meta: Meta<typeof XrButton> = {
  title: "Example/Button",
  component: XrButton,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger", "info", "default"],
    },
    size: {
      control: { type: "select" },
      options: ["large", "default", "small", ""],
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    useThrottle: {
      control: "boolean",
    },
    throttleDuration: {
      control: "number",
    },
    autofocus: {
      control: "boolean",
    },
    tag: {
      control: { type: "select" },
      options: ["button", "a", "div"],
    },
    nativeType: {
      control: { type: "select" },
      options: ["button", "submit", "reset", ""],
    },
    icon: {
      control: { type: "text" },
    },
    loadingIcon: {
      control: { type: "text" },
    },
  },
  args: { onClick: fn() },
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
    content: "Button",
  },
  render: (args) => ({
    components: { XrButton },
    setup() {
      return { args };
    },
    template: container(
      `<xr-button v-bind="args">{{args.content}}</xr-button>`
    ),
  }),
};

export default meta;