import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import TextField from '@/components/TextField.vue'
import { Field } from 'vee-validate'
import flushPromises from 'flush-promises'

describe('TextField.vue', () => {
  it('show error message when modelValue is empty string and rules is set to required', async () => {
    const wrapper = mount(TextField, {
      props: { modelValue: '' }
    })
    const inputField = wrapper.find('input')

    await inputField.setValue('')
    await inputField.trigger('change')
    await flushPromises()

    const errorMessage = wrapper.find('.mt-error')
    console.log('errorMessage', errorMessage.text());
    // expect('')
  })
})
