<template>
  <div>
    <div class="flex justify-end md:justify-between">
      <!-- Return to feed -->
      <return-feed-btn />

      <div class="flex justify-between">

        <span>avatar</span>

        <span>
          <p>Recipe by</p>
          <h5>Angus Dolan</h5>
        </span>

        <span>youtube</span>
      </div>

    </div>
  </div>
</template>

<script>
import ReturnFeedBtn from '@/components/ui/public/shared/ReturnFeedBtn'

export default {
  components: {
    ReturnFeedBtn
  }
}
</script>