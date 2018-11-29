---
title: Our Staff
date: 2018-10-28 11:51:00 -04:00
---

{% include section-type2.html
    id="meet_our_staff"
    h1="Our Team"
    h2="Meet Our Staff"
    content="The clinical team at Elevate360 is a group of expert addiction psychologists who are passionate about their work and about using the most effective treatments for substance use disorders. We have an unwavering commitment to the use of research supported treatment techniques and we use them to support patients as they strive towards their goals."
%}

{% assign staff = site.staff | sort: 'position' %}
<section id="staff_list">
    <div class="grid-inner">
        {% for person in staff  %}
            <div class="team-bio-card" aria-data-url="{{ person.url }}">
                {{ person.content }}
            </div>
        {% endfor %}
    </div>
</section>

<script>
    (function scope(){    
        var titles = document.querySelectorAll('.team-bio h1.small');
        var text_blocks = document.querySelectorAll('.team-bio-card .team-bio-text');
        var cards = document.querySelectorAll('.team-bio-card');
        var bios = document.querySelectorAll('.team-bio');

        for (let i = 0; i < titles.length; i++) {
            titles[i].style = "display: none;"
            const new_title = document.createElement('h1');
            new_title.innerText = titles[i].innerText;
            text_blocks[i].prepend(new_title);

            const more = document.createElement('a');
            const url = cards[i].getAttribute('aria-data-url');
            // console.log(cards)
            more.setAttribute('class', 'learn-more');
            more.setAttribute('href', url);
            more.innerHTML = 'Learn More &#x2192;';
            cards[i].append(more);
            // console.log(bios[i])
            bios[i].classList.remove('team-bio');
            bios[i].classList.add('team-bio-card-inner');
        }
    })();
</script>
