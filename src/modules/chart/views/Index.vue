<template>
<div class="my-24">
  <Chart />
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Chart from '@/modules/chart/components/Chart.vue'

export default defineComponent({
  name: 'ChartIndex',

  components: {
    Chart
  }
})
</script>
