<template>
  <div class="logo-container">
    <img :src="Logo" alt="Company Logo" class="logo" />
  </div>
</template>

<script setup>
import Logo from '~/asset/logo.png';
</script>

<style scoped>
.logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 10px;
}
@media (max-width: 500px) {
  .logo {
    width: 50px;
    height: 50px;
  }
}

@media (max-width: 480px) {
  .logo {
    width: 40px;
    height: 40px;
  }
}
</style>
