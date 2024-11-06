<template>
  <div id="app">
    <main>
      <div class="header-content">
        <h1 class="text-4xl text-pink-600">Hello.</h1>
        <h1>I'm Casey.</h1>
        <h2>A developer.</h2>
      </div>
      <div>
        <h2>A little about me...</h2>
        <p>I like cats.</p>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderNav from '../components/HeaderNav.vue';  // Ensure correct path

export default {
  name: 'Home',
  components: {
    HeaderNav
  }
}
</script>

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
