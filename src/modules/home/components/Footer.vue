<template>
<section class="footer">
  <img
    alt="triangle-orange"
    src="@/assets/images/triangle-orange.png"
  >

  <div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      <RouterLink :to="{name: 'Chart'}">
        Ver Grafico
      </RouterLink>
    </button>
  </div>
</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterSection'
})
</script>
