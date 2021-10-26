<template>
  <div class="container mx-auto">
    <PageHeading title="Create Event" />
    <DynamicForm
      @submit="submit()"
      :fields="fields"
      v-model="event"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PageHeading from '@/components/PageHeading.vue';
import DynamicForm from '@/components/DynamicForm.vue';

export default {
  name: 'create',
  components: { PageHeading, DynamicForm },
  computed: mapGetters({
    fields: 'events/fields',
  }),
  data: () => ({
    event: {
      title: '',
      desc: '',
    },
  }),
  methods: {
    ...mapActions({ post_event: 'events/post' }),
    async submit() {
      await this.post_event(this.event);
      this.$router.push('/events');
    },
  },
  async mounted() {
    console.log('mounted create');
  },
};
</script>
