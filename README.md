# 摸UI-已经摸了的Vue UI组件

[![Build Status](https://www.travis-ci.org/XXXXXie1997/Mo-UI-Demo1.svg?branch=master)](https://www.travis-ci.org/XXXXXie1997/Mo-UI-Demo1)

## 介绍

此项目为本人在vue的学习过程中制作的UI框架，希望能帮到你。

## 开始使用

1. 安装

    使用本框架前请在CSS中开启border-box。
    
    ```
    *,*::before,*::after{box-sizing:border-box}
    ```
    IE 8 及以上浏览器支持此样式。
    
    同时你还需要设置浏默认颜色等变量（开发中，后续会改为SCSS变量）。
    
    
    ```
        html {
                --button-height: 32px;
                --font-size: 14px;
                --button-bg: white;
                --button-active-bg: #eee;
                --border-radius: 4px;
                --color: #333;
                --border-color: #999;
                --border-color-hover: #666;
            }
    
    ```
    IE 15 及以上浏览器支持此样式
 
2. 安装mo
 ```
npm i --save mo-ui-beta
```

3. 引入mo
```
import {Button,ButtonGroup,Icon} from 'mo-ui-beta'
import 'mo-ui-beta/dist/index.css'

export default {
    name:'app',
    components:{
        HelloWorld,
        'g-button':Button,
        'g-icon':Icon
    }
}
```


## 文档

## 提问

## 变更记录

## 联系方式

## 贡献


## bug记录
### 2020/10/24
在使用 Karma + Mocha做单元测试时出现vue报错：

[Vue warn]: Unknown custom element: <g-icon> - did you register the component correctly? For recursive components, make sure to provide the "name" option.


---
10/25 已解决，原因为g-icon没有在button.vue中声明