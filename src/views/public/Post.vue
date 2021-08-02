<template>
  <div>

    <div class="relative">
      <div class="flex justify-end md:justify-between">
        <!-- Return to feed -->
        <return-feed-btn />
        <!-- Like post -->
        <button class="absolute md:relative top-0 md:top-auto bg-white dark:bg-ui-dark-300 shadow-xl w-14 h-14 rounded-tr-md md:rounded-tr-2xl rounded-2xl transition-button hover:shadow-md">
          <!-- heroicons:heart -->
          <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto text-dark-high-emphasis dark:text-light-high-emphasis h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <!-- <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto text-red-500 h-8 w-8" fill="currentColor" viewBox="0 0 24 24" stroke="none">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg> -->
        </button>
      </div>
      <!-- Feature image -->
      <div class='cursor-pointer mb-6 md:my-6 bg-cover rounded-md bg-center' style='height:42vh; background-image: url("https://www.pizzacappuccino.com/wp-content/uploads/2019/02/Neapolitan-Pizza-Recipe.jpg")'></div>
    </div>

    <!-- Post Recipes -->
    <div class="grid grid-cols-12 gap-x-4 gap-y-2">
      <recipe-card 
        class="col-span-12 md:col-span-6"
        :name="'New York 3 Flours'"
        :recipeType="'Dough'"
        :imgURL="'https://www.onceuponachef.com/images/2020/06/Pizza-Dough-scaled.jpg'"
      />
      <recipe-card 
        class="col-span-12 md:col-span-6"
        :name="'San Marzano V1'"
        :recipeType="'Sauce'"
        :imgURL="'https://www.thespruceeats.com/thmb/Ojgu1oZGnRVKpoJ_kekfEghrPnE=/3800x2533/filters:fill(auto,1)/homemade-pizza-sauce-recipe-3059269-hero-d99f22fb71c94187a1fc20d9df60ec30.jpg'"
      />
    </div>

    <!-- Toppings --> 
    <div class="pt-2">
      <h5 class="font-medium pb-4">Toppings</h5>
      <div class="flex flex-wrap">
        <div class="mr-3 mb-3 font-medium dark:font-normal  bg-ui-light-200 dark:bg-ui-dark-400 rounded-full px-4 py-2 text-dark-high-emphasis dark:text-light-medium-emphasis">
          Fior di latte
        </div>
        <div class="mr-3 mb-3 font-medium bg-ui-light-200 dark:bg-ui-dark-400 rounded-full px-4 py-2 text-dark-high-emphasis dark:text-light-medium-emphasis">
          Prosciutto
        </div>
        <div class="mr-3 mb-3 font-medium bg-ui-light-200 dark:bg-ui-dark-400 rounded-full px-4 py-2 text-dark-high-emphasis dark:text-light-medium-emphasis">
          Walnuts
        </div>
        <div class="mr-3 mb-3 font-medium bg-ui-light-200 dark:bg-ui-dark-400 rounded-full px-4 py-2 text-dark-high-emphasis dark:text-light-medium-emphasis">
          Honey
        </div>
      </div>
    </div>

    <article class="pt-12 lg:mx-auto prose lg:prose-xl"> 
      <p>July 1st 2021</p>
      <h1>Garlic bread with cheese: What the science tells us</h1>
      <p>
        For years parents have espoused the health benefits of eating garlic bread with cheese to their
        children, with the food earning such an iconic status in our culture that kids will often dress
        up as warm, cheesy loaf for Halloween.
      </p>
      <p>
        But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
        springing up around the country.
      </p>
    </article>

  </div>
</template>

<script>
import RecipeCard from '@/components/ui/public/shared/RecipeCard'
import ReturnFeedBtn from '@/components/ui/public/shared/ReturnFeedBtn'

export default {
  components: {
    RecipeCard,
    ReturnFeedBtn
  }
}
</script>
