<template>
  <div class="container mx-auto">
    <PageHeading title="Edit event" />

    <DynamicForm
      @submit="save()"
      :fields="fields"
      v-model="model"
    ></DynamicForm>

    <pre>{{ model }}</pre>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import PageHeading from '@/components/PageHeading.vue';
import DynamicForm from '@/components/DynamicForm.vue';

export default {
  name: 'edit',
  data: () => ({
    model: {
      title: '',
      desc: '',
    },
  }),
  components: {
    PageHeading,
    DynamicForm,
  },
  methods: {
    ...mapActions({
      get_event: 'events/get_single',
      put_event: 'events/put',
    }),
    async save() {
      console.log('save');
      await this.put_event(this.model);
      this.$router.push('/events');
    },
  },
  computed: mapGetters({
    event: 'events/single',
    fields: 'events/fields',
  }),
  async mounted() {
    await this.get_event(this.$route.params.id);
    this.model = this.event;
  },
};
</script>
