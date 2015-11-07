---
title: portfolio
layout: page
---

{% for project in site.projects %}

{% if project.redirect %}
<div class="project">
    <a href="{{ project.redirect }}">
    <div class="thumbnail">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span>
            <h1>{{ project.title }}</h1>
            <br/>
            <p>{{ project.description }}</p>
        </span>
    </div>
    </a>
</div>

{% else %}

<div class="project ">
    <a href="{{ project.url }}">
    <div class="thumbnail">
        {% if project.img %}
        <img class="thumbnail" src="{{ project.img }}"/>
        {% else %}
        <div class="thumbnail blankbox"></div>
        {% endif %}    
        <span>
            <h1>{{ project.title }}</h1>
            <br/>
            <p>{{ project.description }}</p>
        </span>
    </div>
    </a>
</div>
{% endif %}
{% endfor %}

