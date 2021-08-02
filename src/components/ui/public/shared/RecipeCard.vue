<template>
  <div class="cursor-pointer flex border border-gray-200 dark:border-ui-dark-300 px-6 py-3 rounded-lg mb-3">
    <!-- image -->
    <img class="flex-initial object-cover rounded-full h-16 w-16" :src="imgURL" alt="Image not found">
    <!-- meta -->
    <div class="flex items-stretch pl-6">
      <span class="place-self-center">
        <h5 class="font-bold text-lg">{{name}}</h5>
        <p class="text-dark-medium-emphasis dark:text-light-medium-emphasis">{{recipeType}}</p>
      </span>
    </div>
    <!-- arrow -->
    <div class="flex-1">
      <div class="flex h-full justify-end items-stretch">
        <svg class="text-dark-high-emphasis dark:text-light-high-emphasis place-self-center" width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.453247 14.12L6.55991 8L0.453247 1.88L2.33325 0L10.3332 8L2.33325 16L0.453247 14.12Z" fill="currentColor"/> 
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'recipe-card',
  props: {
    name: {
      type: String,
      required: true
    },
    recipeType: {
      type: String,
      required: true
    },
    imgURL: {
      type: String,
      required: true
    },
  }
}
</script>
