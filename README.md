# WChat Vue 2.0

> 模仿iPhone端的微信开发的一款基于 Vue 2.0 的Web App, 通过对接智能聊天机器人, 模拟了简单的聊天功能
> 技术栈: vue 2.0, vue-cli, vuex, vue-router, webpack 2.x, pug, sass, babel等
> 后续可能会继续更新...

[点击这里在线查看效果](http://mohng.com/wchat-vue), 建议使用谷歌浏览器, 并开启手机调试模式

## 本地使用

假设本地已安装 `Node.js`, 然后克隆仓库到本地, 安装完所有插件并启动服务器.
建议使用谷歌浏览器并在手机调试模式下查看(http://localhost:8808/)

输入任意**用户名**跟**密码**即可进入到微信界面

``` bash
# clone
git clone https://github.com/moohng/wchat-vue.git

# 进入到目录安装所有依赖包
cd wchat-vue
npm install

# 打开本地服务器 监听8808端口
npm run dev
```

## 效果演示

待续...

## 说明

- 模拟了登陆和注销功能
- 模拟了iPhone端的**转场动画**(push, pop, modal, dismiss等)
- 动态聊天列表
- 文字聊天功能

更多功能请待续...

如果您觉得对您有用, 欢迎**star**和分享
