<template>
  <div>

    <div class="flex flex-col">
      <div class="bg-white dark:bg-ui-dark-200 border-l border-r border-t md:border-none border-ui-light-300 dark:border-ui-dark-300 md:bg-transparent md:dark:bg-transparent rounded-t-lg px-4 py-8 md:p-0 order-2 md:order-1 flex md:justify-between">
        <!-- Return to feed -->
        <return-feed-btn />
        <!-- Recipe Author -->
        <recipe-author />
      </div>

      <!-- Recipe Hero -->
      <div class="order-1 md:order-2 pt-8 pb-14 md:py-24 flex flex-col items-center justify-center">
        <img class="w-48 h-48 object-cover rounded-full" src="https://www.thespruceeats.com/thmb/Ojgu1oZGnRVKpoJ_kekfEghrPnE=/3800x2533/filters:fill(auto,1)/homemade-pizza-sauce-recipe-3059269-hero-d99f22fb71c94187a1fc20d9df60ec30.jpg" alt="Image not found">
        <h1 class="pt-4 text-3xl font-bold">San Marzano V1</h1>
        <p class="text-lg text-dark-medium-emphasis dark:text-light-medium-emphasis">Pizza Sauce</p>
      </div>
    </div>

    <div class="bg-white dark:bg-ui-dark-200 border-b border-r border-l md:border border-ui-light-300 dark:border-ui-dark-300 rounded-b-lg md:rounded-lg px-4 py-8">
      <div class="prose dark:prose-dark mx-auto">
        <p>By default, Tailwind provides five border-width utilities, and the same number of utilities per side (top, right, bottom, and left). You change, add, or remove these by editing the theme.borderWidth section of your Tailwind config. The values in this section will also control which utilities will be generated side.</p>
        <div class="flex items-center justify-between mt-12 mb-6">
          <span class="text-dark-high-emphasis dark:text-light-high-emphasis font-bold text-2xl">Ingredients</span>
          <span class="cursor-pointer text-red-500">Uncheck all</span>
        </div>
        <ingredient-card />
      </div>
    </div>

  </div>
</template>

<script>
import ReturnFeedBtn from '@/components/ui/public/shared/ReturnFeedBtn'
import RecipeAuthor from '@/components/ui/public/recipe/RecipeAuthor'
import IngredientCard from '@/components/ui/public/recipe/IngredientCard'

export default {
  components: {
    ReturnFeedBtn,
    RecipeAuthor,
    IngredientCard
  }
}
</script>