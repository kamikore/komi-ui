interface BOUNDING {
    top:number,
    bottom:number,
    left:number,
    right:number
}

/**
 * 获取元素距离视口的距离，不包括滚动条宽高
 * @param elm 目标元素
 * @returns {BOUNDING} 元素距离视口的top,bottom,left,right
 */
export function getBounding(elm:Element):BOUNDING{
    // 可视区窗口的宽高
    const viewportWidth = document.documentElement.clientWidth
    const viewportHeight = document.documentElement.clientHeight

    const rect:DOMRect = elm.getBoundingClientRect()

    const top = rect.top 
    const left = rect.left
    
    const bottom = viewportHeight - rect.bottom
    const right = viewportWidth - rect.right

    return {
        top,
        bottom,
        left,
        right
    }
}