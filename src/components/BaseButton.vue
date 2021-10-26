<template>
  <button
    :class="{
      'px-2.5 py-1.5 text-xs': size === 'xs',
      'px-3 py-2 text-sm leading-4': size === 'sm',
      'px-4 py-2 text-sm': size === 'm',
      'px-4 py-2 text-base': size === 'lg',
      'px-6 py-3 text-base': size === 'xl',
      'text-white bg-indigo-600 hover:bg-indigo-700': primary,
      'text-indigo-700 bg-indigo-100 hover:bg-indigo-200': !primary,
    }"
    class="inline-flex items-center border border-transparent font-medium rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'm',
      validator: (value) => ['xs', 'sm', 'm', 'lg', 'xl'].indexOf(value) !== -1,
    },
    primary: { type: Boolean, default: true },
  },
};
</script>
