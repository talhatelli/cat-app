import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    user: null,
    validUser: {
      email: 'ahmet@gmail.com',
      password: '123',
    },
  }),
  actions: {
    login(userData) {
      this.isLoggedIn = true;
      this.user = userData;
      if (typeof window !== 'undefined') {
        localStorage.setItem('isLoggedIn', JSON.stringify(this.isLoggedIn));
        localStorage.setItem('user', JSON.stringify(this.user));
      }
    },
    logout() {
      this.isLoggedIn = false;
      this.user = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
      }
    },
    restoreSession() {
      if (typeof window !== 'undefined') {
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        const storedUser = localStorage.getItem('user');

        if (storedIsLoggedIn && storedUser) {
          this.isLoggedIn = JSON.parse(storedIsLoggedIn);
          this.user = JSON.parse(storedUser);
        }
      }
    },
  },
});
