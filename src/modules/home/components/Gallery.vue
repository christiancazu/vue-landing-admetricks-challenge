<template>
<section class="gallery">
  <div class="gallery__item gallery__item--1">
    <img
      alt="triangle-yellow"
      src="@/assets/images/triangle-yellow.png"
    >
  </div>
  <div class="gallery__item gallery__item--2" />
  <div class="gallery__item gallery__item--3" />
  <div class="gallery__item gallery__item--4" />
  <div class="gallery__item gallery__item--5" />
  <Bg />
</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Bg from '@/modules/common/components/Bg.vue'

export default defineComponent({
  name: 'GallerySection',
  components: { Bg }
})
</script>
