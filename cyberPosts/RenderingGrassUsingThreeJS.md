---
title: 'Rendering Grass using ThreeJS'
date: '2024-01-12'
subText: "A Efficient Solution for Grass on the Web"
contentId: [1,2]
ogImage: 
    url: "/images/GrassBackDrop.webp"
---

**Three.JS** is a powerful rendering library that uses web GPU under the hood. In order to use this Library
effectively one must understand the basics of 3D rendering techniques to get the most out of the
library. In this example demonstrate how to efficiently render large amounts of grass over a
plane using 3js and custom shaders. 


I have to stress that this is nerd stuff. If this kind of stuff is
is your jam, then you have come into the right place. 


**To begin**, we have to have a firm understanding of how the rendering pipeline works. The image below shows the stages of the
rendering pipeline. 

![image](/images/pipeline_en.png#thumbnail)

There there many ways to manipulate each step of the pipeline however, we will only focus three parts of the rendering pipeline.


First the input is where we can create acompute buffer which will allocate positions in order to send to an instanced mesh. So what
exactly is a compute buffer? The compute buffer is array of positions to send to the vertex shader to for processing. In our case since we are only rendering on a 2d plane we need the x
and z positions to pass to the vertex Shader. We wouldn&#39;t want our grass jumping up in the y
direction. Therefore, we do not need it. 

![image](/images/PositionArrays.png#thumbnail)



In order to create this buffer, we simply create arrays in
JavaScript for the x and z positions and then run a for loop using the amount of particles we
want while randomizing the positions. It is important to note that a 32 array must be used in
order to pass these positions to the vertex Shader. This is because web GPU requires it. From here we can set up a instanced mesh that can efficiently render multiple objects within a scene.


There are plenty of examples using an instanced mesh especially on the Three js's website. So, if you have any questions, check it out there. One key thing to note is that we are using plain geometry in order to billboard the grass. 

![image](/images/InstancedMeshSetup.png#wide)

Billboarding is a common technique used in game
development to render objects with low memory consumption. Especially in web development, this is particularly important because we cannot assume that everyone has a powerful GPU in
their pocket. So, to set up this billboard, a plane geometry should be used with a grass texture which you can grab from anywhere on the web as long as it has the transparent background.

From there, the positions can then be set to an instanced buffer attribute order to pass it to the vertex shader.From here we can simply add the positions to the positions already set by the vertex
Shader from the plane geometry. 

![image](/images/VertexShader.png#wide)


Then, we open up our fragment Shader using texture 2D we
pass texture from the texture uniform and the UVs from the vertex shader. From here, the technique known as Alpha clipping can be used to discard the pixels that have alpha value less than .5. In other words anything that&#39;s transparent from the texture. Then make sure to pass the texture to the flag color
in order to render it out.


And there we have it beautifully rendered grass. 

![image](/images/result.gif#thumbnail)


In totality, this is very akin to the GPGPU technique. In this case, we passed data to the GPU for processing this
allows for more efficient rendering as the GPU because parallel processing is much faster at handling this sort of data. This is explained in Acerola's video on grass rendering.

[![Watch the video](https://i.ytimg.com/vi/Y0Ko0kvwfgA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCk59g1beuoKYSMsyD20jY6KOgpyw#thumbnail)](https://www.youtube.com/watch?v=Y0Ko0kvwfgA&t=2s)

 Using that video as a reference I translated his technique from Unity into webgl. Thanks for reading!