<template>
  <header class="sticky top-0 bg-gray-50 shadow-md z-50 w-full">
    <div class="max-w-screen-2xl mx-auto flex justify-between items-center px-4 py-4">
      <!-- Logo -->
      <div class="logo">
        <router-link to="/" class="text-custom-grey hover:text-custom-purple hover:bg-transparent focus:text-custom-purple text-2xl font-bold">Casey Natale Maltese | Front-End Web Developer</router-link>
      </div>

      <!-- Navigation -->
      <nav class="flex">
        <ul class="nav-links flex space-x-14">
          <li>
            <router-link to="/" class="text-custom-grey hover:font-bold hover:text-custom-purple hover:underline hover:underline-offset-2 hover:bg-transparent focus:bg-transparent focus:text-custom-purple focus:underline focus:underline-offset-2 focus:font-bold text-base">Home</router-link>
          </li>
          <li>
            <router-link to="/portfolio" class="text-custom-grey hover:font-bold hover:text-custom-purple hover:underline hover:underline-offset-2 hover:bg-transparent focus:bg-transparent focus:text-custom-purple focus:underline focus:underline-offset-2 focus:font-bold text-base">Portfolio</router-link>
          </li>
          <li>
            <router-link to="/contact" class="text-custom-grey hover:font-bold hover:text-custom-purple hover:underline hover:underline-offset-2 hover:bg-transparent focus:bg-transparent focus:text-custom-purple focus:underline focus:underline-offset-2 focus:font-bold text-base">Contact</router-link>
          </li>
          <!-- <li>
            <router-link to="/hobbiesandinterests" class="text-custom-grey hover:font-bold hover:text-custom-purple hover:underline hover:underline-offset-2 hover:bg-transparent focus:bg-transparent focus:text-custom-purple focus:underline focus:underline-offset-2 focus:font-bold text-base">Hobbies & Interests</router-link>
          </li> -->
        </ul>
      </nav>

      <!-- Hamburger Icon (for mobile) -->
      <div class="hamburger lg:hidden" @click="toggleMenu">
        <span v-if="!isMenuOpen">&#9776;</span> <!-- Hamburger icon -->
        <span v-else>&times;</span> <!-- Close icon -->
      </div>
    </div>

    <!-- Mobile Menu (when the menu is open) -->
    <div v-if="isMenuOpen" class="mobile-menu bg-white p-4 lg:hidden">
      <ul>
        <li>
          <router-link to="/" class="text-custom-grey hover:font-bold hover:text-custom-purple hover:underline hover:underline-offset-2 focus:underline focus:underline-offset-2">Home</router-link>
        </li>
        <li>
          <router-link to="/portfolio" class="text-custom-grey hover:font-bold hover:text-custom-purple hover:underline hover:underline-offset-2 focus:underline focus:underline-offset-2">Portfolio</router-link>
        </li>
        <li>
          <router-link to="/contact" class="text-custom-grey hover:font-bold hover:text-custom-purple hover:underline hover:underline-offset-2 focus:underline focus:underline-offset-2">Contact</router-link>
        </li>
        <li>
          <router-link to="/hobbiesandinterests" class="text-custom-grey hover:font-bold hover:text-custom-purple hover:underline hover:underline-offset-2 focus:underline focus:underline-offset-2">Hobbies & Interests</router-link>
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
  @media (max-width: 991px) {
    .hamburger {
      display: block;
      color: #be808b;
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
  