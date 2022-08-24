<script setup lang="ts">
import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div class="container container-main-text">
      <h1>This is a Home Page</h1>
    </div>
  </main>
</template>

<style>
 .container-main-text {
      font-weight: 700;
      letter-spacing: 5px;
      display: flex;
      align-items: center;
  }

  .container {
      height: 80vh;
  }
</style>
