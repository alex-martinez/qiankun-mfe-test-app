<script setup lang="ts">
</script>

<template>
  <div class="contact-us">
    <h1>Contact Us</h1>
    <form style="text-align: left;">
      <div class="form-row">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
      </div>

      <div class="form-row">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>

      <div class="form-row">
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

label {
  display: inline-block;
  vertical-align: top;
  width: 100px;
}

input, textarea {
  border: 1px solid #ccc;
}
</style>
