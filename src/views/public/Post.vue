<template>
  <div>

    <div class="relative">
      <div class="flex justify-end md:justify-between">
        <!-- Return to feed -->
        <return-feed-btn />
        <!-- Like post -->
        <div class="absolute md:relative top-0 md:top-auto">
          <like-post :liked="postLiked" @onClick="likePost" />
        </div>
      </div>
      <!-- Feature image -->
      <div 
        class='cursor-pointer mb-6 md:my-6 bg-cover rounded-md bg-center' 
        style='height:42vh; background-image: url("https://www.pizzacappuccino.com/wp-content/uploads/2019/02/Neapolitan-Pizza-Recipe.jpg")'
      ></div>
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

    <article class="pt-12 lg:mx-auto prose dark:prose-dark lg:prose-xl"> 
      <p>3 months ago</p>
      <h1>Wood Fired Margherita</h1>
      <p>
        Cooked at 400°C
      </p>
      <p>
        Since I wanted to test a 65% dough I decided to use Captuto Nuvola. This could last a 2 day or possibly 3 day fermention. This long proof and high hydration resulted in an extremely airy and light crust.
      </p>
    </article>

  </div>
</template>

<script>
import RecipeCard from '@/components/ui/public/shared/RecipeCard'
import ReturnFeedBtn from '@/components/ui/public/shared/ReturnFeedBtn'
import LikePost from '@/components/ui/public/shared/LikePost'

export default {
  data() {
    return {
      postLiked: false,
    }
  },
  methods: {
    likePost() {
      if (!this.postLiked) {
        // Like post
        this.postLiked = true
      } else if (this.postLiked) {
        // Unlike post
        this.postLiked = false
      }
    }
  },
  components: {
    RecipeCard,
    ReturnFeedBtn,
    LikePost
  }
}
</script>
