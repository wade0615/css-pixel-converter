import { mount, shallowMount } from '@vue/test-utils'
import index from '@/pages/index.vue'
import NuxtLogo from '@/components/NuxtLogo.vue'

describe('NuxtLogo', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(NuxtLogo)
    expect(wrapper.vm).toBeTruthy()
  })
});

describe('index page', () => {
  test('ppi', () => {
    expect(index.data().ppi).toBe('');
  })
  test('getPixelDensity()', () => {
    expect(index.methods.getPixelDensity(320)).toBe(2);
    expect(index.methods.getPixelDensity(480)).toBe(3);
  })
});
