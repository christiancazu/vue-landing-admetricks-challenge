import { shallowMount, RouterLinkStub } from '@vue/test-utils'

import Footer from '@/modules/home/components/Footer.vue'

describe('Footer', () => {
  test('render Footer Component', async () => {
    const wrapper = shallowMount(Footer, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
          RouterView: RouterLinkStub
        }
      }
    })

    expect(wrapper.exists).toBeTruthy()

    expect(wrapper.text()).toMatch('Ver Grafico')

    expect(wrapper.findComponent('RouterView').exists())
  })

  test('navigation to /chart', async () => {
    const wrapper = shallowMount(Footer, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
          RouterView: RouterLinkStub
        }
      }
    })

    expect(wrapper.findComponent(RouterLinkStub).props().to.name).toBe('Chart')
  })
})
