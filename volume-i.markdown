---
layout: page
title: "Volume I: The Governed Decision Layer"
nav_title: "Volume I"
permalink: /volume-i/
---

One of the primary focus of this applied research program is **Trustworthy Decisions** — the architectural layer responsible for turning AI reasoning into decisions that engineers can stand behind. This is where the article series concentrate.

This page is the living table of contents for Volume I. New articles are added here as they're published.

{% assign volume_posts = site.posts | where: "category", "governance" | sort: "date" | reverse %}
{% if volume_posts.size > 0 %}
{% for post in volume_posts %}
1. [{{ post.title | escape }}]({{ post.url | relative_url }}) <span class="volume-toc__date">{{ post.date | date: "%b %-d, %Y" }}</span>
{% endfor -%}
{: .volume-toc}
{% else %}
*Articles will appear here as they're published.*
{% endif %}
