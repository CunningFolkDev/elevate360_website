---
title: Why Elevate360?
date: 2018-10-25 00:41:00 -04:00
background-image: "why_elevate360_hero@2x.jpg"
section-image-1: "new-york-438391@2x.jpg"
---
{% assign background_image = page.background-image | remove_first: '/uploads/' | url_decode %}
{% assign section_image_1 = page.section-image-1 | remove_first: '/uploads/' | url_decode %}

{% include mobile_hero.html image=background_image message="Let's Talk" %}

<section id="homepage_1" class="hero" style="background-image: url('{% asset '{{ background_image }}' @path %}')">
    <div class="section-content">
        <div class="section-content-inner">
            <h1>{{ page.title }}</h1>
            <h2>In short, because we do treatment right.</h2>
            <p>
                Our professional staff uses proven therapeutic techniques and technology to provide care which aims to help each patient develop a meaningful life in recovery that is more compelling than a life consumed with substance use.  
            </p>
            <a href="tel:1-212-204-8430" class="button rounded bordered only-desktop">212-204-8430</a>
            <a href="tel:1-212-204-8430" class="button rounded bordered only-mobile">Let's Talk  &nbsp;&#x260E;</a>
        </div>
    </div>
</section>

<section id="why_elevate360">
    <div class="inner-content-holder">
        <div class="section-content">
            <h2>{{ page.title }}</h2>
            <p>In short, because we do treatment right. All of our clinicians are doctorate level psychologists trained in providing care not only for substance use disorders, but also for the mental health issues that often occur along with alcohol and drug use which include depression, anxiety, trauma, compulsive behaviors, and other psychological issues. 
            </p>
            <p>
            According to the Substance Abuse and Mental Health Services Administration (SAMHSA), only about 10% of people struggling with addiction receive specialty addiction treatment.  Of those who engage in care, only a tiny percentage receive evidence-based care.  Comparatively, approximately 75% of people with high blood pressure and diabetes receive evidence-based treatments. Part of the reason for this is that the majority of addiction treatment staff providing care in the United States lack the knowledge, training, and education required to offer effective evidence-based treatments.  
            </p>
            <p>
            Many people don’t know that addiction treatment really works. When done right, treatment for addiction is as effective as evidence-based treatments for other chronic diseases. Relapse rates for addiction resemble those of other chronic diseases such as diabetes, hypertension, and asthma. Moreover, similar to the approaches taken for other chronic diseases, successful treatment for addiction typically requires continual evaluation and ongoing care.
            </p>
            <p>
            Patients and families receiving treatment for addiction need education to learn what actually works and what just sounds like it should work. There is a big difference!
            </p>
            <p>
            We created Elevate360 to ensure that patients and their families have access to professionals who can provide information and education about available treatments, and can answer questions about which are most effective, and which will work best for them.
            </p>
        </div>
        <div class="side-image" style="background-image: url('{% asset '{{ section_image_1 }}' @path %}')"></div>
    </div>
</section>
