# 展示

## 图表展示 {#chart}

通过自定义图表，快速了解各项记录数据

![](https://cdn.jsdelivr.net/gh/shion-app/docs/src/public/assets/zh/overview/overview.png)

![](https://cdn.jsdelivr.net/gh/shion-app/docs/src/public/assets/zh/overview/overview2.png)

### 活跃状态日历 {#active-status-calendar}

采用github风格的图表，记录每天具体项目花费时间总和，颜色的深浅代表时长

紫色边框代表当天有笔记数据，已由扩展[obsidian](./obsidian.md)接管

![](https://cdn.jsdelivr.net/gh/shion-app/docs/src/public/assets/zh/overview/active-status-calendar.png)


### 每日活跃 {#daily-activity}

24小时活跃图表，以每个小时为区段记载。通过点击**活跃状态日历**任意日期，可联动查看数据

![](https://cdn.jsdelivr.net/gh/shion-app/docs/src/public/assets/zh/overview/daily-activity.png)


### 单独类别柱状图 {#single-category-bar}

展示**手动计时**和**自动计时**的数据集合近30天的图表

![](https://cdn.jsdelivr.net/gh/shion-app/docs/src/public/assets/zh/overview/single-category-bar.png)


### 文本总结 {#text-summary}

同**单独类别柱状图**，但以文本形式展示数据

![](https://cdn.jsdelivr.net/gh/shion-app/docs/src/public/assets/zh/overview/text-summary.png)

### 最近活跃饼状图 {#recent-activity-pie}

展示**手动计时**和**自动计时**的数据集合最近几天总结的图表（当数据种类过多时，仅展示前12项**图例**）

![](https://cdn.jsdelivr.net/gh/shion-app/docs/src/public/assets/zh/overview/recent-activity-pie.png)

### 单独类别热力图 {#single-category-heatmap}

同活跃状态日历类似，以热力图展示单个集合数据

## 时间线展示 {#timeline}

将**手动计时**、**自动计时**、**浏览器历史**、**应用备注**、**obsidian笔记**的数据按时间展示，与右侧日历进行联动

通过左侧图标可对各项进行不同操作

![](https://cdn.jsdelivr.net/gh/shion-app/docs/src/public/assets/zh/timeline/timeline.png)


### 筛选 {#filter}

通过左下角**更多菜单**中的**筛选类别**，可以对数据进行筛选

当数据经过筛选后，就会在日历上显示活跃状态，筛选的状态也会存在于**状态栏**

![](https://cdn.jsdelivr.net/gh/shion-app/docs/src/public/assets/zh/timeline/filter.png)

在设置中可对时间线行为进行修改

![](https://cdn.jsdelivr.net/gh/shion-app/docs/src/public/assets/zh/timeline/behavior.png)


### 切换显示模式 {#switch-mode}

通过**状态栏**中的**年月切换**快捷操作进行日历展示的切换

![](https://cdn.jsdelivr.net/gh/shion-app/docs/src/public/assets/zh/timeline/switch-mode.png)

### 数据分组 {#group}

相同类型的数据聚集在一起时，会自动分组并隐藏起来，在**状态栏**点击**数据分组**可切换状态

![](https://cdn.jsdelivr.net/gh/shion-app/docs/src/public/assets/zh/timeline/group.png)


### 搜索 {#search}

针对**浏览器历史记录**、**瞬间**、**备注**的搜索，通过点击相应的搜索结果，还可以跳转至相应时间

![](https://cdn.jsdelivr.net/gh/shion-app/docs/src/public/assets/zh/timeline/search.png)


## 时间块展示 {#timeblock} 

[![抢先体验](https://img.shields.io/badge/%E6%8A%A2%E5%85%88%E4%BD%93%E9%AA%8C-%237246de)](/zh/guide/early-access)

将**手动计时**、**自动计时**一周的数据进行展示，通过右上方的按钮可以切换上一周、下一周，或是直接选择特定日期

::: info 

通过扩展[日历](./calendar.md)，可以查看多端数据

:::

::: warning 为什么有些记录没有显示?

为了显示效果，在**设置**中过滤了连续时长小于一定时间的数据

将设置的最小时间限制在**1分钟**也是为了流畅显示考虑

:::

![](https://cdn.jsdelivr.net/gh/shion-app/docs/src/public/assets/zh/timeblock/timeblock.png)

