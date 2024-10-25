<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <div class="logo-title">
      <a href="https://vuejs.org/" target="_blank">
        <img src="/vue.svg" class="logo" alt="Vue logo" />
      </a>

      <div>Vue Application</div>
    </div>

    <aside class="nav">
      <router-link class="link" :to="{ name: 'home' }">Home</router-link>
      <router-link class="link" :to="{ name: 'about-us' }">About Us</router-link>
      <router-link class="link" :to="{ name: 'contact-us' }">Contact Us</router-link>
    </aside>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  border-right: 1px solid #e5e7eb;
  width: 100%;
  max-width: 320px;
  flex: 1 1 0%;
  padding: 1rem;
}

.nav {
  display: flex;
  flex-direction: column;
}

.link {
  font-weight: 500;
  color: #374151;
  text-decoration: inherit;
  padding: 0.5rem;
  display: block;
  border-radius: 4px;
  border: 1px solid transparent;

  &:hover {
    background: rgba(8, 184, 67, 0.15);
  }

  &.router-link-active {
    text-decoration: none;
    background: rgba(8, 184, 67, 0.3);
  }
}

.logo-title {
  display: flex;
  gap: 1rem;
  align-items: center;
  font-weight: bold;
  margin-bottom: 1rem;
}

.logo {
  height: 2rem;
}
</style>
