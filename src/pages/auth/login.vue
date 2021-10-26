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
            Sign in to your account
          </h2>
        </div>

        <div class="mt-8">
          <div>
            <div>
              <p class="text-sm font-medium text-gray-700">
                Sign in with
              </p>

              <div class="mt-1 grid grid-cols-2 gap-3">
                <div>
                  <button
                    @click="set_method('password')"
                    :class="{'bg-gray-100 hover:bg-gray-100': $route.query.method === 'password'}"
                    class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span class="sr-only">Sign in with password</span>
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div>
                  <button
                    @click="set_method('magiclink')"
                    :class="{'bg-gray-100 hover:bg-gray-100': $route.query.method === 'magiclink'}"
                    class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span class="sr-only">Sign in with magiclink</span>
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      ></path>
                    </svg>

                  </button>
                </div>

              </div>
            </div>

            <div class="mt-6 relative">
              <div
                class="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div class="w-full border-t border-gray-300" />
              </div>
              <div class="relative flex justify-center text-sm">
              </div>
            </div>
          </div>

          <div class="mt-6">
            <form
              @submit.prevent="submit()"
              class="space-y-6"
            >

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

              <div
                v-if="$route.query.method === 'password'"
                class="space-y-1"
              >
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

              <div class="flex items-center justify-between">
                <div class="text-sm">
                  <router-link
                    to="/auth/register"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Create an account
                  </router-link>
                </div>

                <div class="text-sm">
                  <router-link
                    to="/auth/reset-password"
                    class="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </router-link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
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
  name: 'login',
  components: { Alerts },
  data: () => ({
    object: {
      email: '',
      password: '',
    },
  }),
  methods: {
    ...mapActions(['login', 'magiclink', 'me', 'clear_alerts']),
    submit() {
      const options = { data: this.object, redirect: this.$route.query.redirect || '/' };
      if (this.$route.query.method === 'password') this.login(options);
      else this.magiclink(options);
    },
    set_method(method) {
      if (this.$route.query.method === method) return;
      this.$router.replace({ query: { method } });
    },
  },
  computed: mapGetters(['user']),
  async mounted() {
    if (!this.$route.query.method) {
      this.set_method('password');
      this.$forceUpdate();
    }
    this.clear_alerts();
    this.me();
    if (this.user) return this.$router.push(this.$route.query.redirect || '/');
    return true;
  },
};
</script>
