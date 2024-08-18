# 接口说明 {#api}

## 功能 {#introduction}

shion在本地启动一个web服务器，通过web服务的方式提供接口以供第三方应用实现特定数据传递到shion的功能，以此实现对应用事件级别的监听

>  举一个例子，你是一位电子书阅读app的开发者，你的用户想要将阅读的书籍数据（书名、当前进度）记录下来，便可通过此方式

目前仅支持备注功能



## 流程 {#flow}

如果你正准备将你的应用接入到shion API

默认使用端口号**15785**，用户可能更改

部分api的调用需要**授权**，仅当用户将你（第三方应用开发者）的应用添加到**自动监听**后，才能获得授权

通过调用`/api/auth`获取token，token会过期。如果响应返回401，则需要重新请求

将token添加到header，以`Authorization: Bearer ${token}` 的形式

其余情况看具体接口返回报错信息



## 接口 {#interface}

接口返回响应遵循以下标准

>  option即代表可能存在此字段
>
> 无data返回的接口以下省略响应描述

| 字段名  | 类型             | 说明     |
| ------- | ---------------- | -------- |
| success | boolean          | 是否成功 |
| data    | option\<object\> | 返回数据 |
| message | option\<string\>   | 报错信息 |



### ![GET](https://img.shields.io/badge/GET-green) /api/ping

检测服务器是否正在运行



### ![POST](https://img.shields.io/badge/POST-blue) /api/auth

请求用于身份验证的凭证

#### 请求参数

| 字段名 | 类型   | 说明                  |
| ------ | ------ | --------------------- |
| path   | string | 第三方应用exe文件路径 |

#### 请求示例

```json
{
    "path": "D:\\software\\PotPlayer\\PotPlayerMini64.exe"
}
```

#### 响应

| 字段名 | 类型   | 说明         |
| ------ | ------ | ------------ |
| token  | string | 用于身份验证 |

#### 响应示例

```json
{
    "data": {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjQsImV4cCI6MTcyNDAzMjY2MX0.9F4WKg0j8ouWB1sbcJt2e8HC7335AF78hppsOTCZwZI"
    },
    "success": true
}
```



### ![POST](https://img.shields.io/badge/POST-blue) ![AUTH](https://img.shields.io/badge/AUTH-red) /api/remark/create 

创建程序应用事件

#### 请求参数

| 字段名 | 类型           | 说明                               |
| ------ | -------------- | ---------------------------------- |
| title  | string         | 主题                               |
| desc   | string         | 详细内容                           |
| arg    | option\<string\> | 启动参数（此数据会传递给你的应用） |
| time   | option\<number\> | 事件发生时间戳                    |

