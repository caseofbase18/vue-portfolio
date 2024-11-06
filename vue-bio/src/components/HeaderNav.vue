<template>
    <header class="header-nav">
      <div class="logo">
        <router-link to="/">MyApp</router-link>  <!-- Replace with your app's name or logo -->
      </div>
  
      <nav>
        <ul class="nav-links">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <!-- <li>
            <router-link to="/about">About</router-link>
          </li> -->
          <li>
            <router-link to="/portfolio">Portfolio</router-link>
          </li> 
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </nav>
  
      <div class="hamburger" @click="toggleMenu">
        <span v-if="!isMenuOpen">&#9776;</span> <!-- Hamburger icon -->
        <span v-else>&times;</span> <!-- Close icon -->
      </div>
  
      <div v-if="isMenuOpen" class="mobile-menu">
        <ul>
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <!-- <li>
            <router-link to="/about">About</router-link>
          </li>
          <li>
            <router-link to="/services">Services</router-link>
          </li> -->
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderNav',
    data() {
      return {
        isMenuOpen: false
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      }
    }
  }
  </script>
  
  <style scoped>
  /* Basic styling for header */
  .header-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #333;
    color: white;
  }
  
  .logo a {
    color: white;
    font-size: 24px;
    text-decoration: none;
  }
  
  nav {
    display: flex;
  }
  
  .nav-links {
    display: flex;
    list-style: none;
    gap: 20px;
  }
  
  .nav-links li a {
    color: white;
    text-decoration: none;
    font-size: 16px;
  }
  
  .nav-links li a:hover {
    text-decoration: underline;
  }
  
  /* Hamburger menu for mobile */
  .hamburger {
    display: none;
    cursor: pointer;
    font-size: 28px;
  }
  
  .mobile-menu {
    display: none;
  }
  
  .mobile-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: #444;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
  }
  
  .mobile-menu ul li {
    padding: 10px 20px;
  }
  
  .mobile-menu ul li a {
    color: white;
    text-decoration: none;
  }
  
  .mobile-menu ul li a:hover {
    background-color: #555;
  }
  
  /* Media query for mobile devices */
  @media (max-width: 768px) {
    .hamburger {
      display: block;
    }
  
    .nav-links {
      display: none;
    }
  
    .mobile-menu {
      display: block;
    }
  
    .mobile-menu.open {
      display: block;
    }
  }
  </style>
  