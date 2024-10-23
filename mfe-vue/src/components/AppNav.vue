<script setup lang="ts">
</script>

<template>
  <div class="nav">
    <router-link className="link" :to="{ name: 'home' }">Home</router-link>
    <router-link className="link" :to="{ name: 'about-us' }">About Us</router-link>
    <router-link className="link" :to="{ name: 'contact-us' }">Contact Us</router-link>
  </div>
</template>

<style>
.nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
}
.link {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
.link:hover {
  color: #535bf2;
}
</style>
