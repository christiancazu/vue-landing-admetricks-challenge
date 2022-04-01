<template>
<section class="services">
  <article class="services__container">
    <div
      v-for="service in SERVICES"
      :key="service.title"
      class="service"
    >
      <img
        :alt="service.title"
        :src="`/icons/${service.icon}.png`"
      >
      <div class="service__title">
        {{ service.title }}
      </div>

      <div class="service__description">
        {{ service.description }}
      </div>
    </div>
  </article>

  <Bg />
</section>
</template>

<script>
import { defineComponent } from '@vue/runtime-core'

import Bg from '@/modules/common/components/Bg.vue'

import { SERVICES } from '@/data'

export default defineComponent({
  name: 'ServicesSection',

  components: {
    Bg
  },

  setup () {
    return {
      SERVICES
    }
  }
})
</script>
