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
  test('threeSecondsToGetApple()', () => {
    // expect(index.methods.threeSecondsToGetApple('apple')).toBe('apple');
    return index.methods.threeSecondsToGetApple('apple').then(data => {
      expect(data).toBe('apple');
    });
  })
  test('threeSecondsToGetApple()', () => {
    return index.methods.threeSecondsToGetApple('apple apple').then(data => {
      expect(data).toBe('apple apple');
    });
  })
  test('numFruit() - 1', async () => {
    // await expect(index.methods.numFruit('banana')).toBe('3-banana');
    await expect(index.methods.numFruit('banana')).resolves.toBe('3-banana');
  });
  test('numFruit() - 2', async () => {
    const data = await index.methods.numFruit('orange');
    expect(data).toBe('3-orange');
  });
});
