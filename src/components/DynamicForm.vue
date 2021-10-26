<template>
  <div>
    <form
      @submit.prevent.stop="submit()"
      class="space-y-4"
    >
      <div
        v-for="field in fields"
        :key="field.key"
      >
        <BaseInput
          v-if="field.type == 'text'"
          type="text"
          @update:modelValue="update(field.key, $event)"
          @blur="dirty(field.key)"
          @focus="clean(field.key)"
          :modelValue="modelValue[field.key]"
          :name="field.key"
          :label="field.label"
          :error="getError(field.key)"
        />
        <BaseTextArea
          v-if="field.type === 'textarea'"
          @update:modelValue="update(field.key, $event)"
          :modelValue="modelValue[field.key]"
          :name="field.key"
          :label="field.label"
        />
      </div>
      <div class="flex justify-end">
        <BaseButton @click="submit()">Save</BaseButton>
      </div>
    </form>
  </div>
</template>

<script>
import validation from '@siliconminds/validation/mixin';

export default {
  mixins: [validation],
  props: {
    fields: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: Object,
      required: true,
    },
  },
  methods: {
    update(key, value) {
      const newValue = { ...this.modelValue };
      newValue[key] = value;
      this.$emit('update:modelValue', newValue);
    },
    submit() {
      this.fields.forEach(field => this.dirty(field.key));
      if (this.valid) this.$emit('submit');
    },
  },
};

/* fields: [{
  type: '',
  label: '',
  key: '',
  editable: true,
}] */
</script>
