# 摸UI-已经摸了的Vue UI组件库

[![Build Status](https://www.travis-ci.org/XXXXXie1997/Mo-UI-Demo1.svg?branch=master)](https://www.travis-ci.org/XXXXXie1997/Mo-UI-Demo1)

## 介绍

 **“幸福，往往是摸得透彻，而堇业的心却常常隐藏。”**
 
此项目为本人在vue的学习过程中制作的UI框架，希望能帮到你。

## bug记录
### 2020/10/24
在使用 Karma + Mocha做单元测试时出现vue报错：

[Vue warn]: Unknown custom element: <g-icon> - did you register the component correctly? For recursive components, make sure to provide the "name" option.


---
10/25 已解决，原因为g-icon没有在button.vue中声明
