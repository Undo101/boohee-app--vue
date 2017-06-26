# Vue2.0 全家桶仿boohee薄荷app （持续更新中）

## 个人喜欢健身，自然接触到各种各样的健身app，最近上手vue便想用学到的知识练练手把它仿下来

## 描述 
* 运动健身型的app一般数据流转性较强，一份数据多个组件使用，所以用vuex来管理组件之间的状态来实现非父子组件之间的数据共享及通信是再合适不过的了
* 移动设备兼容：使用rem处理兼容问题
* 对于组件化开发模式的框架来说，路由的搭建很有技巧，子路由的配置可以让整个项目的结构变得简单明了，最开始的时候没有注意到这个问题，严重影响进度，好在及时发现并改正了
##目前具体功能实现：
1. **目录结构**
        |—— build
        |—— config
        |—— src : dev resources
        | |—— assets/
        | |     |___images
        | |     |___photo
        | |—— components/
        | |     |___friend/ 发现-朋友圈-页
        | |     |___me/ 我-页
        | |     |___shop/商店 -页
        | |     |___slim/健康-页
        | |     |   |___slim-components/ 健康页内其他页
        | |     |   |   |___addmeal.vue
        | |     |   |   |___addmealHeader.vue
        | |     |   |   |___common.vue
        | |     |   |   |___dietary_two.vue
        | |     |   |   |___exercise_four.vue
        | |     |   |   |___header4.vue
        | |     |   |   |___health_one.vue
        | |     |   |   |___other.vue
        | |     |   |   |___weight_three.vue
        | |     |   |___Slim.vue
        | |     |___header.vue
        | |     |___header2.vue
        | |     |___header3.vue
        | |     |___message.vue
        | |     |___navbar.vue
        | |     |___search.vue
        | |—— fetch/
        | |     |___api.js axios请求
        | |—— router/
        | |     |___index.js 路由映射
        | |—— vuex
        | |     |___actions.js
        | |     |___mutations.js
        | |     |___state.js
        | |     |___store.js
        | |—— App.vue :boohee SPA
        | |—— main.js 
        |—— static : static files
        ... ...

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
