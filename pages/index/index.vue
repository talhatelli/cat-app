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
        <transition v-if="imageUrl" :name="currentEffect">
          <img
            :src="imageUrl"
            alt="Fetched Image"
            class="responsive-image"
            :key="imageUrl"
            @load="updateContainerSize"
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
const imageUrl = ref(imageStore.imageUrl);

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

const updateContainerSize = (event) => {
  const image = event.target;
  const height = image.naturalHeight;
  const width = image.naturalWidth;

  if (imageContainer.value) {
    imageContainer.value.style.height = `${height}px`;
    imageContainer.value.style.width = `${width}px`;
  }
};

const logout = () => {
  authStore.logout();
  imageStore.imageUrl = null;
};

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
