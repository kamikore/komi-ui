interface BOUNDING {
    top:number,
    bottom:number,
    left:number,
    right:number
}

// 获取元素距离视口的距离
export function getBounding(elm:Element):BOUNDING{
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const rect:DOMRect = elm.getBoundingClientRect()

    const top = rect.top 
    const left = rect.left
    
    const bottom = viewportHeight - rect.bottom
    const right = viewportWidth - rect.left
    return {
        top,
        bottom,
        left,
        right
    }
}