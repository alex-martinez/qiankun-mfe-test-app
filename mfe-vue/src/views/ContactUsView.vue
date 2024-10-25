<script setup lang="ts">
</script>

<template>
  <div class="contact-us">
    <h1 class="title">Contact Us</h1>
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
.title {
  font-size: 3.2em;
  font-weight: normal;
  line-height: 1.1;
}

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

button {
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
