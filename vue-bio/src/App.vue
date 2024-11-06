<template>
    <div id="app">
      <HeaderNav />
      <RouterView />
    </div>
  </template>
  
  <script>
  import HeaderNav from './components/HeaderNav.vue';
  
  export default {
    name: 'App',
    components: {
      HeaderNav
    }
  }
  </script>
  
  <style>
  /* Global styles go here */
  </style>
  