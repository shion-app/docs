# Automatic timing

:::info
The feature is still being improved🚧
:::

## Monitor

Shows the name, total time, and corresponding color of each monitoring software

The button in the lower left corner will display the menu after floating (including "Filter program to monitor")

![](/activity/monitor_1.png)

### Filter the programs to be monitored

After the pop-up window pops up, switch to other program windows to capture the program

Finally, check the corresponding software in the list and confirm it to complete.

![](/activity/monitor_2.png)


## Activity

The application will record all programs in the listening list

Triggered actions include: **Mouse** (except mouse movement), **Keyboard**, **Audio**

When the mouse or keyboard is active, the corresponding active program is recorded as a foreground program. When switching to a different program, the sign in the foreground switches accordingly, and one recording is completed.

Sometimes you may not perform operations for a period of time, and the foreground program will automatically end its active state after **one minute**

However, some programs are still within the scope of recording even though they are not actively operating. When a program plays audio, it is considered a background program (multiple background programs can exist). When playback ends, one recording is completed

Sometimes the foreground and background states exist at the same time. In this case, a recording will be completed only when both states disappear.