---
comment: true
---

# Imperfect Automation {#imperfect-automation}

Looking back at the choices I made in the past at this point in time, I still can't choose a better one. All I get from the limited choices is trade-offs

There are two ways to monitor browser history. One is to use a browser plug-in and install it for each browser used. The other is not monitoring, but just reading the local data of the browser at a fixed time

I chose the second one for no special reason, just for convenience. I don't need to apply for Chrome developers, and users don't need to install plug-ins for each browser. There are troubles behind everyone's happiness. Browser history is recorded in points, which means that it is impossible to know the specific usage time of a website. So I thought that there are browser records in the automatic monitoring data, that is, as long as the browser start plus each time point of the web page, the occupied time of the web page can be calculated, but a key point was ignored, that is, **audio**. It is impossible to know which specific web page is playing audio, making all this empty talk

But standing at the fork of choice, for the earliest submission on April 16, these are just hindsight. At this time, according to the data of star-history, the closest to this project is 30 stars on April 25 (so far, this project has 617 stars). That is to say, before the **browser history** function is completed, this project is just an unknown bottom line. I really can't blame the previous choice. It's just a trade-off.

But everything is not too embarrassing, because as far as I know, similar products do not have the function of monitoring audio activities. Monitoring audio activities greatly improves the accuracy of monitoring program operation. It was considered at the beginning of the design. The cross-design of the timeline is also for this reason.

When reviewing the timeline records, I found a problem with automatic recording. During the programming process, I need to check the information while coding, so my records switch back and forth directly between the two. There seems to be no problem on the timeline, but the problem is magnified when moving the time block. Due to the scale design of the time block, it needs to accommodate one hour of content in a limited range. The time slice is too small and cannot be displayed well. **Automatic label**The idea came to my mind again. When monitoring programming-related software, it will automatically time and then close under certain conditions. Although the small fragments are lost in the view, the entire label fragment will take on the task of displaying. Now there is only one question, that is, **When will it end? **

Automatically end when inactive? Like automatic monitoring, the label timing will automatically stop if there is no activity for one minute? But if the fragment is too small, isn’t it the same as automatic monitoring? Increase the active judgment time so that subsequent activities can be included in the same activity? How much should the time be set? Too short is meaningless, and too long will cause many errors. In the end, can't users stop it by themselves? In this way, the error can be controlled, but what if they forget to stop it manually? Then again, if you want to stop it manually, can this function also be called automated label? It can start to automatically time. There is another question, how to judge the start, if I just open a software and take a look, will the automated label start directly? Can a program only correspond to one label? Why not say that a program has only one function?

So there are more and more problems, both the beginning and the end have become problems, and automation has become a bubble

Since automation has various problems, why not just record manually? It may sound counterintuitive. Since the software is used for automatic recording, it is to save the trouble of manual recording. Indeed, manual recording is troublesome, but if there is already automatic recording data, can manual recording simplify it? I have made a preliminary attempt. In the [review](/guide/review) mode to be released soon, the function of recording tags is provided while comparing the timeline

Recording and reviewing, shion is still on the road of exploration