import { defineCustomElement } from 'vue'

import Chart from '@/Chart.ce.vue'

const ChartElement = defineCustomElement(Chart)

customElements.define('chart-component', ChartElement)
