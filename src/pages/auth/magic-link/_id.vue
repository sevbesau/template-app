<template>
  <div class="absolute inset-0 min-h-screen bg-white flex">
    <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img
            class="h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          >
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
            Logging you in...
          </h2>
          <p>You should be redirected in a second!</p>
        </div>

        <Alerts class="mt-6" />
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
        alt=""
      >
    </div>
  </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Alerts from '@/components/Alerts.vue';

export default {
  name: 'magiclink',
  components: { Alerts },
  methods: mapActions(['use_magiclink', 'me', 'clear_alerts']),
  computed: mapGetters(['user']),
  async mounted() {
    this.clear_alerts();
    this.me();
    if (this.user) return this.$router.push(this.$route.query.redirect || '/');
    this.use_magiclink({
      data: { token: this.$route.params.id },
      redirect: this.$route.query.redirect || '/',
    });
    return true;
  },
};
</script>
