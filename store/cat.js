import { defineStore } from 'pinia';
import { useFetch } from '#app';

export const useImageStore = defineStore('image', {
  state: () => ({
    imageUrl: null,

    error: null,
  }),
  actions: {
    async fetchImage() {
      try {
        const response = await fetch('/api/images/search');
        const jsonData = await response.json();

        if (jsonData && jsonData.length > 0) {
          this.imageUrl = jsonData[0].url;
        } else {
          this.imageUrl = null;
        }
      } catch (error) {
        this.error = error;
        console.error('An error occurred while fetching the image:', error);
      }
    },
  },
});
