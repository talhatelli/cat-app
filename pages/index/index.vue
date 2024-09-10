<template>
  <div class="wrapper">
    <header class="header">
      <div class="header-content">
        <CompanyLogo />
        <Title />
      </div>
      <CustomButton class="logout-button" color="red" label="Logout" @click="logout" />
    </header>
    <div class="container">
      <div class="image-container" ref="imageContainer">
        <transition v-if="image" :name="currentEffect">
          <img
            :src="image.url"
            :width="image.width"
            :height="image.height"
            alt="Random Cat Image"
            class="responsive-image"
            :key="image.id"
          />
        </transition>
        <img v-else :src="Loading" alt="Loading" class="loading" />
      </div>
      <div class="buttons">
        <CustomButton class="refresh-button" color="green" @click="fetchImage" classIcon="fas fa-sync-alt" />
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
import Loading from '~/public/loading.gif';
import CompanyLogo from '~/components/CompanyLogo';
import Title from '~/components/Title';
import CustomButton from '~/components/CustomButton';

const effects = ['fade', 'slide', 'zoom'];
const currentEffect = ref('zoom');
const imageStore = useImageStore();
const authStore = useAuthStore();
const imageContainer = ref(null);
const image = ref(imageStore.image);

const fetchImage = async () => {
  await imageStore.fetchImage();
  if (currentEffect.value) {
    currentEffect.value = effects[Math.floor(Math.random() * effects.length)];
  }
};

const logout = () => {
  authStore.logout();
  imageStore.image = null;
};

watch(
  () => imageStore.image,
  (newValue) => {
    image.value = newValue;
  },
);

onMounted(() => {
  authStore.restoreSession();
  fetchImage();
});
</script>
