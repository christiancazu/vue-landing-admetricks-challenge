import { shallowMount, RouterLinkStub } from '@vue/test-utils'

import Index from '@/modules/home/views/Index.vue'

import Hero from '@/modules/home/components/Hero.vue'
import Services from '@/modules/home/components/Services.vue'
import Gallery from '@/modules/home/components/Gallery.vue'
import Footer from '@/modules/home/components/Footer.vue'

describe('Index', () => {
  test('render Index Component', async () => {
    const wrapper = shallowMount(Index, {
      global: {
        stubs: {
          RouterView: RouterLinkStub
        }
      }
    })

    expect(wrapper.exists).toBeTruthy()

    expect(wrapper.findComponent(Hero).exists())
    expect(wrapper.findComponent(Services).exists())
    expect(wrapper.findComponent(Gallery).exists())
    expect(wrapper.findComponent(Footer).exists())

    expect(wrapper.findComponent('RouterView').exists())
  })
})
