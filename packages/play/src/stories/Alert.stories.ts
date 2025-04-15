import type { Meta, StoryObj, ArgTypes } from "@storybook/vue3";
import { fn, within, userEvent, expect } from "@storybook/test";
import { XrAlert } from 'xier-element';

export default {
    title: 'Components/Alert',
    component: XrAlert,
    argTypes: {
        type: {
            control: { type: 'select' },
            options: ['success', 'warning', 'info', 'danger'],
            description: 'The type of the alert',
        },
        title: {
            control: 'text',
            description: 'The title of the alert',
        },
        description: {
            control: 'text',
            description: 'The description of the alert',
        },
        closable: {
            control: 'boolean',
            description: 'Whether the alert is closable',
        },
        closeText: {
            control: 'text',
            description: 'Custom text for the close button',
        },
        showIcon: {
            control: 'boolean',
            description: 'Whether to show the icon',
        },
        effect: {
            control: { type: 'select' },
            options: ['light', 'dark'],
            description: 'The effect of the alert',
        },
    },
} as Meta<typeof XrAlert>;

const Template: StoryFn<typeof XrAlert> = (args) => ({
    components: { XrAlert },
    setup() {
        return { args };
    },
    template: `
    <xr-alert v-bind="args">
      <template #title v-if="args.title">{{ args.title }}</template>
      <template v-if="args.description"></template>
    </xr-alert>
  `,
});

export const Default = Template.bind({});
Default.args = {
    type: 'info',
    title: 'Default Alert',
    description: 'This is a default alert description.',
    closable: true,
    closeText: '',
    showIcon: true,
    effect: 'light',
};

export const Success = Template.bind({});
Success.args = {
    type: 'success',
    title: 'Success Alert',
    description: 'This is a success alert description.',
    closable: true,
    showIcon: true,
};

export const Warning = Template.bind({});
Warning.args = {
    type: 'warning',
    title: 'Warning Alert',
    description: 'This is a warning alert description.',
    closable: true,
    showIcon: true,
};

export const danger = Template.bind({});
danger.args = {
    type: 'danger',
    title: 'danger Alert',
    description: 'This is an danger alert description.',
    closable: true,
    showIcon: true,
};

export const CustomCloseText = Template.bind({});
CustomCloseText.args = {
    type: 'info',
    title: 'Custom Close Text',
    description: 'This alert has a custom close button text.',
    closable: true,
    closeText: 'Dismiss',
    showIcon: true,
};