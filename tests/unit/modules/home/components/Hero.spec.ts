import { shallowMount } from '@vue/test-utils'

import Hero from '@/modules/home/components/Hero.vue'

import Bg from '@/modules/common/components/Bg.vue'
import SVGTriangle from '@/modules/common/components/SVGTriangle.vue'
import SVGTriangles from '@/modules/common/components/SVGTriangles.vue'

describe('Hero', () => {
  test('render Hero Component', async () => {
    const wrapper = shallowMount(Hero)

    expect(wrapper.exists).toBeTruthy()

    expect(wrapper.findComponent(Bg).exists())
    expect(wrapper.findComponent(SVGTriangle).exists())
    expect(wrapper.findComponent(SVGTriangles).exists())
  })
})
