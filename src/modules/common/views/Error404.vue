<template>
<section class="view-error">
  <h1>404 - Página no encontrada</h1>
  <div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      @click="$router.push('/')"
    >
      Volver
    </button>
  </div>
</section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorView'
})
</script>

<style lang="scss" scoped>
.view-error {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  & h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}
</style>
