# Astro Component Base Template

模版工程使用说明
https://ku.baidu-int.com/knowledge/HFVrC7hq1Q/M-wK0zh99p/nNsrl5_5fg/8RWarXI2wUJy9z

## 使用官方安装包安装 pnpm@8.15.9，如果之前不是使用官方包安装，需要重装 pnpm@8.15.9
```bash
curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=8.15.9 sh -
```
全局安装 @nova-flow/cli

```bash
pnpm install -g @nova-flow/cli
```

## Setup

Install the dependencies:

```bash
pnpm install
```

## Get Started

Start the dev server:

```bash
pnpm dev
```

Build the app for production:

```bash
pnpm build
```

## 组件JSON枚举说明
```typescript
// 支持类型: 文本，数字，时间，下拉框，单选，多选，图片上传,颜色选择器
enum FormItemType {
  Server = 'Server', // 服务器配置表单
  Biz = 'Biz', // 产品运营配置表单
  UI = 'UI', // 研发配置表单
  DevServer = 'DevServer' // 研发服务端配置
}

enum AstroTypes {
  HtmlF2CId = 'HtmlF2CId', // F2C
  Input = 'Input', //输入框
  InputNumber = 'InputNumber', //数字
  InputArea = 'InputArea',
  RichEditor = 'RichEditor',
  TimePicker = 'TimePicker', //时间，
  Dropdown = 'Dropdown', //下拉框
  RadioGroup = 'RadioGroup', //单选
  Dropdown = 'Dropdown', //下拉框
  Checkbox = 'Checkbox', //多选
  Upload = 'Upload', //图片上传
  ColorPicker = 'ColorPicker', //颜色选择器
  Button = 'Button', //按钮
  Group = 'Group', //分组
  Switch = 'Switch' //开关
  Code = 'Code', //代码
  AdminTable = 'AdminTable', // 管理后台表格
}

interface 组件名字Prop {
  name: string // title名字 Input
  rank: number //排名 InputNumber
  time: number // 当前时间（毫秒） TimePicker
  gift: string // 前端调用后台需要的礼物信息 Dropdown
  type: string // 是否需要显示名字 RadioGroup
  list: Array<string> // 前端调用后台需要的列表信息 Checkbox
  bg: string // 背景 Upload
  color: string // 文案色值 ColorPicker
}
export const 组件名字 = () => { }
组件名字.propAstroTypes = [
  {
    type: FormItemType.Server,
    name: '服务器表单',
    role: AstroRole.T,
    serviceId: 111, // 拉取后台表单的id
    description: 'tooltips描述', // 非必填 菜单栏tooltips
  },
  {
    type: FormItemType.Ui,
    name: 'pkui',
    role: AstroRole.T,
    description: 'tooltips描述', // 非必填 菜单栏tooltips
    props: {
      //props名字
      rank: {
        type: AstroTypes.InputNumber,
        label: '排名',
        value: 999,
      },
      time: {
        type: AstroTypes.TimePicker,
        label: '时间',
        description: '毫秒', // 非必填 菜单栏tooltips
        value: 99999,
      },
      type: {
        type: AstroTypes.RadioGroup,
        label: '是否需要显示名字',
        value: 1,
        options: [
          { value: 0, label: '否' },
          { value: 1, label: '是' },
        ],
      },
      bg: {
        type: AstroTypes.Upload,
        label: '背景',
        value: '',
      },
      botton: {
        type: AstroTypes.Button,
        label: '背景',
        value: '',
      },
      color: {
        type: AstroTypes.ColorPicker,
        label: '文案色值',
        value: '#2642ce',
        format: 'hex',
      },
    },
  },
  {
    type: FormItemType.Biz,
    name: '接口请求配置',
    description: 'tooltips描述', // 非必填 菜单栏tooltips
    props: {
      //props名字
      url: {
        type: AstroTypes.Dropdown,
        label: '礼物信息',
        value: '{giftId:1,type:1}',
        options: [
          { value: 'inde.', label: '爱心' },
          { value: 'rule', label: '火箭' },
          { value: 'rule', label: '火箭' },
          { value: 'rule', label: '火箭' },
          { value: 'rule', label: '火箭' },
          { value: 'rule', label: '火箭' },
          { value: 'rule', label: '火箭' },
        ],
      },
      list: {
        type: AstroTypes.Checkbox,
        label: '列表信息',
        value: ['anchor=1', 'channel=2'],
        options: [
          { value: 'anchor=1', label: '主持id' },
          { value: 'channel=2', label: '公会id' },
          { value: 'anchorFamily=障碍家族', label: '家族名称' },
        ],
      },
    },
  },
]

```