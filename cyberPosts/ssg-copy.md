---
title: 'When to Use Static Generation v.s. Server-side Rendering'
subText: "When times call for Big Extremes"
date: '2020-01-02'
ogImage:
  url: '/images/back.webp'
---
We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.
You can use Static Generation for many types of pages, including:


1. Marketing pages
2. Blog posts
3. E-commerce product listings
4. Help and documentation


You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.


On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.


In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.




## Content Writing Team 📝

![blog-images](/images/pexels-ali-pazani-2777898.jpg#thumbnail)



