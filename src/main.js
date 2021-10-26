import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import 'tailwindcss/tailwind.css'; // eslint-disable-line
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

// Dynamically load base components
const requireComponent = require.context('./components', true, /Base[A-Z]\w+\.(vue|js)$/);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);
  // Get PascalCase name of component
  const componentName = upperFirst(camelCase(fileName.split('/').pop().replace(/\.\w+$/, '')));
  // Register component globally
  app.component(componentName, componentConfig.default || componentConfig);
});

app.use(store);
app.use(router);
app.mount('#app');
