<template>
<section>
  <Hero />
</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Hero from '@/modules/home/components/Hero.vue'

export default defineComponent({
  name: 'HomeIndex',

  components: {
    Hero
  }
})
</script>
