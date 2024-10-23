<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div class="card-wrapper">
    <h1>Vite + Vue</h1>

    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
}
.read-the-docs {
  color: #888;
}
</style>
