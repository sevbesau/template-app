<template>
  <div class="container mx-auto">
    <PageHeading title="Events">
      <BaseButton @click="$router.push('/events/create')"> Create </BaseButton>
    </PageHeading>

    <DynamicTable
      class=""
      @clickElement="open($event)"
      @editElement="edit($event)"
      @deleteElement="delete_event($event)"
      :data="events"
      :fields="fields"
    />

    <Pagination
      :pagination="pagination"
      @setPage="set_page($event)"
      class="my-4"
    />

    <Alerts />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Pagination from '@/components/Pagination.vue';
import PageHeading from '@/components/PageHeading.vue';

import DynamicTable from '@/components/DynamicTable.vue';
import Alerts from '@/components/Alerts.vue';

export default {
  name: 'events',
  components: { DynamicTable, Alerts, Pagination, PageHeading },
  data: () => ({
    query: {},
  }),
  computed: mapGetters({
    fields: 'events/fields',
    events: 'events/all',
    pagination: 'events/pagination',
  }),
  methods: {
    ...mapActions({
      set_page: 'events/set_page',
      get_events: 'events/get_all',
      delete_event: 'events/delete',
      clear_alerts: 'clear_alerts',
    }),
    open(event) {
      this.$router.push(`/events/${event._id}`);
    },
    edit(event) {
      this.$router.push(`/events/${event._id}/edit`);
    },
    create() {
      this.$router.push('/events/create');
    },
  },
  async mounted() {
    this.clear_alerts();
    await this.get_events(this.query);
  },
};
</script>
