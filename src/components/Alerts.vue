<template>
  <div class="space-y-6">
    <Alert
      v-for="alert, idx in alerts"
      :key="idx"
      :type="alert.type"
      :title="alert.title"
    >
      {{alert.body}}
    </Alert>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Alert from '@/components/Alert.vue';

export default {
  components: { Alert },
  computed: mapGetters(['alerts']),
};
</script>
