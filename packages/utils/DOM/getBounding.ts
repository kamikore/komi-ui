interface BOUNDING {
    top:number,
    bottom:number,
    left:number,
    right:number
}

// 获取元素距离视口的距离
export function getBounding(elm:Element):BOUNDING{
    // 不包括滚动条宽高
    const viewportWidth = document.documentElement.offsetWidth
    const viewportHeight = document.documentElement.offsetHeight
    
    

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