import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import TextField from '@/components/TextField.vue'
import { Field , configure, defineRule} from 'vee-validate'
import flushPromises from 'flush-promises'
import { required } from '@vee-validate/rules'

describe('TextField.vue', () => {

  defineRule('required', required);

  it('show error message when modelValue is empty string and rules is set to required', async () => {
    const wrapper = mount(TextField, {
      props: { modelValue: '' }
    })
    const inputField = wrapper.find('input')

    await inputField.setValue('')
    await wrapper.vm.$nextTick()
    await flushPromises()

    const errorMessage = wrapper.find('.mt-error')
    console.log('errorMessage', { m: errorMessage.text() });
    // expect('')
    expect(errorMessage.text()).to.contain('first name is not valid.')
  })
})
