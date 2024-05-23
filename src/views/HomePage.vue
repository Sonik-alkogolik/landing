<template>
   <section>
    <div class="container">
      <InfoHeader />
    </div>
  </section>
   <section :class="['bg-gray']">
    <MainHeader/>
  </section>
  <section :class="['bg-orange intro']">
    <div class="container">
      <IntroSection />
    </div>
  </section>
  <section>
    <div class="container">
      <AboutUs />
    </div>
  </section>
  <section :class="['section-our-service']">
    <div class="container">
      <OurServices />
    </div>
  </section>
  <section>
    <div class="container">
      <GetStarted />
    </div>
  </section>
  <section :class="['bg-orange']">
    <div class="container">
      <OurTeam />
    </div>
  </section>
  <section :class="['gray-dark']">
    <div class="container">
      <MainFooter />
    </div>
  </section>
  <PopupContact :visible="isPopupVisible" />
</template>

<script>
import InfoHeader from '@/components/InfoHeader.vue';
import MainHeader from '@/components/MainHeader.vue';
import MainFooter from '@/components/MainFooter.vue';
import IntroSection from '@/components/home-page/IntroSection.vue';
import AboutUs from '@/components/home-page/AboutUs.vue';
import OurServices from '@/components/home-page/OurServices.vue';
import GetStarted from '@/components/home-page/GetStarted.vue';
import OurTeam from '@/components/home-page/OurTeam.vue';
import PopupContact from '@/components/base/PopupContact.vue';



export default {
  name: 'HomeView',
  components: {
    InfoHeader,
    MainHeader,
    IntroSection,
    AboutUs,
    OurServices,
    GetStarted,
    OurTeam,
    MainFooter,
    PopupContact,
  }
 
};
</script>
