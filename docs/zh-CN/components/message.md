---
title: Message 消息提示
lang: zh-CN
---


# Message 消息提示
用于主动操作后的反馈提示。

### 基本使用
Message被注册为一个实例的全局方法，可在全局实例上通过 `$message` 调用。
Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。
::: demo
message/basic
:::


### 可关闭提示
通过设置 `closable` 为true，在Message中显示一个关闭按钮。
::: demo
message/closable
:::
