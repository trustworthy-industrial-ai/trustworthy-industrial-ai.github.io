---
layout: page
title: "Volume I: The Governed Decision Layer"
nav_title: "Volume I"
permalink: /volume-i/
---

The current focus of this research program is **Trustworthy Decisions** — the architectural layer responsible for turning AI reasoning into decisions that engineers can stand behind. This is where the article series and the forthcoming book concentrate.

This page is the living table of contents for Volume I. New articles are added here as they're published.

{%- assign volume_posts = site.posts | where: "category", "governance" | sort: "date" | reverse -%}
{%- if volume_posts.size > 0 -%}
<ol class="volume-toc">
  {%- for post in volume_posts -%}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
    <span class="volume-toc__date">{{ post.date | date: "%b %-d, %Y" }}</span>
  </li>
  {%- endfor -%}
</ol>
{%- else -%}
<p><em>Articles will appear here as they're published.</em></p>
{%- endif -%}
