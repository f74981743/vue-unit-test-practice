import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
});
