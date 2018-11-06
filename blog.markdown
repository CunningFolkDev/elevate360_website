---
title: Blog
date: 2018-10-25 04:45:00 Z
---

<section id="featured_post">
    {% assign first_post = site.posts[0] %}
    <h1 class="small">New Post</h1>
    <h2>{{ first_post.title}}</h2>
    <a href="{{ first_post.url }}" class="section-image" style="background-image: url('{{ first_post.post_image }}')"></a>
    <div class="section-text">
        <p>{{ first_post.excerpt }}</p>
        <a class="learn-more" href="{{ first_post.url }}">Read More &#x2192;</a>
    </div>
</section>
<section>
    <div class="">
        <h1 class="small">Recent Blog Posts</h1>
        <div class="post-list">
        {%- for post in site.posts -%}
            {% if forloop.first %}
                <!-- skip -->
            {% else %}
                {% include blog_card.html post=post %}
            {% endif %}
            
        {%- endfor -%}
        </div>
    </div>
</section>