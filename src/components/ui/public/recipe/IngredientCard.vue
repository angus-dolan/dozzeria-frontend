<template>
  <div @click="$emit('onClick')" class="cursor-pointer select-none	flex justify-between items-center bg-ui-light-200 dark:bg-ui-dark-300 p-4 rounded-xl mb-2">
    <div class="flex items-center">
      <!-- Image -->
      <div class="flex items-center justify-center bg-white dark:bg-ui-dark-200 h-12 w-12 shadow-xl dark:shadow-none rounded-xl mr-4 text-green-600">
        <!-- heroicons:solid:check -->
        <transition name="slide-fade">
        <svg v-if="isChecked" xmlns="http://www.w3.org/2000/svg" class="pointer-events-none h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        </transition>
      </div>
      <!-- Name -->
      <h5 class="font-bold">{{name}}</h5>
    </div>
    <!-- Quantity -->
    <span class="text-dark-medium-emphasis dark:text-light-medium-emphasis">{{quantity + quantityUnits}}</span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    quantityUnits: {
      type: String,
      required: true
    },
    isChecked: {
      type: Boolean,
      required: true
    },
  }
}
</script>