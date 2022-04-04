import { shallowMount } from '@vue/test-utils'

import Services from '@/modules/home/components/Services.vue'

import Bg from '@/modules/common/components/Bg.vue'

describe('Services', () => {
  test('render Services Component', async () => {
    const wrapper = shallowMount(Services)

    expect(wrapper.exists).toBeTruthy()

    expect(wrapper.findComponent(Bg).exists())
  })
})
