<template>
  <nav class="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0">
    <div class="-mt-px w-0 flex-1 flex">
      <button
        v-if="pagination.page > 1"
        @click="go(-1)"
        class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
      >
        <ArrowLeftIcon class="ml-3 h-5 w-5 text-gray-400" />
        Previous
      </button>
    </div>
    <div class="hidden md:-mt-px md:flex">
      <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
      <button
        @click="go(-2)"
        v-if="pagination.page > 2"
        class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
      >
        {{ pagination.page - 2 }}
      </button>
      <button
        @click="go(-1)"
        v-if="pagination.page > 1"
        class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
      >
        {{ pagination.page - 1 }}
      </button>
      <button
        class="border-indigo-500 text-indigo-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
        aria-current="page"
      >
        {{ pagination.page }}
      </button>
      <button
        @click="go(1)"
        v-if="pagination.page < pagination.last"
        class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
      >
        {{ pagination.page + 1 }}
      </button>
      <button
        @click="go(2)"
        v-if="pagination.page < pagination.last - 1"
        class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
      >
        {{ pagination.page + 2 }}
      </button>
    </div>
    <div class="-mt-px w-0 flex-1 flex justify-end">
      <button
        v-if="pagination.page < pagination.last"
        @click="go(1)"
        class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
      >
        Next
        <ArrowRightIcon class="ml-3 h-5 w-5 text-gray-400" />
      </button>
    </div>
  </nav>
</template>

<script>
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/solid';

export default {
  components: { ArrowLeftIcon, ArrowRightIcon },
  props: {
    pagination: {
      type: Object,
      required: true,
    },
  },
  methods: {
    go(pages) {
      this.$emit('setPage', pages);
    },
  },
};
</script>
