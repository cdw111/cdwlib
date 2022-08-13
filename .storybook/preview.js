//预设文件
//导入样式
import '../src/styles/index.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas)
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },//记录事件回调
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,//当有data属性时会渲染data输入框
    },
  },
}