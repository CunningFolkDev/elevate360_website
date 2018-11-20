---
title: Welcome to Elevate360 Wellness
date: 2018-08-26 01:08:00 -04:00
background-image: "/uploads/sarah-dorweiler-211779-unsplash@2x.png"
section-image-1: "aaron-burson-242126-unsplash@2x.jpg"
section-image-2: "c-17676499-f-39-c-9-e-667-c-88-b-1035-af-430-f-copy@2x.jpg"
section-image-3: "josh-couch-475118-unsplash@2x.jpg"
layout: default
---
{% assign background_image = page.background-image | remove_first: '/uploads/' | url_decode %}
{% assign section_image_1 = page.section-image-1 | remove_first: '/uploads/' | url_decode %}
{% assign section_image_2 = page.section-image-2 | remove_first: '/uploads/' | url_decode %}
{% assign section_image_3 = page.section-image-3 | remove_first: '/uploads/' | url_decode %}

{% include mobile_hero.html image=background_image message="Need Help?" %}

<section id="homepage_1" class="hero" style="background-image: url('{% asset '{{ background_image }}' @path %}')">
    <div class="section-content">
        <h1>Welcome to Elevate360 Wellness</h1>
        <h2>State of the art care, delivered compassionately.</h2>
        <p>
            Elevate360 is a boutique outpatient addiction treatment center located in Midtown Manhattan that uses state-of-the-art, science-based techniques, technology, and highly trained doctoral level psychologists to provide patients with the highest quality therapeutic experience in addiction treatment.
        </p>
        <a class="button rounded" href="/contact">get email updates</a>
    </div>
</section>
{% include section-callout.html
    h3="Call Us Today, Be Seen Tomorrow!"
    h5="Schedule a free 15-minute consultation - 212-204-8430"
    button_msg="212-204-8430"
    button_mobile="call now"
    button_href="tel:1-212-204-8430"
%}
<section class="home-section" id="what_we_do">
    <div class="section-text">
        <h1 class="small">what do we do?</h1>
        <h2>Exceptional addiction care</h2>
        <p>We provide exceptional individualized care for patients and families struggling with alcohol, pain medication, and other substance use.</p>
        <!-- <a class="learn-more">Learn More &#x2192;</a> -->
    </div>
    <div class="section-image" style="background-image: url('{% asset '{{ section_image_1 }}' @path %}')">
    </div>
</section>
<section class="home-section" id="our_vision">
    <div class="section-image" style="background-image: url('{% asset '{{ section_image_2 }}' @path %}')"></div>
    <div class="section-text">
        <h1 class="small">Our Vision</h1>
        <h2>Compassionate care, effectively done.</h2>
        <p>Through continuous research, evolving technologies, and evidence-based care, we plan to lead a revolution in addiction care with one simple goal: to help our patients create and live healthy and happy lives.</p>
        <!-- <a class="learn-more">Learn More &#x2192;</a> -->
    </div>
</section>
<section class="home-section" id="our_belief">
    <div class="section-text">
        <h1 class="small">Our Belief</h1>
        <h2>Professional treatment that works.</h2>
        <p>We have a deeply held belief that people struggling with addiction deserve professional respectful treatment that works.</p>
        <!-- <a class="learn-more">Learn More &#x2192;</a> -->
    </div>
    <div class="section-image" style="background-image: url('{% asset '{{ section_image_3 }}' @path %}')"></div>
</section>

{% include section-type1.html
    id="different"
    h1="Our Promise"
    h2="How are we different"
    content="The Elevate360 model differs from most addiction centers in that all of the treatment provided is based on scientifically proven techniques and we strive to make treatment interesting, engaging, accessible, and even, dare we say... fun for the patient."
%}
