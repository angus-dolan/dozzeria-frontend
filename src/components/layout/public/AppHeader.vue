<template>
  <div :class="{ 'hidden-navbar': !showNavbar }" class="animate-navbar fixed w-full border-b bg-white dark:bg-ui-dark-500 border-gray-200 dark:border-ui-dark-500">
    <div class="container px-4 mx-auto flex justify-between flex-wrap content-center" style="height: 90px">
      <!-- return to /feed arrow (mobile only) -->
      <transition name="slide-fade">
        <router-link :to="{ name: 'feed' }" v-if="backButton" class="text-dark-high-emphasis dark:text-light-high-emphasis flex md:hidden items-center justify-start h-full w-10">
          <svg class="pointer-events-none" width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 20.3334L1.66667 11.0001L11 1.66675" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </router-link>
      </transition>

      <!-- app logo -->
      <router-link :to="{ name: 'feed' }" class="flex items-center">
        <img class="transition-button" v-if="theme == 'light'" src="@/assets/svg/logo-light.svg" alt="Dozzeria Logo Light">
        <img v-else src="@/assets/svg/logo-dark.svg" alt="Dozzeria Logo Dark">
      </router-link>

      <!-- color mode toggle -->
      <button @click="toggleTheme" class="flex items-center justify-end h-full w-10">
        <!-- heroicons:sun -->
        <svg v-if="theme == 'light'" class="pointer-events-none text-dark-high-emphasis stroke-current" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4V5.33333M16 26.6667V28M28 16H26.6667M5.33333 16H4M24.4853 24.4853L23.5425 23.5425M8.45753 8.45753L7.51472 7.51472M24.4854 7.51479L23.5425 8.4576M8.4576 23.5425L7.51479 24.4854M21.3333 16C21.3333 18.9455 18.9455 21.3333 16 21.3333C13.0545 21.3333 10.6667 18.9455 10.6667 16C10.6667 13.0545 13.0545 10.6667 16 10.6667C18.9455 10.6667 21.3333 13.0545 21.3333 16Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <!-- heroicons:moon -->
        <svg v-else class="pointer-events-none text-light-high-emphasis stroke-current" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.4427 20.1928C25.147 20.7136 23.732 21.0001 22.25 21.0001C16.0368 21.0001 11 15.9633 11 9.75011C11 8.26814 11.2865 6.8531 11.8073 5.55737C7.6706 7.21978 4.75 11.2689 4.75 16.0001C4.75 22.2133 9.7868 27.2501 16 27.2501C20.7312 27.2501 24.7803 24.3295 26.4427 20.1928Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
const OFFSET = 90

export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
    }
  },
  computed: {
    theme() {
      return this.$store.getters['theme/getTheme']
    },
    backButton() {
      return this.$route.meta.returnToFeed
    }
  },
  methods: {
    toggleTheme() {
      if (localStorage.theme === 'light') {
        // Enable dark mode
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark')

        localStorage.setItem('theme', 'dark')

        this.$store.dispatch('theme/setTheme', localStorage.theme)
      } else if (localStorage.theme === 'dark') {
        // Enable light mode
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')

        localStorage.setItem('theme', 'light')

        this.$store.dispatch('theme/setTheme', localStorage.theme)
      }
    },
    onScroll () {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return
      }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  mounted () {
    // Navbar scroll animation
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },
}
</script>

<style scoped>

</style>