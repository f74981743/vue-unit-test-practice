import { shallowMount } from '@vue/test-utils';
import SubmitButton from '@/components/SubmitButton.vue';

describe('SubmitButton.vue', () => {
  it('displays a non authorized message', () => {
    const msg = 'submit';
    const wrapper = shallowMount(SubmitButton, {
      propsData: {
        msg,
      },
    });
    expect(wrapper.find('span').text()).toBe('Not Authorized');
    expect(wrapper.find('button').text()).toBe('submit');
    expect(wrapper.props().isAdmin).toBe(false);
    expect(wrapper.props().msg).toBe('submit');
  });

  it('displays a authorized message', () => {
    const msg = 'submit';
    const wrapper = shallowMount(SubmitButton, {
      propsData: {
        msg,
        isAdmin: true,
      },
    });
    expect(wrapper.find('span').text()).toBe('Admin Privileges');
    expect(wrapper.find('button').text()).toBe('submit');
    expect(wrapper.props().isAdmin).toBe(true);
    expect(wrapper.props().msg).toBe('submit');
  });
});
