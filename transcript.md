Build an AI Mobile App Design Agent with Next.js 16, MongoDB, Inngest, Gemini & Kinde

In this video, we build an AI-powered Mobile App design agent  Platform using Next.js 16, MongoDB, Prisma, Gemini AI, Inngest, and Kinde with real-time design updates and deployment

📚 Resources:
Kinde Auth: https://dub.sh/kinde-auth
AI Sdk:  https://ai-sdk.dev
UnSplash - https://unsplash.com/developers
Open Router - https://openrouter.ai

💬 GitHub Full Source Code (Give a Star ⭐)  → https://github.com/TechWithEmmaYT/XDe...

🗝️ Key Features: 
🔐 Authentication
🤖 AI-powered Mobile UI Design Agent
✍️ Generate clean mobile designs from simple prompts
🌄 Unsplash tool for real images
🖼️ Draggable mobile frame on canvas
🎨 Customizable themes
🔁 Regenerate designs instantly
📸 Export designs as PNG
📱 Pixel-perfect mobile preview
⚡ Real-time design updates
🪝 Background workflows with Inngest
🌐 Built with Next.js, MongoDB, Prisma
🎨 Styled with Tailwind CSS
🚀 Deployment

⏲️Timestamps 👇
00:00:00 -  Intro & Demo
00:06:46 - Setup
00:16:09 - Home Screen
00:49:54 -  Authentication
01:05:33 - Database (MongoDB, Prisma ORM)
01:14:14 -  Create Project & Recent Project API
01:54:39 -  Single Project API & Canvas Screen
03:29:31 - Device Frame UI
04:26:21 -  Inngest Setup & AI Generations
06:07:59 -  Update Project 
06:13:22 -  Deployment


