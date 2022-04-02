import { defineSSRCustomElement } from 'vue'

import Chart from '@/modules/chart/components/Chart.ce.vue'

const ChartElement = defineSSRCustomElement(Chart)

customElements.define('chart-component', ChartElement)
