---
title: Our Technology
date: 2018-10-28 11:51:00 -04:00
background-image: "hero-technology@2x.jpg"
section-image-1: "chess-photo@2x.jpg"
---

{% include mobile_hero.html image=page.background-image message="Our Technology." %}

<section id="homepage_1" class="hero plant-image" style="background-image: url('{{ page.background-image }}')">
    <div class="section-content">
        <div class="section-content-inner">
            <h1>Our Technology</h1>
            <h2>Connections Mobile App</h2>
            <p>
                Elevate360 is a boutique outpatient addiction treatment center located in Midtown Manhattan that uses state-of-the-art, science-based techniques, technology, and highly trained doctoral level psychologists to provide patients with the highest quality therapeutic experience in addiction treatment.
            </p>
        </div>
    </div>
</section>

<section id="who_we_are">
    <h1 class="small small-full-width">{{ page.title }}</h1>
    <div class="inner-content-holder">
      <div class="section-content">
            <h3>Elevate360 partnered with CHESS Health to provide the Connections mobile app to our patients.</h3>
            <p>
                This evidence based comprehensive relapse prevention platform provides 24/7 support by connecting patients to their peers and caregivers, providing recovery support information and helping them avoid high risk situations.  If a patient travels near a high-risk situation, such as a bar where they used to drink, their phone alerts them that they are in a risky situation.  Along with the alert the app offers personalized motivation messages that they chose in advance, such as a video of them talking about how difficult their life was before they entered treatment, which are designed to help them make the decision to leave the high-risk situation.  It also provides predictive analytics to our clinicians to help them to know when to reach out to patients to try to prevent a slip or a full relapse.
            </p>
            <p>
                Research published in JAMA Psychiatry and The Journal of Dual Diagnosis demonstrated that the Connections mobile app significantly reduces the number of patients who relapse. For those who do relapse, use of the Connections app reduces the severity of the relapse and improves a patient’s likelihood of successful treatment completion.  We offer this additional technological support to our patients as part of our overall evidence-based approach to care.
            </p>
      </div>
      <div class="side-image" style="background-image:url('{{ page.section-image-1 }}')"></div>
    </div>
</section>

{% include section-callout.html
    h3="Call Us Today, <br class='only-mobile' />Be Seen Tomorrow!"
    h4="Schedule a free <br class='only-mobile' />15-minute consultation <br class='only-mobile' /><span class='only-desktop'>- </span>212-204-8430"
    button_msg="212-204-8430"
    button_mobile="call now"
    button_href="tel:1-212-204-8430"
%}
