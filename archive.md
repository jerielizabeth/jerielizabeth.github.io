---
layout: page
title: Blog Posts
description: Collection of posts related to history, religion, and computers
---
<section id="archive">
  <!-- <hr> -->
    {%for post in site.posts %}
    {% unless post.next %}
      <h3>{{ post.date | date: '%Y' }}</h3>
      <ul class="post-list">
      {% else %}
      {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
      {% capture nyear %}{{ post.next.date | date: '%Y' }}{% endcapture %}
      {% if year != nyear %}
      </ul>
      <h3>{{ post.date | date: '%Y' }}</h3>
      <hr>
      <ul class="post-list">
        {% endif %}
        {% endunless %}
      <li><a href="{{ post.url }}"><time>{{ post.date | date:"%d %b" }}</time> | {{ post.title }}</a></li>
	  {% endfor %}
	  </ul>
</section>