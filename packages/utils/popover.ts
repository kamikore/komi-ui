// 计算组件在浏览器窗口中的位置
export function calcPopXY(elm:HTMLElement, placement:String):{top:number,left:number}{
    const {offsetLeft, offsetTop, offsetWidth, offsetHeight} = elm
    let top:number = 0,left:number = 0
    switch(placement) {
        case 'bottom': 
            top = offsetTop + offsetHeight + 4
            left = offsetLeft + offsetWidth/2
            break
        case 'bottom-start':
            break
        case 'bottom-end':
            break
    }
    return {top,left}
}


export function calcPopWidth(elm:HTMLElement):String {
    const {offsetWidth} = elm
    return `${offsetWidth*(4/3)}px`
}


export function arrowTransform(elm:HTMLElement, placement:String):String {
    const { offsetWidth, offsetHeight} = elm
    console.log("arrow",offsetHeight,offsetWidth)
    let transform = ''
    switch(placement) {
        case 'bottom': 
        case 'bottom-start':
        case 'bottom-end':
            transform = `translateY(${-offsetHeight/2}px)`
            break
        case 'top':
        case 'top-start':
        case 'top-end':
            transform = `translateY(${offsetHeight/2}px)`
            break
        case 'right':
        case 'right-start':
        case 'right-end':
            transform = `translateX(${-offsetWidth/2}px)`
            break
        case 'left':
        case 'left-start':
        case 'left-end':
            transform = `translateX(${offsetWidth/2}px)`
            break
    }

    return transform
}