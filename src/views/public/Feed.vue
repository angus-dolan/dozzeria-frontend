<template>
  <div class="grid grid-cols-12 gap-4">

    <!-- Posts -->
    <div class="col-span-12 lg:col-span-6">
      <post-card />
      <post-card />
      <post-card />
    </div>
    
    <div class="hidden lg:block col-start-8 col-span-5">
      <!-- Featured Recipes (desktop only) -->
      <h2 class="font-medium text-xl pb-6">Featured Recipes</h2>
      <recipe-card 
        :name="'New York 3 Flours'"
        :recipeType="'Dough'"
        :imgURL="'https://www.onceuponachef.com/images/2020/06/Pizza-Dough-scaled.jpg'"
      />
      <recipe-card 
        :name="'San Marzano V1'"
        :recipeType="'Sauce'"
        :imgURL="'https://www.thespruceeats.com/thmb/Ojgu1oZGnRVKpoJ_kekfEghrPnE=/3800x2533/filters:fill(auto,1)/homemade-pizza-sauce-recipe-3059269-hero-d99f22fb71c94187a1fc20d9df60ec30.jpg'"
      />

      <!-- Delightful GIFs (desktop only) -->
      <!-- <h2 class="font-medium text-xl pt-2 pb-6">Delightful GIFs</h2>
      <feed-gifs /> -->
    </div>

  </div>
</template>

<script>
import PostCard from '@/components/ui/public/feed/PostCard'
import RecipeCard from '@/components/ui/public/shared/RecipeCard'
// import FeedGifs from '@/components/ui/public/feed/FeedGIFs'

export default {
  components: {
    PostCard,
    RecipeCard,
    // FeedGifs
  }
}
</script>
