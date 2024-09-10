import { defineStore } from 'pinia';
import axios from 'axios';

export const useImageStore = defineStore('image', {
  state: () => ({
    imageUrl: null,
    error: null,
  }),
  actions: {
    async fetchImage() {
      try {
        const { data } = await axios.get('/api/images/search');
        this.imageUrl = data?.[0]?.url || null;
      } catch (error) {
        this.error = error;
        console.error('Error fetching image:', error);
      }
    },
  },
});
