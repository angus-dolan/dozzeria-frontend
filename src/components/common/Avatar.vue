<template>
  <div>
    <!-- Image -->
    <div 
      v-if='src'
      :style="{
        width: size + 'px', 
        height: size + 'px'
      }"
      :class="{
        'shadow-md': shadow
      }"
      class='rounded-full'
    >
      <img 
        class='w-full h-full' 
        style="border-radius: inherit" 
        :src="require(`@/assets/img/${src}`)" 
        alt='Image not found :('
      >
    </div>
    <!-- Initials -->
    <div 
      v-else
      class='
        flex
        justify-center 
        items-center 
        bg-gray-200 
        text-dark-high-emphasis 
        dark:bg-ui-dark-300 
        dark:text-light-medium-emphasis rounded-full
      '
      :class="{
        'shadow-md': shadow
      }"
      :style="{
        fontSize: (size / 3.25) + 'px', 
        width: size + 'px', 
        height: size + 'px'
      }"
    >
      <span>{{getInitials}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    },
    src: {
      type: String,
    },
    shadow: {
      type: Boolean
    }
  },
  computed: {
    getInitials() {
      let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');
      let initials = [...this.name.matchAll(rgx)] || [];

      initials = (
        (initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')
      ).toUpperCase();

      return initials
    }
  }
}
</script>