export default {
  state: {
    alerts: [],
  },
  getters: {
    alerts: (state) => state.alerts,
  },
  actions: {
    clear_alerts: ({ commit }) => commit('clearAlerts'),
    push_alert: ({ commit }, alert) => commit('pushAlert', alert),
  },
  mutations: {
    clearAlerts: (state) => { state.alerts = []; },
    clearError: (state) => { state.alerts = state.alerts.filter((alert) => alert.type !== 'error'); },
    clearInfo: (state) => { state.alerts = state.alerts.filter((alert) => alert.type !== 'info'); },
    clearSuccess: (state) => { state.alerts = state.alerts.filter((alert) => alert.type !== 'success'); },

    pushAlert: (state, alert) => { state.alerts.push(alert); },
    pushError: (state, title) => {
      state.alerts.push({
        title, type: 'error', body: '',
      });
    },
    pushInfo: (state, title) => {
      state.alerts.push({
        title, type: 'info', body: '',
      });
    },
    pushSuccess: (state, title) => {
      state.alerts.push({
        title, type: 'success', body: '',
      });
    },
  },
};
