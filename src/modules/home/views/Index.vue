<template>
<section>
  <Hero />
  <Services />
</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Hero from '@/modules/home/components/Hero.vue'
import Services from '@/modules/home/components/Services.vue'

export default defineComponent({
  name: 'HomeIndex',

  components: {
    Hero,
    Services
  }
})
</script>
