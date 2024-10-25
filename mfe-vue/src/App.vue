<script setup lang="ts">
import AppNav from './components/AppNav.vue';
</script>

<template>
  <div class="layout">
    <AppNav />

    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: row;
  height: 100dvh;
  width: 100%;
  gap: 1rem;
  flex: 1 1 0%;
}

.main {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
