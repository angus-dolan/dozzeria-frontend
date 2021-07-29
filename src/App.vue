<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
const default_layout = 'public';

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + '-layout';
    },
    theme() {
      return this.$store.getters['theme/getTheme']
    }
  },
  mounted() {
    this.$store.dispatch('theme/setTheme', localStorage.theme)
  }
};
</script>
