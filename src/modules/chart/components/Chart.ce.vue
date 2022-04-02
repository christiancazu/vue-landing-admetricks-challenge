<template>
<div class="chart">
  <svg
    id="d3-chart"
    ref="chart"
  />
  <div class="frequency">
    <div class="frequency__text">
      Frequency
    </div>
    <div class="frequency__items">
      <div>
        <div class="square square--falabella" />
        <div>
          {{ defaultBrands[0].frequency }}
        </div>
      </div>
      <div>
        <div class="square square--paris" />
        <div>
          {{ defaultBrands[1].frequency }}
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent, onMounted, onUpdated, onBeforeUpdate, ref } from 'vue'

// @ts-ignore
import * as d3 from 'd3'

import { BRANDS_EVENT_BUS } from '@/constans'

interface Brand {
  name: string
  reach: number
  frequency: number
}

export default defineComponent({
  name: 'ChartComponent',

  setup () {
    const initalBrands: Brand[] = [
      { name: 'falabella', reach: 0.54, frequency: 8.13 },
      { name: 'paris', reach: 0.25, frequency: 3.06 }
    ]

    const defaultBrands = ref<Brand[]>(initalBrands)

    const chart = ref(null)

    // @ts-ignore
    let xScale: d3.AxisScale<string>,
      yScale: d3.ScaleLinear<number, number, never>|d3.AxisScale<d3.NumberValue>,
      roundedHeight: number,
      container: any

    onMounted(() => {
      renderGraphic(initalBrands)

      window.addEventListener(BRANDS_EVENT_BUS, (e) => {
        console.log(BRANDS_EVENT_BUS, e)
        // @ts-ignore
        const brands = e.detail as Brand[]

        updateChart(brands)

        defaultBrands.value = brands
      })
    })

    onUpdated(() => {
      //
    })

    onBeforeUpdate(() => {
      // container = d3.select(chart.value)

      // container
      //   .selectAll('*')
      //   .remove()
    })

    function renderGraphic (brands: Brand[]) {
      const height = 300
      roundedHeight = Math.ceil((height + 1) / 10) * 10
      const width = 500

      xScale = d3
        .scaleBand()
        .domain(brands.map(marca => marca.name))
        .range([0, width])
        .padding(0.2)

      yScale = d3
        .scaleLinear()
        .domain([0, 1])
        .range([roundedHeight, 10])

      const tooltip = d3.select('body')
        .append('div')
        .attr('class', 'd3-tooltip')
        .style('position', 'absolute')
        .style('z-index', '10')
        .style('visibility', 'hidden')
        .style('padding', '15px')
        .style('background', 'rgba(0,0,0,0.6)')
        .style('border-radius', '5px')
        .style('color', '#fff')
        .text('a simple tooltip')

      container = d3.select(chart.value)
        .classed('chart-container', true)
        .style('height', `${roundedHeight}px`)
        .style('width', `${width}px`)

      container
        .selectAll('.bar')
        .data(brands)
        .enter().append('rect')
        .classed('bar', true)
        // @ts-ignore
        .attr('width', xScale.bandwidth())
        // @ts-ignore
        .attr('height', (marca: Brand) => roundedHeight - yScale(marca.reach))
        // @ts-ignore
        .attr('x', (marca: Brand) => xScale(marca.name))
        // @ts-ignore
        .attr('y', (marca: Brand) => yScale(marca.reach))
        .on('mouseover', function (trusted: boolean, marca: Brand) {
          tooltip.html(`Frequency: ${marca.frequency}<br>Reach: ${marca.reach}`).style('visibility', 'visible')

          // @ts-ignore
          d3.select(this).style('filter', 'brightness(85%)')
        })
        .on('mousemove', function (event: any) {
          tooltip
          // @ts-ignore
            .style('top', (event.pageY - 10) + 'px')
          // @ts-ignore
            .style('left', (event.pageX + 10) + 'px')
        })
        .on('mouseout', function () {
          tooltip.html(``).style('visibility', 'hidden')

          // @ts-ignore
          d3.select(this).style('filter', 'brightness(100%)')
        })

      container.append('g')
        .attr('transform', 'translate(0,' + roundedHeight + ')')
        .call(d3.axisBottom(xScale))
        .selectAll('text')
        .attr('transform', 'translate(-5, 15) rotate(-30)')

      container.append('g')
        .call(d3.axisLeft(yScale).tickFormat((marca: any) => (marca * 100) + '%'))
        .selectAll('text').attr('dx', '-.1em')
    }

    function updateChart (newBrands: Brand[]) {
      // @ts-ignore
      const u = container.selectAll('rect')
        .data(newBrands)

      u.enter()
        .append('rect')
        .merge(u)
        .transition()
        .duration(1000)
        .attr('x', (b: Brand) => xScale(b.name))
        .attr('y', (b: Brand) => yScale(b.reach))
        // @ts-ignore
        .attr('width', xScale.bandwidth())
        // @ts-ignore
        .attr('height', (b: Brand) => roundedHeight - yScale(b.reach))
    }

    return {
      updateChart,
      defaultBrands,
      chart
    }
  }
})
</script>

<style lang="scss">
.chart {
  padding-bottom: 4rem;
}
.chart-container {
  border-left: 1px solid grey;
  border-bottom: 1px solid grey;
  margin-left: auto;
  margin-right: auto;
  overflow: visible;
}

/* .bar {
} */

text {
  fill: grey;
}

path.domain {
  stroke: transparent;
}

#d3-chart {
  rect:nth-child(1) {
    fill: #5ec0bc;
  }

  rect:nth-child(2) {
    fill: #f4bd6a;
  }
}

.frequency {
 color: grey;
 display: flex;
 justify-content: center;
 flex-direction: column;
 margin-top: 48px;

  &__text {
   text-align: center;
  }

  &__items {
    display: flex;
    justify-content: center;

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 .5rem;
    }
  }
}

.square {
  height: 1.25rem;
  width: 1.25rem;
  border-radius: 50%;

  &--falabella {
    background-color: #5ec0bc;
    margin-right: .25rem;
  }
  &--paris {
    background-color: #f4bd6a;
    margin-right: .25rem;
  }
}
</style>
