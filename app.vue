<template>
  <div>
    <Login v-if="!authStore.isLoggedIn" />
    <Index v-else />
  </div>
</template>

<script setup>
import '@fortawesome/fontawesome-free/css/all.css';
import Index from '~/pages/index/index.vue';
import Login from '~/pages/login/login.vue';
import { useAuthStore } from '~/store/auth';

const authStore = useAuthStore();
</script>
