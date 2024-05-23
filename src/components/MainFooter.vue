<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="logo-section">
        <div class="logo-footer">
          <img src="/img/LOGO HERE.svg" alt="">
        </div>
        <p class="description">USA & Canada specializes in providing world class prep solutions for your Amazon FBA business.</p>
        <ButtonFooter />
      </div>
      <div class="links-section">
        <h3>QUICK LINKS</h3>
        <ul>
          <li> <a > Home</a></li>
          <li> <a > About us</a></li>
          <li> <a > Our Services</a></li>
          <li> <a > Our Team</a></li>
          <li> <a > Contact us</a></li>
        </ul>
      </div>
      <div class="services-section">
        <h3>OUR SERVICES</h3>
        <p class="footer-services-pfone">
          <img src="/img/icon/header-pfone.svg" alt=""> <a href="tel:+18776180069">1 (877) 618-0069</a>
        </p>
        <a href="mailto:info@empireprepservices.com"> 
          <img src="/img/icon/header-mail.svg" alt=""> info@empireprepservices.com
        </a>
        <p> 
          <img src="/img/icon/header_location.svg" alt=""> 
          California:4010 Valley Blvd Ste 108, Walnut, CA 91789
        </p>
        <div class="social-icons">
          <i class="social-icon"></i>
          <i class="social-icon"></i>
          <i class="social-icon"></i>
          <i class="social-icon"></i>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="terms">Terms & Conditions</p>
      <p class="copyright">Copyright Notice: © 2022 | All Rights Reserved. Empire Prep Services</p>
    </div>
  </footer>
</template>

<script>

import ButtonFooter from '@/components/base/ButtonFooter.vue';
export default {
  name: 'MainFooter',
  components:{
    ButtonFooter,
  }
}
</script>

<style lang="scss" scoped>

</style>
