---
layout: page
title: archive
description: Collection of posts related to history, religion, and computers
---
<section id="archive">
  <h3>This year's posts</h3>
  <hr>
    {%for post in site.posts %}
    {% unless post.next %}
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