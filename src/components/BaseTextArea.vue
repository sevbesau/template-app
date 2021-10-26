<template>
  <div>
    <label
      v-if="label"
      :for="name"
      class="block text-sm font-medium text-gray-700"
    >{{ label }}</label>
    <div class="mt-1 relative rounded-md shadow-sm">
      <textarea
        @input="$emit('update:modelValue', $event.target.value)"
        :value="modelValue"
        :name="name"
        class="block w-full pr-10 focus:outline-none sm:text-sm rounded-md"
        :class="{
          'border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-500 ':
            error,
          'focus:ring-indigo-500 focus:border-indigo-500': !error,
        }"
        :placeholder="placeholder"
        :aria-invalid="!!error"
        :aria-describedby="`${name}-error`"
      />
      <div
        v-if="error"
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      >
        <ExclamationCircleIcon class="h-5 w-5 text-red-500" />
      </div>
    </div>
    <p
      v-if="!error && hint"
      class="mt-2 text-sm text-gray-500"
      id="email-description"
    >
      {{ hint }}
    </p>
    <p
      v-if="error"
      class="mt-2 text-sm text-red-600"
      :id="`${name}-error`"
    >
      {{ error }}
    </p>
  </div>
</template>

<script>
import { ExclamationCircleIcon } from '@heroicons/vue/solid';

export default {
  components: { ExclamationCircleIcon },
  props: {
    modelValue: String,
    name: { type: String, required: true },
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    error: { type: String, default: '' },
    hint: { type: String, default: '' },
  },
};
</script>
