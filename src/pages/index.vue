<template>
  <div class="">
    hello world
    <pre>{{res}}</pre>
    <Alerts class="container mx-auto" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import Api from '@siliconminds/api';
import Alerts from '@/components/Alerts.vue';

export default {
  name: 'home',
  components: { Alerts },
  data: () => ({
    res: false,
  }),
  methods: mapActions(['push_alert']),
  async mounted() {
    console.log('mounted');
    const api = new Api(process.env.VUE_APP_API_URL);
    this.res = await api.get('ping/auth');

    this.push_alert({ type: 'error', title: 'Hello world!', body: '' });
    this.push_alert({ type: 'success', title: 'Hello world!', body: '' });
    this.push_alert({ type: 'info', title: 'Hello world!', body: '' });
  },
};
</script>
