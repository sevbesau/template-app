<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
  methods: mapActions(['me']),
  async mounted() {
    // try to log in
    await this.me();
  },
};
</script>
