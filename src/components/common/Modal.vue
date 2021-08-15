<template>
  <transition name="slide-fade">
    <div v-if="value" class="bg-tint transition duration-500 ease-in-out flex flex-wrap content-center h-screen w-screen fixed top-0 left-0 overflow-y-hidden" style="z-index: 1000">
      <div 
        v-click-outside="closeModal"
        class="modal bg-white dark:bg-ui-dark-300 mx-auto rounded-lg"
        :class="{ 'md' : md, 'lg' : lg, 'full' : full }"
      >
        <slot name="header">
          <div class="text-dark-high-emphasis dark:text-light-high-emphasis p-6 flex justify-between">
            <!-- Modal title -->
            <span class="text-lg font-bold">{{title}}</span>
            <!-- Close modal -->
            <button @click="closeModal(false)">
              <!-- heroicons:solid:x -->
              <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </slot>

        <div class="p-6 pt-3">
          <slot></slot>
        </div>
        
        <slot name="footer">
        </slot>
      </div>
    </div>
   </transition>
</template>

<script>
import vClickOutside from 'v-click-outside'

export default {
  methods: {
    openModal () {
      this.$emit('input', true)
    },
    closeModal() {
      this.$emit('input', false)
    }
  },
  directives: {
    clickOutside: vClickOutside.directive
  },
  props: {
    value: { type: Boolean },
    title: { type: String },
    md: { type: Boolean },
    lg: { type: Boolean },
    full: { type: Boolean}
  }
}
</script>

<style>
.modal {
  min-width: 30vw;
}
.modal.md {
  min-width: 50vw;
}
.modal.lg {
  min-width: 75vw;
}
.modal.full {
  min-width: 100vw;
}

@media only screen and (max-width: 640px) {
  .modal {
    /* margin: 1rem; */
    min-width: 90vw;
  }
}
</style>