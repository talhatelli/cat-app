import axios from 'axios';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    user: null,
  }),
  actions: {
    async login(email, password) {
      const {
        data: { token, user },
      } = await axios.post('/api/login', { email, password });

      this.user = user;
      this.isLoggedIn = true;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(this.user));
      localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
    },
    logout() {
      this.isLoggedIn = false;
      this.user = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    },
    restoreSession() {
      if (typeof window !== 'undefined') {
        const storedToken = localStorage.getItem('token');

        if (storedToken) {
          this.isLoggedIn = true;
        }
      }
    },
  },
});
