# General {#general}

## Did I encounter a problem?

Often, you need to confirm that you **really** have a problem, check the tutorials and existing documents

## I have a problem, how can I report it?

In the `Help` on the top bar of the program, click `Open log folder` to find the log file

If you cannot open the software, there is a log file in the location `C:\Users\{replace with your user name}\AppData\Local\hanaTsuk1.shion\logs`. Submit the log file to the developer and describe the problem

> Users using the open source version

Submit it on [github](https://github.com/shion-app/shion/issues), and you can search whether the same problem already exists

> Users using the steam version

The log path changes from `hanaTsuk1.shion` to `hanaTsuk1.shion.pro`

Submit it on [steam](https://steamcommunity.com/app/3026040/discussions/) or [github](https://github.com/shion-app/shion/issues), and you can search whether the same problem already exists

Or in `Help`, click `Open Developer Tools`, find `Console` in the upper column, and look for errors with a red background. (I usually recommend sending the full log file.)

## The first time you open the software, it is blank

You may have encountered the same situation as [this user](https://github.com/shion-app/shion/issues/36), which cannot be solved for the time being

If not, you can use the shortcut key `ctrl+shift+i` to open the developer tool

## How to migrate data?

For example, I use the open source version and now want to migrate the data to the advanced version

Click `View`-`Import and Export`, export the data as a compressed package in the `Open Source Version`, and then import the data in the `Advanced Version`

## Why filter out the automatic recording programs, and some software don't have it?

If there is a shield icon in the lower right corner of the software startup icon, it means you need to start shion `as an administrator`. If you have already started shion, you need to click Exit in the tray in the lower right corner, right-click the shion icon again, and then click `Run as Administrator`

::: warning Is there any more convenient way?

Currently, after starting `Startup` in `Settings`, you can choose `As Administrator`, but after testing, it will occasionally fail to start normally, so it is not recommended to enable this option

So the only way at present is to manually right-click `Run as Administrator`
:::

## Why is there no automatic recording of program activities?

In the `Monitoring` page of the `Data Collection`, confirm that you have added the program to be recorded

## Can automatic monitoring automatically add programs?

In `Settings`, add it in the `Automatic Monitoring Whitelist`

## Why is there no response when refreshing in the timeline?

The program is updated regularly, and your operation will take some time to be reflected in the timeline

## Why do I only open the webpage once in the timeline, but there are two or more records?

All data comes from the browser's local database. You can open the browser's history to check if they are the same

## Windows Security Center prompts virus

Normal phenomenon, the software is not signed, please confirm whether to use it
