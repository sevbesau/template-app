<template>
  <div
    class="rounded-md p-4"
    :class="{
      'bg-red-50': type == 'error',
      'bg-blue-50': type == 'info',
      'bg-green-50': type == 'success',
    }"
  >
    <div class="flex">
      <div class="flex-shrink-0">
        <XCircleIcon
          v-if="type == 'error'"
          class="h-5 w-5 text-red-400"
        />
        <CheckCircleIcon
          v-if="type == 'info'"
          class="h-5 w-5 text-blue-400"
        />
        <InformationCircleIcon
          v-if="type == 'success'"
          class="h-5 w-5 text-green-400"
        />
      </div>
      <div class="ml-3">
        <h3
          class="text-sm font-bold"
          :class="{
            'text-red-800': type == 'error',
            'text-blue-800': type == 'info',
            'text-green-800': type == 'success',
          }"
        >
          {{ title }}
        </h3>
        <div
          class="text-sm"
          :class="{
            'text-red-700': type == 'error',
            'text-blue-700': type == 'info',
            'text-green-700': type == 'success',
          }"
        >
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  XCircleIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from '@heroicons/vue/solid';

export default {
  props: {
    type: {
      type: String,
      default: 'error',
    },
    title: String,
  },
  components: {
    XCircleIcon,
    CheckCircleIcon,
    InformationCircleIcon,
  },
};
</script>
