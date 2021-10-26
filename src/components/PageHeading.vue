<template>
  <div class="pt-6 pb-16">
    <div v-if="false">
      <nav
        class="sm:hidden"
        aria-label="Back"
      >
        <router-link go="-1">
          <ChevronLeftIcon class="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400" />
          Back
        </router-link>
      </nav>
      <nav
        class="hidden sm:flex"
        aria-label="Breadcrumb"
      >
        <ol
          role="list"
          class="flex items-center space-x-4"
        >
          <li>
            <div class="flex">
              <a
                href="#"
                class="text-sm font-medium text-gray-500 hover:text-gray-700"
              >Jobs</a>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <ChevronRightIcon class="flex-shrink-0 h-5 w-5 text-gray-400" />
              <a
                href="#"
                class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              >Engineering</a>
            </div>
          </li>
          <li>
            <div class="flex items-center">
              <ChevronRightIcon class="flex-shrink-0 h-5 w-5 text-gray-400" />
              <a
                href="#"
                aria-current="page"
                class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              >Back End Developer</a>
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <div class="mt-2 md:flex md:items-center md:justify-between">
      <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          {{ title }}
        </h2>
      </div>
      <div class="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid';

export default {
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
