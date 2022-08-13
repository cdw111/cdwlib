import React from "react";
import Button from "./button";

import { ComponentMeta, ComponentStory } from "@storybook/react";
// //定义整个状态
// const buttonMeta: ComponentMeta<typeof Button> = {
//     title: 'Button',
//     component: Button
// }
// // //创建的模板的创建方式
// // const Template: ComponentStory<typeof Button> = (args) => (
// //     <Button {...args}></Button>
// // )
// // export const Default = Template.bind({})
// // Default.args = {
// //     children: "Default Button"
// // }

// export default buttonMeta
// // 导出各个具体的函数   作为不同story案例
// //传入args  在文档中可以自定义定制
// // export const Default: ComponentStory<typeof Button> = (args) => (
// //    <Button {...args}>Default Button</Button>
// // )

// // Default.storyName = "默认按钮样式"

// // export const ButtonWithSize: ComponentStory<typeof Button> = () => (
// //     <>
// //         <Button size="lg">Large Button</Button>
// //         <Button size="sm">Small Button</Button>
// //     </>
// // )

// // ButtonWithSize.storyName = "不同尺寸按钮"


// // export const CButtonWithType = () => (
// //     <>
// //       <Button btnType="primary"> primary button </Button>
// //       <Button btnType="danger"> danger button </Button>
// //       <Button btnType="link" href="https://baidu.com"> link button </Button>
// //     </>
// //   )
  
// //   CButtonWithType.storyName = '不同类型的按钮'

// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

// export const Default = Template.bind({})
// Default.args = {
//   children: 'Default Button',
// }
// Default.storyName = '默认按钮样式'
// export const Large = Template.bind({})
// Large.args = {
//   size: 'lg',
//   children: 'Large Button',
// }
// export const Small = Template.bind({})
// Small.args = {
//   size: 'sm',
//   children: 'Small Button',
// }
// export const Primary = Template.bind({})
// Primary.args = {
//   btnType: 'primary',
//   children: 'Primary Button',
// }
// export const Danger = Template.bind({})
// Danger.args = {
//   btnType: 'danger',
//   children: 'Danger Button',
// }
// export const Link = Template.bind({})
// Link.args = {
//   btnType: 'link',
//   children: 'Link Button',
//   href: 'https://google.com'
// }


export default {
    title: 'Button',
    component: Button,
    // parameters: {
    //   docs: {
    //     page: WelcomeMDX
    //   }
    // }
  } as ComponentMeta<typeof Button>
  
  const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />
  
  export const ADefault = Template.bind({})
  ADefault.args = {
    children: 'Default Button',
  }
  ADefault.storyName = '默认按钮样式'
  export const BButtonWithSize = () => (
    <>
      <Button size="lg"> large button </Button>
      <Button size="sm"> small button </Button>
    </>
  )
  BButtonWithSize.storyName = '不同尺寸的按钮'
  
  export const CButtonWithType = () => (
    <>
      <Button btnType="primary"> primary button </Button>
      <Button btnType="danger"> danger button </Button>
      <Button btnType="link" href="https://google.com"> link button </Button>
    </>
  )
  
  CButtonWithType.storyName = '不同类型的按钮'