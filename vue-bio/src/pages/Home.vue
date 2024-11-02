<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="../assets/images/casey-headshot-pink.jpeg" width="125" height="125" />

    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div> -->
  </header>

  <main >
    <!-- <TheWelcome /> -->
     <div class="header-content">
      <h1>Hello.</h1>
     <h1>I'm Casey.</h1>
     <h2>A developer.</h2>
     </div>
    
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
    width: 100%;
    height: auto;
    border-radius: 50%;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
