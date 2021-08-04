<template>
  <div class="cursor-pointer bg-white border border-gray-200 dark:border-transparent dark:bg-ui-dark-300 mb-3" style="border-radius: 30px">
    <!-- author -->
    <div class="flex pt-4 px-4">
      <avatar 
        :name="'Angus Dolan'" 
        :size="48"  
        :src="'dp.jpg'"
      />
      <div class="flex items-stretch pl-3">
        <span class="place-self-center">
          <h5 class="leading-none text-base font-medium">Angus Dolan</h5>
          <p class="text-dark-low-emphasis dark:text-light-medium-emphasis text-sm">@angus</p>
        </span>
      </div>
    </div>
    <!-- image -->
    <div class='my-3 mx-1 bg-cover h-80 bg-center' style='border-radius: 15px; background-image: url("https://www.pizzacappuccino.com/wp-content/uploads/2019/02/Neapolitan-Pizza-Recipe.jpg")'></div>
    <!-- like button -->
    <div class="px-4 pt-2 pb-2">
      <!-- heroicons:heart -->
      <svg xmlns="http://www.w3.org/2000/svg" class="text-dark-high-emphasis dark:text-light-high-emphasis h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      <!-- <svg xmlns="http://www.w3.org/2000/svg" class="text-red-500 h-7 w-7" fill="currentColor" viewBox="0 0 24 24" stroke="none">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg> -->
    </div>
    <!-- meta -->
    <div class="px-4 pb-4">
      <h5 class="leading-6 font-medium">Classic Neapolitan Margherita</h5>
      <p class="text-sm text-dark-low-emphasis dark:text-light-medium-emphasis font-medium">Wed, 26 January 2021</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post-card',
}
</script>
