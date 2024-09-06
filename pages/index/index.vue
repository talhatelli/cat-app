<template>
  <div class="wrapper">
    <header class="header">
      <div class="header-content">
        <CompanyLogo />
        <Title />
      </div>
      <button @click="logout" class="logout-button">Logout</button>
    </header>
    <div class="container">
      <div class="image-container">
        <transition v-if="imageUrl" :name="currentEffect">
          <img :src="imageUrl" alt="Fetched Image" class="responsive-image" :key="imageUrl" />
        </transition>
        <img v-else :src="Loading" alt="Loading" class="loading" />
      </div>
      <div class="buttons">
        <button class="refresh-button" @click="fetchImage">
          <i class="fas fa-sync-alt"></i>
        </button>
      </div>
    </div>
    <footer class="footer">
      <p>© 2024 Created by Ahmet Talha Telli.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useImageStore } from '~/store/cat';
import { useAuthStore } from '~/store/auth';
import './style.css';
import Logo from '~/asset/logo.png';
import Loading from '~/asset/loading.gif';
import CompanyLogo from '~/components/CompanyLogo';
import Title from '~/components/Title';

const effects = ['fade', 'slide', 'zoom'];
const currentEffect = ref('zoom');
const imageStore = useImageStore();
const authStore = useAuthStore();

const fetchImage = async () => {
  try {
    await imageStore.fetchImage();
    if (!imageStore.error) {
      currentEffect.value = effects[Math.floor(Math.random() * effects.length)];
    }
  } catch (err) {
    console.error('Error fetching image:', err);
  }
};

const logout = () => {
  authStore.logout();
  imageStore.imageUrl = null;
};

const imageUrl = ref(imageStore.imageUrl);
watch(
  () => imageStore.imageUrl,
  (newValue) => {
    imageUrl.value = newValue;
  },
);

onMounted(() => {
  authStore.restoreSession();
  fetchImage();
});
</script>
