---
title: About Us
date: 2018-10-25 00:42:00 -04:00
background-image: "hero@2x.jpg"
section-image-1: "kari-shea-580156-unsplash@2x.jpg"
---
{% assign background_image = page.background-image | remove_first: '/uploads/' | url_decode %}
{% assign section_image_1 = page.section-image-1 | remove_first: '/uploads/' | url_decode %}

{% include mobile_hero.html image=background_image message="Let’s Talk" %}

<section id="about_us_hero" class="hero" style="background-image: url('{% asset '{{ background_image }}' @path %}')">
    <div class="section-content">
        <div class="section-content-inner">
            <h1>About Us</h1>
            <h2>Professional treatment <br class="only-desktop" />that works.</h2>
            <p>
                Elevate is a boutique outpatient addiction treatment center located in Midtown Manhattan that uses state-of-the-art, science-based techniques, technology, and expertly trained doctoral level psychologists to provide patients with the highest quality therapeutic experience in addiction treatment.
            </p>
            <a href="tel:1-212-204-8430" class="button rounded only-desktop">212-204-8430</a>
            <a href="tel:1-212-204-8430" class="button rounded only-mobile">Let's Talk &nbsp;&#x260E;</a>
        </div>
    </div>
</section>

<section id="who_we_are">
    <h1 class="small small-full-width">Who We Are</h1>
    <div class="inner-content-holder">
        <div class="section-content">
            <h2>Our Mission & Vision</h2>
            <p>
                We provide exceptional, science-based, compassionate care for patients and families struggling with alcohol, the misuse of pain medication, and other substance use disorders.
            </p>
            <p>
                We have a deeply held belief that people struggling with addiction deserve professional treatment that works.
            </p>
            <p>
                Through continuous research, evolving technologies, and evidence-based care, we are leading a revolution in addiction care with on
            </p>
            <!-- <a class="learn-more">Learn More &#x2192;</a> -->
        </div>
        <div class="side-image" style="background-image: url('{% asset '{{ section_image_1 }}' @path %}')"></div>
    </div>
</section>
{% include section-type2.html
    id="meet_our_staff"
    h1="Our Team"
    h2="Meet Our Staff"
    content="The clinical team at Elevate360 is a group of expert addiction psychologists who are passionate about their work and about using the most effective treatments for substance use disorders. We have an unwavering commitment to the use of research supported treatment techniques and we use them to support patients as they strive towards their goals."
    href="/our-staff"
%}
