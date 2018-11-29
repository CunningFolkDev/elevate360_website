---
title: Services
date: 2018-10-28 11:47:00 -04:00
background-image: "aaron-burson-242126-fullwidth@2x.jpg"
section-image-1: "micheile-henderson-597870-unsplash-copy-2@2x.jpg"
service-cards:
- title: Treatment Programs
  image: "conor-sexton-560983-unsplash@2x.jpg"
  copy: Treatment is individually tailored to each patient and can be modified as
    necessary to meet the specific needs of each patient.
  page_slug: treatment-programs
- title: How We Treat
  image: "eduard-militaru-133851-unsplash@2x.jpg"
  copy: Every patient participates in an initial comprehensive evaluation to determine
    their areas of strength and the areas in which they may need improvement and support.
  page_slug: how-we-treat
- title: Therapies Used at Elevate360
  image: "bridge-560983@2x.jpg"
  copy: Elevate360 specializes in the outpatient treatment of people struggling with
    alcohol and substance use and related disorders.
  page_slug: therapies-used
---
{% assign background_image = page.background-image | remove_first: '/uploads/' | url_decode %}
{% assign section_image_1 = page.section-image-1 | remove_first: '/uploads/' | url_decode %}

{% include mobile_hero.html image=page.background-image message="Treatment that works." %}

<section id="homepage_1" class="hero" style="background-image: url('{% asset '{{ background_image }}' @path %}')">
    <div class="section-content">
      <div class="section-content-inner">
        <h1>Our Services</h1>
        <h2>Compassionate care, effectively done</h2>
        <p>
            All the treatments provided at Elevate360 are scientifically proven approaches and are incorporated into a comprehensive treatment program that is interesting, engaging, accessible, and even fun for our patients.
        </p>
      </div>
    </div>
</section>
<section id="who_we_are">
    <h1 class="small small-full-width">{{ page.title }}</h1>
    <div class="inner-content-holder">
      <div class="section-content">
          <h2>Our Services</h2>
          <p>
              All the treatments provided at Elevate360 are scientifically proven approaches and are incorporated into a comprehensive treatment program that is interesting, engaging, accessible, and even fun for our patients.  Our compassionate staff provide respectful treatment aimed at increasing each patient’s internal motivation to make positive and sustained changes in their thinking and in their behavior.  Our goal is to help our patients have more fulfilling relationships and lives.
          </p>
      </div>
      <div class="side-image" style="background-image: url('{% asset '{{ section_image_1 }}' @path %}')"></div>
    </div>
</section>
<section id="service_cards">
  <div class="card-grid">
    {% for card in page.service-cards %}
        {% assign card_image = card.image | remove_first: '/uploads/' | url_decode %}
        <div class="card card-3-up" id="{{ card.page_slug }}">
            <img src="{% asset '{{ card_image }}' @path %}">
            <h4>{{ card.title }}</h4>
            <p>{{ card.copy }}</p>
            <a href="/{{ card.page_slug }}" class="learn-more">Learn More &#x2192;</a>
        </div>
    {% endfor %}
  </div>
</section>
{% include section-type2.html
    id="service_trainings"
    h1="Trainings"
    h2="Trainings for Clinicians"
    content="The Elevate360 team is a group of skilled psychologists who are clinicians, researchers, and experts in addiction and the conditions that commonly occur along with substance use. We routinely provide a variety of trainings both at Elevate360 and in the community."
%}
