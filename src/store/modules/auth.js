import envalidate from '@siliconminds/envalidate';
import Api from '@siliconminds/api';
import router from '@/router';

envalidate('VUE_APP_API_URL');

const api = new Api(process.env.VUE_APP_API_URL);

export default {
  state: {
    user: false,
  },
  getters: {
    user: (state) => state.user,
  },
  actions: {
    async login({ commit, dispatch }, options) {
      commit('clearError');
      const res = await api.post('auth/login', options.data || options);
      if (!res.success) return commit('pushError', res.error);
      return dispatch('me', {
        errors: true,
        ...options,
      });
    },
    async magiclink({ commit }, options) {
      commit('clearError');
      const res = await api.post('auth/magiclink', options.data || options);
      if (!res.success) return commit('pushError', res.error);
      return commit('pushSuccess', 'Magiclink is on its way!');
    },
    async use_magiclink({ commit, dispatch }, options) {
      commit('clearError');
      const res = await api.get('auth/magiclink', {
        headers: {
          Authorization: `Bearer ${options.data.token || options.token}`,
        },
      });
      if (!res.success) return commit('pushError', res.error);
      return dispatch('me', {
        errors: true,
        ...options,
      });
    },
    async me({ commit }, options = {}) {
      commit('clearError');
      const res = await api.get('auth/me');
      if (!res.success) {
        if (options.errors) return commit('pushError', res.error);
        return false;
      }
      if (options.redirect) router.push(options.redirect);
      return commit('setUser', res.user);
    },
    async logout({ commit }) {
      commit('clearError');
      const res = await api.put('auth/logout');
      if (res.success) commit('setUser', false);
      api.set_token(false);
      router.push('/');
    },
    async register({ commit }, options) {
      commit('clearError');
      const passwords_match = (options.data.password || options.password) === (options.data.password2 || options.password2);
      if (!passwords_match) return commit('pushError', 'passwords dont match!');
      const res = await api.post('auth/register', options.data || options);
      if (!res.success) return commit('setError', res.error);
      if (options.redirect) router.push(options.redirect);
      return true;
    },
    async forgot_password({ commit }, options) {
      commit('clearError');
      const res = await api.post('auth/pass-reset', options.data || options);
      if (!res.success) return commit('pushError', res.error);
      return commit('pushSuccess', 'Password reset link is on its way!');
    },
    async reset_password({ commit }, options) {
      commit('clearError');
      const passwords_match = (options.data.password || options.password) === (options.data.password2 || options.password2);
      if (!passwords_match) return commit('pushError', 'passwords dont match!');
      const res = await api.put('auth/pass-reset', options.data || options);
      if (!res.success) return commit('pushError', res.error);
      if (options.redirect) router.push(options.redirect);
      return true;
    },
  },
  mutations: {
    setError: (state, error) => { state.error = error; },
    setUser: (state, user) => { state.user = user; },
  },
};
