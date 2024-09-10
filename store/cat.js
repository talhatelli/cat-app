import { defineStore } from 'pinia';
import axios from 'axios';

export const useImageStore = defineStore('image', {
  state: () => ({
    image: null,
  }),
  actions: {
    async fetchImage() {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found in localStorage');
        }
        const { data } = await axios.get('/api/images/search', { headers: { Authorization: `Bearer ${token}` } });
        this.image = data?.[0];
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    },
  },
});
