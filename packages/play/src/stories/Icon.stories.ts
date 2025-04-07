import type { Meta, StoryObj, ArgTypes } from "@storybook/vue3";
import { XrIcon } from "xier-element";

type Story = StoryObj<typeof XrIcon> & { argTypes?: ArgTypes };

const meta: Meta<typeof XrIcon> = {
    title: "Example/Icon",
    component: XrIcon,
    tags: ["autodocs"],
    argTypes: {
        type: {
            control: { type: "select" },
            options: ["primary", "success", "warning", "danger", "info"],
        },
        color: {
            control: { type: "color" },
        },
        size: {
            control: { type: "select" },
            options: ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"],
        },
        spin: {
            control: "boolean",
        },
        pulse: {
            control: "boolean",
        },
        bounce: {
            control: "boolean",
        },
        shake: {
            control: "boolean",
        },
        beat: {
            control: "boolean",
        },
        icon: {
            control: { type: "text" },
        },
    },
    args: {
        icon: "['far', 'file']", // 默认图标
        type: "primary",
        color: "#000000",
        size: "lg",
    },
};

const container = (val: string) => `
<div style="margin:5px">
  ${val}
</div>
`;

export const Default: Story = {
    render: (args) => ({
        components: { XrIcon },
        setup() {
            return { args };
        },
        template: container(
            `<xr-icon v-bind="args" />`
        ),
    }),
};

export default meta;