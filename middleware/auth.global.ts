import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/store/auth';

export default defineNuxtRouteMiddleware((to) => {
    const { authenticated } = storeToRefs(useAuthStore());
    const token = useCookie('token');
    if (token.value) {
        authenticated.value = true;
    }
    if (token.value && to?.name === 'index') {
      return navigateTo('/dashboard');
    }
    if (!token.value && to?.name !== 'index' && to?.name !== 'register') {
      abortNavigation();
      return navigateTo('/');
    }
  });