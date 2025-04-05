<template>
    <div id="app" class="min-h-screen bg-hero-pattern bg-cover bg-no-repeat bg-center bg-fixed bg-blend-multiply bg-black bg-opacity-40" :style="backgroundStyle">
      <HeaderNav />
      <RouterView />
      <Footer />
    </div>
  </template>
  
  <script>
  import HeaderNav from './components/HeaderNav.vue';
  import Footer from './components/Footer.vue';
  
  export default {
    name: 'App',
    components: {
      HeaderNav,
      Footer
    },
  };
  </script>
  
  <style>
  /* Global styles go here */
  </style>
  