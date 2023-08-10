import {ref, markRaw, nextTick} from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

import KiInput from '../src/input.vue'
import {CircleCloseFilled, View, Hide} from '@element-plus/icons-vue'


describe('KiInput.vue', () => {
  it('create', async () => {

    const wrapper = mount(KiInput,{
      props:{
        placeholder: '请输入内容',
        modelValue: 'Hello World!!'
      }
    })

    expect(wrapper.classes()).toContain('ki-input')

    const inputElm = wrapper.find('input')
    const nativeInput = inputElm.element

    expect(inputElm.exists()).toBe(true)
    // expect(nativeInput.placeholder).toMatchInlineSnapshot('请输入内容')
    //expect(nativeInput.value).toMatchInlineSnapshot('input')
    expect(nativeInput.placeholder).toBe('请输入内容')
    expect(nativeInput.value).toBe('Hello World!!')
  })


  it('modelValue should be updated', async () => {
    const wrapper = mount(KiInput, {
      props: {
        modelValue: 'initialText',
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
      }
    })

    await wrapper.find('input').setValue('test')
    expect(wrapper.props('modelValue')).toBe('test')
  })



  it('default to empty', () => {
    const wrapper = mount(KiInput)
    const inputElm = wrapper.find('input')
    expect(inputElm.element.value).toBe('')
  })


  it('size', () => {
    const wrapper = mount(KiInput, {
      props: {
        size: 'large'
      }
    })

    expect(wrapper.classes()).toContain('ki-input--large')
  })


  it('password', () => {
      const wrapper = mount(KiInput, {
        props: {
          type: 'password'
        }
      })

      const inputElm = wrapper.find('input')

      expect(inputElm.element.type).toBe('password')    
  })


  it('show password icon', async () => {

      const wrapper = mount(KiInput, {
        props: {
          type: 'password',
          showPassword: true,
          modelValue: '',
          'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
        }
      })
      const vm = wrapper.vm


      expect(wrapper.find('.ki-input__password').isVisible()).toBe(false)

      expect(wrapper.findComponent(Hide).exists()).toBe(false)
      expect(wrapper.findComponent(View).exists()).toBe(true)

      await wrapper.find('input').setValue('123456')
      expect(wrapper.props('modelValue')).toBe('123456')

      //expect(wrapper.find('.ki-input__password').isVisible()).toBe(true)
          
      //vm.$el.querySelector('.ki-input__password').click()
      //await nextTick()

      // click to show password
      await wrapper.find('.ki-input__password').trigger('click')

      expect(wrapper.findComponent(Hide).exists()).toBe(true)
      expect(wrapper.findComponent(View).exists()).toBe(false)

  })



  it('show clearable icon', async () => {

      const wrapper = mount(KiInput, {
        props: {
          modelValue: '',
          'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
          clearable: true
        }
      })

      expect(wrapper.findComponent(CircleCloseFilled).exists()).toBe(true)
      expect(wrapper.find('.ki-input__clear').isVisible()).toBe(false)

      await wrapper.find('input').setValue('Hello World!!')
      expect(wrapper.props('modelValue')).toBe('Hello World!!')

      //expect(wrapper.find('.ki-input__clear').isVisible()).toBe(true)
  })



  it('disabled', () => {

    const wrapper = mount(KiInput,{
      props: {
        disabled: true
      }
    })
    const inputElm = wrapper.find('input')

     expect(inputElm.element.disabled).not.toBeNull()
  })


  it('textarea', () => {
    const wrapper = mount(KiInput,{
      props:{
        type: 'textarea'
      }
    })
    expect(wrapper.classes('ki-textarea')).toBe(true)
  })


  it('rows', () => {
     const wrapper = mount(KiInput,{
      props:{
        type: 'textarea',
        rows: 3
      }
    })
    expect(wrapper.find('textarea').element.rows).toEqual(3)
  })


  it('textarea autoResize', async () => {
    const wrapper = mount(KiInput,{
      props: {
        type: 'textarea',
        autoResize: true
      }
    })

    expect(wrapper.find('textarea').exists()).toBe(true)
    expect(wrapper.find('.ki-textarea__autoResizeWrap').exists()).toBe(true)

  })

})



describe('Input Events', () => {
  // 模拟函数
  const handleFocus = vi.fn()
  const handleBlur = vi.fn()

  it('event:focus & blur', async () => {
    const wrapper = mount(KiInput,{
      props: {
        onFocus: handleFocus,
        onBlur: handleBlur
      }
    })

    const input = wrapper.find('input')

    await input.trigger('focus')
    expect(handleFocus).toBeCalled()

    await input.trigger('blur')
    expect(handleBlur).toBeCalled()
  })


  it('event:change', async () => {
    const content = ref('')

    const handleChange = (val: string) => {
      content.value = val
    }

    const wrapper = mount(KiInput, {
      props: {
        modelValue: content.value,
        onChange: handleChange
      }
    })

    const el = wrapper.find('input').element

    const simulateEvent = (text: string, event: string) => {
      el.value = text
      el.dispatchEvent(new Event(event))
    }

    // simplified test, component should emit change when native does
    simulateEvent('2', 'change')
    await nextTick()
    expect(content.value).toBe('2')
    simulateEvent('1', 'input')
    await nextTick()
    expect(content.value).toBe('2')
  })

  it('event:clear', async () => {
    const handleClear = vi.fn()

    const wrapper = mount(KiInput,{
      props: {
          clearable: true,
          modelValue: 'Hello World !!',
          'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e }),
          onClear: handleClear
      }
    })
    const nativeInput = wrapper.find('input').element
    const vm = wrapper.vm
    //const inputElm = wrapper.find('input')
    // focus to show clear button
    //await inputElm.trigger('focus')

    //vm.$el.querySelector('.ki-input__clear').click()

    expect(nativeInput.value).toBe('Hello World !!')
    
    await wrapper.find('.ki-input__clear').trigger('click')

    expect(handleClear).toBeCalled()

    expect(wrapper.props('modelValue')).toBe('')
    expect(nativeInput.value).toBe('')
   
  })

})