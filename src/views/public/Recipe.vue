<template>
  <div>

    <div class="flex flex-col">
      <div class="bg-white dark:bg-ui-dark-200 border-l border-r border-t md:border-none border-ui-light-300 dark:border-ui-dark-300 md:bg-transparent md:dark:bg-transparent rounded-t-lg px-4 pt-8 md:p-0 md:pb-8 md:p-0 order-2 md:order-1 flex md:justify-between">
        <!-- Return to feed -->
        <return-feed-btn />
        <!-- Recipe Author -->
        <recipe-author :avatar="'dp.jpg'" youtube :name="'Angus Dolan'" :authorLink="'https://www.youtube.com/watch?v=SDpCzJw2xm4&t=650s'" />
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
        <div class="flex justify-between pb-3">
          <!-- Like recipe -->
          <like-post :liked="recipeLiked" @onClick="likeRecipe" />
          <!-- Share recipe -->
          <button 
            @click="socialShare = true" 
            class="flex items-center h-14 text-dark-high-emphasis dark:text-light-high-emphasis"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none inline-block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span class="pointer-events-none pl-2">Share</span>
          </button>
        </div>
        
        <!-- Blurb -->
        <p>By default, Tailwind provides five border-width utilities, and the same number of utilities per side (top, right, bottom, and left). You change, add, or remove these by editing the theme.borderWidth section of your Tailwind config. The values in this section will also control which utilities will be generated side.</p>
        <!-- Recipe ingredients -->
        <div class="flex items-center justify-between mt-12 mb-6">
          <span class="text-dark-high-emphasis dark:text-light-high-emphasis font-bold text-2xl">Ingredients</span>
          <span v-if="!areIngredientsChecked" @click="checkAll()" class="cursor-pointer text-red-500">Check all</span>
          <span v-else @click="unCheckAll()" class="cursor-pointer text-red-500">Uncheck all</span>
        </div>
        <!-- Loop ingredients -->
        <ingredient-card 
          v-for="(ingredient, index) in ingredients"
          :key="ingredient.id"
          :name="ingredient.name" 
          :quantity="ingredient.quantity" 
          :quantityUnits="ingredient.quantityUnits"
          :isChecked="ingredient.isChecked"
          @onClick="checkIngredient(index)"
        />
      </div>
    </div>

    <!-- Social share modal -->
    <modal
      v-model="socialShare"
      :title="'Share this recipe'"
    >
      <div class="flex text-dark-high-emphasis dark:text-light-high-emphasis flex-col space-y-4">
        <!-- Facebook -->
        <ShareNetwork
          network="facebook"
          url="https://news.vuejs.org/issues/180"
          title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
          description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
          quote="The hot reload is so fast it\'s near instant. - Evan You"
          hashtags="vuejs,vite"
        >
          <div class="flex items-center">
            <box-icon color="currentColor" class="mr-2" type="logo" name="facebook-square"></box-icon>
            <span class="dark:text-light-medium-emphasis">Share on Facebook</span>
          </div>
        </ShareNetwork>
        <!-- Messenger -->
        <ShareNetwork
          network="messenger"
          url="https://news.vuejs.org/issues/180"
          title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
        >
          <div class="flex items-center">
            <box-icon color="currentColor" class="mr-2" type="logo" name="messenger"></box-icon>
            <span class="dark:text-light-medium-emphasis">Share to Messenger</span>
          </div>
        </ShareNetwork>
        <!-- WhatsApp -->
        <ShareNetwork
          network="whatsapp"
          url="https://news.vuejs.org/issues/180"
          title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
          description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
        >
          <div class="flex items-center">
            <box-icon color="currentColor" class="mr-2" type="logo" name="whatsapp"></box-icon>
            <span class="dark:text-light-medium-emphasis">Share to WhatsApp</span>
          </div>
        </ShareNetwork>
        <!-- Twitter -->
        <ShareNetwork
          network="twitter"
          url="https://news.vuejs.org/issues/180"
          title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
          description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
          quote="The hot reload is so fast it\'s near instant. - Evan You"
          hashtags="vuejs,vite,javascript"
          twitterUser="youyuxi"
        >
          <div class="flex items-center">
            <box-icon color="currentColor" class="mr-2" type="logo" name="twitter"></box-icon>
            <span class="dark:text-light-medium-emphasis">Share on Twitter</span>
          </div>
        </ShareNetwork>
        <!-- Reddit -->
        <ShareNetwork
          network="reddit"
          url="https://news.vuejs.org/issues/180"
          title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
        >
          <div class="flex items-center">
            <box-icon color="currentColor" class="mr-2" type="logo" name="reddit"></box-icon>
            <span class="dark:text-light-medium-emphasis">Share to Reddit</span>
          </div>
        </ShareNetwork>
      </div>
    </modal>

  </div>
</template>

<script>
import 'boxicons'

import ReturnFeedBtn from '@/components/ui/public/shared/ReturnFeedBtn'
import RecipeAuthor from '@/components/ui/public/recipe/RecipeAuthor'
import IngredientCard from '@/components/ui/public/recipe/IngredientCard'
import LikePost from '@/components/ui/public/shared/LikePost'

export default {
  data() {
    return {
      socialShare: false,
      recipeLiked: false,
      ingredients: [
        {id: 0, name: 'Caputo Blue Flour', quantity: 300, quantityUnits: 'g', isChecked: false},
        {id: 1, name: 'Salt', quantity: 10, quantityUnits: 'g', isChecked: false},
      ] 
    }
  },
  methods: {
    likeRecipe() {
      if (!this.recipeLiked) {
        // Like recipe
        this.recipeLiked = true
      } else if (this.recipeLiked) {
        // Unlike recipe
        this.recipeLiked = false
      }
    },
    checkIngredient(pos) {
      this.ingredients[pos].isChecked = !this.ingredients[pos].isChecked
    },
    checkAll() {
      this.ingredients.forEach(el => {
        el.isChecked = true
      })
    },
    unCheckAll() {
      this.ingredients.forEach(el => {
        el.isChecked = false
      })
    }
  },
  computed: {
    areIngredientsChecked() {
      let res = false

      this.ingredients.forEach(el => {
        if (el.isChecked) res = true
      })
      
      return res
    }
  },
  components: {
    ReturnFeedBtn,
    RecipeAuthor,
    IngredientCard,
    LikePost
  }
}
</script>