Meet Xdesign.ai, a full stack AI mobile design agent you build and deploy where you simply write a prompt and boom, the
0:06
AI generates a clean modern mobile UI on a dragable canvas with custom team PNG
0:11
export regeneration and much more. We rebuild xdsign.ai using whisma
0:18
inest and client. Now let's dive straight into the demo. Also don't forget to subscribe and turn on
0:24
notification. On the homepage, we paste in a prompt and then hit the design. And this is going to create the project and
0:30
redirect us to the um Canva screen where you can see the AI is already generating
0:35
the screen. So, it's going to analyze and then generate the screen. So, it's currently generating and very soon we
0:41
going to see the number of screens it is going to generate um in the loading
0:47
state. So, let's wait for this to uh display. Now we can see that the AI has shown the
0:54
uh the screens that it's about to create. It's about to generate. So we have the welcome on boarding screen like
0:59
ask it to do the login and the statistics dashboard. So it's going to generate the welcome screen first before
1:06
the login and then the uh the statistics dashboard screen. So we're going to wait
1:12
for the AI to complete the generation for the welcome on boarding screen. So
1:17
we can see that we can move the um the device the frames in the canvas and you
1:24
can select each of the uh frame. So we're going to wait for the AI to complete generating this screen.
1:31
Now we should see that it has generated the welcome on boarding screen which looks very good. You can see how
1:37
beautiful it looks. You can drag it, expand it, move it around and we have
1:45
different tools here. We have um the view HTML download PNG also you can ask
1:52
the AI to regenerate and you also have the option to delete the frame. Now we
1:57
can see that it has generated the welcome the login screen. Now it's remaining the statistics dashboard. So
2:03
we're going to we're going to wait for this to complete that. So I can also select these two which has also the um
2:10
two um bar. You can also move these two anywhere around this around the canvas.
2:16
So let's just wait for the statistics dashboard to complete.
2:24
And now you can see that the AI has generated the statistics dashboard. Now you can see that it's finalizing. is
2:30
going to take a screenshot of the canvas and sell it and and set it as the project thumbnail. So once it completes,
2:38
we are going to test the AI. We're going to ask the AI to regenerate um maybe to
2:43
generate the the card to make it more bolder the font. So let's just wait for
2:49
this to finalize. We also have the option to download a PNG. And once I
2:54
click on this, this is going to download the frame um in P the PNG.
3:00
Now we can see that it has downloaded the uh the screen downloaded the frame.
3:06
Uh then you can also ask the AI to regenerate. So I'm going to ask the AI to
3:14
please um make so I've asked the AI to please make the total network card um
3:21
bold. So I'm going to click on send and this is going to submit the um prompt
3:26
and then the AI is going to start generating regenerating the update. So
3:32
we're going to wait for this to um submit then it should start generating.
3:37
Now we can see that the frame has started to regenerate. So I'm going to wait for it to um generate. So let's
3:45
just wait for this. Now we can see that it has make the um font um bold. So this
3:52
look great. So it's going to also finalize and also take a screenshot. So we can we can change team. So I can
3:58
click on the we can click here to see all the teams I have. So I can click um
4:03
Netflix team and this is going to change this from the other team with default
4:08
team selected to the Netflix team. You have um a lot of teams here. You can
4:15
select any of the team you want and this is going to match. Some of them might
4:20
not match but you can pick any of the team you want. So I'll pick I'll go back
4:25
to Netflix and I can save this if I prefer the this color or this team. I'll
4:31
click on save and this is going to update the project. Then I can ask the
4:36
uh AI agent to generate another screen. I can see design the wallet
4:43
screen. only and I'm going to click on design and
4:50
then this is going to start generating. You can see how it start to generate and a couple of seconds we're going to see
4:56
uh the the um frame appear on the on the canvas. So let's wait for this to run.
5:04
Now we should see that it has displayed the uh the frame still loading and we
5:09
can see the name. It has given the frame name which is my wallet and all the um
5:15
all the buttons here are disabled. So it's going to generate. So let's wait for this to complete. Now we can see
5:21
that the AI has um designed this already. You can see it's finalizing.
5:27
You can see the wallet. Now the AI agent is going to take a screenshot of the u
5:32
of the canvas to update the project thumbnail. So this is looking good. Now
5:37
we can see that the AI agent has done a great a great job. So we can also take a
5:44
screenshot of the canvas if you want. So we also have u we also have the dark
5:50
mode and the light mode. You can switch from um dark mode to light mode and um
5:57
you can just um go back. So the agent also has access to onsplash 2. So it can
6:03
call on splash to get images. So, we're going to look at some examples that I've
6:09
already generated. Now, we can see that the project here we created recently is
6:14
we can see the thumbnail is added. We can see some other um design that I've already done. If I click on this, we can
6:22
see how good looking the design is. You also have the um let's go down. So, I'm
6:29
going to scroll down and click on any of these. So, I'll click on this. this um project use the AI agent you use the
6:36
onsplash to to generate to get the images. We can see
6:43
um how good looking the um screen is. So head over to your next documentation and
Setup
6:48
let's install nextJS. So just copy the command right here and let's head over to the code editor. So I have code
6:56
already open and I'm just going to paste the command and then click on enter. So this should uh install next J into uh
7:05
this project. So I'm just going to wait for this to run. So I'm just click on yes
7:12
and then let's wait for this. So let's click let me type in dot here. And I'm
7:19
going to pick the recommended default and let's wait for this to install.
7:25
So NS has installed completely. So let's head over into the app and let's clear some of the files. So inside I'm going
7:31
to go into layout first and then I'm going to change in the font.
7:40
So I'll just remove all of this. I'll change the font to this. So let me
7:46
just copy this and paste it here.
7:53
And then I'm going to go copy uh the font here and just change this to class
7:59
name here.
8:13
So let me quickly import this
8:19
and the error should stop. So inside we're going to create the
8:25
route uh a group route. So I'll call this route
8:32
and then let's move in the page inside inside the route.
8:37
And then we're going to create a layout cxx.
8:47
So inside this layout, I'm just going to copy the layout. Just going to copy this function from inside uh the root layout
8:55
and paste it inside layout here. So I'm going to paste it here. And there I'm
9:01
going to change this to app layout.
9:09
Sorry, app layout.
9:17
like so. Uh that is it. So we are done with this. We're going to create a
9:22
folder. We're going to call this project. And there you see page
9:28
cx r a sce
9:34
page. So we are done with this part. Let's go ahead and set up and add shanty into the
9:42
project. So, I would head over to the documentation. Let's go back to the browser and then
9:49
I'll go to Shanti UI.
9:55
And there I'm just going to uh go into documentation docs, click on next
10:01
nextjs, and let's uh add shant in it. So, just copy this
10:10
mpn. Let's head over to the brow to the code editor and I'm going to open my
10:16
terminal and then let me paste this here and click on enter. So this is going to
10:23
uh initialize shanti into our project. So click enter yes.
10:37
So I'm just okay. Let's just click and then this is going to uh install Shanti
10:43
and dependency.
11:00
So let's add some of the shanty components. So, I'm going to clear my terminal and then a shanty UI
11:09
mp shanty add. And we're going to select some of the
11:15
components we're going to use in this project.
11:26
Wow. again.
11:32
So, let's select the components we're going to use. So, I'm going to select avatar.
11:42
So I'm going to select button card
11:47
uh dialog
11:55
impute impute group. I think that's all. Let me just select
12:08
sona. Uh I have spinner.
12:15
I think that's all. So I click on enter. So this is going to add the component
12:20
into uh into our URL folder.
12:26
So let's head over to documentation and let's add uh the theme or dark mode I
12:32
mean. So click on dark mode then click on next. Then we need to install this.
12:39
So, I'm just going to copy this and let's head over to the code.
12:47
So, let's make sure this is installing. So, I'm just going to paste this. So, this is going to start installing the
12:53
next team. And while this is installing, let's go back to the documentation
12:59
and let's copy uh this. So, I'm just going to copy this. So we're going to create a file called team provider and
13:06
we're going to add it in the root in the layout. So I'll just go back to the code.
13:13
So uh let me close this and let's create a team inside the
13:21
component folder. team provider.
13:28
TXX. So, I'm going to paste this inside here.
13:38
And then once that is done, let's head over to the documentation again.
13:44
And I'm going to copy this whole parts here.
13:53
So once you copy, so let's head over into the layout. And here I'm just going
13:58
to remove this and let's paste in the the team provider. Also add the toaster
14:05
here. We're going to import that from summer from UI toast. So I'm going to
14:11
import the team from team provider component provider. Then the poster
14:18
we're going to import that from UI sooner.
14:24
So save this and also we're going to also uh inside the global CSS we going
14:31
to uh change the team. So I'll head over to uh let's head over to the browser and
14:39
let's go to here. We just come over to this website.
14:47
Then head over to editor team. Then click on this. And then we're going to select uh the CL style.
14:57
Can click here to copy the code. So I'll just copy this. So copy
15:05
everything here. And then let's head over to the editor.
15:12
So I'm going to change everything. So let me remove this and paste it.
15:21
So let's also remove the uh let's remove this two
15:29
and make sure everything is saved.
15:40
So let's run the server to make sure everything is working fine. npm rundev
15:56
and we can see that it's working fine. We can see the share button here and this is taking up the cloud. So that's
16:03
it. So let's uh go ahead and uh work on the home screen. So, let's go into the
Home Screen
16:11
app folder uh inside the route um page and let's remove everything here. So,
16:17
I'm just going to remove all of this and there is going to remove
16:33
like this. And so I remove the button and the image.
16:38
And let's create a a common folder inside the route.
16:47
And then we're going to create the header txx
16:54
and also uh the landing. I'll just call it landing uh section
17:01
or you can call it home or main section. So I just call it anything now. CXs.
17:07
Yeah. I'm going to say C
17:26
like this. So let's copy this uh inside the page.txs. I'm just going to pass that inside here
17:36
and let's import this
17:45
and then inside the landing section. Okay, let's add a class name here.
17:56
Give this minimum height of screen.
18:03
Then uh let's say uh
18:08
let's close this. Let's give this full
18:17
like this. Then I'm going to create a div. Yeah.
18:23
And then we're going to call the header component here. So I'm just going to comment it out.
18:29
We're going to implement that now. So let's just have class name
18:35
flex flex column
18:41
by this. So uh we're going to a div here.
18:49
Let's give this a class name of a relative
18:56
overflow uh overflow hidden.
19:03
And then I'm going to give this a pattern of two uh 28.
19:08
Then we should have a def let's give this a class name
19:18
uh maximum width 6L MX uh MS auto flex and flex column
19:33
and then items center justify enter.
19:42
Then here we're going to create a div.
19:49
And let's give this uh class name
19:59
say space uh space white.
20:05
And if you have the H1 uh let's give this a class name center
20:14
text center font.
20:22
Let's give this font bold semi bold
20:29
and then text 4 XL
20:37
and then we're going to give this tracking and tight.
20:44
Let's also uh so on on last screen we should have text
20:49
5 XL. So here I'm just going to paste this
20:55
design mobile app. Then uh text primary in minutes
21:01
that should have the paragraph. Let's give this a class name
21:07
of MX auto. I'm going to give this maximum width
21:14
so to make it so it doesn't break maximum width
21:20
to XL text center
21:25
or we can wrap this instead of P tag we can wrap this in a div if you want so I
21:31
leave it like this uh then we can have font medium Um,
21:40
text program
21:48
and then text muted like this
21:55
test for then we're going to have a leading
22:01
relax.
22:07
Then on smaller on last, we're going to have text large.
22:13
And then I'm going to paste this. And then below here, we're going to have
22:18
a div that wraps the um pump input. So I'm just going to give this a class name
22:27
uh flex uh wful
22:32
the maximum width uh 3 XL
22:39
3 XL and then I'm going to also have flex
22:45
column item Enter
22:54
gap it's relative and let's give an index of 50 like this
23:02
and there we're going to have a div
23:09
and this is going to wrap the AI prompts impute
23:16
which we're going to create. So just comment this out for now.
23:22
Let's give this a class name
23:28
withful like this. So let's quickly create a
23:33
prompt impute. So I'm just going to unccomment this out and then I'm going
23:39
to make this reusable. So I'm going to add in a class name here.
23:46
I'm going to say a wink two wing primary
23:52
rounded 3x.
23:59
Then I'm going to uh let's add prompts text.
24:11
So we're going to create a state here. We're going to call this prompt text.
24:19
So let's quickly create a state here. So I change this to uh use client
24:29
constant use state
24:36
of type string. And here we have the prompt text.
24:44
Set prompt text here
24:53
like this. So we're going to say set prompt text.
25:01
It equals to set prompt text.
25:08
And you can pass in for now we say it's loading to force
25:17
and you can so pass in onsubmit for now we're going to just set this to
25:25
like this. So let's go into the component folder and let's create a prompt
25:32
impute cx.
25:39
Let's change this to prompt imputi prompt impute.
25:46
So I'll say
25:51
prompt impute. Let's import this inside the uh landing uh section.
26:07
Let's head over to prompt imput. So let's write the types here. I'm going
26:12
to change this to use clients.
26:19
And there we're going to have the interface here. So we have the prompt text set prompt test load in class name
26:25
and uh on submit I'm going to structure this and pass the prompt type
26:32
then get the uh prompts text then set prompts text
26:39
then it's loading we get it's loading then the class name to add custom
26:47
classes to uh style to the prompt impute. Then we have the unsubmit and I'm going
26:54
to also add hide hide submit button because we're going to use this inside
26:59
the canvas. So I'm going to add hide submit button
27:06
and this is going to be optional boolean
27:13
of type boole and set the default to false.
27:21
So uh let's add comma there. So here we're going to give this a class name
27:31
a class name of BG background
27:37
and we're going to import group fun UI
27:47
and there we're going to pass in a custom CSS custom class. So, I'm going
27:53
to use CN CN here.
27:58
And let's just import this from uh YouTube. Then I'm going to uh let's give
28:05
this minimum height uh 172
28:11
pixel. Uh let's give this uh
28:19
RPG background too.
28:25
like this. I think that is all we've added. Rounded
28:33
rounded 3 XL. We added this in the landing section.
28:40
So, I think I can remove it here. We don't need it here.
28:47
And then we can pass in the class name.
28:53
If there's a class name, we pass in the class name.
28:58
And then here we're going to have the impute group text area. So impute group
29:07
uh text area.
29:13
So import that. It should be self closing tag. Then here
29:18
we can have a class name our text base service and py 2.5
29:30
and then we can have a placeholder. I want to design
29:37
um an app that sorry
29:42
that then we can pass in the value to the prompt uh text
29:49
then unchange we can get the event
29:56
and set uh prompt uh text to events events tag to get the value
30:08
like this. So below here we going to have um some of the actions where this
30:14
submit button. So I'm going to call this impute uh group action add on sorry.
30:25
So we're going to have a line I'm going to say um block and
30:33
Let's give this a class name flex uh item or let's just let's say
30:42
item center justify
30:48
and and we're going to have the submit button. So, we're going to say uh we're
30:55
going to check if not hide uh submit button.
31:06
Then we're going to show uh the hand impute group uh button. So, let's import
31:12
that impute group button.
31:18
So let's give this uh variance.
31:24
Okay, let's say yeah, let's say varants default.
31:32
Then let's give it a class name. Uh um
31:37
let's leave the class name. Let's give the size small.
31:44
And let's have disabled. We're going to have uh if there's no prompt
31:52
text uh sorry dot trim
31:58
or is no like this. And then we're going to have the
32:04
unsubmit here on click sorry on click.
32:12
We're going to call unsubmit.
32:20
I think unsubmit is uh optional. So that's what we have to do like this.
32:26
Then here we can say if is loading
32:34
then we're going to show a spinner here.
32:43
else. We just going to we're going to return
32:51
the sign and then an icon corner icon
33:01
down a left icon. SQ is a class name of uh
33:09
size four like this. So import spinner from UI uh spinner.
33:17
And I think that is it. So let's remove this. Yeah.
33:23
So let's head let's make sure we save this and let's head over to the landing section and the error should stop.
33:30
So, so below here we're going to have a div. Uh,
33:39
then we're going to, so this div is going to hold the suggestion. So, I'm going to paste the suggestion list here.
33:48
So, this is going to be list of suggestion. You can copy that from the
33:53
GitHub. So, this is going to be the value which is the prompt. And this is going to be
33:59
the label. So, I'm going to collapse this. And once we scroll down to where we have the div, we're going to go ahead
34:06
and and get this in suggestion um component. So, if you head over to AI
34:12
elements and just head over to the AI SDK dev
34:18
elements, then you can see suggestion. So, these are the suggestion. We're
34:24
going to uh copy the code and you see how to uh make use of it. So I'll scroll
34:31
down here. You can you can add this manually or you can see the entire code here.
34:40
I think this is okay. I'll copy this manually so I can add it into uh okay this is having so let's just add
34:47
it like this. So, I'll copy this and then let's head over into to code
34:54
editor and let's just open the terminal.
35:01
So, I'll open a new terminal and let's add this inside here.
35:09
So, paste this and let's click on enter. So this should add uh the suggestion inside the uh AI elements uh for us.
35:20
So this has installed the suggestion component. So we can see that inside
35:28
here you can see AI element suggestion and you can see it here. So uh let's use
35:36
inside the landing page uh section. So collapse. So let's uh import suggestion
35:46
from AI elements. Uh let's collapse this. Let's look through the suggestion list
35:55
dot map
36:00
and then let's get suggestion from AI elements.
36:08
And here we can pass in the key. I'm going to say key is going to be close to
36:13
s label and then suggestion is going to be u s
36:20
label. Okay. Now if you have a class name I'll just say text uh small extra small
36:31
then I'm going to say height 7 then px 2.5
36:38
then pt one and then I'm going to uh have on click
36:45
here for now I'm just going to uh set it like this we're going to
36:51
create a function for that let's just pass in the icon here
36:56
icon and then expand for the text for the label we say x
37:03
label like this uh then let's create the uh method so
37:10
I'll come over here and let's create the method so this is going to be handle suggestion click we're going to pass the
37:17
value then set it to the um prompt um text so just copy this and let's go back
37:23
here to the suggestion. Sorry, here and then we can just say pass this
37:32
let's say x dot value
37:37
like this. Then here we're going to have come down here we're going to set the
37:42
brow u a background effect. So I'm going to say D if I'll have a class name
37:49
of absolute
37:54
absolute. So let's make sure we added relative here.
38:01
Okay, we added relative here.
38:06
So we're going to also have minus translate uh x 1 / 2
38:16
and then we're going to also have left 1 / 2. Our width we're going to give
38:23
this 5,000 uh pixel. Then we're going to have
38:28
height 3,000 uh pixel. We're going to also have top
38:37
80% and then we're going to have minus Z
38:42
like this. So inside here I'm going to paste the
38:51
going to paste this. So, we're going to have div translate absolute bottom
38:56
bottom 100% and 300 pixel left. And then we're going to have height, width, then
39:03
opacity. Likewise, for the second one, we're going to have
39:08
absolute margin of 2.5 with um box shadow. We copy this from
39:16
the uh GitHub. So once we are done with this we going
39:22
to uh going to have a different div here. We're going to list the recent project.
39:28
For now I'm just going to create a div when we are when we've integrated or created the endpoint for that we're
39:34
going to imple come back and implement that. So so let's create a div here.
39:41
Uh and then we're going to say class name
39:48
waitful and let's give this padding wide then and then we can have a div.
39:56
We're going to have class name u max auto
40:03
max or weight 3x.
40:08
And there we're just going to have um a div here with H1.
40:16
I'm just going to call this a recent project.
40:25
And let's give this H1 a class name. And we're going to say font
40:30
medium then text excel
40:38
then tracking tight
40:46
like this. So let's check this out. Uh let's check this out in the browser.
40:59
So let's wait for this to load
41:06
and then we can see the effect. You can see that is looking good. So just remain
41:11
the heading. We're going to go and work on the heading. I think this is cooling
41:17
like this. So, so let's go and then complete the
41:24
heading part. So, I'll just comment this here
41:30
and let's create a component for this. So, okay, we have this file here. So,
41:36
let's say FCE header
41:45
and let me import this
41:51
So inside the header component. So let's make this use client.
41:57
So change this to use clients. Then uh inside the header I'm going to import
42:03
team. So let's import team from next team. Then we have dark. If dark t is team is
42:10
equals to dark. Then we set this is going to be set to three of us. So uh let's have a class name here.
42:20
And then we're going to say this to be sticky
42:28
top zero right zero
42:34
and then let's give this set 30 like this. So just give this left 02.
42:44
So let's have a header. Yeah, we give this a class name of height 16
42:54
border B button. Then we're going to give this BG background.
43:00
Uh then I think that's all. So let's um have a div inside the header element.
43:09
We have a class name here. So wait for I'm going to give this a maximum width
43:15
of 6 XL and then MX auto sorry MX auto
43:26
then we're going to say flex item center and justify between.
43:34
So here we're going to have the logo component. So we're going to create that.
43:40
So, let's close this. Let's quickly create the logo component. So, I'll go into my component folder and here I'm
43:48
just going to create a file. I'll call it logo.tx. And let's say
43:57
change this to logo. Then we're going to just have the link.
44:03
So, let's import link from our next link.
44:09
Let me import that here. Import link
44:15
from next link.
44:24
And here we're going to say arrow ref
44:29
like this. And let's change this to link.
44:35
So let's give this a class name of for flex one flex and then item center
44:50
and let's give this cap
44:56
and then text to Excel and inside here I'm just going to say uh
45:03
span and in block uh line block extra bold text primary x. Then the same thing
45:10
for uh uh design. So save this and let's copy this. Let's
45:17
head over to uh the header component and let's import
45:22
this. So let's have a div here
45:30
and let's just give it flex one.
45:36
So it's going to be uh I'll change this to link
45:44
um then change this to link. So let's just import link from uh next
45:51
link then set to
45:56
to like this. Sorry not to ref.
46:03
So below this div we're going to have a div
46:08
class name flex uh flex one item center
46:16
item center
46:22
uh justify and gap three.
46:29
So yeah we're going to have a button. to import button from our URI button
46:37
and there we're going to set the variance to outline
46:45
and then size to icon.
46:53
Then we can say on click
46:59
then this is going to be set team.
47:04
Then if it's dark sorry if it's dark set to lights
47:13
else dark.
47:19
So let's give the button a class name uh say relative
47:26
rounded full uh height
47:33
or with it like this. Then we can uh inside the button we are going to have
47:40
the icon. So I will import song icon
47:46
for lucy react and let's give this a class name absolute
47:54
height five width five and then we are going to say transition.
48:03
So let's copy this
48:09
uh let's see CN. So import
48:17
and then we're going to say comma
48:22
we going to say if it's dark then we say scale
48:30
100 else scale zero.
48:36
Let's duplicate the icon and let's import moon icon.
48:43
from Lucy React. And there we have the same thing, but
48:49
here we're going to say if a stack we are going to set this to uh
48:55
to zero and there to 100. So below this button we have another
49:01
button which will cost sign in. So save this and let's also add padding
49:08
Y for here. So save this and let's test it out. Also
49:15
make sure you add hidden item center justify center and also mid flex here
49:22
cap it. So this is going to just center uh the the item.
49:29
So uh so save this and let's head over to the browser
49:36
and then we should be able to see uh the uh design. This is looking good.
49:47
So, let's go ahead and work on the sign in authentication for the application.
Authentication
49:54
So, we're going to use Kindle for authentication. So, just head over to kindo.com
49:59
and we can sign up. So, I already signed up to account. Then, let's head over to
50:04
So, I already signed up. I already lo in. So, once you log in, you'll be brought to this page.
50:10
uh you can create a new app. So I'll just come over here. I'll click on add
50:15
application and then this going to load. So I'm just going to select the back end service.
50:22
I'll just give this a name. So I'll just say X design and then I'm going to click on save.
50:30
And then this is going to ask me uh a quick start. Select my technology. So I'm going to select SJX.
50:38
Then I think once I click on this okay I click on yes and save
50:45
then I can see start kit or existing code base. So I'll click on existence
50:52
code base and then it should um give me all of the uh EMV. So first of all I
50:59
need to install we need to install a kind uh package. So just copy this and
51:05
let's head over to the documentation. I'll open my terminal. I'll cancel all
51:12
of this. I'll paste this
51:17
and then click on this to install.
51:24
Uh let's wait for this to install. So while this is installing, let's head over to Kindle again and let's uh copy
51:33
the EMV. So just copy all of this and then once you copy this we need to also
51:38
create uh we need to also create the endpoint. So I'll just copy that. Let's head over to the uh code and let's open
51:47
this. So I'll close this create uh env file here.
51:55
And let's paste this inside here. So I'm just going to change this to uh local
52:00
3000. Uh let's also go back to the documentation again and let's copy this.
52:08
So we're going to create API kindle routtx.
52:13
So copy this and also copy this and let's head over to the code and let's go
52:20
into uh the routes API app folder. Let's create API
52:28
API class. I'm going to change this to CX here. Uh, I think we made a mistake here. So,
52:35
I just I'll just change this to route.x.
52:41
Okay, let me remove this.
52:47
I'll say uh route.tx. Sorry,
52:54
tx. And then I'm going to paste it here
53:00
just like this. So that's it for adding uh kind into our project. So make sure
53:05
the server is running. So make sure it has installed the package package. So
53:10
this has completely installed. So now we can use um kind in our project. So
53:15
before we do that, let's head over to the browser. Uh let's um look at how to protect the
53:22
rout. So uh to add uh sign up and sign in button, we can just use the login
53:28
link. So we can use that in the uh header component. So let's just quickly
53:34
copy this before we go ahead and look at how to protect the rout. So I will come
53:40
into uh app routes common header and scroll
53:45
down to where we have this button and then I'm going to copy this and just pass it inside here.
53:57
and let me import log link from uh kind uh components. So just save that. So
54:05
let's head over to the browser again. And now let's go to view next year
54:12
documentation. And there we can scroll down to this is
54:17
the app router. We can scroll down to protected rout. We can see that here. Uh
54:23
if I scroll up, you can see set up middleware in XJS. So we can see how to
54:29
add uh create a middleware tx file and then add this to root. I want to show
54:35
okay. Yeah, we can see how to add um public parts here. So I'll just copy this.
54:41
Copy this one. Okay. We also have the one that has um is returning page. So let's say let's
54:50
just copy this one and let's head over to the code.
54:55
So instead of creating a middleware, we're going to create proxy
55:02
tx here. So next middleware has changed to popsy.tx. No more you going to longer
55:09
use middleware tx. So it's going to rename as popsy.tx.
55:14
So we're going to paste this inside here. And so I'm just going to say public part slash then we can say is
55:23
return is return
55:30
to current uh page true just like this. So now we've added the middleware. Now
55:36
our page is protected. So uh the public part we have here is the uh page.tx. Or
55:43
if we have uh if we create a single page like uh sorry
55:50
I think the project page we're going to create
55:55
this inside I project ID then move this page inside the ID like this. So now
56:02
this is protected only this is public just like that. So we've added this. So
56:08
let's head over to the header and then once we log in we need to display um the
56:15
avatar of the user and the name of the user. So let me make sure all of this is
56:20
save and so let's quickly try and then log in
56:27
now. So I'm just going to head over to the browser. So my server is running and you can see the load. So let's quickly
56:34
sign in. Click on the sign in button to sign in. So, I'm going to click on this sign in now.
56:41
And this is going to take me to a Kindle website app. You can see my um my
56:48
business name. If you've not created a business name, uh this is going to ask you to create a business name. So, I
56:55
already have that. You can see the name of the business. And also, uh make sure
57:01
you add you come over here and um I think
57:07
You should have and set call back URL. If you come over to your details, you
57:15
can see I I have the callback URL. Yeah.
57:20
So once you do that, just save that. Yeah. So let's head over to the sign in.
57:25
You can see. So I'm going to click on create an account. And I'm just going to give this a name. So, let's just pick uh
57:35
um let's just pick this one. Okay, I think uh I want to also support
57:43
uh Google. So, I'm going to click go back to the to kind of app. So, I'm
57:51
going to click on authentication and I'm going to click on Google. Then,
57:57
I'm going to click on save. Uh if I reload this, you should be able
58:04
to see Google continue with Google. So I click on create an account, then
58:10
continue with Google. So now I've um I've selected an a Google account and it
58:15
has redirected me to the local 3000. So the reason we are seeing sign in here is
58:21
because we're not checking if the user is signed in. So if you head over to uh
58:27
NexJS app u in kind documentation you can go over to uh kind of data for
58:35
client and if you scroll down here we can see how to get the check if user is
58:41
authenticated and how to get the user. So we can copy this and let's head over
58:47
to uh the code base. Uh let's go into header and there we can uh let's just
58:55
import this here as a user and let's import use kind
59:02
browser client. Sorry, let me import this.
59:09
This is not coming up. So say uh import uh let me check this in the document. So
59:15
now I've imported it. You can see kind dress and now we have the user uh object
59:23
here. If you hover it, you can see ID, email, given name, family name, and picture. So, we're going to scroll down
59:29
to where we have this login button. We So, let me close
59:34
this. I'll say if user then we can say else
59:42
move the login um button inside here. Right here we're going to get a drop
59:47
down component. So say drop down sorry drop
59:57
down we didn't install the drop down component function UI.
1:00:06
So let me quickly import um install that. So I'm going to cancel the server
1:00:11
mpx shanty C and add a drop
1:00:19
down drop-own menu. So MPH add dropown menu.
1:00:26
So click enter. So this is going to uh add the dropown menu for us. So let's
1:00:32
see. So it's loading. So I'm going to wait
1:00:37
for this to uh load. So now this has installed. So let's make
1:00:45
sure the server is running. Close this and let's import
1:00:50
dropown menu. So let me import this from UI
1:00:56
components. Then inside here we're going to have the drop down
1:01:03
dropown menu trigger from UI components.
1:01:10
Uh let's give this uh class name.
1:01:16
Sorry, let's close this first. And there inside the drop down trigger,
1:01:22
we're going to have avatar component. So I'm going to just paste that here. And
1:01:28
let me import the avatar from component UI. And then let's also import avatar
1:01:35
image from uh let's update this. And also the fallback avatar fallback. So we
1:01:43
have the avatar component class name H with it shrink and round. Then we have
1:01:51
the avatar image. If there's no image, so it fall back to you we got the user
1:01:56
given name and then also the family name. Now below here we're going to get
1:02:02
a drop-own menu content.
1:02:09
So I'll give this a class name. I'll say 56.
1:02:15
And then we're going to say align and
1:02:22
like this. So yeah, we can see a drop down
1:02:28
drop down menu uh label.
1:02:34
I'll just say my account. Uh then we can also have the dropown
1:02:40
menu separator. And lastly, we have the drop-own menu
1:02:50
uh menu item. And then we're going to import log out
1:02:56
link from uh from kind uh is it? Yeah,
1:03:02
from kinds component. So we're going to import that. And let's give this a class
1:03:08
name withful flex item center.
1:03:17
So here we're going to have uh the logout icon.
1:03:24
Let's give this a class name
1:03:29
a size four and then we can say log out your
1:03:37
license. So once the user uh logs in we going to see the user uh image or the
1:03:45
name. So I think that that is it. We going to also uh also do a check here
1:03:54
uh this recent project. So once the user is logged in or log out we not going to
1:04:00
show uh we're going to hide the recent project but once it says login is you're going to see a recent project. So, we're
1:04:08
going to come back to this once we integrate the endpoint. So, let's test this out. So, make sure the server is
1:04:13
running and let's head over to the browser.
1:04:20
So, I load local 3000.
1:04:26
Let me wait for this. So, now we can see that I'm logged in.
1:04:32
Yeah. And you can see my account and the log out.
1:04:37
This is not looking good. So, but if I try to log out now,
1:04:46
this is going to redirect me to uh kind and you can see that this show is signed
1:04:51
in here. So, uh if I click on sign in, this should take me to kind uh to sign
1:04:58
in page. Then I can log in again. So now this is it. So I've lo into the
1:05:04
account and we can see this. So I fix this. Make sure you import the uh
1:05:09
dropown menu from the UI component. So
1:05:15
let's head over to so make sure you import this component
1:05:21
from uh your component UI dropown menu. So I fixed the issue. So I think we are
1:05:27
done with authentication. And so let's head over to set up our database MongoDB and Prisma.
Database (MongoDB, Prisma ORM)
1:05:33
So let's set up MongoDB uh database. So uh you can search for MongoDB at class
1:05:39
and just click on the uh cloud register. So I already click on this. So
1:05:46
I'm going to quickly sign in to the account. So let's create a project. So I'm going to click on new project. I'll
1:05:54
give this a name. So I'll call this X design and then let's click on next
1:06:02
and let's create project.
1:06:11
So uh let's create the cluster. So let's wait for the project to load. So click on create cluster
1:06:20
and then I'm going to choose the uh let's wait for this to load. So select
1:06:27
the free option here and leave everything the same way it is. Then click on create deployment.
1:06:34
So let me quickly do this and then we're going to okay let's wait
1:06:42
for the cluster to create. So I will just quickly copy the password and the
1:06:47
username. So click on create database user. Then choose connection string.
1:06:53
Then uh let's select MongoDB for VS code. And let's copy this like this.
1:07:01
Now click on done. So let's head over to uh database and network access.
1:07:09
So, I'm going to click on uh let's click on net IP IP address
1:07:20
or network access. Yeah, let's click on add IP address. Then click on allow access from anywhere. Then click on
1:07:27
confirm. Then this should uh uh it should add that. So let's head
1:07:33
over to the code base and let's add this. So going to the EMV and we have database
1:07:40
URL. So just paste this here. I'm going to give this X design
1:07:46
uh DB like this. So now let's install um Prisma into our
1:07:52
project. I'll cancel the server and then let's say MP um install
1:07:58
Prisma um dev dependency.
1:08:06
So I'm going to be installing uh the version that works with MongoDB which is
1:08:12
6 6.190.
1:08:18
So make sure you just click on install and this is going to uh install Prisma into our project. So let's wait for this
1:08:26
to in Prisma has fully installed. Now let's install Prisma client. We're going
1:08:32
to use the same version and also we need to install EMV. I'm going to click on
1:08:37
enter. So this is going to install Prisma client and also EMV. Now let's wait for this to install both
1:08:45
of them. So it has installed completely. Let me clear the terminal and let's write MPX Prisma in it. So this is going
1:08:54
to initialize Prisma and it's going to create the schema folder.
1:09:00
So let's wait for this.
1:09:09
So we've initialized Prisma and you can see we have the Prisma folder and the schema and also the config. So in the
1:09:15
config we're going to import. Okay, we already have the MV config here. So
1:09:21
let's go into the schema folder and let's change this to use MongoDB instead
1:09:26
of postrisql.
1:09:32
Just like this. And then let's define the schema. I mean the model. It's a
1:09:38
model. We're going to have the project model.
1:09:43
And then the project model is going to have the ID. The ID I'm going to paste that here. And then we can see that
1:09:50
we're using ID string ID. And we're mapping ID. We can just ID is what is
1:09:56
given from MongoDB. Then we have the DBO object id. So we going to also pass in
1:10:04
the user ID from kind. We're going to set that to string.
1:10:10
Then we have the name of the project which is going to be of type string.
1:10:16
Then we also have the team which is optional and string. So I'm
1:10:21
going to say string and then optional. Then we have frames
1:10:29
which is um frames frame um list of frame. So we're going to create the model for frame and say
1:10:38
frame and then we're going to also use the same ID format. Then here we're going to
1:10:44
have the title of the frame which is of type string. Then we have the uh HTML content
1:10:52
which is of type string. And then we have the project ID which is
1:10:59
going to be of type string. And we're going to write project
1:11:04
of type of project and we are writing a relation
1:11:09
field. We're going to set the field to project ID. Sorry
1:11:15
to project ID. And we're going to reference
1:11:22
the ID. Then we have the created art
1:11:29
of date time
1:11:34
date time we set default to now. Then we have the updated at
1:11:42
which is going to be date time at sorry at updated art. We can copy
1:11:50
this and also paste it here too. Oh, we also forgot the thumbnail
1:12:00
which is of type string and also optional. So we are done with
1:12:06
the models. So let's generate the let's click um open the terminal and let
1:12:12
me clear this. Let's say MPX Prisma generate
1:12:22
and this is going to generate the folder. We can see the generator Prisma in the li. So it's going to create the
1:12:29
folder right inside the li folder. So let's wait for this to generate. then we
1:12:34
can push the schema to the uh DB.
1:12:42
So let's wait for this. So it has generated the uh Prisma, you can see the
1:12:48
Prisma folder and also the models here. So let's push this to uh say MPX DB
1:12:55
push. So that's complete. So we've
1:13:01
successfully created the project collection and frame collection. Now we can we going to create a file here.
1:13:08
We're going to call that prisma tx here.
1:13:15
And here I think I made a mistake here.
1:13:20
And if you go back to the documentation for JS PrismanJS, we can see um to use Prisma in our
1:13:28
project, we're going to you're going to have to create a Prisma TS and then we're going to paste this inside there.
1:13:35
So just copy this, but we're going to skip the Prisma adapter for Postgress.
1:13:40
So just copy that and head over to the code and we're going to paste that
1:13:46
inside the Prisma. Yes, I'll close this and I'll paste it. So, I've made changes to my so I've removed the uh PG adapter
1:13:56
and just like this. Now, we can use Prisma directly from this uh leave
1:14:02
Prisma.ts inside the route sorry inside the routts. So, that's it for the setup.
1:14:09
So, let's go ahead and work on the creating project. So let's create the
Create Project & Recent Project API
1:14:15
route for creating a project. So inside the API folder we're going to create the
1:14:20
folder called project. Then inside the project we're going to create route.tx.
1:14:28
And then inside we're going to create the endpoint we're going to use to create project. So inside the RA folder
1:14:34
and the landing page when the user type in a prompt inside the prompt impute and
1:14:40
submit we going to send that to the pro project route endpoint. So this is going
1:14:47
to create the project for the user. So let's go into the route and let's implement that. So let's say export
1:14:53
constant sorry export async function and this is going to be a post request
1:15:05
like this. Then we going to use try catch here. So let me remove this. Then
1:15:12
below inside here we are going to sorry. So let me remove all of this.
1:15:21
So we're going to first of all get the prompt from the user. There is a user pro to request
1:15:29
JSON and then we need to check if a user is
1:15:35
authenticated. So we're going to use that from let me import let me get prompt from the request um body. Then
1:15:42
we're going to say constant section is equals to await
1:15:50
get kind of server action server session
1:15:55
and then we're going to get the user. a user is equals to await session
1:16:02
dot get user just like so we're going to check if not
1:16:09
user then we can throw an error I'll say true new error
1:16:18
I'll say unauthorized
1:16:28
unauthorized then we can say if um not if there's no prompt then we can also uh
1:16:36
throw new error or missing um prompt sorry
1:16:43
just like this now we can get the user ID it's a user
1:16:50
ID is equals to user dot id just like this. Now we need to we need to create a
1:16:58
project say constant project is equals to await prisma. So import
1:17:05
prisma from lip uh prisma.
1:17:13
Sorry this should be prisma small letter. So let me quickly import that here.
1:17:20
Prisma from the
1:17:35
just like this. And then we're going to say project
1:17:41
create. And then we're going to pass in the user
1:17:46
ID. And then we need to pass in the name of the uh of the project. So what we're
1:17:53
going to do, we're going to use we're going to have to generate the project name. So I say project name
1:18:01
is equals to we're going to create a method. We're going to call that generate
1:18:08
uh sorry generate project name. and we're going to pass in the prompt
1:18:14
here. So let's comment this out and we're going to go ahead and create this. So this is going to be an action. We're
1:18:21
going to create inside the we're going to create an action folder here and do that. So let's just complete this flow
1:18:27
and then we're going to go ahead and create the the method. So um so we're
1:18:35
going to return the project. So let's return uh return the project. Let's
1:18:41
import next response here from next server. Then also we're going to let's
1:18:47
just consider the log the error as error occurred
1:18:58
and then I'm going to pass in the error. Yeah, then we can just return next
1:19:04
response sorry uh next response.json
1:19:09
JSON error
1:19:15
failed to create project
1:19:20
and then and there we're going to return we're
1:19:27
going to pass in the status code which is status 500
1:19:33
like this. So let's go and set up the generate project name. So let's create
1:19:38
an action here. So I'm going to collapse all of this. So inside the inside the uh app folder, let's create the folder. We
1:19:46
say action and inside here I'm going to just say action.tx.
1:19:53
And here we're going to use set to use server. So we're going to install a package.
1:19:59
We're going to install the AI SDK from vis. And this is going to help us to uh
1:20:06
to use different AI model like Google or open AI. So let's install that. And we
1:20:12
are going to also install um open router. So let's uh install. So I'm
1:20:18
going to clear my terminal.
1:20:23
It's a mpm install AI. And then we're going to also install the
1:20:30
AI SDK for um open world. So let's just paste this here. And then let's install
1:20:37
both of them. So let's wait for this to install. So this has installed
1:20:43
completely. Now we need to go and create an API key for open world type. So open
1:20:48
router allows us to use various AI models like Google and stuff together
1:20:54
with the AI SDK. So let's head over to a browser and let's go to open router. So
1:21:02
just search for open router here
1:21:07
and then you can create your API key. So you can see the unify interface for LLM.
1:21:14
So I'm going to let's wait for this. So I'm already
1:21:20
logged in. So I'm just going to go to key. So just sign up. And once you sign up, you should be able to click this and
1:21:27
go to uh the key. So you can click here to create an API key. So I'll just give this a name as design.
1:21:35
And I'll leave everything like this and click on create. And I'm going to copy this API key. And then I'll go over to
1:21:43
my uh browse to my code editor. And um
1:21:49
I'll go into the EMV. I'm going to paste it here. So I'll call
1:21:54
this open router API key.
1:22:02
I'll paste the API key here. So now we need to create inside the li I'll create
1:22:08
open router configure tx
1:22:14
and then we're so let's import open router and use create open router open
1:22:19
router from ak provider. So say export constant
1:22:26
open router is equals to create
1:22:32
open router and let's pass in the API key sorry API key
1:22:39
like this it's a process sorry process
1:22:45
envir
1:22:51
So now we have the open router set up. So if we go over to the code to the browser, we are going to look for a
1:22:59
model we going to use. So I'll cancel all of this and click here to go to models and you can find different
1:23:07
modules from open router. So for AI SDK you can search for AI
1:23:14
SDK by V
1:23:22
and you can see we had to install AI from AI SDK and also we also have AI
1:23:29
gateway from V too similar to open router we going to also use this too. So
1:23:36
you can get your API key to here, but this require you to pay to use it. So
1:23:42
I'm going to just stick with um we're going to use open router for now. So I'm going to use
1:23:49
Google Gemini. So we have Gemini 2.5 flash. Uh we have
1:23:57
the 2.5 light. Yeah. So it depends on if I use uh
1:24:03
so open has read limiting. So it depends if you use any API any of this model and
1:24:09
you don't have any queries it might limit the amount of generation you can use uh you can generate so let's just
1:24:16
head back to the um code and now before set up the open router so
1:24:22
let's go into action.tx X. So I'll just create the method here. So generate
1:24:28
project name prompts and let's use try catch here.
1:24:44
And then inside here we're going to say constant
1:24:50
is equals to our weight. And then we can use generate text from AI.
1:24:58
So let me import that here. Import
1:25:07
generate text
1:25:12
from AI like this. So now we can use this to
1:25:20
generate the title. So we need to pass in the model here and this we can get
1:25:25
that from the open router which we define the lip. Sorry for let's import
1:25:31
this from the lip open router. Then we can say
1:25:37
chart and there we can we can provide the model. So, I'm guessing Google/Gemini
1:25:47
at 2.5 flash
1:25:54
just like this. I think use lights for this. And then we need to also pass the system
1:26:00
prompt. And we can also pass in the prompt
1:26:15
just like this and here we can get the text.
1:26:23
Yeah. So let's pass in the system prompts here. So I've reset the system
1:26:30
very short five just like this and then we can see
1:26:36
console dialog error and then let's also return the
1:26:42
text it's a text dot stream
1:26:49
uh sorry
1:26:55
if there's no response. We just return untitled
1:27:02
projects. And here we can also do the same thing
1:27:10
return sorry return on title project just like
1:27:18
this. So um we are done with this. So let's head over to the API project route
1:27:26
and now we can import this. So let's import generate uh name
1:27:33
and we can pass this here project name just like this. So we've
1:27:41
able to complete uh the complete the generate project name function. Now we
1:27:47
also have the Prisma project was create. So we're going to return the response.
1:27:53
So there's one thing left. Once the user once the project is created, we need to generate the uh the design for the user.
1:28:02
So what we going to do? We are going to move this to uh a background service. So
1:28:09
we're going to be using inest for that. So once the user provide type in a prompt and send it to the back end the
1:28:15
back end creates the project. Now instead of blocking the user and creating a project
1:28:21
generating a project with um AI we are going to move those things we're going to move the generation to a background
1:28:26
service which inest also provide us. We're going to trigger that. So I'm going to say uh we're going to u move
1:28:33
we're going to trigger sorry we're going to trigger the inest function
1:28:39
which is a background service that allows us to uh run to run background
1:28:45
service yeah for our project. So let's just go ahead and connect this to the
1:28:51
client side to see if the creating of the project is going to work. So I'm
1:28:56
done with this. So let's just go to the uh route
1:29:03
uh common sorry the common folder learning past your section that section
1:29:09
and here we're going to uh we're going to have an unsubmit here.
1:29:15
So to do this, we're going to have to install tack react query and as so I'm
1:29:20
going to just collapse all of this and let's open terminal and let's install mpm install as
1:29:28
also tag create query. So we're going to install npm install as t. So click on
1:29:34
enter. So this is going to install. So let's wait for both of them to install. So it has completely installed. Let's go
1:29:40
ahead and um let's create inside the let's create a context uh folder here.
1:29:48
We going to create the react um um the react query provider. So let's just create a folder. I'll say context
1:29:58
and inside here we're going to say query provider.
1:30:07
So inside here I'm just going to paste this. So we're going to import query client and query client provider from
1:30:13
task query and make sure to set this to use client and we have the function here
1:30:19
query provider and like this and we're going to just uh pass the query client
1:30:25
like this. So now let's use this inside the um global css. So I'm sorry inside
1:30:33
the layout txs. So, we're going to wrap this here.
1:30:39
So, move this inside. And then let's import this from context
1:30:45
folder. And now we've done with this. So, let's um go into let's create a
1:30:51
different folder. We're going to call that futures.
1:30:56
And then inside here, we're going to create a file.
1:31:02
I'll call this use um project here.
1:31:08
So here we're going to say export constants constant use create
1:31:17
project
1:31:22
and then we're going to return uh we're going to return mutation. So
1:31:28
say use mutation from tensor react query and then we need to create the mutation
1:31:34
function. So here we're going to say async and there we're going to pass in
1:31:39
the prompt which is um which is of type string
1:31:47
and I'm going to return we're going to say await we're going to use as
1:31:54
so let's import as
1:32:00
sorry uh
1:32:06
So let me import as here
1:32:12
from as just like this and then we're going to say post
1:32:23
/ API/ project.
1:32:30
Let's pass the um prompt. Then we can say then
1:32:37
response response to data like this
1:32:46
just like this. So u we are going to have the
1:32:51
unsuccess here. We say unsuccess
1:33:01
on success data like this.
1:33:09
I think we made a mistake here. Sorry, we need to move this inside here.
1:33:29
So inside here we're going to have sorry like this. Then we're going to say
1:33:35
router. Let's import router equals to use router from next
1:33:42
navigation.
1:33:49
And then we're going to say router.push
1:34:01
/ project slash project ID. So say data
1:34:07
dot data do ID just like this.
1:34:13
And now we can have the an error.
1:34:22
We can consider the log um project
1:34:28
field and let's get the error.
1:34:35
Let's console log that and then let's say toast. So import
1:34:42
error as a field
1:34:49
to create project just like this. So let's make use of
1:34:55
this inside the uh route inside the landing page landing section
1:35:03
and there we can import that. Here you can say constants
1:35:08
is equals to use create project. So let's import use create project from the
1:35:15
features folder and then we can see mutate.
1:35:20
We can have a spending like this. And let's create the handle submit.
1:35:34
So now we can just paste it here. We say if um if not um prompt text just return
1:35:40
this. We can use toast here or let's leave it like this. Then we say
1:35:45
mates and we pass in the prompt text here. And let's save this. Now we can
1:35:51
check this out if this is going to Okay. Let's um pass the handle submit. Yeah.
1:36:00
And let's say is pending like this.
1:36:05
So this is okay. So let's make sure the server is running. npm rundev.
1:36:13
So let's make sure our server is running. So now my server is running and let's test this out. So I'm just going
1:36:19
to click on any of this this suggestion. Then I'm going to click on design and
1:36:26
let's hope this works. So it's loading and we can see once it creates the
1:36:32
project it's going to redirect us to the project by ID page to a single project page.
1:36:40
So let's wait for this. So now I think it's done and it's
1:36:46
redirecting me and we can see that it has created a project. We can see the
1:36:51
project ID here and this is the project by ID uh page. If we check um
1:36:58
MongoDB, we can see uh let's check this out our database and let's see if the AI
1:37:06
generated the project name. So let's click on browser collection.
1:37:15
And now let's see let's click on project
1:37:20
and we can see that we have the ID of the user the name of the project and
1:37:26
then the ID of the project. So this is working fine but we can't find thumbnail here because didn't pass any thumbnail.
1:37:33
So this is working fine. Um so let's head back and let's start the
1:37:40
implement. Let's go back. So, we're going to create the endpoint to fetch all the project which we've created. So,
1:37:48
let's head over to the code base and work on that. So, I'm going to close this and let's let's go to
1:37:56
the API route again. And at the top here, we're going to
1:38:01
create a get request. So, I'll copy this and just paste it here. I'll change this
1:38:07
to get So let's have a try. Let's write try and
1:38:14
catch here
1:38:24
and then we're going to copy the same thing we have here.
1:38:30
Copy this and paste it here. Now we can fetch the project. is a project is
1:38:36
equals to await prisma dot project do find my name
1:38:47
sorry where user ID is user do ID
1:38:57
then we're going to take uh minimum we're going to take uh the limit is going to be 10 then we're going to oh no
1:39:05
we are not including the frame so we're going to order by created by
1:39:13
sending order by this. So let's return this return next response
1:39:21
JSON success true.
1:39:29
We're going to pass in data projects like this. So I'll just scroll down and copy this
1:39:36
same thing here and return this fail to fetch
1:39:45
um project like this. So let's go back to the use
1:39:52
project.tx tx sorry here and we're going to create the method
1:39:57
we're going to use to fetch the uh the project. So we're going to say export
1:40:03
constant use get project
1:40:09
is equals we're going to pass in user ID
1:40:15
of type string and then we're going to return
1:40:22
use query from re query Okay,
1:40:33
we're going to pass in the query key which is going to be project
1:40:40
and then we're going to say query function
1:40:46
async. We're going to say a
1:40:52
use get. So, we're going to return. We're
1:40:57
going to get a response here dot get slash API slash project
1:41:07
and let's return response data
1:41:14
data like this. So now we have uh sorry enabled
1:41:22
we going to pass in if there's no user ID. So it's not going to fetch.
1:41:30
So let's use this inside the um landing page section.
1:41:36
So here I'm going to So let's first of all let's get the user.
1:41:46
It says equals to use kind browser kind browser
1:41:55
client and let's get the user.
1:42:03
You can say constant user ID is equals to user do ID
1:42:14
like this. So we're going to pass this inside this. So let's import get um
1:42:20
project and pass in the user ID. So now let's use this. Sorry.
1:42:27
So let's scroll down to where we have the recent project. Yeah, we are going to check if the user is not logged in.
1:42:35
We going to hide the recent project or if the user is logged in, we're going to show the recent project. So at the top,
1:42:42
so let's just do it inside here. I'll say if user ID
1:42:50
then we're going to move this div inside here.
1:42:57
So below here we're going to say if it's loading
1:43:04
then let's have a div
1:43:10
with spinner component from components UI
1:43:16
and there we're going to just have sorry a div
1:43:26
like this. So let's give this a class name and a flex item center
1:43:38
justify justify center and let's just keep adding top and
1:43:45
bottom two. Uh we can give this a class name say size 10 just like this. Yeah, we can
1:43:53
give this a class name. You're going to say grid grid and column
1:44:01
columns one. Then you're going to have grid
1:44:07
columns two. And on medium screen we're going to have
1:44:13
grid uh column
1:44:18
three like this. Give this a gap of three and padding top three
1:44:24
like this. So we're going to map through the um project. I say project
1:44:32
do map project.
1:44:41
So we need to define the type. So what I'm going to do I'm going to come over to let's create a folder.
1:44:49
call it types. So, let me change this
1:44:57
like this and let's create project here.
1:45:03
So, I'm going to paste it here. So, we're having project ID name thumbnail frame created as similar to uh the we
1:45:12
have the frame type too. So, let's copy this and head back to the landing the
1:45:18
landing section and let's just pass it here. Let's import sorry, let's import the project type.
1:45:28
So, make sure you import the project type and then we can scroll down
1:45:35
and let's um let's return project components which we're going to create.
1:45:41
I'm going to call it project card and we set a key
1:45:47
to um project id. Then we pass in the project.
1:45:59
So below here we are going to create that here. to say concerns your project
1:46:06
card is equals to and let's return this.
1:46:13
So we're going to set this to memo.
1:46:20
So let's import this and then we're going to um
1:46:27
let's get the project
1:46:34
And we set a type here to project type. So I'm going to say project
1:46:42
type and let's return
1:46:50
a div here like this. So let's create routes router from use
1:46:58
router navigation. So let's import this.
1:47:09
So let's create a method a constant route on route
1:47:17
this equals to let's return router post
1:47:25
/ project and then we can pass in the project id
1:47:33
dot id. So to stop this error I'm just going to say project card display
1:47:38
project card and then we can also have let me move this down here. We can also
1:47:44
say constant created at
1:47:52
dates is equals to new dates.
1:47:59
We're going to pass in the project dot created at and then we can get the
1:48:06
time sorry time ago which is going to be equals to format
1:48:13
distance.
1:48:20
So now we're going to import that from this function. So we've not installed this function.
1:48:25
Let me check if we've installed date function. So let's quickly install that mpm
1:48:33
install date uh fns. So let's wait for this to install.
1:48:40
So the date fns has installed. So let's um let's complete it. So I'm going to pass in the created date. So created um
1:48:48
at date and then we add um at suffix true. Then we're going to use this. So
1:48:56
now we also need to get the thumbnail. So con thumbnail
1:49:02
is equals to project thumbnail.
1:49:08
I say that to no if there's no thumbnail. So yeah,
1:49:14
let's add a row button class name
1:49:21
withful flex flex column
1:49:26
border rounded excel
1:49:32
cursor pointer.
1:49:39
Then we're having over shadow.
1:49:44
Let's set this to MD and overflow he. So yeah, we're going to add on click um
1:49:52
on route like this. So let's create a div
1:50:00
name height 40 bg
1:50:07
sorry we're going to give this a background
1:50:14
color then relative
1:50:19
overflow uh hidden
1:50:25
flex item center
1:50:31
and then justify center. Save this and there we can have uh image
1:50:42
src thumbnail.
1:50:47
Then we have class name with full height full
1:50:54
object. We say object left
1:51:02
and then we can give this a scale 1 Z like this.
1:51:10
So we can we check if the thumbnail exists. If
1:51:16
there's a thumbnail, we're going to return the image. Else,
1:51:22
we can create a div.
1:51:28
And in this div we're going to have a class name
1:51:33
of width 16 height 16
1:51:38
rounded full B primary
1:51:46
opacity of 2 0.2
1:51:51
And then we say flex item center
1:51:57
justify center and then text primary
1:52:03
and then we can we going to import folder
1:52:09
open icon
1:52:16
just like this. So below here we're going to have a div
1:52:24
class name adding for flex
1:52:30
first column and then we have the title there's the
1:52:37
name of the project then we have the class name
1:52:43
flex and front semi text small translate full and um line clamp on then we can
1:52:50
pass in project name like this. So we have the paragraph and then we can give
1:52:57
this a class name of text extra small text muted forground
1:53:04
and here we can pass in time echo like this. So we are done with this and
1:53:12
I we can also add so below here we can say if error let's show um text red 500
1:53:22
fail to load project so let's make sure our server is running so mp
1:53:29
and let's wait for the server. So notice I don't see any recent project. So, what I'm going to do is uh inspect this and
1:53:37
let me reload. Let me reload this.
1:53:47
So, let's check this. Let's see. Okay, I think I made a mistake.
1:53:57
So let me head back to the code and then
1:54:02
so I found the issue issue is because of if I scroll down to the landing page
1:54:07
section. If I scroll down we can see that we didn't return the project card. So I'm just going to copy this. I'm
1:54:14
going to just remove this and change this to like this
1:54:20
like this. So this is going to work. So let's head over to the browser
1:54:26
and let's reload this. Now we can see now we can see the card here. So once
1:54:31
you click on it, this is going to take you uh to the uh single project page.
Single Project API & Canvas Screen
1:54:39
So let's work on the um project single project endpoint. So I'll go into the app API. Then inside the project we can
1:54:46
create a folder called this id and then we can create a route tx
1:54:56
inside the folder can create a route tx here and then we can say export constant so
1:55:04
export function then we can return this.
1:55:10
So I'm just going to say like this. So let's import a next request.
1:55:15
Then we're going to get the params which is this ID. We're going to ID string. Then we can
1:55:22
use try catch here
1:55:29
and then let's return this. So I'm just going to also go into this and copy this
1:55:34
same uh find and kind server session.
1:55:40
I'm going to copy that paste it here. Sorry, inside the try
1:55:45
catch here. And let's import this. So now we checking if the user is
1:55:52
authorized to access this API. Now we can fetch it. We say constant project
1:56:00
is equals to await Prisma. Let's import Prisma from
1:56:09
Let me import it from the top here
1:56:18
like this and then we say project find.
1:56:26
So we can say find first where user id
1:56:34
user id and then
1:56:40
sorry and then we can get the project. So let's get constant
1:56:47
is equals to our weight par
1:56:54
and let's get a project ID let's say ID ID
1:57:02
and then we're going to also include
1:57:08
frames
1:57:16
Sorry frame like this
1:57:22
like this. So we're going to check if there's no uh
1:57:29
widget we can return next request
1:57:35
sorry next response or JSON
1:57:42
and then we say error
1:57:48
object not found and Let's just say status
1:57:55
404 by this. Then we can return
1:58:01
next response. So next response
1:58:10
JSON and let's return the project here.
1:58:16
So let's cons error and we're going to do the same thing
1:58:25
and say uh fail to fetch project.
1:58:33
So let me remove this and change this to 500.
1:58:40
So we've completed the So let's go ahead and create a file inside the futures.
1:58:46
Let's say use um project
1:58:52
id.tx and then we're going to uh going to get
1:58:59
the we're going to use query from query. Now let me import as here
1:59:08
from asus just like this. So we pass in the query
1:59:13
key project ID and then we pass in a project ID to API. Then we get a
1:59:19
response. So we can use this inside the U project. So let's go up to inside this
1:59:27
project inside the route folder and then inside the project folder and then we should create the ID and inside here we
1:59:36
have page.tx. So here we're going to use the endpoint. So let's convert this to use client
1:59:46
and then we can use constant use param
1:59:51
to get the uh id of the object. Then say
1:59:56
constant id is equals to params do id
2:00:03
param ID. Let's change this to params
2:00:11
id as string and then we can use the endpoints. Now
2:00:18
we can say constants is equals to sorry
2:00:27
use get by ID. So let's import this and then we're going to pass in the project
2:00:33
ID which is ID and then we can say data project
2:00:39
and let's say is pending like this. So now we can get the frames
2:00:45
a constant frames is equals to project
2:00:53
dot frames. We set that to empty. Then we can get
2:01:00
the team is equals to project
2:01:06
team empty string.
2:01:11
So now we need to uh check if there's no project. Say if it's not pending
2:01:19
and we don't have any the project is not found. We can just return
2:01:27
a div and we say uh project not found
2:01:37
just like this. So let's return this. Now we can have a class name
2:01:43
relative height screen with full.
2:01:52
And then we have the flex and flex column. So here we're going to have the header
2:01:59
component for um the the single project page. So we're going
2:02:06
to create that here. But we're going to pass in let's pass in the project name
2:02:12
which is going to be equals to project
2:02:18
dot name like this. So let's quickly create that. So I'm going to create uh
2:02:23
inside yeah let's create the common common folder
2:02:30
and let's call this header let's create a file header cx
2:02:39
e change this to header and let's just
2:02:44
import this
2:02:50
and then we're going to pass in the let's pass in the props
2:02:58
project sorry project name str
2:03:04
and the error should stop. So here we are going to dstructure the
2:03:09
props and get the project name. So let's also
2:03:15
uh import router and also the use team. So I'm going to import use team and also
2:03:22
import router for next navigation
2:03:30
like this. So let me move this to the top and then let's have
2:03:38
last name let's sticky similar to what we did in
2:03:43
the previous header top zero and then let's have
2:03:50
the header here we say header we give this a class name
2:04:00
Bottom border opacity 0.4
2:04:07
and then we give this PG card 50 and the background
2:04:14
um blow small like this.
2:04:19
Then we can have a div. Here is a class name
2:04:27
flex item center
2:04:34
justify between give this a padding x4
2:04:42
and then py2 like this. So here we're going to have a div
2:04:51
and let's import logo components the logo
2:04:56
and let's have the class name flex um item center
2:05:05
four and then we have um
2:05:11
button we set it to icon Slice
2:05:17
icon small
2:05:23
variance variance uh ghost
2:05:31
last nameful
2:05:36
and give PJ muted.
2:05:43
So we have on click and we're going to say router.p
2:05:54
back to the home screen and let's add icon the arrow
2:06:00
left icon.
2:06:07
Let's use a class name size four.
2:06:12
Let's import the arrow left icon.
2:06:18
So now uh after the porting we have a span tag.
2:06:24
We can give this a class name or let's give this a div. Let's change it to div.
2:06:34
Let's give this inline block. So let's give his maximum width 200
2:06:44
and let's say truncate and let's give font
2:06:52
medium
2:07:02
like this and then uh like this. Let's also so let's pass
2:07:10
in the project name here we said we'll name this untitled
2:07:19
project if there's no project name. So let's just close this.
2:07:27
So let's change this I'll change this to paragraph like this.
2:07:35
So here we can have a this say class name
2:07:43
flex item center gap tree and let's go to the header
2:07:52
and let's copy let's copy this
2:08:00
and paste it here. So let's import uh some
2:08:06
icon from Lucy React and also the moon icon. Let's also import the CN.
2:08:13
And that is it. So, let's check this out. So, make sure
2:08:20
the server is running. Let's go over to the browser. Let's reload this. Now, we should be able to
2:08:27
see the icon and the name of the uh the name of the project.
2:08:34
So we can see and you can click here to go back. So let's head back to the code
2:08:43
and then below here we are going to so let's create a div here and this if
2:08:49
is going to hold the canvas components.
2:08:59
So let me comment this out for now. So let's give this a class name
2:09:05
of flex flex uh one sorry flex with full
2:09:12
and let's overflow hidden then we can give this a div
2:09:20
um sorry class name where let's see
2:09:28
and let's move this canvas inside here. So, let's create this canvas. I'm just
2:09:33
going to go into my component folder. And let's create a folder. Let's call this canvas.
2:09:41
Let's index. Let's create index CSS.
2:09:48
Say R A S E canvas. And then let's go back into the
2:09:56
page. CXS. Now let's unc comment this and let's
2:10:01
import the canvas component like this.
2:10:07
So now we're going to also create the canvas provider that handles the we're
2:10:12
going to pass in the frame and the team. So it's accessible everywhere inside the canvas component.
2:10:19
So we're going to wrap this. So we're going to wrap this with canvas.
2:10:30
So paste it inside. And then inside we're going to pass in the initial
2:10:36
frames which is going to be frames.
2:10:44
Then we have the initial
2:10:49
sim. We're going to pass in the team.
2:10:55
Then we say if it has uh any uh initials we're going to check uh we can say
2:11:03
constance has initial data
2:11:09
is equals f.
2:11:20
So let's just copy this and let's pass it here
2:11:27
as initial. Let's pass it here. We're going to also
2:11:33
pass in a project ID project do ID. So let's create a canvas
2:11:42
component inside the let me collapse all of this. So go into the context and
2:11:47
let's say canvas canvas provider
2:11:54
cx or canvas context cxs any new one. So let's define the
2:12:02
interface. So say canvas
2:12:07
context type and the first thing we're going to define is the team. So we're going to
2:12:14
define a list of team. So I'm going to create a file inside the link folder. I'm going to call this teams.
2:12:22
CX. So I'm going to paste. You can copy that from the GitHub. You can copy from the GitHub repository. So I'm going to
2:12:29
paste all of this. And you can see that we have a lot of the teams here. So I'll
2:12:35
scroll to the top and we can see the type here type. So we have the font
2:12:43
we are going to use and we have the base variable which we pass in the font
2:12:48
variable and we have different team with different format in the same format. We
2:12:54
have a background for like this we have Netflix team as team and so on. And then
2:13:01
we have the team list. Yeah. If I scroll to the bottom of the screen of the page,
2:13:07
you can see we have the sim list and then we also have the P sim column here.
2:13:15
So just copy this and paste it here. And let's go back to the canvas context and
2:13:20
then we can import a team type here
2:13:25
from teams. Now we can do set team
2:13:32
which is going to be we're going to get the id of the team and then just return void.
2:13:42
So we also have the teams which is going to be of type team list
2:13:48
by this. Then we have the uh frame
2:13:54
which is of type frames frame type
2:14:00
then set frame say frames
2:14:07
frame type we're going to import frame type from type project you can see that
2:14:12
here. So inside the frame I'm going to also add is loading here. We're going to
2:14:17
use this to notify when the generation occurring. We're going to we're going to
2:14:22
create a dummy frame in the canvas. So I'm going to set this to boolean for now
2:14:28
like this. So inside the canvas there let's also return this void
2:14:38
set frame. We can just say it to a list of array like this and say update
2:14:44
update frame
2:14:50
void like this. Let's say ID string
2:14:58
data partial frame type
2:15:05
like this. There we have add frame.
2:15:13
Let's just return for and let's pass in frame
2:15:19
frame and type. Then we also have a select selected
2:15:26
frame ID. We set that to string or no.
2:15:35
Then we have selected frame
2:15:40
frame type. Oh no.
2:15:46
Then we have set selected frame
2:15:53
ID passing the ID of the frame string
2:15:59
or no. And let's return void.
2:16:05
So these are all the uh advantage type we have. So we also have the last one
2:16:10
and this is going to be the loading status. So while this is going to be a type of
2:16:17
loading sorry loading status type.
2:16:23
So this is going to uh we're going to have different loading status we're going to use we're going to uh display
2:16:30
when the generation occurs. So we going to define a type here of loading status
2:16:36
type. So just copy that here. Paste it here. And we're going to have the first
2:16:42
one. So it's going to be equals to we're going to have ID.
2:16:49
So then
2:16:55
we're going to have running.
2:17:04
Then the last one is going to be analyzing, generating, and completed. So we're going to use uh inest real time to
2:17:12
display all of this loading at different stages when the generation occur. So we're going to look at inest after this
2:17:19
section. So let's just complete the canvas context type. So uh here we can
2:17:25
now define create the context here. Say canvas context
2:17:31
is equals to create context.
2:17:38
Now we can set in the type here. Create sorry canvas context type. Let's pass it
2:17:44
here. Let's import create context from react
2:17:50
and then we can set this to undefined
2:17:56
undefined and then we can just set here. So below
2:18:02
here, let's create the context provider. A canvas provider say a constant a
2:18:08
canvas provider and then let's return
2:18:16
an object passing children. So let's define the type first
2:18:23
children react node. So import react node from react.
2:18:32
Then we have the initial frame
2:18:37
which we are passing. It's a frame type. We also pass in the initial sorry
2:18:44
initial string initial team
2:18:53
string. So this should be initial team ID
2:18:59
because we're going to be passing the ID instead of the uh team. So I'll just go
2:19:04
back to app and let's change it to ID. So inside um page
2:19:10
we can say initial team ID like this
2:19:17
and also this we can just say ID the team.
2:19:23
Let's change this to ID like this.
2:19:30
So here we're going to also have the as initial data
2:19:37
uh which is going to be of type boolean then also the project
2:19:43
ID string or
2:19:49
so we can get all of them here initial frame initial team ID uh has uh initial
2:19:57
data and project
2:20:02
ID.
2:20:08
So yeah, let's say constant team id set team
2:20:17
id is equals to use state
2:20:22
of type string and then we're going to pass in the
2:20:28
initial sim ID or we can import the same list
2:20:38
and then let's get index zero
2:20:45
dot id or empty string. I don't guess we should
2:20:52
just remove this like this is okay. Then we have uh the states for frames.
2:21:01
Now set frames is equals to use state.
2:21:09
It's going to be of type frame type
2:21:15
an empty array. Then we have let's duplicate this.
2:21:22
Let's change this to loading status.
2:21:30
And then we're going to also have set loading status.
2:21:38
And this is going to be of type string. I'm sorry. It's going to be of type
2:21:44
loading my status type.
2:21:50
And I'm going to uh I'm going to set the default to one like this.
2:21:57
So we can copy this now and also paste it here.
2:22:03
So here I'm going to change this to selected frame ID.
2:22:14
And this should be set selected frame ID
2:22:22
like this. So yeah, let change this to string.
2:22:27
String or no? Let's change this. Let's replace this to
2:22:33
no. Let me move this to the top
2:22:42
like this. So now to get the team we write constant team
2:22:49
is equals to team list find
2:22:54
team sorry where team dot team do ID is equals to
2:23:04
team ID
2:23:10
while constant selected frame
2:23:18
is equals to selected frame ID. If the selected frame ID
2:23:24
and frame
2:23:29
frame length is not equals to zero
2:23:36
then we can say our frames
2:23:43
Find frame.
2:23:51
It's a frame dot ID is equals to selected frame ID.
2:24:01
Else no like this. So below here we're going to
2:24:08
um use a use effect. So let's import us.
2:24:14
Then we say as initial data
2:24:21
then we're going to set our loading to idle.
2:24:35
So if we have initial set it to then we can also do for copy this and
2:24:42
also um paste it here for initial
2:24:50
initial team ID.
2:24:59
So that's same ID.
2:25:13
So let's just return
2:25:21
canvas contest provider.
2:25:28
This will stop the error follow. Let's pass in a team.
2:25:37
Uh we're going to pass in the children here by this.
2:25:43
So let's also have the add
2:25:52
search exists. Okay, I made a mistake here
2:26:06
like this. And let's just change this to N.
2:26:12
So let's also have the constants add frame
2:26:18
is equals to use callback. So let's import use callback
2:26:26
from react and there we're going to say frame. So
2:26:33
let's pass in a frame of type frame type.
2:26:45
There is a set frame
2:26:50
previous state the structure the previous state and
2:26:56
pass in the frame like this. So we also have the update frame. So let
2:27:04
me just copy this paste it here. I'll change this to
2:27:10
update frame. Then we're going to pass in the ID of the frame. This is of type
2:27:16
string. And then we have uh the previous remove
2:27:22
this. And then I'm going to say previous map
2:27:28
frame. So we're going to check uh if frame do
2:27:33
ID is equals to ID.
2:27:39
So let me copy this out.
2:27:45
a frame is equals to ID is. So we're going to save. We're going to check
2:27:51
the structure frame
2:28:01
and we're going to pass in structural data.
2:28:09
Let's pass in data here. of frame type partial.
2:28:16
So let's copy this from here partial frame type
2:28:25
and let's pass it here. So now we're going to check let's
2:28:33
just pass in the frame like this.
2:28:39
So I think we need to
2:28:44
like this. So we are done with this. So let me just
2:28:50
move this like this and this two
2:28:56
by this.
2:29:04
So let's u past all of this inside here. So I'm going to pass.
2:29:10
So we need selected frame select the frame.
2:29:22
So I made a mistake here. So let's scroll down to let's also add else
2:29:29
no by this and the error should stop. So this is showing some error. So what I'm
2:29:36
going to do, I'm going to remove this. I'm going to use this here. I'm going to say uh if uh has uh initial data set to
2:29:47
ID else
2:29:52
running and let's remove this
2:29:59
and then the set loading.
2:30:04
So we also have the initial frames. I made some mistake here. So just say initial frame.
2:30:11
Sorry, initial frames. Make sure it's the same thing with what
2:30:18
we have here. Initial frames.
2:30:23
So let's head back and let's pass it here.
2:30:28
Initial frame set loading. I think we're not
2:30:34
okay. We're going to use that but not now. So I think we are done with it with
2:30:39
everything here. So let's go and import the canvas
2:30:47
provider like this. So we also forgot to add the
2:30:54
use canvas. So come down below here and let's uh add use canvas here. Let's
2:30:59
import use um context from react and then u we below here we are going to we
2:31:08
are going to use use effect to update the loading
2:31:14
the loading status with inest real time
2:31:21
event like this. So we're going to use that here and we're going to also use the
2:31:27
project ID for now. We're not using it. So let's go back to the page and let's work on the canvas component. So let's
2:31:34
pass the props here. We're going to use inside the components. We're going to pass in the project ID, project name,
2:31:40
and um if it's loading. So let's go into the canvas components and let's get the
2:31:46
props here. It's a project ID
2:31:52
of type string then is pending
2:32:01
a boolean then project name
2:32:08
string or no. So let's get the project ID
2:32:15
is pending and also the project name.
2:32:21
Yeah. So we can get constant. Let's get the uh from use canvas.
2:32:31
So we can get the team ID or the team sorry team frame
2:32:38
and also the selected frame. Then we have the set uh set selected frame ID.
2:32:46
Then we have the loading status here. So here we're going to say constant uh
2:32:54
current status
2:33:00
is going to be equals to if it's pending.
2:33:05
We say fetching or loading. Let's say fetching
2:33:16
then else we going to check if loading is if loading stat is equals to ID and
2:33:24
uh is not completed then we're going to say if it's not ID
2:33:29
and not completed we're going to return the loading status. else we just can say
2:33:35
no by this. So now here we're going to create uh the
2:33:41
div. So let's say div here. Let's give this a
2:33:47
class name relative width full
2:33:53
height full overflow hidden.
2:33:59
And there we're going to define the floating the floating bar
2:34:05
or floating to bar. So this is going to hold the colors the
2:34:12
team colors and other uh other components.
2:34:17
But here we're going to define the loading status. Here we say current. So
2:34:23
I made a mistake. It should be current status.
2:34:29
So we're going to just create a component call canvas loader
2:34:38
and let's pass in the status which is going to be current status like
2:34:45
this. So let's create the component here.
2:34:51
I must do that. Sorry.
2:35:02
Let's return here.
2:35:08
So, let's get a status from the let's pass in the type. So, I'm going to pass
2:35:15
in a status type. I'm going to also pass section. So I'm going to import the
2:35:21
let's import loading sorry loading uh status type from
2:35:27
is not coming up. Let's go into the canvas. Okay I need to export this
2:35:34
and then inside let's import it. So we can get a status here.
2:35:43
So inside here we can say class name.
2:35:48
So let's import CN
2:35:54
on YouTube. Now we say absolute
2:36:00
uh top four left 1 / 2 then minus translate
2:36:10
x 1 / 2 minimum width 40.
2:36:20
Now we have the maximum width for
2:36:25
adding X4 C 1.5
2:36:31
and then we give this P bottom two. Let's also give it rounded uh bottom
2:36:39
right excel and also rounded bottom left
2:36:48
too. Let's give shadow medium
2:36:55
and then we going to add comma here.
2:37:00
Sorry. Here.
2:37:07
So, let's also position this to the center. So, um item center flex item
2:37:12
center space X2 and then Z 50 like this.
2:37:20
Let's give 10. So here we're going to say status
2:37:26
is equals to fetching.
2:37:31
Then we can give this a color h gray
2:37:37
500 and then dex white.
2:37:43
Let's duplicate this. Then if this is uh
2:37:50
running you can change the color to H number
2:37:56
500. Let's do the same thing for analyzing.
2:38:08
Change this to blue 500. And the last one generating
2:38:17
Uh we change this to purple 500
2:38:23
like this. So add a comma here. So now we can see spinner.
2:38:32
So let's import spinner last name
2:38:38
weight four height four and then
2:38:44
we can increase the stroke
2:38:49
to three. Then we can have a span
2:38:57
and let's case a class name text small
2:39:03
and font semiode say capitaliz.
2:39:10
So we check if status is equals to fetching.
2:39:16
Then we say loading project
2:39:25
status. So we need to also fix some issues. So
2:39:30
go into the um project page um ID id page.tx TX and let's change this to flex
2:39:40
one and also add flex one here like this. So now let's scroll back up
2:39:48
and there we're going to give this a div.
2:39:54
uh going to have a class name of uh let's import CN
2:40:05
and then we're going to set this to absolute and set zero weightful
2:40:22
uh heightful mode. I'm going to give this PG
2:40:29
and this color. Then on dark mode.
2:40:35
So I'll change this to this.
2:40:41
On dark mode, we're going to use MPG
2:40:46
um hash 2 4 2 4 and 2 three by this. then padding
2:40:53
three. So inside this we're going to give a
2:40:58
style account image.
2:41:14
We're going to define a gradient here.
2:41:19
I set this to circle. So close this and we're going to give this a color. So I'm going to say f
2:41:28
variable primary and then I'm going to give this one
2:41:36
pixel comma and transparent
2:41:48
transparent around one pixel by this.
2:41:54
So add comma here and then we're going to give a background size
2:42:05
20 pixel 20 pixel like this. So let's go ahead and create
2:42:11
the floating tubar. So let's create the let's create here
2:42:17
canvas
2:42:24
superxar
2:42:40
just so let me copy this and let's paste it here. Let's import
2:42:47
it. So inside here we're going to list out
2:42:53
the teams and the user has the option to uh change team and also we have the
2:43:00
prompt impute. We're going to also add it here too. So let's change this to use clients
2:43:08
and then I'm going to get the use canvas here.
2:43:15
So we get a team current team and set team. So let's create let's create um define
2:43:21
the class name say fix
2:43:28
top uh sis left
2:43:33
1 / two and then the same thing translate
2:43:38
uh gives x 1 / 2 and z 50.
2:43:49
So let's remove this and let's define a div here class name
2:43:57
of widthful maximum width to Excel
2:44:04
background like this.
2:44:11
And then we have a dark mode. We can give this BG gray
2:44:19
line of 50 bonded
2:44:25
full shadow XL and border.
2:44:33
So let's define a div here. I say class name flex flex row
2:44:42
item center to mpx3.
2:44:52
So here we're going to show the popover for the AI generation. So I'm going to
2:44:57
import pop over. So we've not added. So let's add this.
2:45:03
I'll cancel my server. MPX
2:45:08
chy CDN add pop over and let's wait for this to add.
2:45:22
So this has added a popover. So let's import that from Shanti. the popover
2:45:28
from UI popover then pop over trigger.
2:45:35
So import from UI popover and then we can define a button here.
2:45:42
So this is going to be an icon a size icon small
2:45:49
then we're going to give this a class name. So I'm going to paste in a class name. So this is going to be gradient of
2:45:55
BJ to right and from purple 500 to indigo 600 deped to Excel shadow large
2:46:05
and shadow pop 0.5 0.5 opacity and then
2:46:10
cursor pointer then here we are going to
2:46:16
pass in the icon so I'm going to say one icon two give this a class name
2:46:23
or size four like this.
2:46:28
So let's also import pop over content.
2:46:39
Let's give a class name and width 80 3x2
2:46:48
and also let's say P2 like this. Then we have rounded
2:46:57
excel then shadow large
2:47:04
at border by this and let's give this empty one. So inside the popover we're
2:47:11
going to import the prompt impute component we had before
2:47:17
and here we can pass in a prompt text for now give it empty string the set um
2:47:24
prompt text so let's define a state here so I'm just going to say constant
2:47:30
prompt text
2:47:35
and set prompt text here is equals to use state
2:47:45
empty string and type string. So let's pass in the prompts here.
2:47:53
Prompts text and then set prompts text here
2:48:01
like this. So, we're going to give this a class name
2:48:06
animal minimum height uh 150 pixel.
2:48:13
And then we're going to just set the ring to one. And then we're going to change the ring color to purple
2:48:21
500
2:48:27
rounded excel
2:48:32
then shadow say shadow no
2:48:39
other muted like this. So we're going to say has
2:48:47
uh sorry hide submit button to true. Remember we pass this uh this prop
2:48:55
inside the prompt impute to hide the button. So we can have a button for
2:49:01
that. Here is a button
2:49:07
and let's give this a class name MC2
2:49:14
wait for and then I'm going to copy what we have here from here background
2:49:21
like this and then let's paste it inside here.
2:49:29
So we have background in purple 500 600 text white to excel shadow and also a
2:49:39
pointer. So let's just set here to design
2:49:46
like this. So everything is okay like this. So now let's collapse this.
2:49:56
So here we're going to define the input. This is also going to be a popover tune.
2:50:02
Yeah, I have pop over trigger like this. So let's um let's add as
2:50:10
child here collapse this and inside here we're going to have a div
2:50:17
and this div we have a class name of flex item center
2:50:24
app two px3
2:50:29
and py2. So yeah, let's import
2:50:34
icon a color icon icon.
2:50:40
Give this a class name of size sorry size four.
2:50:47
And here we're going to have a div
2:50:52
class last name and we say flex cap 1.5.
2:50:59
So we're going to loop through this. So I'm going to say teams we're going to take only a slice
2:51:09
only 0 four. Then we're going to map to this
2:51:16
setting and um ID sorry index
2:51:26
and let's return this. So let's return
2:51:32
let's return uh can return a button or let's just use div for this
2:51:40
and there we can say row button
2:51:46
and then we can get the color we say colors is equals to let's import team
2:51:55
from um from the team file then we pass in the team start.
2:52:04
So now we have we pass in a key index
2:52:10
let's have on click we can get the event
2:52:21
we say e stop propagation and then set team
2:52:29
we're going to pass in the team ID dot ID like this.
2:52:36
So let's give this a class name from
2:52:42
let's use CN.
2:52:48
So let's import it from uh CN from YouTube.
2:52:56
So say width 6.5 height 6.5
2:53:03
rounded bounded full
2:53:10
pointer and then we can have let's say if
2:53:18
current team do id is equals to sorry
2:53:23
equals to team do ID. Then we're going to show a ring
2:53:30
ring one and a ring
2:53:35
offset one. So,
2:53:44
so let's add the sty. Let's use the color below here. So, I'm
2:53:49
going to define a sty. So let me change this to uh so let's say side
2:53:56
background color or background sorry background
2:54:02
I say linear dash gradient
2:54:08
want to pass 135 and then we're going to pass the
2:54:15
individual colors here we say color dot
2:54:22
primary and then you can see from color
2:54:31
assent.
2:54:38
So if you look into the PS team, you can see that we got the the primary
2:54:44
the primary and we also have the assent color here.
2:54:50
And this is how we map through this. We look through this to get the colors.
2:54:57
So if I go back to the numbers floating
2:55:02
to bar and this is already defined. So inside the U
2:55:08
think we're going to remove this. This should be a self closing div.
2:55:14
So like this. Now below this div we can have a div
2:55:22
and there we're going to say uh we're going to have an icon
2:55:28
tre sorry tre and down let's case a class name of a size
2:55:36
size four and then we can say plus
2:55:43
sim dot length
2:55:48
minus four more. So have number of more team. So
2:55:54
I'm going to just give this a class name of flex item center
2:56:00
gap one text
2:56:06
small like this. I think that is all.
2:56:13
as you. So,
2:56:19
so we're going to uh pass the let's pass the uh popover
2:56:28
content. So, let's give this a class name
2:56:35
of px2 excel. Uh the same thing we have shadow
2:56:44
border as sorry shadow large and then
2:56:49
border. So we're going to create a team selector
2:56:55
component. So I've got a team selector
2:57:01
selector component. So let's create that inside the canvas.
2:57:06
So same selector cx6x
2:57:17
same selector. So let's import that.
2:57:29
So we need to Okay, we can copy this. Let me run this.
2:57:39
We can copy this and let's go into the components
2:57:44
and inside here we're going to just paste this here. I change this to use client
2:57:51
and let's import use canvas here. And then we should have a div uh sorry a
2:57:58
class name flex flex column u maximum height
2:58:06
uh let's give this 96 and then
2:58:12
we have a div name flex one
2:58:18
padding button two um padding padding x4 and let's overflow
2:58:27
y let's give this history
2:58:34
class name our font semi bold text small
2:58:41
and then margin button too
2:58:50
like this. So here we have a div last name
2:58:57
um p y 2 space y3.
2:59:03
Yeah. So let's be team map
2:59:10
team and let's return
2:59:17
team same item or team let's call this same item
2:59:27
a key
2:59:33
ID We're going to pass in the team
2:59:38
and we're going to get if is selected.
2:59:44
Oh, sorry. We say current team
2:59:51
do id is equals to team do ID
2:59:58
on select. We are going to return set team
3:00:10
and team ID like this. So yeah, let's create a
3:00:17
function uh let's call team
3:00:23
item like this. So here I just going to create object
3:00:28
team of type team type
3:00:35
is selected
3:00:40
boolean. And we have on select
3:00:49
return we don't void.
3:00:58
Okay. So let's just return
3:01:06
and error should stop. So let's change this to button.
3:01:14
And let's get the uh props here. Say team
3:01:20
is selected and unselect. So here I'm going to import the PS team
3:01:28
color. So import that from team.
3:01:33
Then we can say on click sorry
3:01:40
on click on select
3:01:46
and let's give this a class name.
3:01:52
as import from you to
3:01:59
now say flex item center justify
3:02:05
uh between
3:02:10
padding one rounded excel border
3:02:18
tap sorry t
3:02:23
and BG background like this. So let's add comma here
3:02:32
uh sorry is selected then we say border two
3:02:41
else border like this. So let's add style
3:02:51
other color is selected
3:02:57
color primary
3:03:08
undefined or we can just say empty string like
3:03:14
this. So we need to loop through this. So I'll just create a divlex
3:03:26
gap two. So let's look through this. So I'll pick
3:03:31
some of the uh colors. I want to uh I want to look through the primary,
3:03:38
secondary. These are the prim the main colors
3:03:44
assent and then the last one muted
3:03:50
set map. We get a key
3:03:57
and let's return a div save close elements
3:04:04
pass the key.
3:04:10
So I'll say class name width for height for rounded full
3:04:21
and border. We have the sty
3:04:28
ground color.
3:04:35
We get a key. Pass a key. then and give us a border color.
3:04:46
Let's just say like this this color. And then
3:04:51
uh outside this div we have a separate div
3:04:57
with class name flex item center drop two flex
3:05:06
0.9 and there we have span.
3:05:12
Uh let's give this a class name of text more
3:05:18
and team name. So if it's selected
3:05:26
let's import check icon
3:05:31
give this a class name of size.
3:05:38
So let me remove let me just use size here 16
3:05:44
and then color
3:05:49
color primary like this. So we are done with it. So
3:05:56
let's head over to the canvas floating toolbar and then yeah. So yeah after pop
3:06:03
over we're going to import a separator. So let's import separator
3:06:08
for UI separator. Now we have two buttons. So let's just give this a D first
3:06:15
button. Uh this is going to be outline variance
3:06:24
outline size icon small
3:06:30
name rounded full
3:06:37
pointer
3:06:43
and then we're going to import an icon. So this is going to be a camera icon
3:06:54
and let's give a class name of size 4.5.
3:06:59
So this button is going to be used to screenshot the canvas. Let's give it a
3:07:04
class name flex item center drop
3:07:14
like this. So let's import let's copy this and paste it here. Let's set this to
3:07:21
small and this should be default
3:07:27
like this. Similar to the same thing but here we're going to say um save
3:07:33
and also let's pass in an icon save icon.
3:07:39
So let's import this from Lucy React and uh that is it. So, let's check this out.
3:07:47
Make sure everything is working. So, let's run the server. MPN rundev.
3:07:56
And I'm going to wait for this to load.
3:08:04
So, now this is it. Now, we can see the uh the icon, the AI icon.
3:08:12
Then we can see the pop over. We can click here to type.
3:08:19
Then we also have the team. There are four team. And if you click on
3:08:26
more, you can be able to see all of the other teams. Then we have the the
3:08:32
screenshot icon and also the save button. So we notice this is showing
3:08:37
warning because we set it as the first. So, I'm think I'm going to go and remove the the default warning from the loading
3:08:45
status, but let's go ahead and work on the this is the canvas
3:08:52
the show. So, I'm going to fix that. So, we're going to work on the um the canvas
3:08:58
tools here, which we can use to zoom in and zoom out. So, we're going to install a package to handle that. So let's head
3:09:05
over to the code and then let's go to canvas.
3:09:13
So let me fix this. So also make sure to remove this. So
3:09:20
this should work. Remove the uh the other close bracket there. So I've
3:09:26
removed this. Now we need to install a package to handle the zoom effect and
3:09:32
also the movement. So I'm going to trans my server npm install. Uh let's we're
3:09:39
going to install react zoom pan pitch.
3:09:45
So let's install version 3.7.0.
3:09:52
So let's wait for this to install.
3:09:58
So it has installed completely. So let's head over. So the first thing we're going to do is to create a state. So
3:10:04
let's say constant is equals to use state.
3:10:12
And here we are going to define the two mode or you can call it the
3:10:20
two mode. Yeah. Two mode is okay. Set to mode.
3:10:26
Then we can define the constant for that for the two. I'm going to create a constant folder.
3:10:35
So just a constant
3:10:40
canvas. Let's just create this here. Canvas.x.
3:10:48
So inside here we're going to create the nump so we can use it across the canvas.
3:10:53
comp. So I'm going to define the uh enum and see we have select and we have the
3:10:59
hand to uh two mode and this is the type. So we can use this inside the
3:11:06
canvas components. So let's import the type say two
3:11:13
mode type and the default is two mode in select.
3:11:21
So now we also need the uh state for to handle the to get the zoom percentage.
3:11:29
So I'm going to say use state and this is going to be of type number
3:11:36
and we're going to say default to 53. It says zoom
3:11:43
um percentage percent set zoom
3:11:50
percent.
3:11:57
So like this and we have uh current
3:12:03
scale as a set current
3:12:10
scale
3:12:16
and this is going to be a default of 0 53. So now let's import. We're going to
3:12:23
define this. Uh let me collapse this. So at the top here, we're going to
3:12:29
import the transformer transform
3:12:36
wrapper. So let's import this. So I'll scroll up
3:12:43
and let's import let's move this to the top and import it here. So let's scroll down
3:12:50
to this. Now we're going to move this inside the uh the transform wrapper. So
3:12:57
what we're going to do first we're going to pass in the initial scale.
3:13:02
Initial scale which is going to be 0.53.
3:13:08
Then we need to also pass in the initial position for X we say 40. Then initial position Y
3:13:17
we can give this five. The minimum scale
3:13:22
0.1 the maximum scale
3:13:28
three and then let's give this wheel
3:13:33
a step as 0.1. So if you go into the transform wrapper
3:13:41
uh we can go into the sorry
3:13:47
let's go into transform wrapper and then if you scroll up
3:13:53
inside the transform wrapper we should be able to see the uh
3:13:59
the props to pass we can see we have the uh initial position x y and you can see
3:14:05
you have they have different options here can see the props. So I'm going to add the
3:14:14
pinch. This is going to be step
3:14:20
0.1. And now um we are going to say if is if
3:14:26
we double click double click save to true.
3:14:36
And then we can say center zoom
3:14:42
zoom out force then center omit on init center on init
3:14:50
I'll just say force
3:14:55
then smooth true
3:15:01
then limit bound false so we don't want it you want the user or
3:15:07
we can be able to move the the item in the canvas whether out of the canvas or
3:15:14
inside the canvas. So it's not limited to a bound bound. Yeah. So we can also have on
3:15:22
transformed. So we get the ref from this. Now we can use this to get the set
3:15:29
the percent the zoom um percent. So I say math dot round
3:15:37
ref scale
3:15:43
time 100 and then we can also set the current
3:15:48
the current scale ref
3:15:55
scale by this. So now here we are going to we're going to get C. So let's get
3:16:04
let's open this
3:16:09
and we're going to return. Let's return this. So let's move this
3:16:15
inside inside this. Now we can get the zoom in
3:16:23
and the zoom out method.
3:16:29
So we going to use this. So now uh let's just
3:16:35
edit like this. Sorry, I think I made a mistake here.
3:16:41
This should be an object and then we can get like this.
3:16:46
So now we've set this. So we need to also u say if panning.
3:16:54
So we want to disable this if two mode is not equals to sum mode enum hand. So
3:17:04
we're going to use the hand to move the canvas. Once the uh two changes to u to
3:17:11
select then this the canvas will be disabled the transform wpper will be disabled.
3:17:18
So uh we are going to also uh we can also say let's add comma here. So if
3:17:27
if two mode is equals to two mode in hand
3:17:35
then we can say cursor
3:17:41
grab then active
3:17:47
cursor grabbing
3:17:53
then else we Let's say console default
3:18:00
like this. So now we going to go ahead and create the canvas control where
3:18:06
we're going to pass in a zoom and a zoom out method. So, but first let's pass in
3:18:12
the transform component. And then inside here, we're going to
3:18:19
let's just define a div and say block like this
3:18:25
for now. Then we can give this a wrapper class.
3:18:33
Sorry, not a wrapper class, a wrapper sty. And let's say width
3:18:43
100%. Then height 100%.
3:18:49
So we're giving a full width and overflow. We're going to set it on
3:18:56
set overflow. Then we also have the context style.
3:19:03
So I'll copy the same thing. width and height of the content and paste it here.
3:19:11
So we can set a background color. Let's just set this to red for now. Like
3:19:18
this. So now let's quickly create the canvas control.
3:19:29
So let's pass in the props. We're going to pass in zoom in, zoom out, position zoom, percentage to mode, and set to
3:19:35
mode. So let's create the canvas control here canvas
3:19:43
controls cxs. So e
3:19:52
canvas controls.
3:19:57
So let's define the uh type here. It's a props
3:20:05
type. So zoom in
3:20:12
type of uh return for it.
3:20:17
So let's duplicate that and let's change this to zoom out.
3:20:24
Then we have sum percent number
3:20:30
like this. Then we have to type which is of type two mode type.
3:20:39
Then we have set to mode
3:20:46
and let's return this void. Then we say two
3:20:53
mode is of type two mode type like this. So we can get everything
3:20:59
here. And let's set the prop type here.
3:21:05
So let's get zoom in, zoom out, zoom%,
3:21:11
zoom mode.
3:21:16
Sorry, this should be zoom mode.
3:21:24
and then set to moon
3:21:29
like this. So here we are going to have a class name
3:21:36
going to have minus translates
3:21:42
x 1 / two the absolute bottom floor
3:21:50
I select one / two
3:21:58
flex item Enter
3:22:03
cap tree rounded border.
3:22:09
So let's give this a PG black dark mode. We just change this to PJ uh
3:22:17
muted padding 1.5
3:22:23
then padding X4. Let's just change this to padding Y.
3:22:29
Then shadow shadow MD
3:22:35
and text white.
3:22:42
So let's create a div again. And there we have in class name flex
3:22:48
item center gap one. So let's um let's get the button from
3:22:56
the UI button component. And this is going to have a size uh icon
3:23:03
small variant
3:23:08
post
3:23:13
like this. Then we're going to have a class name. Let's import CN from YouTube.
3:23:24
And there we're going to uh we're going to define the classes here. So I'm going
3:23:29
to paste that. So let's import two mode in. So here I'm going to say rounded for
3:23:35
cos and pointer MB and text. Then we can
3:23:40
set on click
3:23:45
set to two mode to mode in select
3:23:53
and then we can use we can import icon the mouse
3:23:59
pointer icon.
3:24:08
So you can scroll down. We also have a button too
3:24:17
or we should copy this same thing. Paste it here. Change this to hand icon.
3:24:28
I import icon
3:24:37
like this. So now uh below here. So we're going to define a separator. So
3:24:43
let's import separator from UI separator. So I'm going to just
3:24:49
copy everything I did here and I'm going to paste it here.
3:24:56
So now we have uh the button. So let's change this to minus icon.
3:25:08
And then we also have we can change this to plus icon.
3:25:16
So here we're going to say zoom in
3:25:24
and then we pass in the zoom out.
3:25:32
And then between in between them we're going to have a div
3:25:37
a class name or minimum width sorry minimum width 10
3:25:45
x center and text small
3:25:52
and we can call the zoom percent and add a percent sign.
3:26:00
So we are done with this. So let's go into index.tss and let's import uh canvas controls
3:26:08
and this is it. So let me just give this a class name um
3:26:14
size five bg blue 500. So let's test this
3:26:22
out. So I'll say npm rundev.
3:26:32
So let's wait for this to run. So this is it. Now it has load. Uh we
3:26:37
can't move uh anything. This is not clickable. So I think uh there's a
3:26:42
mistake somewhere. The button is not clickable
3:26:48
and nothing is moving. So let's first of all fix this. So I'll just go back to
3:26:53
the code and then let's go into the canvas controls.
3:27:01
I think I made a mistake here. So if if hand
3:27:06
this color okay I think
3:27:13
sorry it should be if hand set this to hand
3:27:23
and then if this is hand then I think we need to remove this
3:27:31
remove this. So, I'll just change this to like this.
3:27:42
Like this. So, hopefully this work.
3:27:48
So, let me move into the canvas component and this to work.
3:28:00
Okay. So let's test this out. Let me the browser
3:28:05
and now click on the hand. And we can see that it's moving.
3:28:10
So I think I made I added a background color to the wrapper. So I'm going to
3:28:16
move it to sorry scroll down here. Okay. So I'll
3:28:23
move the background color to the content style and uh let's head over to the browser.
3:28:31
Now we can see the content. So if we move we can see uh this moving and
3:28:37
there's no limit bound. You can see I can move this out of the uh canvas and I
3:28:43
can move it like this. So everything is working fine.
3:28:49
So I notice the canvas is not showing the dot. So if we load this again and we
3:28:54
can see the canvas dot is showing there. We can see the canvas now and we can
3:29:00
move in and out. We can select this if you click on the select card. We can see
3:29:05
nothing move. So we going to go and work on the um the frame. So we can be able
3:29:11
to move the frame once we click on the select uh icon.
3:29:16
But let's test the zoom effect first. So I can zoom out and then zoom in and
3:29:21
everything works fine. So let's go back to the code.
3:29:28
And then let's work on the device frame. So let's create the five. Let's create
Device Frame UI
3:29:33
the file for the device frame. So I'm going to create a file here. I say device
3:29:39
frame tx
3:29:46
say device and frame. So to use this, we're going
3:29:51
to install a package. So I'll cancel my server and say npm install um let's
3:29:57
space react rd and click on enter. So this should install react rd. So let's
3:30:02
wait for this to install. So this has installed completely. So now let's um
3:30:08
let's define the interface for the type. So say type
3:30:14
props type and then the device frame is going to
3:30:20
take the HTML content and this is going to be of type string.
3:30:30
Then we're going to also pass in the title which is uh of type string.
3:30:39
And then we also pass in the width and then we're going to pass in width, minimum, height, initial position. Then
3:30:46
the u we can pass in the frame ID if we have one. Then we can also pass in the
3:30:53
style. So remember in the team if you go into the team remember we have the
3:31:01
the style option there which define the colors.
3:31:06
So this style we're going to be passing this into the device frame. Uh then we
3:31:11
can just pass this. Let's just get let's set the prop type here.
3:31:18
And inside here we can get the HTML the title
3:31:23
we just say to untitled
3:31:28
the default value. The width we can set the default width for the
3:31:34
device 420 for mobile device minimum height
3:31:39
uh 800. Then we have the initial position. We
3:31:45
can set that to x which is going to zero and y
3:31:53
z like this.
3:31:58
So this should be equals to then we can get the frame ID
3:32:05
scale set to one by default.
3:32:12
So let's add comma here. Now we need to also pass in the two mode.
3:32:23
Then we also get the team style like this. So we should also uh change this
3:32:29
to use clients.
3:32:36
So let's get the selected frame to use uh canvas.
3:32:44
So we get the selected frame ID frame ID and set selected frame ID like
3:32:53
this. So now we can also define the frame size
3:32:58
frame size. We're going to create a state use state.
3:33:06
And this will pass in the width and the height.
3:33:17
So the height is going to be um we're going to say type of make sure the
3:33:22
height is uh a number. So we're going to pass in the minimum uh height here.
3:33:31
Uh then we are going to okay get the set state
3:33:36
set uh frame frame size like this
3:33:46
and then we need to define I frame ref
3:33:52
is going to be equals to use ref.
3:33:59
No of type you can see HTML
3:34:05
HTML I frame element.
3:34:10
So let's import the use ref. So we need to get the selected frame. So
3:34:17
I'm going to say is selected if selected frame ID is equals to the frame ID we
3:34:23
pass. Now we need to define the full content or the full HTML.
3:34:30
So this is going to be equals to we're going to create a method which is going to which is going to be get HTML wrapper
3:34:42
like this and here we're going to pass in pass in the HTML content
3:34:48
then we're going to pass in title the team sty and also the frame ID
3:34:57
so we can create this inside the uh lip
3:35:02
you can say frame wrapper
3:35:08
tx. So you can copy that from the G. I'm going to paste that here. And so we can
3:35:13
so I'll paste it here. And now you can see that this is so let me just import
3:35:19
uh this team. Then I'm going to also import the device
3:35:26
uh base variable. Sorry. Now you can see that we have the uh HTML title and team
3:35:33
sty and then we get the final step. There's no sting pass. Then we have the uh HTML wrapper header. We have the
3:35:41
Google font uh which is this Google font. We have CSS and file. Then we also have the
3:35:50
style which is root. We pass in the base variables and the final team.
3:35:56
Then the base variable is this. Then this will be uh the team that we pass
3:36:03
below the uh base variable. Then we have the height and body body. We have the
3:36:10
default background to background. Then we have the root which is with 100 100%
3:36:18
minimum height. And then we set to none.
3:36:23
Here we have the root ID root and also we pass in the HTML. So this script is
3:36:29
used to make the content of the I frame the content of the I frame to match with
3:36:35
the height. So if the high frame content is uh um longer is going to increase the
3:36:42
height. So so that is it. So let's import this inside the uh device frame.
3:36:51
So import this. Yeah. So now let's use this. So I'm
3:36:56
going to just remove this and let's import RND
3:37:02
RND from. So let's import this.
3:37:09
Let me scroll up. Import it here.
3:37:14
So import rd from
3:37:20
react rd like this.
3:37:26
So I think there's an error. Oh, sorry. I need to make this like this. And the error should stop. So
3:37:34
yeah, we're going to pass in the default the default x and y. So say x is going
3:37:41
to be initial position dox. Then y is going to be initial um
3:37:49
position do y. We are going to pass in the width.
3:37:57
Then the height. The height is going to be frame size
3:38:03
dot height. So these are the default value. Then we can also pass a minimum width which is going to be width.
3:38:12
Then minimum height which is going to be minimum height. Then size
3:38:19
which is going to be width frame size
3:38:27
dot uh width. Then height
3:38:33
frame size dot height.
3:38:42
Now we need to disable disable dragging
3:38:48
uh if two bar sorry if two mode is equals to uh two.
3:38:57
So let's import the enam too hand
3:39:03
like this. Then enable resizing
3:39:08
only if it's selected and two mode
3:39:14
is not equals to two mode in dot hand.
3:39:21
So scale we're going to pass in a scale. So passing a skill then on click
3:39:29
on click
3:39:35
sorry let's set the event to any year
3:39:43
and let's say e does um stop um propagation
3:40:02
So let's set this to any. So let me import this
3:40:09
or let's just disable it. Sorry, let's disable it for the entire file.
3:40:14
Then I say if two mode is equals to
3:40:20
two mode in plus select
3:40:26
then set selected I frame frame ID like this.
3:40:35
Now we need to show since we enable resizing we need to show the uh resize
3:40:40
handle component. So I'm going to define the it's going to have like a square box
3:40:47
by the right top right top left top and bottom left and bottom right. So we can
3:40:53
say resize resize um handle
3:40:59
not handle classes handle components.
3:41:04
So we're going to say top left if it's selected
3:41:11
we going to pass in the handle component
3:41:17
then we set it on define like this. So let's define the handle
3:41:24
component here. So I'm going to just paste it here. So this is just going to be a div with background white and
3:41:31
border below 500. So just scroll down. This should error should stop.
3:41:47
So this is now working. Handle define. Let's check this again.
3:42:02
So I think I'll need to move this from the top here and let's move it down outside
3:42:09
and the error should stop. So let's duplicate this and let's have the top
3:42:14
left. We have the top right. You also have the top sorry bottom left.
3:42:27
We have the um bottom right
3:42:35
like this. So we can also have resize size
3:42:40
resize um handle
3:42:46
style. So I say top
3:42:51
we going to change the uh cursor uh going to change this to
3:42:58
north uh north south resize not south resize then we can also
3:43:04
duplicate this and we have and bottom it is going to be uh the same thing. So
3:43:12
for left and right we're going to have east east west resize
3:43:20
and let's change this to right like this.
3:43:27
So now we can also handle the unresign method.
3:43:32
We can get the uh let's say direction and then we need ref.
3:43:39
So we're going to return this. So, we're going to say set frame size
3:43:46
width. We're going to convert this into make
3:43:52
sure this is an int. So, ref style
3:43:59
dot width.
3:44:06
So, let me put this inside an object. Then we can duplicate this and change
3:44:11
this to height. Also change this to height.
3:44:18
So now we need to give this a class name. So I'm going to change this to CN. So
3:44:26
import CN from YouTube tools and then I'll just say relative
3:44:33
Z index uh 10. Then if it's selected,
3:44:40
it is selected and two mode is not equals to two in hand.
3:44:52
Sorry. Then you're going to say ring
3:44:59
ring loop 400. the ring offset
3:45:09
offset one like this. So now we say if two mode
3:45:15
is equals to two mode in
3:45:21
sorry hand then we're going to change the cursor to
3:45:27
cursor grab. Then if active we going to change this
3:45:35
to cursor grabbing
3:45:42
else we change this to cursor move
3:45:48
like this. So inside here we're going to have a div
3:45:53
class name weightful heightful
3:46:00
like this. Now we're going to also create the frame to bar.
3:46:08
So I'm going to comment this out for now. So below let's define a div
3:46:17
and then let's give this a class name
3:46:25
and let's import let's say CN.
3:46:30
So let's see if can wait for height auto
3:46:38
shadow small.
3:46:47
Then also we could give this rounded uh 36 pixel.
3:46:54
then overflow hidden
3:47:00
like this. So we're going to say let's give this let's set comma here. I say if
3:47:06
selected and two mode is not equals to the two mode in
3:47:14
dot hand then we're going to surrounded
3:47:22
none. So inside here we're going to pass in the I frame. So I'll paste that here. So
3:47:29
we have the ref i frame ref the full HTML. Then we pass in the title of the
3:47:35
frame. Then we also set some box allow script and allow and same origin. Then
3:47:40
we have the width, the maximum height, the height of the frame, border none,
3:47:48
pointer event none, display block and background white. So that is it. So let's test this out
3:47:56
before then we go ahead and work on the frame tuber. So, I'll go into the canvas
3:48:04
uh yeah index.tx and we're going to pass all of this
3:48:10
inside here. So, I'll just call device
3:48:18
frame. So, let's pass this a frame ID. So, I'll
3:48:24
just give this um demo and then I'm going to pass in title. So I'll say
3:48:30
screen or demo screen.
3:48:36
Then I'll just I'll give it an initial position. I'll say X uh let's give this
3:48:43
1, Y 100.
3:48:49
I'll just give this anything. I'll just give this to a two mode. We're going to pass in the two mode.
3:48:59
Then our team style
3:49:04
do we have team? Yeah. So this is going to use the default team does okay we got
3:49:11
the team style from the use canvas. Then I think uh we not passing okay the HTML
3:49:19
content. So u let's pass that here. I say HTML empty string. So I'm going to
3:49:26
paste a demo HTML content. Uh this is it. So you can copy it from this um
3:49:33
inside this file in the GitHub. You can see that this just have a div
3:49:38
and some um the and some CSS classes.
3:49:44
Then I'm going to scroll down now. And
3:49:49
so I'll remove this. We don't use this again.
3:49:56
So we're going to also pass in the scale current skill like this. So let me pass
3:50:06
in the demo HTML content here. And I think uh that is all for now. So we can
3:50:14
test this out. So let's make sure the server is running.
3:50:21
So my server is running. So let's wait. And now we can see that it's showing
3:50:27
properly. So now you can see my once I move my um mouse into the frame, I can
3:50:34
move this out. And if I select this, you can see the handle there. I can resize
3:50:39
this. I can increase this. And you can see or
3:50:44
you can see that it's not taking the full width of the content once we load. This is because we need to handle that
3:50:51
inside the um device frame component. So, but everything is working fine. So,
3:50:56
we just need a tool bar and this one is not moving because this does not have the uh the R&D component. So, if I click
3:51:06
on this now everything is is moving and this become disable then it's no more
3:51:12
selectable again. So, that is it. So let's just go and then work on the uh
3:51:20
let's fix the this uh not able to fill the content take the height of the
3:51:26
content and also let's use the let's remove the demo and use the frame from
3:51:32
the canvas context. So let's head over to the browser sorry to the code editor.
3:51:39
So I'll collapse this now and let me go back inside
3:51:46
inside the device frame. Let's um let's first of all look through
3:51:52
this uh let's the frames. So let's do that here.
3:51:59
So I'm going to remove this box. We don't need this again. And I'm going to remove this um color I added here.
3:52:08
this background red. So, let's do that here. So, I'm going to
3:52:14
say frames. Let's wrap Let me wrap this inside a div
3:52:25
frame dot map
3:52:30
frame and then let's get the index here.
3:52:36
Let's say index number and then let's return this
3:52:46
like this and then let's return
3:52:52
let's copy this device frame and let's pass it here. So let's set the
3:52:58
key to frame do ID
3:53:05
like this. Then you can pass the frame ID here. Frame dot id. Then we also have
3:53:12
the frame frame dot title.
3:53:18
Then we also have frame html content.
3:53:23
Then the scale is okay like this. And the team is okay like this. So we going
3:53:29
to try to because we may have different frame want to position them after each other. So what I'm going to do, I'm
3:53:36
going to say constant base base X is going to be 100
3:53:43
plus index time 100
3:53:49
not 100 480 sorry yeah 480 then we have a constant y is
3:53:57
equals to 100. So now we can set uh the x to base
3:54:06
x while y says 100
3:54:14
like this. So now remember we added in the type uh
3:54:20
frame so sorry canvas type in canvas
3:54:28
let me check it here inside the uh type okay type we added um is loading boolean
3:54:36
so I'm going to um I'm going to handle that here. So what I'm going to I'm
3:54:42
going to say if frame dot is loading
3:54:49
if frame is loading then we're going to return
3:54:55
device frame.
3:55:05
So, we're going to pass in a key index like this. And we're going to add in a
3:55:11
sty here. We're going to say transform
3:55:23
then transl uh translate.
3:55:28
You're going to pass in the base x
3:55:33
um px and also 100 pixel. So let's create device and f skeleton
3:55:41
here.x
3:55:53
r a s e
3:56:00
So frame and then the SC. So I'll just import this.
3:56:09
So import this device frame. So why is not showing?
3:56:24
Okay, I think I made a mistake. So let me go into device current copy this and then let me replace this
3:56:31
with it and let me import this. Now we need to pass in a prop. So I just
3:56:38
go into device frame skeleton. So let's set a type say
3:56:43
type props props type.
3:56:51
So let's get um sty
3:56:57
CSS uh CSS property
3:57:09
CSS property from react by this now we can get sty
3:57:18
let's set the props type sorry the props type yeah here
3:57:24
and now we and use a div. Let's um pass in the class name here.
3:57:32
Let's say absolute
3:57:37
origin center. And let's give rounded
3:57:44
36 pixel overflow hidden.
3:57:53
And then we can have shadow small ring one
3:58:01
by this ring. So let's give this a sty
3:58:07
width 420 pixel. Sorry 420
3:58:16
height 800 background
3:58:23
white and then we can pass in the sty.
3:58:33
So now we're going to define the header which is going to be a div.
3:58:39
Uh let's import currency. So duplicate this here. We're going to
3:58:45
just have class name flex item center
3:58:56
two padding three and border
3:59:03
three. So I'm going to paste the remaining ones here. So I'll just add the class here. Let's first add the
3:59:09
class here. Class name height uh five, width five and then rounded
3:59:17
MD. Let's also have class name
3:59:23
um height four and then width 32. Then below here I'm going to paste in.
3:59:30
So this is going to be the header while this is the phone the phone screen. So just like this save that and this should
3:59:38
it should be fine. So uh let's go into the canvas and now we are done with this part. So
3:59:46
let's go and work on the uh the frame tool bar.
3:59:52
So let's go into the frame device frame and let's scroll down to where we have the frame to
3:59:58
uncomment. So let's pass in the U the prop. So I'm
4:00:05
going to pass in title is selected and then I'm going to also pass in disable
4:00:15
which is going to be equals to force.
4:00:20
Then we're going to pass in couple of method here. Say um um is downloading
4:00:28
image or PNG. We set this to first for now. We also have on download
4:00:37
and PNG. So now we're going to just give this this a method. And we also have
4:00:47
an open HTML dialogue.
4:00:57
So let's return this like this. So now let's create the uh device to bar. So I
4:01:03
just say device uh device frame
4:01:10
to bar.x. So RFC
4:01:18
device frame two bar. So let me change this to device
4:01:26
frame to bar. So let's import this.
4:01:33
Now let's go into the device frame and let's define the type. So let's go into the object here. Let's create a type
4:01:43
uh type props type is equals to I'm going to pass in types
4:01:50
here. So let's change this to use clients
4:01:57
and then I'm going to pass in the prop type here.
4:02:03
So I'll get the title is selected
4:02:10
uh disabled is downloading
4:02:17
then on open dialogue and on downloading download PDF.
4:02:23
So uh here we're going to have a class name.
4:02:31
So we're going to have absolute
4:02:38
let's first for change this to CN. So import CN from
4:02:46
and then I'm going to just pass in sorry
4:02:52
absolute a flex item center
4:02:58
gap two rounded for
4:03:04
and Z index 50. So now we're going to say if selected
4:03:12
we're going to set this to left 1 / two
4:03:18
minus translate x 1 / two
4:03:25
then border add
4:03:33
like this then else Um let's add this like this. So we say
4:03:41
width 150 pixel then height auto
4:03:50
left 10 like this.
4:04:00
So we should also add in um yeah sorry not inside here.
4:04:16
So we should also add in on dark mode. We going to change this to BG uh muted
4:04:27
padding left two padding right for then Y one shadow
4:04:36
as small and then we're going to give this a minimum width
4:04:42
of 202 pixel and then height of U
4:04:50
35 pixel like this. So let's define uh let's set
4:04:57
a sty top
4:05:04
um let's use this here say is selected
4:05:12
- 70 pixel else we just say minus 38 pixel like
4:05:20
this then transform origin
4:05:27
center top like this. So inside the div we're going to have a
4:05:33
div button.
4:05:40
Let's give this a class name of flex flex of 0.8 It's
4:05:48
a cursor or craft
4:05:55
item center
4:06:02
justify it says justify stats
4:06:09
gap 1.5 then add
4:06:15
we saw uh variable
4:06:20
like this. So let's um pass in the icon grip icon
4:06:26
vertical from Lucy React. So let's give a class name of size four
4:06:34
text muted forground
4:06:40
like this. And then we're going to have a div. Let's give this a class name.
4:06:48
Let's use CN. Yeah, let's say minimum um
4:06:56
minimum width 20 uh font medium
4:07:02
X small.
4:07:07
Then uh padding um margin x pixel
4:07:14
then truncate by this.
4:07:23
So if selected best if selected here
4:07:30
we can set uh width to 100 pixel.
4:07:39
So let's pass in the title
4:07:46
here like this. So below the div we're going to have
4:07:52
we're going to check if this is selected. Then we're going to we're going to show
4:07:59
the uh other um buttons. Yeah. So I'm going to add a separator here. So let's
4:08:05
import separator from UI se UI separator. Then here I'm going to
4:08:12
have a button here. So this we're going to have two buttons here.
4:08:19
So let me have let's set here disabled to disabled
4:08:24
then size um icon small
4:08:30
variant cost.
4:08:37
Then let's have class name rounded full
4:08:42
dark mode. We're going to have BG uh BG let's say hover BG
4:08:51
white or 0.2 then hover
4:08:58
muted here then cursor pointer
4:09:05
like this. So here we're going to say on click and this is going to be um an open
4:09:11
HTML dialogue. So let's import the encode
4:09:17
icon here. So let's duplicate this.
4:09:25
And there we're going to just change this to download icon
4:09:33
like this. So here we're going to say uh disabled disabled and here we say it's
4:09:39
downloading like this. Then we're going to check if it's downloading.
4:09:45
If downloading then show a spinner
4:09:50
else we pass in the download icon. So let's import spinner from
4:09:58
let's import this from from UI
4:10:04
UI spinner. So I think everything is okay like this.
4:10:09
Uh okay we need to also add the on click here.
4:10:15
So changes to on download PNG. So, let me remove this and let's test
4:10:23
this out. I'll go into the canvas um components and make sure the server is
4:10:29
running. So, let's head over to the browser
4:10:35
and let me reload this. I think we can see
4:10:50
this is this is um this is far away from the device
4:10:58
it's the device frame. So let me go and fix this. So let's go ahead and fix this. I'll go
4:11:05
into my code editor. And then let's go into the device frame
4:11:10
toolbar. And what I'm going to do, I'm going to add in uh let's add in scale
4:11:16
here. So let's say scale is equals to 1.7.
4:11:24
So let's pass scale. Uh
4:11:30
let's make this optional. number
4:11:36
like this. So add a comma here and let's pass this here. So say transform scale
4:11:42
and pass scale. So I'm going to also change this to flex one. Then this
4:11:48
button we need to also add I'll just wrap this inside a div.
4:11:56
And let's have a class name here. flex item center
4:12:03
cap x like this. So let's check this out again.
4:12:12
So let me reload my browser. Now we can see so I can zoom out now.
4:12:18
So this is showing properly. Uh we can move this
4:12:24
and we can see if we move our mouse over here you can see the drag u the cursor
4:12:30
changes to drag. So this is working um this is working fine. So we need to also design work on
4:12:38
the dialog. So once we click on this um button this will open the dialog to see
4:12:44
the code uh the HTML code of this iframe. And then we also need to fix the
4:12:50
uh the content of the height. I mean the content of the frame should be equal to
4:12:56
the height of the frame. So so let's first of all let's work on the frame
4:13:02
height and then work on the the uh dialogue to show to display the uh code.
4:13:10
So, I'm going to my code editor and then let's go into
4:13:17
let's go into the device frame. So, inside the device frame and then we're going to use a use
4:13:23
effect. So, inside the um get um so inside the frame wrapper if I scroll
4:13:31
down here we can see that we send a message. You can see send we have a send
4:13:36
uh method and this is going to send a post message frame height and the
4:13:42
height. So what we going to do? We're going to listen to this uh we're going to listen to this uh message. So let's
4:13:50
come over here. Let's say use event use uh effect.
4:13:57
So let me just remove everything here. Let me import use effect from React.
4:14:05
Now I'm going to say constant handle message
4:14:10
is equals to event message event
4:14:19
and let's return this. Say if event
4:14:24
dot data dot type
4:14:30
sorry if event data type
4:14:37
is equals to frame height. So, let's go into the
4:14:45
frame wrapper and I'll copy this frame height
4:14:54
and and event
4:15:01
data do frame id is equals to frame id.
4:15:10
Then we also passing the frame ID. Here we can see frame ID.
4:15:16
Then we can say set frame size.
4:15:21
So we get the previous state. Uh we return this. So I'm just going to
4:15:27
open this object the structure the previous state. And then we say height
4:15:34
uh event dot data dot height
4:15:42
like this. So the height is coming from this here. You can see height.
4:15:49
So now we're going to pass this method inside window
4:15:55
dot add event listener message
4:16:01
handle message. Then we're going to return this.
4:16:07
We're going to remove the listener. to say window dot remove event listener
4:16:14
message handle message. So we're going to pass in the frame ID
4:16:25
like this. So now this is going to take up the u
4:16:30
the height of the content. So let's go and and create the canvas
4:16:37
component. So I'm just going to the the HTML cont. So I'm going to collapse this
4:16:44
and then here we're going to define that here. We're going to create a component for that. So let's create the state for
4:16:49
this. We're going to say open uh open HTML dialog.
4:16:54
And then let's scroll down here. We're going to say HTML
4:17:03
ML dialog.
4:17:08
We're going to pass in the HTML which is going to be selected
4:17:15
frame. Okay, we need to get the selected frame from the use canvas. So I pass that
4:17:23
here. So selected frame HTML content
4:17:32
like this. We also need to pass in the team style which is going to be team
4:17:41
style. Then let's also add open
4:17:47
uh open HTML dialog. Then open uh on
4:17:52
open changes or change we set
4:18:00
on open sorry yeah open HTML dialog.
4:18:09
So let's create that or just say HTML
4:18:17
dialog cx
4:18:28
HTML dialog. So let's import this.
4:18:37
So inside the HTML dialog, we are going to add a component from AI SDK. So let's
4:18:44
go into the browser and let's head over to AI SDK.
4:18:51
So I'll just go to AI SDK. Okay, we can see suggestion here. So
4:18:57
let's click on this and uh let's wait for this to load. So A SDK elements.
4:19:06
So, let me scroll down to where we have the uh
4:19:12
let's scroll down to where we have
4:19:18
so let's install uh let's add the code block. So, just scroll down to where we have here is add code block.
4:19:28
So, just copy this or let's use shanti add elements.
4:19:33
So, let me just copy this and let's head over to the code and let me open my terminal
4:19:43
to the server and I'm going to just paste this here and click on enter. So,
4:19:48
let's wait for this to add the air element code block into our project. So,
4:19:54
this has installed or added the components. So let's u go into the HTML
4:20:00
dialog and there we're going to set the type. So I'm just going to pass a type
4:20:05
here and there we're going to get open title
4:20:11
uh team select team style and open change and then the HTML
4:20:18
content. So we can get the full HTML. We say full
4:20:25
HTML is equals to get HTML wrapper. We pass in the HTML pass
4:20:33
in the title and then we pass in the team style
4:20:39
like this. So yeah, let's remove this div and then let's um
4:20:45
get the dialogue from UI dialogue. Let's pass in um open equals to open
4:20:54
on open change on open change and let's say dialog
4:21:04
dialog content on UI dialog. Let's give this a class name of W for
4:21:11
a small or maximum width 7 XL
4:21:20
and then we can give this height of 90 VH.
4:21:26
So inside the dialog content we have dialog header. So let's import dialog
4:21:31
header. Inside here we can import the dialog title
4:21:40
from UI dialogue and then we can pass in the title
4:21:50
like this. I can set this to on title
4:21:57
or like this. Then we have the div
4:22:04
class name relative wait for hyo
4:22:12
overflow um overflow y auto
4:22:19
let's say if and let's import the code block
4:22:25
from ai um where is
4:22:31
So I'm going to just return it like this. Open dialog passes here. And then
4:22:36
let's pass in the class name with full it's auto
4:22:44
code to pass in the full uh HTML
4:22:50
language HTML and then show uh line numbers and then
4:22:58
we can pass in the copy button. So code block copy let's import that.
4:23:04
Now we are done with this. So we can just set this to use client too
4:23:12
like this. So let's go into canvas and let's import this. They say this is undefined
4:23:18
empty string like this. So this is fine. So we're going to pass
4:23:24
in the set handle dialog inside the pass it in the device frame. So I'll scroll
4:23:31
down to where we have device frame here and let's pass it here. So let's just create a method here
4:23:40
open HTML dialog. So copy this and scroll down to where we have the device
4:23:46
frame. Mass it here by this.
4:23:53
Let's also pass it here too.
4:23:59
So let's go into the device frame and then let's uh type I'm going to pass
4:24:05
this here
4:24:13
like this. So let's also get it here and then
4:24:20
inside the um canvas I mean the device frame to bar you can pass it here.
4:24:28
open HTML dialog. Now I think this is complete.
4:24:33
So invoice uh uh sorry the um canvas
4:24:38
frame. So I'm just going to scroll down and let's test this out. So I'm just going to copy the uh demo HTML and just
4:24:46
pass this here if it's empty for now. And let's test this out. So make sure
4:24:51
the server is running.
4:24:57
Now we can see that this is working and you can see that it's taking the width of the height of the content. So you can
4:25:04
move it. You can see drag it up like this. But if you reload this is going to take the width of the content. And then
4:25:12
uh this is moving the same way. And if I click on this dialog icon, you should be
4:25:18
able to see uh the the HTML content. So
4:25:23
it's moving. You can see everything is moving. Everything is working fine. You can click here to to copy the HTML
4:25:30
content. So uh this is working fine. Uh we can
4:25:35
change the team and we can see
4:25:40
everything is working fine. So we can see the team is working fine. We can switch team and everything is working
4:25:48
perfectly well. So let's go ahead and work on the uh configure and set up in
4:25:54
justest to handle the generation the AI generation. So I will just go back to
4:25:59
the home screen.
4:26:06
So when the user type in a prompt here we trigger the background service to
4:26:12
generate the um to handle the generation the AI generation. So we're going to go
4:26:18
ahead and set up inest. Ingest is a platform that offers background jobs and
Inngest Setup & AI Generations
4:26:24
workflow. So it let us to run async task or tax without blocking the application
4:26:29
for the user. So we're going to be using inest to handle our AI generation. So when user type in a prompt the user the
4:26:36
AI generation will be handled with inest. So let's go ahead and make sure to sign up. So once you click here to
4:26:43
sign up already sign up already. So you're going to be brought to this page to create an organization. So I'm going
4:26:48
to just fill in my uh name and also uh this log. Then click on create
4:26:54
organization. So let me just change this.
4:27:04
So I'll click on create organization
4:27:10
and this should create the account for me. So I'm just going to skip this.
4:27:17
And here you can see um we've created our inest app. So I say okay I already have an inest app. You can use this. So
4:27:25
I'm just okay you can use this command to set up inest um startup inest service
4:27:30
in your local machine. But the first thing we're going to look at here is run. So in the run section, this is
4:27:37
where we're going to see when we trigger u the inest function. We're going to be able to track each of the run here. Then
4:27:45
we have the events and then we have um the function. So when we write the inest function, we are going to see um list of
4:27:52
them here. So what we going to do now is to go to the documentation. So I'll just
4:27:58
come over open a new tab here and I'm going to search for inest
4:28:05
in nextJS like this and then you should be able to
4:28:12
see the documentation. So you just click on the code start with nextj
4:28:18
and then we can scroll down and we should select app router. Now the first
4:28:23
thing we're going to do is to install inest. So just copy this and let's go to the uh code editor and um let's install
4:28:31
this. Let's install inest. I'm going to open a new terminal
4:28:38
and I'm going to paste this here. So this is going to install inest uh into
4:28:43
our code. So let's wait for this to install.
4:28:49
So while this is installing, let's go over to the browser and let's look at through the documentation. So um yeah,
4:28:55
we can see that we want the inest desk server. We're going to copy this. So now we're going to leave this for now. So
4:29:01
let's go down to how to write the inest setup inest. So the first thing we're going to do is to create inest client.
4:29:09
So we are going to have we're going to create the inest API. So the first thing
4:29:14
is to create the inest client. So we're going to create a folder called ingest and then create a client client.tx. So
4:29:21
let's copy this and let's go back to the code and create that. Then after that we're going to create the API route as
4:29:28
mentioned there inside the API app/ API folder. So let's just go back to the
4:29:35
code and we should make sure this is already installed. So let's create a folder
4:29:40
here. So I'm going to create in the app in the root directory and just like this or we can move it
4:29:48
inside the le folder. So I'm just going to create
4:29:55
client tx here and we're going to just paste this here. So now uh we can give this a
4:30:03
name. So I'll just say x design app like this. So let's go over to the
4:30:10
browser to the documentation and then we should copy this. So let's copy this and
4:30:15
let's go back to the code and let's create the API route for inest. So go
4:30:21
into API folder then let's create inest and then route
4:30:29
cx and let's paste this here.
4:30:34
So now we need to point to where the inest and client is. So I'm going to say uh slash
4:30:43
sorry
4:30:53
I think by by this index client. Okay I think it was correct. So we're going to
4:30:59
pass in the function once we write the function. So let's go back to the code and copy example of a function. So I'll
4:31:07
go back and then scroll down to where we have write your first inest function. So
4:31:12
we're going to use create function. This is an example of inest function. So we're going to create function txs. So
4:31:21
just copy this and then let's go back to the code
4:31:27
and then let's scroll down to. So I'm going to create a folder and call this functions here. So we can
4:31:34
have list of functions. So let's create hello world function.
4:31:41
Hello world tx.
4:31:47
And let's paste this like this. So now I'm just going to move this up like this. We have the inest create function.
4:31:54
And then this is the ID of the function. We also have event name and then we have
4:32:00
the method that like gives us the event and step. So this step just sleep
4:32:06
tells us to wait for some seconds before running this. So we're going to look at
4:32:12
how to do this. So let's go ahead and test it out. So let's just first of all go to the documentation
4:32:18
and then let's scroll down. Then we need to pass the function inside the index
4:32:24
route. So just copy the htm hello world in interest function and let's go to the
4:32:32
route which we created and let's pass in the function here. So let's import this
4:32:41
and then let's go back to the documentation again and let's scroll down. Now we need to we
4:32:48
need to run the server so we can test it out. So let's just go up where we had
4:32:54
the to run the dev server. So this is it. So copy this and let's go to
4:33:02
um to the code editor. Open the terminal. Make sure uh your server is
4:33:08
running here. You can open a new terminal and paste this here and click on enter. So this is going to run in
4:33:14
your server and then it's going to give us a local a domain a local do. Let's
4:33:20
click on yes. Type in yes.
4:33:25
It's going to give us a local route. So, we're going to test this on the browser.
4:33:35
So, the engine server is running. So, it's running at local 8288. So just copy
4:33:41
this and let's go back to uh the browser
4:33:46
and then I'll just open I'll open a new tab.
4:33:51
Let's let me just open this tab here and paste this. So I'll close this.
4:33:59
Now I'm going to paste this and click on enter. Then this should open the same interface we have here we have in the
4:34:06
inest app. So well this is this is um the local host. So um we have the run we
4:34:13
have the same event but here if you click on the function we should be able to see okay I think
4:34:19
we're not able to see the functions. So I think we have some issues. So let's
4:34:24
go back to the code. I think I need to scroll down to where we have the
4:34:30
middleware the proc.tx. So I'm going to uh tell and kindle to
4:34:36
kind to exclude this uh ingest API. So I say API/ingest
4:34:46
just like this inest. Then save this. I think this should
4:34:54
uh this should remove the stop the uh from blocking the interest API.
4:35:01
So now let's try to reload.
4:35:11
We're not seeing the inest function yet. So let's go back to the code again.
4:35:21
So I think everything should work. So let's just go back again and test it out. So let's go to the browser.
4:35:29
And it has showed up here. So you can see that it's working. So if I reload now, we should see the inest function
4:35:36
which we created. Now to invoke this function to start running, we can click
4:35:41
on this invoke. And once you click on this invoke, you can click on okay. You can pass in data
4:35:49
if you want. Just click on invoke function. And then if you take us to the run section, then you can see that it is
4:35:56
running. And you can see that we've triggered the function. So once we click on this, you should see that uh it has
4:36:04
completed already. We have the wait a moment. Uh then we have the finalization
4:36:11
and then we can see the hello@gmail.com
4:36:18
like this. Let's go to the function again. Let's try to invoke. We can
4:36:24
change the pass a different data. I'll just say um
4:36:32
hello by this
4:36:53
like this. So I change it to hello. Hello. And if I click on uh invoke u
4:36:58
function then you can see that this is going to run this. And then the last uh
4:37:05
finalization we can see uh okay because we change this to
4:37:12
we should be able to see this here.
4:37:18
Okay. Oh yeah we can see hello here. Right. So this is
4:37:24
this is working.
4:37:31
So it's working. So the reason why we have undefined is because we we inside the inest function. If you go back to
4:37:38
the inest function, we should see we are pointing events data.
4:37:43
But if we set this to hello like this and if we head back to the code and try
4:37:50
to try to run this again if I click on this and click on invoke now this should
4:37:55
run and it should complete finalize and then we can see hello hello. So this is
4:38:01
working. So let's go ahead and create uh let's go ahead and create the inest
4:38:07
function for generation. So I'll just go back to uh the code
4:38:14
and then let's create a function. We call this generate
4:38:20
uh screen cx.
4:38:26
So let's copy the same thing we have here. So I'll copy this. Come over to
4:38:31
generate screen and paste this here. So I'm going to change this to generate
4:38:40
generate screen function
4:38:45
and then we can give this an ID. So I'll just call this and generate
4:38:52
UI screen and then we can give this an event name.
4:38:57
We can say generate the screen
4:39:04
UI like this. So now we have the we can remove this.
4:39:11
So we need to get the data. So we need to get the data from the event. So we're going to send couple of um data. We're
4:39:19
going to send uh which is going to be equals to events do data structure this.
4:39:26
We're going to send the user ID. Sorry, the user ID.
4:39:34
Then we're also going to pass in the project ID. We're going to pass in the
4:39:39
prompt of the user. And then we're going to pass in the frames.
4:39:44
And then we're going to also pass in uh the team which is the existing team.
4:39:54
So the reason we are passing the team and the fra frame is because uh we are
4:39:59
going to need this when we try to regenerate like um if we go into the uh canvas
4:40:08
here. So let's go into components canvas and comp canvas floating tub
4:40:15
sorry we have remember we have this um prompt impute here. So inside the canvas
4:40:22
users can type in and generate a new screen. So we need to give the user the AI a context of what other screen or
4:40:31
frame it has created before so that it can use those same context and generate
4:40:36
a new screen. So that is it. We're going to do that. So now
4:40:42
we are going to say constant is regenerating or yeah regeneration. So we're going to
4:40:50
make sure to confirm if we are regenerating or is a new generation. So
4:40:56
we're going to say a frame length
4:41:01
is greater than zero. So uh the next thing we going to do now
4:41:07
is to perform different step. So we're going to run different step. So this
4:41:12
step is going to help us to run um to run the tax in different complex tasks
4:41:19
into different smaller uh tasks. So we're going to first of all the first
4:41:24
thing we're going to do is to is to um so when the user type in a prompt we
4:41:30
want to first of all analyze the prompt and then the AI is going to generate the
4:41:35
number of screens which we're going to generate. So I'm going to say analyze
4:41:44
analyze the um the prompt or we can say analyze or plan.
4:41:51
We can call this planning mode. So we're going to use the step. We're going to say constant analysis
4:41:59
is equals to a step dot. You can see we have different
4:42:05
options here. So we're going to use run and then we're going to give this one a name. So we're going to say analyze
4:42:15
analyze and plan screen.
4:42:23
And then this is going to return uh a function.
4:42:35
And then here we are going to write in the uh we're going to call the API the AI sorry the AI to uh generate the
4:42:45
screens and also the visual description. Then once we did do that we're going to
4:42:50
then copy this again and we're going to paste this here. So this is going to this is going to
4:42:58
handle the actual generation here of each screen.
4:43:03
So let me comment this out. This is going to uh the actual
4:43:10
generation of each uh screens
4:43:17
that we got from the analysis. Then after we do that we are going to run the last step
4:43:25
uh which is we are going so I think we're not going to run any other step. It's only two step we have here. we have
4:43:31
the uh analysis or planning mode. Then we have the actual generations. So
4:43:37
inside here we're going to be using the AI SDK and we're going to be using AI SDK the object uh generate object. So uh
4:43:48
let's just go and look at that in the documentation. So if I go over, let me open this and
4:43:55
then go to AI SDK generate object
4:44:01
and you click on this
4:44:06
and then you should see the example of how to use AI SDK generation object. So
4:44:12
we're going to be using Z to pass in the schema which is the output schema and then the user we're going to pass in
4:44:18
user prompt. Here we can get it the data in form of JSON. So we can use AI
4:44:25
gateway but we already have open router. So I'm going to test with open router
4:44:31
but I'm going to surely use AI SDK. So uh I mean AI gateway because I have some
4:44:38
credit already. So if I go to uh dashboard
4:44:46
su if I click on AI gateway here
4:44:58
you can see that I have some credit here and you can click here to buy um credit
4:45:04
if you want or you can just stick to open router.
4:45:12
So, let's just go ahead and write the the schema and also the uh
4:45:18
and also the generate object. So, I'll just go to the
4:45:24
code and then let's first of all write so I'll put in the schema here. So, I'm
4:45:31
going to paste it. So, let me first of all import Z
4:45:37
from Z Okay, we need to install Z. So, I'll
4:45:43
cancel my server here and I'm going to say mpm install Z.
4:45:51
So, let's wait for this to install. So, this has installed. So, I'm going to just import S here.
4:45:59
And let me make sure my server is running.
4:46:05
And then I'm going to paste the uh schema. I've written it already.
4:46:10
So this is a schema, the analysis schema. We have the team. So you can copy that from the canopy from the
4:46:16
GitHub. So um the AI is going to select the team. It's going to pick the team
4:46:23
from the team list. If you go to teams, so it's going to pick the team from the
4:46:29
team list, out of the team list we have. Then u it's going to give us an array of
4:46:35
on the screen. And then we're going to have the ID of the screen, a unique ID,
4:46:40
the name, the purpose, and the visual description. And this is like a sample
4:46:46
uh a sample of how description is going to look like. And with this now, we can
4:46:51
use this to feed into the AI so the AI knows what to give us as output. So I'll
4:46:57
go into the action action.x the X. And I'm going to just
4:47:02
copy this open router because we're going to need this. Uh let's just copy everything like this.
4:47:10
And let me go back to generation function. And then inside the uh inside
4:47:17
the analysis, we are going to paste this here. But instead of generate um text, we're
4:47:26
going to use generate objects. Uh let me save this. So here I'm going
4:47:32
to say object
4:47:37
and we need to pass in the schema here. So it's a schema
4:47:43
analysis schema like this. So let's import open
4:47:49
router sorry open router from um lib open
4:47:55
router and I think uh this is it.
4:48:03
So since we are going to handle for both um the regeneration and also the actual new generation we
4:48:11
are going to u we going to check constant analysis prompts. So we're
4:48:18
going to change pass the analysis prompts here. Say analysis prompts which
4:48:23
is a user pro going to say if is generation
4:48:28
then we going to pass in this. So I'm just going to um just paste this here.
4:48:36
So we are going to pass in the user request which is a prompt selected team existing team. Then we have to pass in
4:48:43
the context HTML. But since um we are and this is a new generation we are
4:48:49
going to say user request and pass in the prompt. So we need to get the context. So I'm going to say constant
4:48:56
context HTML. So just copy this
4:49:02
paste it here. And then we're going to say u is regeneration.
4:49:10
Then we can say frame. So we're going to get and slice
4:49:16
of minimum. Let's get three or four.
4:49:21
Then we're going to map the frames. It's a frame is of type
4:49:28
frame type.
4:49:34
And then we're going to say frame dot HTML content.
4:49:40
And then I say does join
4:49:47
you like this. So say else empty string like this
4:49:55
just like this or there's no even need of using the is generation since it's
4:50:00
going to be used for only uh is gener regeneration.
4:50:05
So with this we can then use the analyis prompt and pass it here
4:50:12
just like this. So now we need to define the system um prompt. So I have the
4:50:17
system prompt already in the GitHub. So I'm going to create a a prompt file
4:50:23
here. So say prompt tx here. So I'm going to paste all the
4:50:28
prompt both the prompt for analysis and the prompt for individual for the generation. So I'm going to paste all
4:50:35
the prompts here. So let me scroll up so we can look at it from the beginning. So
4:50:40
the first prompt is a generate prompt. So I'll just change this to teams.
4:50:47
So the first one we have is generation system prompt. So we have the prompt to say you s um design AI critical output
4:50:56
result. So we're using um u for the avatar we're telling AI to use the
4:51:03
the avatar CC which is a generation random um avatar. So it's going to use
4:51:09
them. We also have time to also use um to not select images
4:51:16
or or splash and link. Then we also have critical override color priority. So
4:51:23
we're going to be feeding this with colors. So like the team we mentioned is going to be using the team. So we also
4:51:29
have integrates the technique together soft place and then we have the layout
4:51:36
we have mobile app structure bottom navigation if needed the chat and if I
4:51:42
scroll down then we have bottom nav navigation then we have the uh no
4:51:50
navigation on splash on boarding screen or screen then we see that we loop through the uh the team list
4:51:59
and then we pass it into the analysis. Now we can see the analysis point UI
4:52:04
lead UIX mobile app designer. So if user based on user request if one specify
4:52:10
screen is screen with the ID name propose and visual description then if
4:52:15
uh look we pass in the bottom rules inside the analysis prompt then we give
4:52:21
it an example of a good visuals. Then we also have special the available
4:52:28
theme um style and we have the available font and variable. So this is the point. Now
4:52:36
we can use this inside the generation screen function. So I'll just copy this
4:52:42
and then I'll head back into generation screen. Then I'll replace this with it.
4:52:50
So let's import uh this. Now we've uh now we can use the object.
4:52:58
We can return the object. So I just say return
4:53:03
uh I'm going to destructure the object here.
4:53:08
So I also want to pass the uh the team. So I can say uh team use.
4:53:20
Okay, what I'm going to do here, I'm going to say okay, so I'm going to say constance
4:53:26
um team to use is equals to if is regeneration.
4:53:34
Then we're going to pass in the existing team. Um this we passed in here.
4:53:40
Then we are going to use the new team selected by the AI.
4:53:47
And then let's just pass in use like this.
4:53:54
We can set let's just like this. Now we need to
4:54:01
we need to also update the uh project. If you look at the um Prisma schema,
4:54:10
we have the team. So we're going to update the team. So if it's not
4:54:15
regeneration we need to we need to update the project uh with the team. So
4:54:21
say if not is regeneration then I wait Prisma.
4:54:28
So import Prisma from let me import that here.
4:54:39
import Prisma from at lib
4:54:46
/ Prisma. So press at Prisma Prisma.date.
4:54:56
So we're going to update where um ID is project ID.
4:55:05
User ID is user ID.
4:55:11
Then pass in the data team
4:55:17
to use like this. So now we we are done with the analysis step. So now this is
4:55:24
going to run first and if there's any issue we can retry it. Then once it is
4:55:30
done we can get the output from here. Now if you hover over this we can see
4:55:35
the team screen and team to use. Then we are going to uh we're going to
4:55:41
implement the the next step which is to generate each of the screen. We can see
4:55:47
that the screen is an array of objects. So we're going to loop through the screens and then generate a screen. So
4:55:54
I'm going to do that here. So let me remove this.
4:56:00
Let's remove this. So we're going to use for loop here.
4:56:07
We're going to say let I is equals to zero. Then I is less than
4:56:14
analytics.length length
4:56:22
then I ++ like this and then we can say constant screen plan
4:56:30
is equals to analytics
4:56:35
sorry analytics screen and with the index I mean with the I then we are
4:56:43
going to get the team So say selected
4:56:49
selected team um is equals to team
4:56:56
do find pass in the team
4:57:03
say team do ID is equals to um analytics
4:57:12
analytics dot we can use theme to use like this. And then now we can combine
4:57:22
the uh team the team style with the sorry the team
4:57:28
sty plus the base variable.
4:57:36
So let's just do that. So here I'm going to say full team. Let's import the base
4:57:41
variable. We have the full scene selected sty and
4:57:46
empty string if if we have no or undefined. Now we need to generate this.
4:57:53
We need to use uh the step say await step
4:57:59
run. And then we're going to give this a
4:58:05
name. Generate screen
4:58:12
dollar sign. And then let's return a function.
4:58:20
And then inside here we going to do the same to we have here. Let me just copy this.
4:58:30
But this time we are going to be using uh we going to be using generate text
4:58:35
instead of generate object. So I'm just going to remove this. Then
4:58:42
I'm going to say generate text by this. So let's import generate text from AI.
4:58:50
And this will not um use schema. So we going to also add the prompt there.
4:58:58
And there we're going to import the generate system
4:59:04
like this. So this is going to be using two. So I'm going to add in a splash on
4:59:10
splash tool so the AI can access images. So we're going to add tools here.
4:59:21
And this is also going to have stop one.
4:59:28
Sorry, stop count
4:59:36
five like this. So, let me add comma here.
4:59:42
So, since we adding twos here, we want to allow the AI to to loop through to
4:59:47
keep on retrying, we run till it give us the final answer and we're giving it a maximum limit to five. So I'm going to
4:59:55
pass in the um prompt here with the screen from the screen plan that we can
5:00:01
get the screen ID name and um propose with also the visual description. So I'm
5:00:07
going to paste that here. You can also copy that from the GitHub. So I've pasted it. Now we can see we have the
5:00:13
screen and the screen the screen and screen purpose visual description and
5:00:19
also the team style. Then we have the critical requirements some other small
5:00:26
requirements we we call the AI to look out for. And once this is done we can
5:00:34
extract the uh the HTML from the response because this is going to also
5:00:39
have like a two-step object. So we need to really get the HTML content from the
5:00:45
string. So I'll just say let final HTML is equals to wiz
5:00:52
text like this inside empty string like this then we can match we going to use a
5:00:58
regular uh we're going to match from the div where we have the div and then we
5:01:04
can get the match then we say final HTML is equals to match
5:01:12
then we say match index of zero else final HTML like this.
5:01:20
So if we're able to match this then we can see final HTML is equals to final
5:01:26
HTML replace
5:01:31
then we're going to slash and then we're going to pass in three slash key and
5:01:38
then add comma and empty string like this. So we're going to replace we're going to remove this embed from the uh
5:01:45
from the HTML string and once that is done then we can create the frame each
5:01:51
of the frame we can create a frame. So say constant frame
5:01:58
is equals to await prisma
5:02:07
dot frame dot create
5:02:12
data pass in a project ID
5:02:20
to screen plan name
5:02:28
and then we pass in the HTML content
5:02:33
final HTML and then
5:02:39
think that is it then we can return this. So let's just return
5:02:47
sorry return success true
5:02:54
we can pass in frame uh frame
5:03:02
by this. So we are done with all this step. So if
5:03:07
I collapse this this is it. So let's go and then write the a tool
5:03:15
for the onsplash. So I will just create a file inside the
5:03:21
uh interest function. So I'll just say totx here
5:03:29
and to create two we can look at a SDK or let's just do that here first. So I'm
5:03:35
going to import two from AI export constant
5:03:41
on splash two
5:03:47
is equals to two and this is going to have description
5:03:57
and we're going to also import sword.
5:04:07
We're going to pass in description. We're going to also pass in the MP schema which is set s object
5:04:16
query and this is going to be set dot screen
5:04:26
describe.
5:04:34
We are going to also have orient orientation
5:04:41
setscape
5:04:52
postrit.
5:04:57
And the last one like this. Then we're going to set the
5:05:04
default to landscape.
5:05:11
So I'm going to also provide the description and also the describe for this. And um I think we are done with
5:05:17
this step. Now we need to execute define execute
5:05:25
like this async and let's return a function here. Now we
5:05:31
can get the impute schema here. We can get query and
5:05:37
orientation. So now we have try catch here. So let's
5:05:43
first of all go and u get the unsplash API key or access key. So make sure the
5:05:50
server is running. Let's go to the browser and then I'm going to
5:05:56
put search. Just search for onsplash API key and once you search for this click
5:06:02
on this link it should take you to this page. Now if you see developers now we
5:06:08
can see how to use uh splash. You can see just scroll down you can look at the
5:06:14
documentation uh like this. So let me uh scroll up.
5:06:20
Click on the top corner here to sign up. So I already signed up already. I can view my profile and all this. So, I'm
5:06:27
just going to click on account setting. Uh, sorry, not account setting. Once you
5:06:32
create your account, you should click on uh app. It's going to ask you to create a new app. So, I've already created app.
5:06:39
So, I just click on Facebook new app. Just accept
5:06:45
uh all of this. Then
5:06:51
click on acceptance. Give this a name. I say X design
5:07:00
and let's click on create. It's going to ask me. So I'm just going to say X design AI for mobile
5:07:09
design. Simp click on create app
5:07:14
and then this should create the app. You can scroll down to AP um access key. Just copy this. We just need this. So
5:07:23
once you copy this, let's just go to the code and going to your env.
5:07:32
I'm going to just paste it on splash
5:07:37
access key. Go back to the documentation on splash
5:07:43
and let's see how this work. If we go to scroll down, let's go to click on documentation and then scroll down
5:07:50
first. You can see how to authenticate. If you scroll down to the bottom,
5:07:56
um yeah, you can see we have to we can pass in a client ID with the access key.
5:08:02
So this is a public authentication. Then uh if you scroll up, then we can
5:08:07
click on search photo by keyword. Then once we scroll, we can see we add query
5:08:12
in the uh two schema. Then schema in the onlash two. Then we also have the
5:08:20
rotation and you can see that we you can filter by landscape, portrait and the
5:08:26
last one. Then once we So that is all. Let's just go back and complete that. So
5:08:31
I'm just going to go back to the code and then let's go to the two.x
5:08:37
and then we can use this inside the uh Unsplash tool. So I've pasted a description. We can see we have search
5:08:44
for high quality images from Unsplash and use this when you need to add in
5:08:50
image tag. Then we also have the describe for the query. Then we also
5:08:55
have so I'm going to also pass the um API which I've copied from the
5:09:01
documentation. So I'm just going to paste it here so we can look at it. So here we can see that we have the on API
5:09:08
search photos query. We encode components query. Then we pass in the
5:09:15
page one. Then we have client ID processor or API key. So make sure it's
5:09:21
similar to what we pass in here. Assess key. So let's go back to the tool. So if
5:09:28
you have written this just let's get the result. So say this is going to be
5:09:33
equals to await response to JSON.
5:09:40
And let's get the results here.
5:09:45
So inside there and there we're going to say return
5:09:52
result.
5:09:58
We get the first index here dot
5:10:04
regular else empty string
5:10:10
and then we can just return empty string like this here if there's any error. So I'm just going to remove this error like
5:10:18
this. So we can use this inside the uh
5:10:24
generate screen. So inside here, so we're going to just call this search onsplash and I'm going
5:10:31
to just import the onslash to. So we are done with this. Now we can use this same
5:10:39
generation screen generation screen. We can use this for
5:10:45
this to be screens. So I'll change this to screen.
5:10:54
So we can use this both for new generation and for new project
5:11:01
generation and also for existing uh
5:11:06
projects. So this can be referred to as existing generation regeneration.
5:11:12
So I'll just leave it like this and then let's just add this um generate screen
5:11:18
in the uh inest route. So I'll just say route x forest.
5:11:26
You can pass this here now. So let's just import this.
5:11:35
So now how do we trigger this uh generate screen inside the API? So if I
5:11:41
go into uh API project
5:11:47
route, if I collapse this, then the post So once a user type in a prompt we create
5:11:55
the project of the user we create a project for the user then we have to trigger the inest function which is the
5:12:03
generate screen. So um let's go to the documentation to see how this is done.
5:12:09
So if you go over to u the ines for next year. So I think I've
5:12:16
closed that. So let me just search for it again
5:12:22
next year documentation. Then click on this. Now if you scroll down to the bottom
5:12:30
scroll down now we can see trigger from code. We can see that if you go down here
5:12:38
this is how to trigger. We're going to use the send function. So we're going to just copy that
5:12:47
and we're going to pass in the payload. So we can use this. So if you go back to the code and let's come over here and
5:12:55
paste it here. So let's import inest from client.
5:13:02
Now we can just change this to use the name that is the event name. So I just
5:13:08
copy this event. go back into project / project
5:13:16
and then I'm going to change this here. So we're going to pass in the data. If
5:13:22
we go into generate screen, you can see that we have the user ID um prompt frame
5:13:29
and then team existing team. So I'll go into route and then let's pass in the uh
5:13:38
user ID. I think user ID is the first user ID, project ID, and then prompt
5:13:45
just like this. So I'm just going to make sure I wrap this inside try catch.
5:13:59
So just return error
5:14:04
console.load error like this. So make sure everything is
5:14:11
correct. Make sure the inest name is correct with the event name here.
5:14:16
So I think uh that is all. So let's make sure our server is running and also the
5:14:21
inest server is running. So if we go back to the browser
5:14:27
and if we check this inside the inest not this one. So if I reload this if I
5:14:33
go back to function now we can see generate UI screens. So you can trigger
5:14:39
this here by providing the data but we're not going to do that from here. So I'm going to load my uh local host and
5:14:46
3000. So I've load my my local 3000. So I'll go back to the home screen.
5:14:53
Let me go back to the home screen. Now, let me let me type in a P. So, I just
5:14:59
say uh design a blackness screen. Uh let's just keep this. It says simple P.
5:15:07
So, let's pick uh tracker app screen.
5:15:13
So, hopefully this should work. So let's just click on uh just click anyone from
5:15:19
the uh suggestion and let's click on design and let's see.
5:15:26
So this is the old demo screen. So this is not needed. We should go to inest
5:15:31
here and see if this is running. We can see that this is running
5:15:37
now. Why is it not working? Okay. Cannot read. So we have some error
5:15:44
here. We have some error. So let's just cancel this.
5:15:51
Uh undefined length can be property of undefined l.
5:15:57
So I think it's coming from I think it's coming from the
5:16:08
so I think uh let's let's check if this is an array first. So I say um array
5:16:16
array frame frames then we can do this then we can use this here. So just
5:16:22
remove all of this then we can check this if this if is generation
5:16:30
then we can say empty string like this or should we change this to if uh
5:16:36
existing generation let's change it to existing
5:16:44
existing generation if is existing
5:16:52
existing generation like this like this
5:16:59
then pass this here if it's existing generation I'll pass in
5:17:06
this so this should uh this should not throw an error
5:17:12
so let's try it out again make sure the server is running
5:17:18
and let's go back to the browser. So I'll just quickly go back to
5:17:24
the then I'm going to click the same prompt again then click on send and this
5:17:31
should redirect us to this page. So let's click yeah let's click on
5:17:37
running. Now we can see analyze prompts. You can see that it has analyzed the prompts. It has given us the ID, name,
5:17:44
purpose, visual description. Um, let's wait for this to complete.
5:17:53
So, I think it's done. You can see the HTML content. You can see I the project
5:17:59
I title. It has saved the project, the frame. So, now if I go back here and reload this,
5:18:10
something is wrong. We can't see the frame. So I think it's because of
5:18:20
So let's go back to the code. Let's go to the context uh canvas
5:18:28
context. I think it's because of this. This is not updating.
5:18:36
So let me try and use use effect again. I don't know why it's not working.
5:18:41
Use ephs.
5:18:52
Let me import this. Set initial
5:18:59
a set frame.
5:19:07
If
5:19:16
So this keep on showing some error here. So if I hover over this, you can see that React is saying that we can use
5:19:23
this in the use effect and it has point us to a to a link here to the documentation. So you go to this link.
5:19:30
So I'm just going to go to the link. I've copied it and I've past it in the browser. So once you come over here you
5:19:37
can see you can read through this and see where we don't need to use this effect. So we recommend we don't need to
5:19:42
use this effect uh inside that uh inside the context we have there. So um you
5:19:50
have some examples here or if I click on adjusting some states when a prop
5:19:56
changes and if I scroll down to uh think here
5:20:04
let me search for it previous. So yeah if you come over to this place
5:20:11
just scroll down to adjusting some prop here below here you can see how we say
5:20:17
adjust the state by reving. So we can use this uh the previous state then we
5:20:24
can check if item is not equals to previous state then we can say set previous item and set
5:20:32
selection. So no need for use effect for this. I'm going to use this um u way and
5:20:38
handle this. So I'm going to go back to the code and I'm going to remove this um
5:20:45
use. So since u we are tracking with the we have the we have passed in the project ID. So we're going to make use
5:20:52
of project ID change um change. So I'm going to uh then if you go into the page
5:20:59
ntx you can see that I pass in project ID here. So if I go over back to the uh
5:21:08
the canvas um provider here if I come down to here.
5:21:14
So once u the user once we reload the page or navigate to the project uh
5:21:20
project ID page. So what we going to do? We're going to have the previous state the same way we saw in documentation. So
5:21:27
I'm just going to paste it here. So we have the previous project ID and set previous project ID. Then we pass in the
5:21:33
project ID. Now we say project ID which is this. It's not equals to project ID.
5:21:39
Then we set uh previous project ID. Then we set the frame. Then we set uh team
5:21:47
ID. And if there's no team ID, we just set team uh index
5:21:53
um zero and ID. Then we can just reset the uh the frame ID too. So now this
5:22:03
should hopefully this should work. So let's save this and let's go back to uh
5:22:09
the code and I mean so to the browser. So just click on this and let me try and
5:22:14
reload. Now if I reload this, this should load and
5:22:20
then you can see that it has updates the team uh the team and also this is the design
5:22:26
here. So I'm going to remove this demo screen which is not needed. So we can
5:22:32
see uh the AI was able to generate the screen for us here. This is not that
5:22:38
good like that but we are going to change the model to uh use Gemini 3. So
5:22:44
we're going to look at that. We're going to change that to use Gemini 3 which is better which can generate something like
5:22:49
this. So what we are going to do now is when users generate
5:22:55
um type in a prompt we need to be able to track the uh status of the
5:23:02
generation. So we're going to be using inest real time. So inest also has what
5:23:07
we call inest time. So if I go back to inest documentation
5:23:15
uh then I'll go back to let me scroll down or let me search for
5:23:21
this. I'll say inest real time.
5:23:27
So if I click on real time in real time uh if we scroll down now we can see how
5:23:33
to add it. So we can install inest real time. Then we can update the inest
5:23:40
function the client uh client.tx. We can add in the middleware real time
5:23:45
middleware. Then then we can do this like this. We can use the publish now.
5:23:52
So we can get the publish from inside the inest function. Then we can publish
5:23:57
uh events. Then we can listen to we can subscribe or listen to using the uh I
5:24:03
think events. No, not this. We're going to be using
5:24:09
the hook the use in subscribe hook. We're going to be using this to keep
5:24:14
track of different events being sent to from the um inest function to the uh
5:24:21
client side. So let's install this real time.
5:24:26
So, copy this and let's go back to the code and let's install this.
5:24:34
So, I'm just going to cancel my server and I'm going to just paste this here
5:24:39
and click on enter. So, this is going to install. So, let's go and copy
5:24:45
uh let's go and copy the other step which is to add the middleware. So I'm going to just copy everything here and
5:24:53
I'll go back to the code. So this has already installed. So I'll just run my server and then I'll
5:25:00
go into the client in cx here.
5:25:05
So we just need only this. I'm just going to move this to the top and the middleware. So I'll just remove
5:25:12
this.
5:25:18
then I'll just pass it here like this. So after this now let's go back to the
5:25:26
documentation and then we can scroll down.
5:25:34
Think it say we can create an API. Okay we're going to create the
5:25:40
subscription token. So we're going to create action app action subscribe
5:25:47
token. You can call this real time. So, let's just copy all of this. Uh, we can
5:25:53
copy this. And let's go back to the code.
5:25:58
So, I'm going to create um inside the action. So, I'll create real
5:26:05
time. CX. So, you can call it get
5:26:11
then we can change this to use server.
5:26:17
So, I'm going to close this and paste. So let me paste it here.
5:26:22
So let's just remove this. So I remove all of this.
5:26:28
Remove this. So let's go into um the API routes
5:26:36
project. And let's just copy this. Let me copy this from kind. And then I'm
5:26:43
going to go into real time.tx inside the action folder. And I'm going to replace this with
5:26:50
this like. So I'm going to just import this.
5:27:00
So let me just import this. So I'm going to remove
5:27:07
this like this. So I'm going to change this to user
5:27:13
ID. So now when we define the topic, we going to come over here and pass the
5:27:20
topics here. So now we have this.
5:27:25
Now let's go and uh implement the uh to publish the
5:27:31
um events and then we're going to come back into the um context the canvas
5:27:37
context to listen to um the event. So I'm just going to go back to generation
5:27:44
function and then the first thing we're going to do is once we once we uh trigger the
5:27:53
function we are going to publish. So let's get a publish here.
5:27:59
So we're going to publish the events and tell the client that it has started to
5:28:04
run. Then we're going to show running. So if you remember in the canvas context
5:28:11
we have different loading status here which I have defined here.
5:28:16
So we have one analyzing generating and completed. So we're going to be sending out these um different events to the uh
5:28:26
to the client side. So I'm going to go back to generation function. So we need
5:28:31
to define the channel which we are going to be sending this. So if I go back, so
5:28:37
let me just define this. If we go back to the documentation, let's look at that documentation. We can see how it was
5:28:44
defined here. If I scroll up here, right? So scroll up, we can see we have
5:28:50
a channel which is pointing to user and the user ID. So we can just define that
5:28:55
too. And then you can see the topic here. And then we have to pass in the data. So let's just go back
5:29:04
to the code and then I'm going to define the uh channel here. So let me just
5:29:11
define I'm going to say channel is equals to user and user ID which we pass from there. Now the first event we're
5:29:19
going to send we're going to say our publish
5:29:25
say channel then the channel
5:29:30
so we're going to set a new topic which is going to tell uh the client that generation has started I'll say
5:29:37
generations start and we're going to pass in the data
5:29:44
status is running.
5:29:52
Then I also want to pass in the project ID like this. So this is the first event
5:29:59
I'll be sent to the client side. So we can copy this now and I'm going to paste
5:30:04
another one here. So I'm going to change this to analyzing
5:30:12
or an analysis. Sorry. analysis
5:30:22
start. I'm going to change this to analyzing here.
5:30:35
So this should be similar to what we have in the context
5:30:40
a context loading status type. So we have analyzing we have running.
5:30:46
So just pass that here. Now we need to also pass this once the
5:30:52
um once we generation has complete. So I will just do that below here. So let's
5:30:57
paste that here. Now we can change this to um complete.
5:31:04
Now we're going to pass in generation generating what we have. So that's what we have
5:31:11
inside the context generating.
5:31:20
So let's change the status to generating. Then we can pass in the project. So we need to pass in the total
5:31:26
screen
5:31:32
which is going to be object object dots screen
5:31:39
dot length. So this is going to determine the number of device scen we're going to display on the canvas.
5:31:46
Then we need to also pass in the actual screen switch. So we can use this uh object screen
5:31:56
like this. So we're going to loop through these screens and then we're going to update the frames.
5:32:03
So once we are done with so the last the last two we're going to look is inside
5:32:10
the context we have okay completed. Yeah.
5:32:17
So I'm going to scroll down here. I think it's going. So yeah, I'm going
5:32:24
to send a different I'm going to send the frame now with the ID. Remember this is taking
5:32:32
the uh this this one is going to send the
5:32:37
frame. We're using it as a placeholder for the loading. Then once um each of
5:32:43
the generation like since we're looping through the screens if each one completes then we're going to send the
5:32:51
um frame with the frame ID we got from the after saving to the database. So
5:32:57
what we're going to I'm going to say if is existing generation
5:33:04
it's a frame update.
5:33:10
I think uh should change leave it to frame create.
5:33:18
Frame create dead. So this is just going to update the frame list. Then we don't
5:33:25
need status for this. We just need to pass in the frame
5:33:32
frame. Then we need to pass in a frame ID
5:33:42
or we should also just remove the frame ID and let's just pass the screen ID. So
5:33:47
we can be able to update the screen. We can get the screen ID from the screen.
5:33:57
So I just say screen do ID. Now we can be able to point which frame we want to
5:34:05
the loading dummy and frame which we add uh the client side we're going to
5:34:10
replace that the actual frame save in database. So the last thing we are going to do is
5:34:16
to uh is to update
5:34:22
this is a step. So after it is complete, we're going to
5:34:29
send the final uh status which is inside the content which is completed. So I'm
5:34:35
just going to go back to generate schema and generate screen and then I'm going
5:34:41
to just copy. Let me just copy this
5:34:47
and let me just paste it here. Then I'm going to say generation
5:34:53
completed. generation complete and change this to
5:35:00
completed like this. And let's just pass in the project ID.
5:35:08
I think that is it. So I need to also add the team inside
5:35:14
here. We didn't pass in the team. So I'll pass in the team.
5:35:24
The team is going to be team use
5:35:32
this team to use sorry team to use
5:35:38
like this. So I think that is all. So let's just go into the real time and add the topic inside the real time. So we
5:35:46
have um generation stats analysis starts uh analysis completed. Then we have
5:35:53
inside the gener each generation we have the frame created we have generation
5:35:59
completed. So inside the real time in action we're going to pass all of them here. So I'm just going to pass them
5:36:05
here. Generation start analysis start analysis completed frame created and generation complete. So if we head back
5:36:12
to the documentation we can see how to use this in the client side. So I'm going to scroll down to
5:36:18
where we have the react hook. So if you click on react hook, we can use the
5:36:23
react hook to um handle that inside the use. Uh so let's just copy this like
5:36:29
this. Copy this and let's go back to the code
5:36:35
and then inside inside the context. So just going to canvas context and then
5:36:41
let's go down to um yeah to where we had it here. So I'm
5:36:47
going to just paste it here. And let's import the fetch real time
5:36:53
from the action the real time action. This is it. Fetch
5:36:58
real time subscription token. Then let's go back to canvas context and let's import
5:37:06
uh I think we didn't install this. So we need to install this. So um okay let me
5:37:11
import it. I think we've already installed the time. So I'm just going to scroll up here and let me import it
5:37:17
inside here.
5:37:23
Yeah. So just import it for at in real time hooks. Then scroll down. Now the error should stop. Then I'm going to
5:37:30
remove all of this and we're going to just use the fresh data. So let's use
5:37:35
the use effect here. Hopefully this should work.
5:37:43
use this effect.
5:37:51
Let me import this effect. And then here we can say if not fresh
5:37:57
data
5:38:03
or fresh. We're going to check length to length
5:38:11
is equals to zero return.
5:38:17
Then let's look through the fresh data. So refresh data for each.
5:38:26
We can get a message and let's just return. So inside the message we can get the topic and the
5:38:33
data. So it's a data and then a topic.
5:38:42
So we're going to check if data do project id.
5:38:51
So this will run for only the project ID that match if it's not equals to uh
5:38:58
project ID then return
5:39:05
like this. So now let's use the switch.
5:39:11
So here we're going to use the topic here and we're going to use the first topic
5:39:18
which is the generation start and then we're going to set loading status.
5:39:28
Let's set that to running. Now we can see the error didn't work after this. So
5:39:33
we can have um case here and the next one is the analysis start
5:39:40
and then here we can say um set
5:39:46
uh loading status
5:39:52
to gen sorry to analyze not generating
5:39:58
and let's just copy this and paste it there.
5:40:04
So once it's um analysis complete then what we're going to do we're going
5:40:09
to get the data. We're going to say if data do team
5:40:15
then set team id uh data team
5:40:25
like this. Remember we pass in the data team inside. Let's go back to So we pass
5:40:33
in the team. Yeah. So, I'm just going to go back to canvas context and then
5:40:39
um here we're going to say if data screens
5:40:46
and data screen
5:40:51
length is greater than zero.
5:40:58
So now we need to define the skeleton screen. So I'm going to say skele.
5:41:04
So which is going to be skele
5:41:10
frames you're going to set the type of frame type list which is going to be data
5:41:18
screen map
5:41:25
sorry
5:41:39
So, I'm going to pass in the ID, which is going to be u screen dot id.
5:41:47
Then we're going to say let's set this to any.
5:41:56
So we're going to pass in the title which is going to screen title or screen name. That's what we have inside the uh
5:42:06
inside the analysis uh schema screen name. So let's go into
5:42:12
canvas context again and then we're going to pass in the HTML content which
5:42:18
is going to be empty string for now. Then we can set in the exploding to true
5:42:24
like this. So we need to also pass in give this created as so I think it's not going to
5:42:32
fill created as new
5:42:38
date. Oh, let's check the frame. Uh, sorry. Inside the project type
5:42:45
we set this to. Okay, this is not optional. We can make this optional.
5:42:52
I'll remove this. So, we can just remove this. We don't need that inside it. Now
5:42:57
we can say set frame get the previous state
5:43:05
and then we're going to return a new array with the structure the previous state and pass in the structure the
5:43:12
skeleton and frames. Now we've added this. So now the next
5:43:18
thing we going to do we're going to add in here. Sorry.
5:43:28
So the other one is the created the frame created. Yeah. Which is inside the
5:43:35
generation function. Scroll down to where we have. So this has the frame the
5:43:41
screen ID and the project ID. So yeah, so let's write the case
5:43:49
frame created as a break.
5:43:56
So inside here we're going to say if and data do frame
5:44:03
then let's update the frame. So we're going to um get the previous uh state
5:44:10
and then let's get new set new frames
5:44:15
is equals to we create a new uh
5:44:21
new array with the previous state with the previous frame. Now we say constant
5:44:27
we get the uh the index of the existing frame. So we're going to say new
5:44:35
sorry this should be updated frame let's just leave it like this new frame
5:44:41
do find by index frame
5:44:48
frame do ID is equals to data screen id
5:44:55
is equals to data screen
5:45:00
ID So if the U index
5:45:06
is not equals to one
5:45:13
then we say new frame. It's not= sorry it's not= to minus one.
5:45:21
There's a new frame we get the index. Now we're going to update that with the
5:45:27
data frame. So else
5:45:33
we push this new frame push
5:45:40
data frame and let's just return
5:45:46
our new frame here like this.
5:45:52
So uh we are done. So, I'm just going to copy this, paste it here,
5:45:57
and I'm going to just remove all of this. I will change this to generation
5:46:04
completed or generation complete. Now, we can set um loading status
5:46:13
to completed. We can just set time out here.
5:46:19
So let me just say this and set
5:46:25
um set loading
5:46:34
or should we just set this to completely like this or
5:46:40
ideal
5:46:46
or let me just say to completed Then we can use we can give it some time to update to ideal.
5:46:55
So I just say 1,00 here and let's just complete copy this paste it here
5:47:09
like this. So here we're just going to update this
5:47:14
to project ID and fresh
5:47:20
data like this. So I think this is not this is not good
5:47:28
but let's um leave it like this. So we are done with this. So let's try
5:47:36
and generate a new one. So let's make sure everything's working. So let's go into the canvas page sorry index
5:47:48
canvas and um
5:47:55
so we have the pending fetching loading idle idle or completed
5:48:04
I think we the loading canvas is working so let's just test it out again so make
5:48:09
sure the server is running and then let's go back to the browser.
5:48:17
So I'm just going to load this again and try to click on the
5:48:22
new generation. So let's try again. So I'm going to click on the first um suggestion and
5:48:29
then let's click on this. So make sure you load it and let's click on design. Let's see. Hopefully this should work
5:48:39
the project. We should wait and see if it's going to Okay, it's not
5:48:47
updating. We can see this but we're not able to see the
5:48:54
so I'll click on running and we can see that the event has been
5:49:00
sent generation is completed
5:49:06
now we can see the uh statistics you can see this but I don't know why it is not
5:49:12
showing the real time it's showing this but it's not showing
5:49:17
the um loading status So, let me go back to
5:49:23
um the code and let's check this why it's not working.
5:49:30
So, make sure everything is save. So, I'm going to try and test it again. So, let me just remove completed for now and
5:49:38
um let's test it out. So make sure server is running and let's go back to
5:49:44
the browser and let me just pick a design [Music]
5:49:50
um a music sorry let's have it
5:49:57
tracker app just one screen
5:50:07
sign and let's see.
5:50:14
So this is going to redirect us to we should see now we can see analyzing
5:50:22
and now we can see the screen the placeholder the skeleton.
5:50:27
So let's wait for this to complete and now we can see it's completed.
5:50:34
Now we can look at what it designed there.
5:50:40
So if I expand it, I think it's not taking it's taking up the height like this. But at least it's okay. We can see
5:50:48
the title. We can look at the team that was selected. If I pick midnight, you can see that it
5:50:54
changes. Uh
5:50:59
so at least it's not that um model we are using does not give us the best but
5:51:06
it work fine. So this is working fine. So let's go and connect the endpoint for
5:51:12
create endpoint for generating new screen. So let's just go back to the
5:51:17
code and let's go to let me clear everything
5:51:23
here. So going to API um project index um ID
5:51:32
route. So we're going to just let me just copy what we have here before.
5:51:40
So I just copy this. Come inside this uh ID route. Paste it.
5:51:47
Import here.
5:51:53
We're going to remove project name. We don't need to update project.
5:52:01
Um, so what we're going to do now is so
5:52:07
let's copy let's copy the um params from this get
5:52:13
I'll scroll down here and let's just pass it here. So say comma sorry
5:52:20
and paste it here. So I will use ID. Copy this. Scroll down here and paste it
5:52:27
here too. So now we have the project ID prompt and we've checked for the prompt
5:52:33
and everything. So we going to find the uh let's find the project. Say project
5:52:39
is equals to await Prisma
5:52:45
project. I'll find first
5:52:51
where uh ID and user ID
5:53:01
is user dot
5:53:06
ID like this. So let's include frame
5:53:12
include frames true.
5:53:20
So now we're going to send uh the interest. Yeah. So what we're going to
5:53:26
do now is we're going to say um we're passing the user ID. We're passing a
5:53:31
project ID which is ID. Passing a prompt. Now we need to pass in a frame
5:53:37
which is going to be project frames
5:53:42
and then team which is going to be project
5:53:50
uh and team uh like this. So this is fine.
5:54:03
So let's make sure this error is if not and project.
5:54:10
Let's throw a new error project not found.
5:54:24
So let's just say success and fail to um
5:54:29
fail to generate
5:54:36
like this. So, let's go into the
5:54:42
inside the future going to future folder and then let's go into the use project
5:54:48
ID and we're going to just copy just let's just leave it like this. Let's just come
5:54:54
over here. Or let me just copy this
5:55:04
and let's paste it here. So let's import use modations. I'm just
5:55:10
going to remove the router. We are not going to let's import toast
5:55:18
like this. So we're going to pass in the project. So let's change the name from use and generate project to use generate
5:55:24
number ID. Then we pass in the project
5:55:30
ID. We need yeah project ID as a string
5:55:36
or no. Then we can pass in the uh
5:55:45
let's pass in ID here. So this should be string and not.
5:55:52
So pass in the ID here project ID and here let's just remove data and
5:56:00
let's say to do success
5:56:07
running or generation running
5:56:14
started like this fail to generate screen
5:56:21
to generate screen.
5:56:33
So say this. Now we can use this inside the So let's go into
5:56:38
um the canvas floating tool bar
5:56:44
inside the component/ canvas and uh let's come here.
5:56:52
So let's paste it here and
5:56:58
let me import the used innovation. I'm sorry the use design by ID constant
5:57:07
is equals to mutate
5:57:12
is pending
5:57:18
and let's pass in the project ID here. So I need to pass in the project ID as a
5:57:25
prop as a project
5:57:31
ID of type string
5:57:37
and let's pass it here like this. So we have the uh is pending and um u
5:57:48
muted. So we're going to have a function here. I'm going to call this handle
5:57:54
sorry handle AI generates
5:58:04
say if not prompt text
5:58:12
just return it
5:58:19
by passing the prompt here.
5:58:26
So, let's confirm this.
5:58:33
Okay, this is not an object
5:58:43
text. So let's copy this and
5:58:50
sorry here on click.
5:58:58
Then here we're going to change this to we're going to set the spending spinner. So let's import spinner
5:59:06
um design. Then we're going to set this to disabled.
5:59:11
Um is pending like this. I think um that is all.
5:59:20
So let's save this. Let's go into the canvas index of CSS and we need to pass
5:59:26
in the project ID. Say project ID.
5:59:35
wicket ID by this.
5:59:42
So everything is fine. So let's go into the page and make sure
5:59:49
we're passing this properly. So we are passing the project ID.
5:59:57
So let's test this out. I will go back to our browser. Let's design this by
6:00:03
clicking on this um icon on this button. Now I'm going to ask the AI to design the user profile from screen only and
6:00:10
I'm going to click on this and this should start running and analyzing and this is going to show actually showing
6:00:17
the SC already and hopefully this is going to give us the um output and now
6:00:23
we can see u the user profile is been generated by the AI um the the screen is
6:00:32
already generated but it's not to load. So, we're going to change the model from Gemini 2.5 flash to Gemini 3, which is
6:00:40
better than 2.5. So, to use that, you can just come over to open router and
6:00:46
search for uh Gemini. Let's go over to model and search for uh
6:00:54
Gemini and then scroll down to where you have Gemini 3.
6:01:01
So to use Gina 3 uh to get the result we want you going to need to add credit.
6:01:08
Yeah. So if you try to use this like this this is going to give us has some weight
6:01:15
limiting which is not going to actually generate any uh it's going to fail. So
6:01:20
um open price is going to ask us to add some credit. So just come over to credit
6:01:26
and you can add a little credit here and test it out. So since I'm already I
6:01:32
already have some credit in AI gateway which is an AI SDK gateway. If I go to
6:01:37
vis AI gateway then I can click on dashboard
6:01:43
and this will take me to my vis account. Then I'll click on AI gateway here.
6:01:57
So now you can see I have some credits. You can also try it with the AI gateway which cost which has free free um credit
6:02:05
$5 free credit. You can try it out or you can just add uh buy some credit like
6:02:11
this $20 or you can just change it to $10 like
6:02:16
that. So I have some credit. So I can create I can create an API key. I'll
6:02:22
click on this. So let me let me delete this key and create a key here. I say X
6:02:30
design AI and then click on create key.
6:02:37
I'll copy this key and I'll say I have saved the key. So let's let me head over to the code editor. Then I'm going to
6:02:44
open the EMV. I'm going to um paste the key here. So I've pasted it here. I'm
6:02:51
going to save this and I'm going to go into the generate screen and I'm going to change this from open router. If
6:02:57
you're using open router, you just have to add the Google Gemini preview here. But since I'm using AI get from open AI,
6:03:04
let me see sorry from V. I'm going to just paste it directly like this because
6:03:10
we're using the AIDS already. So I'll save this and I'll scroll down to where we have the where we're calling the
6:03:16
other model and I'm just going to add this here. So I'm going to save it. So
6:03:21
this is looking good. Um so we're going to also test the two on splash 2. So
6:03:27
once you save that, this should restart the uh uh EMV. You can see that we load
6:03:34
the EMV. So I'm just going to go back to the browser and then I'm going to go to
6:03:41
the app. Then we'll go back to the home screen and then we can try and test the
6:03:46
um we can try and test any of these prompts. If I click on so let's test out
6:03:52
this first. So let's test out the onsplash two. So
6:03:58
I'll click on food delivery which requires which requires images. So I just click on design
6:04:04
and then this should start uh analyzing. is running analyzing and then this
6:04:09
should take some time because it's going to have to fetch some images from
6:04:14
splash. So let's wait for this to run.
6:04:20
So now it has uh show the u device skeleton. So uh so hopefully it's going
6:04:26
to generate a screen. So let's wait for this. So now we can see the output. We
6:04:32
can see that it has completely and generated the UI. So if I drag this up,
6:04:38
we can see that Gemini 3 um P is good. We can see the design
6:04:45
is looking good. So we can try and change the team. So let's let's see a team that was selected orange and gray.
6:04:52
If I pick ocean and blue, you can see that if I click Netflix,
6:04:58
see that it's looking good. Now let's select a different team.
6:05:04
This one this one is also good. We can we also have uh we can click this are
6:05:12
good but this is okay. So uh let's revert back to the orange and gray. So
6:05:19
let's ask the to design design
6:05:26
the login screen. and the welcome
6:05:33
on boarding screen only and I'm going to click on design.
6:05:43
So it has started running analyzing and then we should be able to see
6:05:50
able to see the design. So we should first of all see the uh the white
6:05:55
skeleton showing up here. So let's wait for this.
6:06:06
So it has shown the two device skeleton. So it's generating the two screen going
6:06:11
to generate one first. So this is going to be the first one and then this is going to be the second one.
6:06:18
So now we can see that it has generated the onboarding screen.
6:06:24
the welcome on boarding and let's wait for this to run.
6:06:35
So now we have the uh onboarding and the login screen and you can see how beautiful the login is. Uh the welcome
6:06:42
on boarding made a mistake on the image. The image should have been uh the full
6:06:48
background but uh I think pretty much it it did very well. Uh we can change the
6:06:54
team for both of them. We can see that the team is working.
6:07:00
Uh let's change this to this color.
6:07:05
And uh so let me pick rose code and we can see
6:07:13
how beautiful they look. So this is great. So we're going to go and work on
6:07:18
the uh update endpoint. So once we change the team like this, we've changed
6:07:24
the team from the color that was set think orange and gray to rose gold. And
6:07:31
if you want to if you want to uh save this, you can just click on the save button and this is going to uh save and
6:07:39
it's going to save the uh update the project with the team. So let's go and
6:07:44
work on that. So after that we're going to work on the team. So I mean sorry the screenshots. You can click here to
6:07:50
screenshot the the entire canvas or you can you can screenshot a uh you can download the
6:07:58
image. So let's go to the let me collapse this. Let's go straight to the
Update Project
6:08:03
route uh sorry the API route dot um inside the ID folder route. CX. So I'm just going
6:08:12
to copy this same thing here. I'll copy this below here. I'm going to paste it
6:08:17
and I'm going to change this from um post to patch.
6:08:23
Sorry, like this. This should be capital letter.
6:08:29
And then we're going to also check for the section the user the user and I
6:08:35
think here we're going to just get the team. So we can say team or we can call this
6:08:41
team ID and pass the team. It's a missing team.
6:08:50
And then we have the user ID. Now we need to update. So I'm going to change this from fetch find first to update.
6:09:02
Update where uh where ID.
6:09:09
So we have the ID here. So we're going to also get the uh we're going to pass the user ID which
6:09:18
is user ID and then we need to pass the data
6:09:24
which is team same team same team same team same team same team same team same team same team same team same team ID like this so I'll just remove all of
6:09:31
this and then we can pass in the
6:09:41
So this is this is okay. We can just say fail to
6:09:46
update project.
6:09:52
So now we have the update uh endpoint. So let's go into let's go to the features folder
6:09:59
and let's go into the use project ID and we can just copy.
6:10:08
Okay, we can copy the mutation. We're going to also pass in the project
6:10:13
ID. So I'm going to say use update um team or update canvas update
6:10:21
project. It's okay like this. pass in the ID here. We're going to change this to
6:10:29
to put here team ID.
6:10:34
I'll pass it here. So yeah, I'm going let's just change
6:10:39
this to patch instead of put and then we're going to say success project
6:10:47
updated. I say fail to update project.
6:10:56
So now we can use this inside. So let's just copy this and let's go to
6:11:02
uh inside the component folder. Then inside the canvas then
6:11:07
canvas floating to. So we're going to use this here. It's a constant update
6:11:14
project is equals to use update project.
6:11:19
Let's pass in the project ID and let's import this.
6:11:26
So let's change this to let's change this to update instead of update project. And below here we're going to
6:11:33
define the method handle update. I say handle update current team. If there's
6:11:38
current team, we say uh return. If there's no current return, then we can say current
6:11:44
id like this. So, let's copy this. Make sure uh this uh
6:11:52
so make sure this is correct. And let's go down to the um button here. And I'm
6:11:59
going to just add this on click passing the handle update. And now we're
6:12:05
going to say update dot is pending.
6:12:11
We're going to show a spinner
6:12:19
and then we're going to say else have the um fragment. So move this in uh
6:12:27
inside the fragment and we are done with this. So let's go and test this. Uh
6:12:33
let's go and test this. So I'll go over to um my browser
6:12:39
and I'm going to try and click on the uh safety
6:12:44
this. So let's click on this. So now you can see project u updated. So
6:12:52
if I try to reload, let's see if it's going to set this to
6:12:58
the same we've updated. So now we can see that it work it work.
6:13:05
So we are done with the update uh end point for the canvas. So let's work on
6:13:10
the u the screenshot of the canvas and also the individual uh device screenshot
6:13:18
or download the images. So we should start with the canvas. So u to handle screenshot in canvas here
Deployment
6:13:26
we going to be using puppeteer. So I'm going to search for next
6:13:32
and if you click on the uh example from V
6:13:38
you can see that you can read this documentation and this is going to ask you to download
6:13:44
propertier core and uh chromium minium minium or main. So we're going to use
6:13:51
this when we try to deploy a project but we can download propertier for uh a
6:13:57
package it's package not the core version but the propertia itself for look for development but once we want to
6:14:04
try to deploy we're going to use core because it's lightweight and works on vis. So let's just go back to the code
6:14:13
and let's install um all of them because we're going to be using both of them both uh in development and in
6:14:20
production. So let's clear terminal. So let's install Puppeteer first for
6:14:26
installer. So we're going to install version
6:14:31
24.32.1. We're going to install this as a dev
6:14:36
dependency first because this also has a chromium. So
6:14:43
we're going to be this works on local development but we're going to be using the um core for vis which work on vis.
6:14:53
So let's wait for this to install. So let's install the mpm core and also this
6:15:00
chuminium for for um v. So that's installed. This is going to be uh it's
6:15:07
not going to be a dev dependency. So we're going to use this in production. So click on this. So this should
6:15:13
install. Make sure to install the same version with me. So once we install once
6:15:18
that is installing, let's head over to Okay, that's installed completely. Let's head over to the documentation.
6:15:24
And then if you scroll down to look at the uh templates that we still provide
6:15:32
then we can see uh the template here. So I'm going to scroll down to um the GitHub
6:15:39
and we can see let's scroll down where we have the GitHub. So click on there the GitHub repo. So I
6:15:48
click on that and we can look at how it's been done here. So we can click on app
6:15:54
Then click on the API screenshot. Click on route and then we can see how this is
6:16:00
implemented. So the first thing they did was to set a chromium pack URL. So they
6:16:06
have uh so if it's in production they have like an example
6:16:13
chromium but also in production you also have where they store the chromium part.
6:16:18
So we're not going to need this uh for that. We're not going to use this. So,
6:16:24
but we're going to also copy this and get chum part which is so downloads once
6:16:31
and uh for caching and stuff like that. We can see return cash part if available
6:16:37
and then this can be used inside the actual endpoint.
6:16:43
So, I I'll copy some. So, I have it already but I've modified it. So let's
6:16:48
just go to the code and I'm going to paste that part that part inside the route. So let's create the route first.
6:16:56
So I'm going to open app uh API create a
6:17:01
folder. I'll call it screenshot. I'll say routx.
6:17:11
So I'm going to paste the one I've already modified. So this is it. So we can see that we have the same we saw in
6:17:18
the vis example and we have the get chrome part. You can see here once it's
6:17:23
not nano promise we can just point to the version we installed.
6:17:29
uh then we can see I also point to this and get part and then we also have the
6:17:37
return the download commit here just similar to what we have in VU in the
6:17:43
example that VC provided. So I'm going to um let's write the export async
6:17:52
function. So let's create the route itself. So it's going to be a post route.
6:17:58
I'm going say request and request.
6:18:09
So, uh the first thing I'm going to do, I'm going to set browser.
6:18:17
Browser here. Then let's create try catch here. And
6:18:23
we're going to get some data from the uh from the body request body. So we're
6:18:29
going to say our request JSON.
6:18:35
So we're going to get the HTML content the width.
6:18:41
So I'll set the for 800 and I'm going to say height
6:18:46
to 600. Then we also need the project ID because we're going to be using the project ID
6:18:53
to update since we're going to use this one endpoint for um taking screenshot
6:18:58
for individual device and also the entire canvas. So we need to also save
6:19:04
the um the image when we try to screenshot we're going to save the image
6:19:09
when after generating if we go to schema. Remember we had thumbnail here. So after
6:19:16
generation is completed, we're going to call this endpoint to screenshot the entire canvas and save that inside the
6:19:23
um inside the database. So now um we need to make sure endpoint is secure. So
6:19:30
let's go back to route and copy the kind uh the let's copy the section
6:19:38
and go back to the screenshots and let's paste it here. So let's import get kind server
6:19:48
and there we can get the user ID is equals to user dot ID like this.
6:19:56
So now we need to check the environment we need to detect the environment. So this is because we are going to be using
6:20:03
we're going to be deploying this to vil. So
6:20:09
so we're going to say constant is production. So if it's production
6:20:15
sorry production is equals to process
6:20:21
env is equals to production like this.
6:20:29
Then we also need to check if this is vile. We say if v
6:20:35
is equals to sorry it's equals to process env.
6:20:44
So this is going to set as one. So we need to use a double exclamation mark to
6:20:50
make this boolean. So if there is v is one to true. So if it's vis now let's
6:20:59
set puppeteer sorry let's um puppeteer
6:21:07
which is of um any let me just
6:21:13
set this to the entire file then we need also the launch
6:21:22
launch option uh which is also type
6:21:27
So equals to going to set this to headless
6:21:33
true like this. So we can say if
6:21:38
if is production and is zero
6:21:45
then we going to be using constant chromium. We're going to get a chromium.
6:21:53
It's await import
6:22:00
uh at So let's import similar thing we did here.
6:22:07
Let's just copy this. So let's paste it here.
6:22:16
And I say property is equals to await import.
6:22:22
We are going to import propertia core. Yeah. And now we can get the executable
6:22:31
part. So executable part we can just copy.
6:22:36
Okay. This is coming from the chromium. So I'm just going to paste it here. It's
6:22:43
going to be equals to await get chromium part which is this method
6:22:50
here. So now we can see launch
6:22:56
option like this. So we're going to end the structure. Okay, this should be launch
6:23:06
like this. La la la la la la la la la la la la la la la la la la la la launch option. So let's do structural launch option
6:23:11
and then we're going to pass in the chromium and also the executable part
6:23:17
like this is okay. But if this is on development, we don't need to use this uh chromium. We're going to use the
6:23:24
actual uh we're going to set property here. It's going to be equals to
6:23:34
let me copy this. Sorry, I think I made a mistake. Not inside here.
6:23:40
This should be else puppet is equals to
6:23:47
import puppeteer
6:23:53
which also comes with chromium already inside. So now
6:23:59
uh why is it showing?
6:24:07
Okay. So now we're going to say browser
6:24:12
is equals to await puppeteer
6:24:19
um launch. We're going to pass in the launch option
6:24:25
here. So now we're going to create a page. You say constant
6:24:31
um page is equals to await browser
6:24:37
dot new page
6:24:45
like this. So um now we need to set the view port.
6:24:52
So set and view port view port size
6:24:59
So I say await page set view.
6:25:12
So wait inside this number I pass in the width.
6:25:23
The height is going to be number height
6:25:29
and then device scale
6:25:35
factor which is going to be two
6:25:40
like this. So now we need to set the content. So since we using HTML and not
6:25:45
a URL, we're going to set HTML HTML content
6:25:52
like this. So we can say uh sorry await page
6:25:59
set content
6:26:06
HTML. And we can see wait uh wait until
6:26:16
document dump content sorry dumb content loaded
6:26:25
like that. So we can um also pass set
6:26:30
like a delay. So I'll just set like a set time out like this. So give it a so
6:26:37
that the font and everything should load and then we can then capture screenshots
6:26:43
sorry screenshots or capture.
6:26:49
So we're going to say constant buffer is equals to our page
6:26:57
dot screenshot
6:27:03
type png. There we can see full
6:27:10
uh full page force.
6:27:17
So now we have the buffer. Now we can now save this. So I say if project ID was passed then we we know that we need
6:27:24
to update the um project. So I'll say project ID I'll say constant
6:27:32
and B 64. So convert this to B 64. I say buffer
6:27:37
L2 string
6:27:44
B 64. So now we can see our Prisma
6:27:51
update sorry project. So let me import Prisma here.
6:28:10
So Prisma project does update
6:28:18
where um ID is project ID
6:28:23
and user ID. Then data we can update the thumbnail.
6:28:33
So data image / PNG
6:28:40
column or semicolon or column then we say base 64
6:28:47
we add a comma there and we pass in the base 64
6:28:53
like this. So we have buffer to string and B 64.
6:29:02
Then we also have Prisma project updates data image PNG B 64. Then we So we're
6:29:11
going to just return next response.json
6:29:20
Jason B 64 like this.
6:29:29
So let's import this. So now this is just going to uh return.
6:29:37
So but if we're not passing any project ID, so we're just going to return
6:29:44
a new next response.
6:29:49
So we want the client to be able to get the buffer and then we can download the
6:29:54
image. Uh we can download the image from the client side. So we're going to say buffer
6:30:01
as any we can set the header content type. So
6:30:06
this is going to send this in chunk by chunk. So we're going to say content
6:30:14
type image/png.
6:30:22
Why this is okay? So now if there's any error we can just return
6:30:28
x response x respond.json JSON
6:30:36
error. It's a fail to a screenshot
6:30:47
and then we can set the status to 500.
6:30:54
Let's just consider a log error like this. So we're done with the
6:31:00
end point. So let's go and integrate the end point where we're going to use it. So the first place we're going to
6:31:06
integrate it. Let's so we need to also add close the
6:31:13
browser. We should have finally browser
6:31:18
close. So a browser close. So this is going to close the browser. So now we're
6:31:24
going to use the API inside the route. Um, let's go straight to components canvas
6:31:32
inside the canvas index.txs. Then let's go down. Let's go into the
6:31:37
device component device frame first. And here we're going to handle the um
6:31:44
download. Remember we pass in inside the toolbar we have the download PNG and the
6:31:52
downloading is downloading. So let's define a state here. So I'm going to set
6:31:57
is downloading and set is downloading. So we can pass is downloading right
6:32:02
inside the uh device frame sorry device frame to bar and we can also add disable
6:32:10
to is downloading. Now let's define the function here. So we're going to say handle
6:32:18
constant handle
6:32:25
handle downloading download PNG like this. So if you use call back
6:32:33
and then we are going to pass in async.
6:32:42
Let's import and use coverback
6:32:48
and let's also import as.
6:33:02
So let's come down here. So inside here we're going to say if
6:33:09
sorry if it's downloading then return
6:33:16
then we can set is downloading sorry is uh downloading
6:33:25
to sorry to true.
6:33:31
Now let's u set dry catch here. So second response
6:33:40
response is equals to await ass/
6:33:50
API/ screenshot
6:33:56
and then we need to pass in the HTML content which is going to be full HTML
6:34:02
which is which is from this Then we need to also pass in the width
6:34:09
and then the height which is going to be frame
6:34:16
frame size dot height
6:34:22
is so you can use frame size or width but I just want to keep the width the same the default width here. So we have
6:34:30
420 or we can also just set frame size
6:34:38
dot width if you want to increase it like this
6:34:44
like that. So it depends on let's just leave it like this and then
6:34:50
have comma here. We need to also uh set this to response
6:34:59
response type.
6:35:06
Yeah, we also need to set validate status status.
6:35:13
So we need to check if our status is greater than equals to 200
6:35:20
and status is less than 300
6:35:25
or uh status um is equals to uh 304.
6:35:32
So this is going to return a success. So now um below here we're going to say
6:35:40
constant URL is equals to window
6:35:48
dot URL dot create object URL
6:35:54
response data then let's set let's create a link
6:36:02
so say document create element
6:36:09
tag. So we going to then say link
6:36:16
ref is equals to URL.
6:36:24
Then link uh download
6:36:29
is equals to we're going to set the title title
6:36:35
replace. So we're going to replace the space with dash. So we're going to define a regular
6:36:42
expression like this. I say hyphen here. So to lower case
6:36:57
and let's add an if here
6:37:03
let's say dates now
6:37:11
png like this. So now we need to also then
6:37:16
click on the link. So click
6:37:23
then after we click on the link window url
6:37:28
revoke object URL then pass in the URL.
6:37:34
Now we can say uh those let's import those um son from sona and let's say
6:37:41
success uh image downloaded a screenshot um
6:37:47
let's say screenshots uh downloaded.
6:37:56
So if there's any error you can say console do error
6:38:02
error and let's say toast dot error
6:38:10
fail to uh field to screenshots.
6:38:21
Then finally set is downloading to false.
6:38:30
So let's set the uh dependency like this. Now we can use this. Let's
6:38:38
just copy and download PNG. Go down to where we have the uh
6:38:47
on download uh PNG and let's paste this here. So save this and let's go ahead and try
6:38:53
it. So let's run np.
6:39:07
So the server is running now. Let's test it out. So I'm going to click
6:39:13
on the um icon here, this download icon. And once I click on this, you can see the uh the spinner is showing up here.
6:39:21
So let's wait for this to download.
6:39:31
So let's wait. So now it has downloaded successfully. If I um open the image which was
6:39:40
downloaded, you should be able to see that we can see image now which is um clean and it's
6:39:49
looking good. So now we've seen how to use uh how to um screenshot or download
6:39:56
the um individual frame or screen. So now let's work on the uh screenshot and
6:40:03
also when we generate a new uh a new
6:40:09
project or generate a new frame we are going to screenshot the canvas so it app
6:40:16
so we save it in the project thumbnail. So let's go back to the code.
6:40:23
So before we go ahead and work on the um canvas screenshot. So go into the canvas
6:40:28
component then I want to comment this out and pass
6:40:34
the uh it's loading inside the frame. So it's movable. So I'll say is loading
6:40:40
is equals to frame do is loading.
6:40:46
Then inside the device frame uh we have pass in is loading here. Then I'm going
6:40:53
to say it's loading is equals to first.
6:40:59
And then I'm going to copy this uh it's loading. Then scroll down to where we
6:41:04
have I frame here and say if it's loading then let's show the device
6:41:11
device frame skeleton. So let's pass in style
6:41:20
position relative
6:41:25
and we can set width. Um let's give the weight 800 height
6:41:36
or we can use the actual width we have here. The default width we have here we have 420 and 800.
6:41:44
So let's set this to weight
6:41:49
and height animal height like this.
6:41:58
So now we're going to say else and let's pass in the I frame like this.
6:42:05
So now if let's also set let's also set disabled to is loading.
6:42:15
like this. So, let's save this and let's go into the canvas
6:42:20
and uh inside the um canvas um floating tool bar. We're going to we're going to
6:42:28
implement the screenshot. So, I just collapse all of this. So, we're going to
6:42:33
plug connect the uh function to this button. So, let's go up uh in this side.
6:42:41
We going to pass in some prop here. So I'm going to pass in the in screenshot
6:42:47
uh screenshotting and on screenshot function. So let's pass in the prop here
6:42:53
for this. And let's add in a type. the uh a screenshot
6:43:00
sorry a screenshot
6:43:10
we can set this to boo and then on screenshots
6:43:25
like this. So let's pass this here. Let's scroll down to where we have the button or we can just say disabled
6:43:36
is uh screenshotting and we can just do the same thing we did
6:43:41
here. Cut this out and say if is screenshotting
6:43:48
then show a spinner else
6:43:55
pass the camera icon then we say on click
6:44:01
on screenshot like this. So let's go into the canvas itself.
6:44:09
Let me remove this. Then scroll down here. So we need to pass that here. So we're going to define the state for
6:44:16
that. So let's define the state for in screenshot and also the use web for
6:44:22
canvas. Just define canvas web. And now let's pass in a screenshot.
6:44:31
Let's pass it inside the canvas floating bar.
6:44:39
And then we have on screenshots which we're going to define.
6:44:45
Yeah, we're going to say uh constant handle
6:44:52
and canvas
6:44:57
screenshot. Let's use scroll back.
6:45:07
Let's import it. Now let's pass it here.
6:45:16
So, so to screenshot the canvas since we are going to be using uh the HTML
6:45:22
content, we can't use the URL because we need to proper need to authorize like uh
6:45:30
need to authorize before accessing this page. So we have to get the HTML content of this page and we are going to be
6:45:38
using the use ref hook. So we're going to pass the use ref hook here. So we're going to say ref.
6:45:45
So this is going to capture everything like from here. So it's going to exclude the canvas control and the canvas
6:45:53
floating. So let's just scroll up. Now we're going to create a function
6:46:01
or let me create a function below here. It's a function get canvas
6:46:09
uh HTML content.
6:46:16
So say constant element is equals to canvas root
6:46:21
current. I say if not element
6:46:27
then we can just say um error
6:46:35
or we can just console we can just say um canvas
6:46:43
canvas element not found.
6:46:52
So we're going to first of all set it st to equals to empty string.
6:46:58
Now we need to for loop as a constant sheet
6:47:03
of documents. So we need to get the styles
6:47:08
document style sheet
6:47:15
and then we say try catch first. Yeah. Let's just close this.
6:47:23
So here we're going to say for loop again constant rule
6:47:31
of sheets dot CSS rules.
6:47:36
So say sty sheet sty equals to row dot css
6:47:45
um text like this. Now u we can return
6:47:55
we can return the elements which is L and then the HTML
6:48:02
we going to wrap this inside inside an HTML. So I'm going to paste it
6:48:09
here. So like this. So elements I think we we check this.
6:48:17
this if not this. Okay, let's set return more like this.
6:48:23
So now we've pass in the style. We also pass in the body. Now we can get the content for the canvas. So we can use
6:48:32
this inside um the screenshot. So we're going to pass in
6:48:37
uh the project ID. So let's say try catch.
6:48:43
So we think we have the project ID here. So we're going to make use of it inside here.
6:48:50
So we're going to um have the project name. So what we're going to do, we're
6:48:56
going to get the canvas HTML content. Let's move this up here.
6:49:07
So we're going to say if not the HTML then toast error. Then we can say set
6:49:15
uh we need to remove the set selected. So set. So let's get start from here.
6:49:22
Set selected frame ID like this.
6:49:29
So we're going to deselect the selected frame. So set to no.
6:49:39
Then we set is loading a screenshot. Screenshot intro.
6:49:52
Something is wrong here.
6:50:20
Okay. So now um so now let's get set response.
6:50:27
So we need to import as here. So let's import. So import
6:50:33
as from Asio and then let's scroll let's scroll down.
6:50:41
So let's add async here.
6:50:47
We say await um aspost
6:50:57
slash API/ screenshots.
6:51:02
Then we need to pass in the content is a HTML
6:51:08
resort. HTML then we say width
6:51:16
result dot elements do the scroll
6:51:22
height sorry scroll width
6:51:27
or you can set the width if you want we can set um
6:51:33
maybe 1 2 0 0 but I'm going to set a height
6:51:40
700.
6:51:47
So, let's just go into the device um frame and copy what we already did here.
6:51:52
So, I'll just copy um from here. Copy everything like this.
6:52:02
Let's go into index or CSS tss canvas. index.t CSS
6:52:09
and I'm going to just paste it here.
6:52:22
So I think I need to so error should stop. So we need to use the project name. So just copy project
6:52:30
name and just paste it here like this. So let's pass in the project name.
6:52:40
Okay, project name can be null. So what we can do? We can just set uh
6:52:50
so let's say constant title is equals to project name
6:52:56
for canvas and let's pass in title here
6:53:04
like this. So we can say u let's say custom.log
6:53:13
log error and then post your error
6:53:21
field to screenshot canvas
6:53:28
and then finally we set uh a screenshotting to false.
6:53:36
So now let's go ahead and test it. So, make sure the server is running
6:53:42
and let's go into the preview. So, let's go into the browser. Just
6:53:48
reload this. So, let's test it out. So, I'm going to click on this icon now.
6:53:59
And now we should see that it is um loading. And now it has screenshot. You can see
6:54:05
screenshot downloaded. So let me let me move this. Let me open the image.
6:54:14
And now you can see that the screenshots works. So I
6:54:20
you can see that we're able to screenshot the food review. If you want you can also hide this uh
6:54:27
this u frame to bar from displaying when you try to screenshot.
6:54:33
But for me everything is fine. So we are done with this.
6:54:38
Now let's go ahead and work on the uh so let's go back to the home screen
6:54:47
and we're going to u screenshot when we try to u generate a new frame or a new
6:54:54
project. So let's go to the code and let's
6:55:00
implement that. So inside the code. So we're going to check is if um the
6:55:08
loading status is completed then we are going to screenshot and save
6:55:15
the uh and save the screenshot to the project thumbnail. So we can do
6:55:21
that. We're going to be using use effect. So I move this down. I'll create a let's copy this. Let's
6:55:29
copy the what we have here. So, copy it and paste it here.
6:55:37
So, let's change this to save thumbnail
6:55:44
to project this.
6:55:50
Now we can we can pass in the project
6:55:55
um ID can say type string
6:56:02
or not and then we're going to say if
6:56:08
project if project ID
6:56:15
just return.
6:56:24
Uh, this I want to just return now. Yeah.
6:56:30
So, I'm going to also um remove the screen shortening
6:56:38
and then uh I think this is okay. So, we're going to pass in the project ID
6:56:43
here. So if you look at the route this is going to sorry route screenshot this is
6:56:50
going to update this is going to um update the project.
6:56:58
So uh I think we don't need this. We're not downloading
6:57:05
and we don't need this.
6:57:11
So if response data
6:57:18
console.log
6:57:25
thumbnail save
6:57:32
response do data.
6:57:41
So let's just remove everything like this.
6:57:50
Reset frame to no.
6:57:57
So let's say use effects.
6:58:05
So let's import use effects. So we're going to say um if projects
6:58:17
id return
6:58:22
then if loading status ask equals to completed
6:58:33
return. So say constant handle
6:58:42
handle thumbnail save
6:58:50
equals to async.
6:58:57
Yeah, we can just say try. right there. We don't need we don't need
6:59:02
a try catch or we can just use it directly like
6:59:08
this. We can just say uh pass in the function and then we can say project ID
6:59:15
like this. So update the uh dev sorry the
6:59:22
dependency and we are done with this.
6:59:29
So we are done. So let's test it out. Make sure your server is running
6:59:37
and let's go to the browser and let's test. So make sure you reload
6:59:42
first and I'm going to click on this finance
6:59:49
tracker and I'm going to click on design.
6:59:55
So let's see analyzing.
7:00:04
So we should be able to see the console log once it save the uh screenshot.
7:00:16
So it's analyzing now. We can see that showing the name of
7:00:21
the frame. So this the reason why we added the uh this the reason why we
7:00:28
added the it's loading inside the frame so it's movable.
7:00:33
So let's wait for this to complete and you can see that the tools the two
7:00:40
uh icons are disabled.
7:00:52
And we can see that it has stopped.
7:00:58
So let's see this screenshot. Now we can see that thumbnail save. We can see that
7:01:04
it work. So we can also add finalizing to uh the top if we saving. And if we go
7:01:12
back to the home screen now, we should be able to see we can see
7:01:17
the screenshots now. So this is great. This is great. So I just also designed
7:01:25
this uh this app recently. If I click on this now, you should be able to see the
7:01:33
design is looking great. Welcome on boarding screen lo and then the dashboard.
7:01:39
So we can see how how good looking it is
7:01:45
and you can take screenshots. You can click on it to and download the image
7:01:50
and view everything. So if you go back to the home screen, we can see the thumbnail. Before we go ahead and start
7:01:57
deploying our project, let's uh let's go into the components. I made some changes. So if you go into uh index cxs,
7:02:07
if you scroll up to where we have the uh
7:02:13
save thumbnail to project. So I have the state here we can see is saving and set.
7:02:20
So I've added it to the save thumbnail. The reason why I added it is because I
7:02:25
added it here. So once it's saving, it's going to show finalizing. And if you scroll down to the canvas loader, you
7:02:32
can see I added the umizing here. And then you can see this is equals to finalizing.
7:02:39
And and that is it. So you can just add the um saving. And lastly, I also notice
7:02:44
if you go into the canvas context, I forgot to update the set loading state
7:02:50
to generating. So I've already updated that. So just update that. So it does not show only
7:02:58
analyzing till it's complete. So uh that is all.
7:03:03
So now let's uh let's go ahead and deploy this project. So uh let me cancel
7:03:10
inest and then cancel uh so we cancel the server and inest
7:03:17
and let me clear this. So say add
7:03:24
coms
7:03:31
and
7:03:37
that's a first first uh first commits.
7:03:47
So I've already have um let me open my
7:03:55
So now if I go into the GitHub I already have a GitHub repo I've added here. So
7:04:01
that's why you can see all the file added. Well it's already updated. So let's go to the browser and let's create
7:04:08
a rep. So I'll create a new rep here. Our first egg design sorry egg design
7:04:16
mobile agent make this um and let's click on create
7:04:26
on creating repo. So now I'm going to uh change this to so
7:04:34
this should be um I'm already in the main main branch. So I'm just going to
7:04:40
add this. So let's go to the code
7:04:47
and let me paste this here. So I'll change this to
7:04:56
um new.
7:05:02
So let me push this
7:05:15
So this if I go back to the browser and I reload this
7:05:24
now we can see uh this has been added to the GitHub. Now let me open V.
7:05:36
So let's create a new project
7:05:41
and I'm going to uh select X mobile agency SAS. Click on import
7:05:48
and then let's change this to um X X design
7:05:56
AI
7:06:05
AI. Then let's also add the EM variable.
7:06:12
So I'm going to copy everything I have inside my EMV. So I'll quickly do that.
7:06:17
So I've pasted the EMV. So just paste everything here. We're going to still come back and update this URL. So let's
7:06:25
go down and let's click on deploy. So I think I also made a mistake. Let's
7:06:32
go into code review. So inside the code um then let's go into
7:06:38
packet.json. So we forgot to add Prisma sorry um post
7:06:45
install for um Prisma we say Prisma generate
7:06:52
like this. So let's push this now. Let's add this
7:07:04
add and post post install for Prisma.
7:07:15
So let's push this to main.
7:07:25
So now let's go back to to the browser.
7:07:31
Now this should update.
7:07:37
So let's try and click on deploy. So make sure you also add nodev production.
7:07:44
Now let's click on deploy.
7:07:53
So this has started to build.
7:08:02
So it's th an error. So what I'm going to do, let's just go to the code and
7:08:07
then let's remove so just remove the u the request here. So, I'm going to save
7:08:13
this again and push.
7:08:30
So, let me push this.
7:08:39
So, let's go to the browser and then I'll go back to the dashboard
7:08:51
and I'm going to click on this so we can create a new deployment.
7:08:57
I think it automatically build after I made a boot. So, let's check the
7:09:03
deployment. So it's build it. Okay. It
7:09:09
we can see the build log.
7:09:14
So everything worked. So everything worked. So let's just go back into
7:09:21
let me go back and then click on this and then go to settings.
7:09:29
So I'm going to update the environment variable. So I'm going to update the uh kind. Let
7:09:37
me get the doain. So x sign
7:09:46
I'll copy this and then let's go into environment
7:09:52
variable. Then scroll down to where we have
7:09:59
kind issue URL. Okay. Not this one. Kind site
7:10:04
URL. Yes. So let's just update this
7:10:18
edit and change this to this doain. So you can see https
7:10:28
and let's paste this. So copy this and then click on save.
7:10:34
And then also for the log URL edit
7:10:40
update this and click on save
7:10:45
and also uh the login.
7:10:50
Let's edit this login with direct URL. Paste this
7:10:56
and then save. So I think that is all.
7:11:03
So let's redeploy.
7:11:09
Let's redeploy this.
7:11:16
So we can go to deployments and you should be able to see it has started building. So I'll go to kind
7:11:26
let me go to
7:11:31
okay so I have the project already open. So let me open it.
7:11:36
So I've uh logged into the account. So let me click on the um project we
7:11:41
created. Then scroll down to where we have query. So let's just paste this. Copy
7:11:48
the API. So I'll just say / paste this like this.
7:11:55
So I'll copy this again. I'll pass it here too.
7:12:00
So I think uh so that guys that is it.
7:12:15
Okay, let me just paste this here and let's just save this.
7:12:25
So it has updated. So let's go over this has built. So if I click on S to sign
7:12:32
yeah if it's still app this should open.
7:12:37
So we're not signing. So let's click on sign in. Let's see it is going to work with SC.
7:12:43
So it's working. So I can use Google. So I've logged in into the account and
7:12:51
we should be able to see the recent project which we already have
7:12:57
to load. project.
7:13:05
So I notice after signing in it's showing fail to load project. If when I went to go to VC I checked it and I saw
7:13:13
that this is showing 500 error due to Prisma generates not found or Prisma CL
7:13:20
not found uh client sorry Prisma clients not found. So if I click on this now,
7:13:29
if I click on this, okay, we can see that the error is coming from Prisma. So
7:13:34
what we should do, we should go back to the code and um what I did there was to change this from Prisma client to Prisma
7:13:42
client JS and let's try this work. So I'm going to update again. So let me add
7:13:53
um updates
7:14:00
Christmas I'm going to put
7:14:12
so this has let me go back to the browser
7:14:19
So let's go to deployment. So this should start running.
7:14:24
This should create a new deployment. So let me go back
7:14:31
and I'm going to click on it again. Then click on deployment.
7:14:40
Then you see it is building. So let's wait for this to build. Let's check um the build log.
7:14:47
This should we can see generated Prisma client. We start by importing.
7:14:56
Okay. Hopefully this should work.
7:15:01
So let's wait. So that's complete. So let me try and
7:15:07
reload this again. Hopefully this work.
7:15:17
So it works. So this was uh so make sure you update that to u Prisma and client
7:15:25
GX. So if I click on this, I should be able to uh see. So it's loading the
7:15:33
project. I should be able to see the project.
7:15:40
So we can see that it's working after deploying. So now we need to connect inex. Remember we're normally using the
7:15:47
local host uh 8288. So just make sure to go back to your inest account and we're
7:15:54
going to add inest to vis. So um so just
7:16:00
come over to integration. I think uh we can connect to vis.
7:16:09
Let me check app. Okay. Get started. Yeah. Let's connect to app sync with V.
7:16:24
So can manage V integration. Okay. We need to integrate V. So you can
7:16:31
click here and just click on integrate V. So click on connect V to ingest.
7:16:38
So click on add integration then select account.
7:16:47
So I've already installed this before. So just click on just um you can select a specific product and project or all.
7:16:55
So I've already installed. So if I select a project, it's going to disable this option. So click on continue. So,
7:17:01
I'm going to u find the project.
7:17:12
So, let me let me just save configuration. And
7:17:21
so, now let me find the project. So, I'll scroll down to where we have
7:17:27
the AI. So I found it here. I think this is it.
7:17:34
Okay, this is it. X design AI. That's what we have here. X design- AI.
7:17:44
So let me click on this configure.
7:17:54
So click on enable. So enable um the
7:18:00
um project status. So determine whether or not in will communicate with your visual
7:18:05
application. We have pass in the part. So we need to create a deployment key. Let's go to the project we deployed.
7:18:12
Let's click on settings and then let's go to deployment protection. So just
7:18:19
enable this if it's not enabled. Then we can click on add.
7:18:24
Then leave blank. and click on add.
7:18:31
And this is going to generate a. So you can click on this to copy. So
7:18:37
click on copy. Then let's go back to uh inex. And let's paste it here.
7:18:44
So once you paste it. Now let's click on save configure.
7:18:54
So it has save. So we can go back and let's check if if it's able to pick
7:19:01
up the functions. So it's not working. So let's go back to app.
7:19:07
So it's not able to sync. So let's go to let's click on sync manually.
7:19:14
Let's paste in the part. So, I'll just copy um the S design AI VC app and let's
7:19:22
go over toest and let's just paste it and say API/est
7:19:30
and click on sync here.
7:19:38
So, let's wait for this.
7:19:44
So I think it failed. So I think the best way for me to do this is to do this manually because um it's not able to
7:19:51
sync. So I'll click on sync new app. I'm going to manually. So I'm going to say
7:19:57
uh x a i v app then click on sync app.
7:20:06
So I keep failing. So let me look at this. So I notice I I was using a wrong
7:20:11
app URL. So I've changed it to the deployed one I have. So let me click on sync now
7:20:17
and this should work because I've updated the URL to the right one.
7:20:27
So let's wait this. Let's wait for it to load. So now you can see that it is sync and if you check the functions you can
7:20:34
be able to see generate function and the hello uh generate UI screen function and
7:20:39
hello function. So we can see that everything is connected now. So now we
7:20:44
can we can then generate a a design. So I just click on fitness activity app.
7:20:52
I'll just say uh design a fitness
7:20:59
app uh dashboard
7:21:07
screen only. So let me first of all make sure I
7:21:14
reload this. Paste this again uh design fitness dashboard screen. Then click on
7:21:21
uh submit or design and um we should be able to redirect us to you can see
7:21:31
uh you're not able to say let's check if this is wrong.
7:21:42
So let's check one. So it's running. If I check back, okay,
7:21:47
we can see that it's generating and we can see the fitness dashboard. So this is working fine. So let's wait for
7:21:55
this to complete. Now we can see that has generated the screen.
7:22:01
Uh it's just finalizing and that should screenshot the uh
7:22:08
the canvas. So we can see that this is looking good. So let's wait for this to finalize.
7:22:14
Okay. So I think it is done. So we can change team and see that everything works fine.
7:22:21
So we can say everything is working fine. You can change the theme
7:22:27
and it's looking um it's looking great.
7:22:32
So we should also test the uh screenshot. So I'll click on download here
7:22:38
and let me see if this is going to work. So we can see that it work. If I open this in a new tab, you can see the image
7:22:46
was downloaded. um you can see the uh
7:22:52
the design. So if I go back to the canvas now, you can see everything everything work fine. So um so that is
7:23:01
the end for this video. So make sure um you like, share and subscribe to the