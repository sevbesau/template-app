<template>
  <header class="bg-indigo-600">
    <nav
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="Top"
    >
      <div class="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
        <div class="flex items-center">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img
              class="h-10 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
              alt=""
            />
          </a>
          <div class="hidden ml-10 space-x-8 lg:block">
            <!--Desktop links-->
            <router-link
              to="/"
              class="text-base font-medium text-white hover:text-indigo-50"
            >
              Home
            </router-link>
            <router-link
              to="/events"
              class="text-base font-medium text-white hover:text-indigo-50"
            >
              Events
            </router-link>
          </div>
        </div>
        <div
          v-if="!user"
          class="ml-10 space-x-4"
        >
          <router-link
            to="/auth/login"
            class="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
          >
            Sign in
          </router-link>
          <router-link
            to="/auth/register"
            class="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
          >
            Sign up
          </router-link>
        </div>
        <div
          v-else
          class="ml-10 space-x-4 flex items-center"
        >
          <h2 class="text-white">
            Logged in as {{ user.firstname || "user" }}
          </h2>
          <button
            @click="logout()"
            class="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
          >
            Sign out
          </button>
        </div>
      </div>
      <div class="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
        <!--Mobile links-->
        <router-link
          to="/"
          class="text-base font-medium text-white hover:text-indigo-50"
        >
          Home
        </router-link>
        <router-link
          to="/events"
          class="text-base font-medium text-white hover:text-indigo-50"
        >
          Events
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  methods: mapActions(['logout']),
  computed: mapGetters(['user']),
};
</script>
