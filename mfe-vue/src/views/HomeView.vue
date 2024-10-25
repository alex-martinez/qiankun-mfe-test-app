<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div class="card-wrapper">
    <h1 class="title">Vite + Vue</h1>

    <button class="card-button" type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.title {
  font-size: 3.2em;
  font-weight: normal;
  line-height: 1.1;
}
.card-wrapper {
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
}
.card-button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
}
</style>
