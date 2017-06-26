# Vue2.0 全家桶仿boohee薄荷app （持续更新中）

## 个人喜欢健身，自然接触到各种各样的健身app，最近上手vue便想用学到的知识练练手把它仿下来

## 描述 
1、运动健身型的app一般数据流转性较强，一份数据多个组件使用，所以用vuex来管理组件之间的状态来实现非父子组件之间的数据共享及通信是再合适不过的了
2、移动设备兼容：使用rem处理兼容问题
3、对于组件化开发模式的框架来说，路由的搭建很有技巧，子路由的配置可以让整个项目的结构变得简单明了，最开始的时候没有注意到这个问题，严重影响进度，好在及时发现并改正了
##目前具体功能实现：
1. **目录结构**
    |—— build
    |—— config
    |—— src : dev resources
    | |—— assets/
    | |     |——images
    | |     |——photo
    | |—— components/
    | |     |——friend/ 发现-朋友圈-页
    | |     |——me/ 我-页
    | |     |——shop/商店 -页
    | |     |——slim/健康-页
    | |     |   |——slim-components/ 健康页内其他页
    | |     |   |   |——addmeal.vue
    | |     |   |   |——addmealHeader.vue
    | |     |   |   |——common.vue
    | |     |   |   |——dietary_two.vue
    | |     |   |   |——exercise_four.vue
    | |     |   |   |——header4.vue
    | |     |   |   |——health_one.vue
    | |     |   |   |——other.vue
    | |     |   |   |——weight_three.vue
    | |     |   |——Slim.vue
    | |     |——header.vue
    | |     |——header2.vue
    | |     |——header3.vue
    | |     |——message.vue
    | |     |——navbar.vue
    | |     |——search.vue
    | |—— fetch/
    | |     |——api.js axios请求
    | |—— router/
    | |     |——index.js 路由映射
    | |—— vuex
    | |     |——actions.js
    | |     |——mutations.js
    | |     |——state.js
    | |     |——store.js
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
