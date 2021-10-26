<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  v-for="field in fields"
                  :key="field.key"
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {{ field.label }}
                </th>
                <th
                  scope="col"
                  class="relative px-6 py-3"
                >
                  <span class="sr-only">Edit</span>
                  <span class="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr
                @click="$emit('clickElement', object)"
                v-for="object in data"
                :key="object._id"
                class="cursor-pointer hover:bg-gray-50"
              >
                <td
                  v-for="field in fields"
                  :key="field.key"
                  class="px-6 whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  <div v-if="field.type === 'text' || field.type == 'textarea'">
                    <p class="w-48">{{ object[field.key] }}</p>
                  </div>

                  <div v-if="field.type === 'bool'">
                    <div class="flex items-center h-5">
                      <input
                        v-model="object[field.key]"
                        :name="field.label"
                        type="checkbox"
                        class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        disabled
                      />
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4">
                  <button
                    @click.stop="$emit('editElement', object)"
                    class="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit
                  </button>
                  <button
                    @click.stop="$emit('deleteElement', object)"
                    class="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    fields: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
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
