<template>
  <div class="login-container">
    <CompanyLogo />
    <Title />
    <form @submit.prevent="handleLogin" class="login-form">
      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <button type="submit" class="login-button">Login</button>
    </form>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/store/auth';
import CompanyLogo from '~/components/CompanyLogo';
import Title from '~/components/Title';
import './style.css';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();
const authStore = useAuthStore();

const handleLogin = () => {
  if (email.value === authStore.validUser.email && password.value === authStore.validUser.password) {
    authStore.login({ email: authStore.validUser.email });
    router.push('/');
  } else {
    errorMessage.value = 'Invalid email or password';
  }
};
onMounted(() => {
  authStore.restoreSession();
});
</script>
