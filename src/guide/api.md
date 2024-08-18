# Api docs {#api}

## Introduction {#introduction}

shion starts a web server locally and provides an interface through web services for third-party applications to implement the function of passing specific data to shion, so as to achieve monitoring of application event levels

> For example, if you are a developer of an e-book reading app and your users want to record the data of the books they read (book title, current progress), you can use this method

Currently only supports the note function

## Flow {#flow}

If you are preparing to connect your application to the shion API

The default port number is **15785**, which may be changed by the user

Some API calls require **authorization**, and authorization can only be obtained when the user adds your (third-party application developer) application to **automatic monitoring**

Get a token by calling `/api/auth`, and the token will expire. If the response returns 401, you need to re-request

Add the token to the header in the form of `Authorization: Bearer ${token}`

For other cases, see the error message returned by the specific interface

## Interface {#interface}

The interface response follows the following standards

> option means that this field may exist
>
> The response description is omitted below for interfaces with no data returned

| Field name | Type | Description |
| ------- | ---------------- | -------- |
| success | boolean | Success |
| data | option\<object\> | Return data |
| message | option\<string\> | Error message |

### ![GET](https://img.shields.io/badge/GET-green) /api/ping

Check if the server is running

### ![POST](https://img.shields.io/badge/POST-blue) /api/auth

Request credentials for authentication

#### Request parameters

| Field name | Type | Description |
| ------ | ------ | --------------------- |
| path | string | Third-party application exe file path |

#### Request example

```json
{
    "path": "D:\\software\\PotPlayer\\PotPlayerMini64.exe"
}
```

#### Response

| Field name | Type | Description |
| ------ | ------ | ------------ |
| token | string | For authentication |

#### Response example

```json
{
    "data": {
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjQsImV4cCI6MTcyNDAzMjY2MX0.9F4WKg0j8ouWB1sbcJt2e8HC7335AF78hppsOTCZwZI"
    },
    "success": true
}
```

### ![POST](https://img.shields.io/badge/POST-blue) ![AUTH](https://img.shields.io/badge/AUTH-red) /api/remark/create

Create application event

#### Request parameters

| Field name | Type | Description |
| ------ | -------------- | ---------------------------------- |
| title | string | Subject |
| desc | string | Details |
| arg | option\<string\> | Startup parameters (this data will be passed to your application) |
| time | option\<number\> | Timestamp of event occurrence |