<template>
  <div>
    <pre>{{event}}</pre>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'index',
  methods: mapActions({ get_event: 'events/get_single' }),
  computed: mapGetters({ event: 'events/single' }),
  async mounted() {
    this.get_event(this.$route.params.id);
  },
};
</script>
