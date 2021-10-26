import { createStore } from 'vuex';

import auth from './modules/auth';
import alerts from './modules/alerts';
import events from './modules/events';

export default createStore({
  modules: {
    auth,
    alerts,
    events,
  },
});
