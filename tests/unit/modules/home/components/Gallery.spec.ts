import { shallowMount } from '@vue/test-utils'

import Gallery from '@/modules/home/components/Gallery.vue'

import Bg from '@/modules/common/components/Bg.vue'

describe('Gallery', () => {
  test('render Gallery Component', async () => {
    const wrapper = shallowMount(Gallery)

    expect(wrapper.exists).toBeTruthy()

    expect(wrapper.findComponent(Bg).exists())
  })
})
