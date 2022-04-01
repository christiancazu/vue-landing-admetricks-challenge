<template>
<section class="hero">
  <article class="hero__info">
    <div class="hero__info__text-header">
      Estamos para ayudarte
    </div>
    <h1 class="hero__info__text-title">
      ¿Tienes problemas para
      <div class="hero__info__text-title--text">
        entender el mercado
        <div class="hero__info__text-title--underlined" />
      </div>de la publicidad digital?
    </h1>
    <div class="hero__info__text-subtitle">
      El Mercado de la publicidad online es incierto y complejo, Admetricks te
      <span>ayuda a visibilizar cómo desempeñan las campañas y contenidos</span>
      versus los de tu competencia en tiempo real con reportes y alertas automáticas
    </div>
    <div class="hero__info__btns">
      <button>
        Solicitar Demo
      </button>
      <div>
        Ver funcionalidades
      </div>
    </div>
  </article>
  <article class="hero__images">
    <div class="hero__images--horizontal">
      <SVGTriangle />
    </div>
    <div class="hero__images--vertical">
      <SVGTriangles />
    </div>
  </article>

  <Bg />
</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Bg from '@/modules/common/components/Bg.vue'
import SVGTriangle from '@/modules/common/components/SVGTriangle.vue'
import SVGTriangles from '@/modules/common/components/SVGTriangles.vue'

export default defineComponent({
  name: 'HeroSection',

  components: {
    Bg,
    SVGTriangle,
    SVGTriangles
  }
})
</script>
