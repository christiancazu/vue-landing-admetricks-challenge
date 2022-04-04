import { defineSSRCustomElement } from 'vue'

import Chart from '@/Chart.ce.vue'

const ChartElement = defineSSRCustomElement(Chart)

customElements.define('chart-component', ChartElement)
