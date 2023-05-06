interface POPSTYLE {
    position: String,
    inset: String,
    transform: String
}

// 计算组件在浏览器窗口中的位置
export function getPopStyle(elm:HTMLElement, placement:String, showArrow:Boolean):POPSTYLE{
    const {offsetLeft, offsetTop, offsetWidth, offsetHeight} = elm
    // popover与triggerElm之间的间隔
    const gap = showArrow?8:4
    // start 偏移比例
    const startRate =  1/3
    // end 偏移比例
    const endRate = 2/3
    let top:number = 0,left:number = 0, transform:string = ''
    
    switch(placement) {
        case 'bottom': 
        case 'bottom-start':
        case 'bottom-end':
            transform = 'translateX(-50%)'
            break
        case 'top':
        case 'top-start':
        case 'top-end':
            transform = 'translate(-50%,-100%)'
            break
        case 'right':
        case 'right-start':
        case 'right-end':
            transform = 'translateY(-50%)'
            break
        case 'left':
        case 'left-start':
        case 'left-end':
            transform = 'translate(-100%,-50%)'
            break
    }

    switch(placement) {
        case 'bottom': 
            top = offsetTop + offsetHeight + gap
            left = offsetLeft + offsetWidth/2
            break
        case 'bottom-start':
            top = offsetTop + offsetHeight + gap
            left = offsetLeft + offsetWidth * startRate
            break
        case 'bottom-end':
            top = offsetTop + offsetHeight + gap
            left = offsetLeft + offsetWidth * endRate
            break
        case 'top':
            top = offsetTop - gap
            left = offsetLeft + offsetWidth/2
            break
        case 'top-start':
            top = offsetTop - gap
            left = offsetLeft + offsetWidth * startRate
            break
        case 'top-end':
            top = offsetTop - gap
            left = offsetLeft + offsetWidth * endRate
            break
        case 'right':
            top = offsetTop + offsetHeight/2
            left = offsetLeft + offsetWidth + gap
            break
        case 'right-start':
            top = offsetTop + offsetHeight * startRate
            left = offsetLeft + offsetWidth + gap
            break
        case 'right-end':
            top = offsetTop + offsetHeight * endRate
            left = offsetLeft + offsetWidth + gap
            break
        case 'left':
            top = offsetTop + offsetHeight/2
            left = offsetLeft - gap
            break
        case 'left-start':
            top = offsetTop + offsetHeight * startRate
            left = offsetLeft - gap
            break
        case 'left-end':
            top = offsetTop + offsetHeight * endRate
            left = offsetLeft - gap
            break
    }

    
    return {
        position: 'absolute',
        inset: `${top}px auto auto ${left}px`,
        transform,
    }
}

export function calcPopWidth(elm:HTMLElement):String {
    const {offsetWidth} = elm
    return `${offsetWidth*(4/3)}px`
}


export function togglePlacement(placement:string):string {
    const toggleMap = new Map<string,string>([
        ['top', 'bottom'],
        ['top-start', 'bottom-start'],
        ['top-end', 'bottom-end'],
        ['bottom', 'top'],
        ['bottom-start', 'top-start'],
        ['bottom-end', 'top-end'],
        ['left', 'right'],
        ['left-start', 'right-start'],
        ['left-end', 'right-end'],
        ['right', 'left'],
        ['right-start', 'left-start'],
        ['right-end', 'left-end'],
    ]);

    if(toggleMap.has(placement)) return toggleMap.get(placement)
    return placement
}


export function arrowTransform(elm:HTMLElement, placement:String):String {
    const { offsetWidth, offsetHeight} = elm
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