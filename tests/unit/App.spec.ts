import { shallowMount, RouterLinkStub, mount } from '@vue/test-utils'

import App from '@/App.vue'

describe('App', () => {
  test('render App Component', async () => {
    const wrapper = mount(App, {
      global: {
        stubs: ['RouterView']
      }
    })

    expect(wrapper.exists).toBeTruthy()
  })
})
