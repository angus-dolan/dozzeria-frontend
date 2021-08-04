<template>
  <div class="flex w-full md:w-auto justify-between items-center">
    <div class="flex">
      <avatar 
        :name="'Angus Dolan'" 
        :size="48" 
        shadow 
        :src="'dp.jpg'"
      />
      <span class="pl-4">
        <p class="text-sm text-dark-low-emphasis dark:text-light-medium-emphasis">Recipe by</p>
        <h5 class="font-bold">Angus Dolan</h5>
      </span>
    </div>

    <a class="pl-12 flex justify-end cursor-pointer">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(252, 13, 27, 1);transform: ;msFilter:;">
        <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z">
        </path>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  
}
</script>