<template>
  <div @click="clickPost()" class="postcard select-none cursor-pointer bg-white border border-gray-200 dark:border-transparent dark:bg-ui-dark-300 mb-3" style="border-radius: 30px">
    <!-- author -->
    <div class="flex pt-4 px-4">
      <avatar 
        :name="'Angus Dolan'" 
        :size="48"  
        :src="'dp.jpg'"
      />
      <div class="flex items-stretch pl-3">
        <span class="place-self-center">
          <h5 class="author-name leading-none text-base font-medium">{{postAuthor}}</h5>
          <p class="author-username text-dark-low-emphasis dark:text-light-medium-emphasis text-sm">@{{postUsername}}</p>
        </span>
      </div>
    </div>
    <div 
      class='postcard__img rounded-xl my-3 mx-1 bg-cover h-80 bg-center' 
      :style="{'background-image': 'url(' + require(`@/assets/img/${postImg}`) + ')'}"
    ></div>
    <!-- like button -->
    <div @click.stop="likePost()" class="likebtn w-16 px-4 pt-2 pb-2">
      <!-- heroicons:heart -->
      <svg v-if="postLiked" xmlns="http://www.w3.org/2000/svg" class="likebtn__liked pointer-events-none text-red-500 h-7 w-7" fill="currentColor" viewBox="0 0 24 24" stroke="none">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="likebtn__unliked pointer-events-none text-dark-high-emphasis dark:text-light-high-emphasis h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    </div>
    <!-- meta -->
    <div class="px-4 pb-4">
      <h5 class="post-title leading-6 font-medium">{{title}}</h5>
      <p class="post-date text-sm text-dark-low-emphasis dark:text-light-medium-emphasis font-medium">{{date}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    postImg: {
      required: true,
      type: String
    },
    postAuthor: {
      required: true,
      type: String
    },
    postUsername: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    date: {
      required: true,
      type: String
    },
  },
  data() {
    return {
      postLiked: false,
      delay: 700,
      clicks: 0,
      timer: null
    }
  },
  methods: {
    clickPost() {
      this.clicks++;
      if (this.clicks === 1) {
        this.timer = setTimeout( () => {
          // Execute single click 
          this.clicks = 0
          this.pushToPost()
        }, 
          this.delay
        )
      } else {
          // Execute double click 
          clearTimeout(this.timer)
          this.clicks = 0
          this.likePost()
      }         
    },
    pushToPost() {
      this.$router.push({ name: 'post' })
    },
    likePost() {
      if (!this.postLiked) {
        // Like post
        this.postLiked = true
      } else if (this.postLiked) {
        // Unlike post
        this.postLiked = false
      }
    }
  }
}
</script>
