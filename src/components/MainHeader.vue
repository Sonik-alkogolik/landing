<template>
  <div class="container">
      <header>
        <div class="header-nav-wrapp">
          <div class="logo">
           <img src="/img/header/logo.webp" alt="">
          </div>
        <div class="header-nav-link">
       <nav>
         <router-link to="/">Home</router-link>
         <router-link to="/about">About us</router-link>
         <router-link to="/services">Our Services</router-link>
         <router-link to="/team">Our Team</router-link>
        <router-link to="/contact">Contact us</router-link>
      </nav>
       </div>
     </div>
    </header>
  </div> 
  </template>
  
  <script>
  export default {
    name: 'MainHeader'
  };
  </script>
  

  