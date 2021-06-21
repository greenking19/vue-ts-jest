import { mount } from '@vue/test-utils'
import Green from './Green.vue'
test('test Green component', async () => {
    const wrapper = mount(Green as any)

    // Assert the rendered text of the component
    expect(wrapper.find('#msg').text()).toBe('0')
    await wrapper.find('#test-btn').trigger('click')
    expect(wrapper.find('#msg').text()).toBe('1')
})