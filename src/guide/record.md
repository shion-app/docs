# Record

## Automatic recording {#automatic}

The function is located in `Data Collection`-`Monitor`. If you want to add **software that needs to be monitored**, there are two ways

+ Click the menu in the lower left corner, click `Filter software to monitor`, select the software, and finally confirm (only **already opened software** will be displayed in the waiting list)
+ In `View`-`Settings`-`Behavior`, find `Automatic monitoring whitelist`, and by adding a folder path, any software under this path can be automatically added when running (for example, if I directly select C drive, then all software in C drive will be included in the monitoring range)

It is up to you to choose **manual addition** or **automatic addition**, but I strongly recommend that the scope of the whitelist is too large, especially the entire disk

Q: Why can't some software be added?

A: Some software will require **administrator identity** to run when opened. The icons of these software have a shield logo. If you want to monitor these software, you also need to run shion as an administrator (you need to exit **tray** in the lower right corner and reopen shion)

::: warning

Currently, after enabling `Startup` in `Settings`, you can choose `As Administrator`, but after testing, it will occasionally fail to start normally, so it is not recommended to enable this option

So currently you need to start as an administrator, and the only way is to manually right-click `Run as Administrator`

:::

## Manual Record {#manual}

The functions include `Data Collection`-`Plan`, `Data Collection`-`Tag`, `Record`

`Plan` is a large collection, `Tag` is a small collection under `Plan`, and `Record` is a stopwatch

You can set reading as `Plan`, and set reading a specific book as `Tag`, and use the `Record` stopwatch to time. The timing is divided into two categories

+ Manually click Start, wait until the time is up, and then click End
+ Directly enter the start and end data

Q: How to modify the record?

A: Go to the [Timeline](./display.md#timeline) page

## Browser record {#browser}

After importing the record in `View`-`Browser History`, shion will pull the latest record regularly

Of course, you can also refresh the data on the `Timeline` page to pull

Q: Why are some history records not displayed?

A: The software obtains data by copying the local browser database to back up. If you refresh and obtain data directly after browsing the web page, it may not work properly, especially on Firefox

Q: Why do I only open the web page once in the timeline, but there are two or more records?

A: All data comes from the browser's local database. You can open the browser's history to check if they are the same.

## Note Record {#obsidian}

Add your obsidian warehouse folder through `View`-`Extension`-`obsidian`

Its data will appear in `Chart Display` and `Timeline`

This feature is very useful for you when you need to record with text, pictures and other media. Using external writing applications, you can play as you like. Shion will read the file name of each note to mark it in `Chart Display` and `Timeline`

Q: Why use obsidian? Can't I use other software?

A: Limiting obsidian is just for advance consideration. There may be obsidian-specific features in the future.

Q: Can it be bypassed by some means?

A: Yes, as long as you use markdown-related applications. You just need to create a file named `.obsidian` in the specified repository

## Remarks {#remark}

There is no record mentioned in the quick start, and the current function is very thin

It is recorded by a third-party application. Shion provides a mechanism that allows other software to pass its internal status to Shion

Shion itself provides a remark record for [Dandanplay](./dandanplay.md)

If you are an application developer, see [Third-party application access](./api.md) for details