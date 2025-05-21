import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { XrTooltip } from "xier-element";

// Meta 信息
const meta: Meta<typeof XrTooltip> = {
  title: 'Components/Tooltip',
  component: XrTooltip,
  tags: ['autodocs'],
  argTypes: {
    content: {
      description: '提示内容',
      control: 'text',
    },
    placement: {
      description: '气泡位置',
      control: 'select',
      options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'],
    },
    trigger: {
      description: '触发方式',
      control: 'select',
      options: ['hover', 'click', 'contextmenu'],
    },
    disabled: {
      description: '是否禁用',
      control: 'boolean',
    },
    manual: {
      description: '是否手动控制',
      control: 'boolean',
    },
    transition: {
      description: '过渡动画名称',
      control: 'text',
    },
    showTimeout: {
      description: '显示延迟(毫秒)',
      control: { type: 'number', min: 0 },
    },
    hideTimeout: {
      description: '隐藏延迟(毫秒)',
      control: { type: 'number', min: 0 },
    },
  },
  args: {
    content: '这是一个提示文本',
    placement: 'bottom',
    trigger: 'hover',
    disabled: false,
    manual: false,
    transition: 'fade',
    showTimeout: 0,
    hideTimeout: 200,
  },
  parameters: {
    docs: {
      description: {
        component: '一个轻量级的提示组件，可通过多种方式触发显示隐藏。',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof XrTooltip>;

// 基础用法
export const Basic: Story = {
  render: (args) => ({
    components: { XrTooltip },
    setup() {
      return { args };
    },
    template: `
      <div style="padding: 50px; text-align: center;">
        <XrTooltip v-bind="args">
          <button>基础提示</button>
        </XrTooltip>
      </div>
    `,
  }),
};

// 不同位置
export const Placements: Story = {
  render: () => ({
    components: { XrTooltip },
    template: `
      <div style="padding: 80px; display: flex; flex-wrap: wrap; gap: 20px; justify-content: center;">
        <XrTooltip content="上方提示" placement="top">
          <button>上方</button>
        </XrTooltip>
        
        <XrTooltip content="下方提示" placement="bottom">
          <button>下方</button>
        </XrTooltip>
        
        <XrTooltip content="左侧提示" placement="left">
          <button>左侧</button>
        </XrTooltip>
        
        <XrTooltip content="右侧提示" placement="right">
          <button>右侧</button>
        </XrTooltip>
        
        <XrTooltip content="左上提示" placement="top-start">
          <button>左上</button>
        </XrTooltip>
        
        <XrTooltip content="右上提示" placement="top-end">
          <button>右上</button>
        </XrTooltip>
        
        <XrTooltip content="左下提示" placement="bottom-start">
          <button>左下</button>
        </XrTooltip>
        
        <XrTooltip content="右下提示" placement="bottom-end">
          <button>右下</button>
        </XrTooltip>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '通过 `placement` 属性设置 Tooltip 显示的位置：上、下、左、右以及它们的变体。',
      },
    },
  },
};

// 不同触发方式
export const TriggerTypes: Story = {
  render: () => ({
    components: { XrTooltip },
    template: `
      <div style="padding: 50px; display: flex; gap: 30px; justify-content: center;">
        <XrTooltip content="悬停时显示" trigger="hover">
          <button>悬停触发</button>
        </XrTooltip>
        
        <XrTooltip content="点击时显示" trigger="click">
          <button>点击触发</button>
        </XrTooltip>
        
        <XrTooltip content="右键菜单显示" trigger="contextmenu">
          <button>右键触发</button>
        </XrTooltip>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '通过 `trigger` 属性设置不同的触发方式：悬停、点击和右键菜单。',
      },
    },
  },
};

// 手动控制
export const ManualControl: Story = {
  render: () => ({
    components: { XrTooltip },
    setup() {
      const tooltipRef = ref<{ show: () => void; hide: () => void } | null>(null);

      const showTooltip = () => {
        tooltipRef.value?.show();
      };

      const hideTooltip = () => {
        tooltipRef.value?.hide();
      };

      return { tooltipRef, showTooltip, hideTooltip };
    },
    template: `
      <div style="padding: 50px; text-align: center;">
        <XrTooltip ref="tooltipRef" content="手动控制的提示" manual>
          <button>手动控制目标</button>
        </XrTooltip>
        
        <div style="margin-top: 20px;">
          <button @click="showTooltip" style="margin-right: 10px;">显示提示</button>
          <button @click="hideTooltip">隐藏提示</button>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '通过设置 `manual` 属性为 `true`，可以使用 `show` 和 `hide` 方法手动控制 Tooltip 的显示和隐藏。',
      },
    },
  },
};

// 显示延迟
export const DelayedDisplay: Story = {
  render: () => ({
    components: { XrTooltip },
    template: `
      <div style="padding: 50px; display: flex; gap: 30px; justify-content: center;">
        <XrTooltip content="即时显示，延迟200ms隐藏" showTimeout="0" hideTimeout="200">
          <button>默认延迟</button>
        </XrTooltip>
        
        <XrTooltip content="延迟500ms显示" showTimeout="500" hideTimeout="0">
          <button>延迟显示</button>
        </XrTooltip>
        
        <XrTooltip content="延迟1000ms隐藏" showTimeout="0" hideTimeout="1000">
          <button>延迟隐藏</button>
        </XrTooltip>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '通过 `showTimeout` 和 `hideTimeout` 属性设置显示和隐藏的延迟时间（毫秒）。',
      },
    },
  },
};

// 禁用状态
export const Disabled: Story = {
  render: () => ({
    components: { XrTooltip },
    template: `
      <div style="padding: 50px; display: flex; gap: 30px; justify-content: center;">
        <XrTooltip content="正常提示">
          <button>正常</button>
        </XrTooltip>
        
        <XrTooltip content="禁用的提示" disabled>
          <button>禁用</button>
        </XrTooltip>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '通过 `disabled` 属性禁用 Tooltip。',
      },
    },
  },
};

// 自定义内容
export const CustomContent: Story = {
  render: () => ({
    components: { XrTooltip },
    template: `
      <div style="padding: 50px; text-align: center;">
        <XrTooltip>
          <button>自定义内容</button>
          <template #content>
            <div>
              <h4 style="margin-top: 0; color: var(--xr-primary-color);">自定义标题</h4>
              <p style="margin-bottom: 0;">这是一段<b>自定义格式</b>的内容</p>
            </div>
          </template>
        </XrTooltip>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '使用 `content` 插槽自定义 Tooltip 的内容，支持 HTML 和组件。',
      },
    },
  },
};

// 不同样式
export const Styled: Story = {
  render: () => ({
    components: { XrTooltip },
    template: `
      <div style="padding: 50px; text-align: center;">
        <XrTooltip>
          <button>样式化提示</button>
          <template #content>
            <div style="min-width: 200px;">
              <div style="display: flex; align-items: center; margin-bottom: 8px;">
                <div style="width: 16px; height: 16px; border-radius: 50%; background-color: #67c23a; margin-right: 8px;"></div>
                <span style="font-weight: bold;">成功状态</span>
              </div>
              <p style="margin: 0; font-size: 12px; color: #606266;">这是一个样式化的提示框，可以包含更丰富的内容</p>
            </div>
          </template>
        </XrTooltip>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: '使用自定义样式创建更丰富的提示内容。',
      },
    },
  },
};