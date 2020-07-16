---
layout: post
title: "Blog Setup"
author: "Tom"
tags: Dev
---

Second day of blog development and I've already spent way too long writing a tag system for these blog posts. Since I plan on writing different kinds of posts, I wanted something which would allow people to switch between tags, like a filter.

I also didn't want to limit myself to the kinds of tags I can use, so I've written a system which scrapes all the scans I've used and let's you toggle between those. Thankfully, Jekyll collates all the tags I've used across all my posts in `site.tags`, so that was easy. All those tags are displayed at the top of the Posts page, so I could just use some JavaScript to grab the text from those buttons, which is always identical to the tags defined in the posts. From there it's just a case of showing and hiding the posts depending on which tag they have assigned to them, which Jekyll also lets me access via `post.tags`.

There are two key limitations of the current system though:

1. This implementation doesn't play nice with pagination. If there are 5 posts per page, but only 2 match the filter, only those two will be shown. As you click through the pages of results, the posts per page will jump around. This one I really ought to fix. I can probably fix this by comparing the page size with the number of posts being shown. If there not enough posts are being shown I might be able to fetch some more, but all that stuff is handled by Liquid, which is all pre-render, so the client can't interact with it like that... Might be harder than I'd like to fix this one.

1. The system can only select one tag at a time. I'm fine with that though, because this took long enough as it is. 

It's nice to be working on something for myself again. It's been too long since I did any development purely for myself.
