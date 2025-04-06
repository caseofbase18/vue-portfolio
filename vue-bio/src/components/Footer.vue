<template>
    <footer class="bg-black text-gray-50 py-6 sticky top-[100vh] text-center sm:text-left">
      <div class="max-w-screen-xl mx-auto px-8">
        <!-- Footer Content -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-20">
          
          <!-- My Info -->
          <div>
            <h4 class="text-lg font-semibold mb-2 text-custom-purple">Casey Maltese | Front-End Web Developer</h4>
            <p class="text-sm">I'm passionate about building intuitive, user-friendly web experiences. Let's build something great together!</p>
          </div>
          
          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold mb-2 text-custom-purple">Quick Links</h4>
            <ul>
              <li>
                <router-link to="/" class="text-gray-50 hover:font-bold hover:text-custom-purple hover:underline hover:underline-offset-2 hover:bg-transparent focus:bg-transparent focus:text-custom-purple focus:underline focus:underline-offset-2 focus:font-bold text-sm">Home</router-link>
              </li>
              <li>
                <router-link to="/portfolio" class="text-gray-50 hover:font-bold hover:text-custom-purple hover:underline hover:underline-offset-2 hover:bg-transparent focus:bg-transparent focus:text-custom-purple focus:underline focus:underline-offset-2 focus:font-bold text-sm">Portfolio</router-link>
              </li>
              <li>
                <router-link to="/contact" class="text-gray-50 hover:font-bold hover:text-custom-purple hover:underline hover:underline-offset-2 hover:bg-transparent focus:bg-transparent focus:text-custom-purple focus:underline focus:underline-offset-2 focus:font-bold text-sm">Contact</router-link>
              </li>
              <!-- <li>
                <router-link to="/hobbiesandinterests" class="text-gray-50 hover:font-bold hover:text-custom-purple hover:underline hover:underline-offset-2 hover:bg-transparent focus:bg-transparent focus:text-custom-purple focus:underline focus:underline-offset-2 focus:font-bold text-sm">Hobbies & Interests</router-link>
              </li> -->
            
            
            </ul>
          </div>
          
          <!-- Social Media Links -->
          <div>
            <h4 class="text-lg font-semibold mb-2 text-custom-purple">Follow Me</h4>
            <div class="flex space-x-4 justify-center sm:justify-start">
              <!-- These still link to external URLs, so <a> is fine here -->
                <a href="https://www.linkedin.com/in/casey-natale-maltese/" target="_blank" class="w-10 hover:bg-transparent hover:w-11">
                    <img src="../assets/images/linkedin-icon.png" alt="LinkedIn icon">
                </a>
                <a href="https://www.instagram.com/caseofbase18/" target="_blank" class="w-10 hover:bg-transparent hover:w-11">
                    <img src="../assets/images/instagram-icon.png" alt="Instagram icon">
                </a>
                <a href="https://www.facebook.com/casey.maltese.5" target="_blank" class="w-10 hover:bg-transparent hover:w-11">
                    <img src="../assets/images/facebook-icon.png" alt="Facebook icon">
                </a>
            </div>
          </div>
  
          <!-- Contact Info -->
          <div>
            <h4 class="text-lg font-semibold mb-2 text-custom-purple">Contact</h4>
            <p class="text-sm">Email: <a href="mailto:caseymaltese@gmail.com" class="text-gray-50 hover:font-bold hover:text-custom-purple hover:underline hover:underline-offset-2 hover:bg-transparent focus:bg-transparent focus:text-custom-purple focus:underline focus:underline-offset-2 focus:font-bold text-sm">caseymaltese@gmail.com</a></p>
          </div>
        </div>
        
        <!-- Footer Bottom -->
        <div class="text-center mt-6 text-sm text-custom-purple">
        <p>All icons provided by<a target="_blank" href="https://icons8.com" class="text-custom-purple hover:font-bold hover:text-custom-purple hover:underline hover:underline-offset-2 hover:bg-transparent focus:bg-transparent focus:text-custom-purple focus:underline focus:underline-offset-2 focus:font-bold">Icons8.</a></p>
          <p>&copy;2025 Casey Maltese. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
  };
  </script>
  
  <style scoped>

  </style>
  