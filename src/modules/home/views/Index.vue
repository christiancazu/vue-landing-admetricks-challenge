<template>
<div>
  <Hero />
  <Services />
  <Gallery />
  <Footer />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Hero from '@/modules/home/components/Hero.vue'
import Services from '@/modules/home/components/Services.vue'
import Gallery from '@/modules/home/components/Gallery.vue'
import Footer from '@/modules/home/components/Footer.vue'

export default defineComponent({
  name: 'HomeIndex',

  components: {
    Hero,
    Services,
    Gallery,
    Footer
  }
})
</script>
