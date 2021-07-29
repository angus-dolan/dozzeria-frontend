<template>
  <div class="min-h-screen bg-ui-light-100 dark:bg-ui-dark-50">
    <app-header />
    <div class="container px-4 py-6 mx-auto">
      <slot />
    </div>
  </div>
</template>

<script>
import AppHeader from './AppHeader'

export default {
  components: {
    AppHeader
  }
}
</script>