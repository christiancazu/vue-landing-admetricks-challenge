<template>
<section class="main-layout">
  <SVGTopTriangle />

  <TriangleGreen />

  <div class="main-layout__page">
    <RouterView />
  </div>
</section>
</template>

<script>
import { defineComponent } from 'vue'

import SVGTopTriangle from '../components/SVGTopTriangle.vue'
import TriangleGreen from '../components/TriangleGreen.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    SVGTopTriangle,
    TriangleGreen
  }
})
</script>
