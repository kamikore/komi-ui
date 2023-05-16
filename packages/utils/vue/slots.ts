import { defineComponent} from "vue"
export type CallFun = (vnodeElm: HTMLElement) => void
export interface RenderCallbackObj {
    /**
     * 自定义mounted回调
     */
    mountedCallFun?: CallFun
    /**
     * 自定义updated回调
     */
    updatedCallFun?: CallFun
    /**
     * 自定义unmounted回调
     */
    unmountedCallFun?: CallFun
  }

export const renderSlot = ({mountedCallFun, updatedCallFun, unmountedCallFun}: RenderCallbackObj ) => {
    return defineComponent({
      props: {
        vnode:null
      },
      mounted() {
        // this.$el代表当前vnode的dom对象
        mountedCallFun && mountedCallFun(this.$el)
      },
      updated() {
        updatedCallFun && updatedCallFun(this.$el)
      },
      unmounted() {
        unmountedCallFun && unmountedCallFun(this.$el)
      },
      render(props) {
        return props.vnode
      },
    })
  }
