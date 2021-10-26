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
            Sign up for an account
          </h2>
        </div>

        <div class="mt-8">

          <div class="mt-6">
            <form
              @submit.prevent="register({ data: object, redirect: $route.query.redirect || '/auth/login'})"
              class="space-y-3"
            >

              <div>
                <label
                  for="firstname"
                  class="block text-sm font-medium text-gray-700"
                >
                  Firstname
                </label>
                <div class="mt-1">
                  <input
                    v-model="object.firstname"
                    id="firstname"
                    name="firstname"
                    type="firstname"
                    autocomplete="firstname"
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  >
                </div>
              </div>

              <div>
                <label
                  for="lastname"
                  class="block text-sm font-medium text-gray-700"
                >
                  Lastname
                </label>
                <div class="mt-1">
                  <input
                    v-model="object.lastname"
                    id="lastname"
                    name="lastname"
                    type="lastname"
                    autocomplete="lastname"
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  >
                </div>
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div class="mt-1">
                  <input
                    v-model="object.email"
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  >
                </div>
              </div>

              <div class="space-y-1">
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div class="mt-1">
                  <input
                    v-model="object.password"
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  >
                </div>
              </div>

              <div class="space-y-1">
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                >
                  Repeat password
                </label>
                <div class="mt-1">
                  <input
                    v-model="object.password2"
                    id="password"
                    name="password"
                    type="password"
                    autocomplete="current-password"
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    required
                  >
                </div>
              </div>

              <div class="flex items-center justify-between">
                <div class=""></div>
                <div class="text-sm">
                  <router-link
                    to="/auth/login"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Have an account?
                  </router-link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign up
                </button>
              </div>

              <Alerts />
            </form>
          </div>
        </div>
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
  name: 'register',
  components: { Alerts },
  data: () => ({
    object: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      password2: '',
    },
  }),
  methods: mapActions(['register', 'me', 'clear_alerts']),
  computed: mapGetters(['user']),
  async mounted() {
    this.clear_alerts();
    this.me();
    if (this.user) return this.$router.push(this.$route.query.redirect || '/');
    return true;
  },
};
</script>
