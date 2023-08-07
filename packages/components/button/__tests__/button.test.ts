import {markRaw} from 'vue'
import { mount, shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import KiButton from '../src/button.vue'
import { Loading, Search } from '@element-plus/icons-vue'

const AXIOM = 'Hello World !!'

describe('KiButton.vue', () => {
  it('create', () => {
    const wrapper = mount(KiButton,{
    	props: {
    		type: 'primary'
    	}
    })

    expect(wrapper.classes()).toContain('ki-button--primary')
  })


  it('render text', () => {
    const wrapper = mount(KiButton, {
      slots: {
        default: AXIOM
      }
    })

    expect(wrapper.text()).toEqual(AXIOM)
  })


  it('size', () => {
    const wrapper = mount(KiButton, {
      props: {
        size: 'large'
      }
    })

    expect(wrapper.classes()).toContain('ki-button--large')
  })



  it('icon', () => {
    const wrapper = mount(KiButton, {
      props: {
        icon: markRaw(Search)
      }
    })

    expect(wrapper.findComponent(Search).exists()).toBeTruthy()
  })


  it('round', () => {
    const wrapper = mount(KiButton, {
      props: {
        round: true
      }
    })
    expect(wrapper.classes()).toContain('is-round')
  })


  it('circle', () => {
     const wrapper = mount(KiButton, {
      props: {
        circle: true
      }
    })

    expect(wrapper.classes()).toContain('is-circle')
  })


  it('loading', () => {
    const wrapper = mount(KiButton, {
    	props: {
    		loading: true
    	}
    })

    expect(wrapper.classes()).toContain('is-loading')
    expect(wrapper.findComponent(Loading).exists()).toBeTruthy()
  })


  it('loading icon', () => {
    const wrapper = mount(KiButton,{
      props: {
        loading: true,
        loadingIcon: markRaw(Search)
      }
    })

    expect(wrapper.findComponent(Search).exists()).toBeTruthy()
  })


  // 加载状态时是禁用的
  it('loading implies disabled', async () => {
    const wrapper = mount(KiButton, {
      props: {
        loading: true,
      }
    })

    expect(wrapper.classes()).toContain('is-loading')

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })


  it('disabled', async () => {

    const wrapper = mount(KiButton, {
      props: {
        disabled: true
      }
    })

    expect(wrapper.classes()).toContain('is-disabled')

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })


  it('handle click', async () => {
    const wrapper = mount(KiButton, {
      slots: {
        default: AXIOM
      }
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })


  it('tag', () => {
    const link = 'https://kamikore.top/'
    const wrapper = mount(KiButton, {
      props: {
        tag: 'a',
        href: link
      },
      slots: {
        default: AXIOM
      }
    })

    expect(wrapper.text()).toEqual(AXIOM)
    expect(wrapper.element.nodeName).toBe('A')
    expect(wrapper.attributes('href')).toBe(link)
  })


})