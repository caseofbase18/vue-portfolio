<template>
  <header class="sticky top-0 bg-gray-50 shadow-md z-50 w-full">
    <div class="max-w-screen-2xl mx-auto flex justify-between items-center px-4 py-4 gap-4">
      <div class="logo">
        <router-link to="/" class="text-custom-grey hover:text-custom-purple hover:bg-transparent focus:text-custom-purple text-xl md:text-2xl font-bold">Casey Natale Maltese | Front-End Web Developer</router-link>
      </div>

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
        </ul>
      </nav>

      <div class="hamburger lg:hidden" @click="toggleMenu">
        <span v-if="!isMenuOpen">&#9776;</span> <span v-else>&times;</span> </div>
    </div>

    <div v-if="isMenuOpen" class="mobile-menu p-4 lg:hidden">
      <ul>
        <li>
          <router-link to="/" class="text-custom-grey hover:font-bold hover:text-custom-purple hover:underline hover:underline-offset-2 focus:underline focus:underline-offset-2 hover:bg-transparent focus:bg-transparent" @click="closeMenu">Home</router-link>
        </li>
        <li>
          <router-link to="/portfolio" class="text-custom-grey hover:font-bold hover:text-custom-purple hover:underline hover:underline-offset-2 focus:underline focus:underline-offset-2 hover:bg-transparent focus:bg-transparent" @click="closeMenu">Portfolio</router-link>
        </li>
        <li>
          <router-link to="/contact" class="text-custom-grey hover:font-bold hover:text-custom-purple hover:underline hover:underline-offset-2 focus:underline focus:underline-offset-2 hover:bg-transparent focus:bg-transparent" @click="closeMenu">Contact</router-link>
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
    },
    closeMenu() {
      this.isMenuOpen = false;
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
  }
  
  .mobile-menu ul li {
    padding: 10px 20px;
  }
  
  .mobile-menu ul li a {
    color: #2c3e50;
    text-decoration: none;
  }
  
  .mobile-menu ul li a:hover {
    color: #be808b;
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
    top: 72px;
    background-color: #f9fafb;
    z-index: 40;
  }
  
    .mobile-menu.open {
      display: block;
    }
  }
  </style>
  