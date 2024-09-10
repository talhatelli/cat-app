<template>
  <div class="login-container">
    <CompanyLogo />
    <Title />
    <UForm class="login-form" :validate="validate" :state="state" @submit="onSubmit">
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" placeholder="Enter your email" />
      </UFormGroup>
      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" type="password" placeholder="Enter your password" />
      </UFormGroup>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <CustomButton type="submit" class="login-button" label="Login" />
    </UForm>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/store/auth';
import CompanyLogo from '~/components/CompanyLogo';
import Title from '~/components/Title';
import './style.css';
import type { FormError, FormSubmitEvent } from '#ui/types';
import CustomButton from '~/components/CustomButton';

const state = reactive({
  email: '',
  password: '',
});
const errorMessage = ref('');
const router = useRouter();
const authStore = useAuthStore();

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.email) errors.push({ path: 'email', message: 'Email is required' });
  if (!state.password) errors.push({ path: 'password', message: 'Password is required' });
  return errors;
};

const onSubmit = (event: FormSubmitEvent<any>) => {
  try {
    authStore.login(state.email, state.password);
    router.push('/');
  } catch (error) {
    errorMessage.value = error.message || 'Invalid email or password';
  }
};

onMounted(() => {
  authStore.restoreSession();
});
</script>
