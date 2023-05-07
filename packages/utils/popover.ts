interface POPSTYLE {
    position: String,
    inset: String,
    transform: String
}

// 计算组件在浏览器窗口中的位置
export function getPopStyle(elm:HTMLElement, placement:String, showArrow:Boolean):POPSTYLE{
    const {offsetLeft, offsetTop, offsetWidth, offsetHeight} = elm
    // bottom-start, bottom-end
    const [pos, subPos] = placement.split('-')
    // popover与triggerElm之间的间隔
    const gap = showArrow?8:4
    // normal 偏移比例
    const normalRate = 1/2
    // start 偏移比例
    const startRate =  1/3
    // end 偏移比例
    const endRate = 2/3
    const offsetRate = subPos?(subPos === 'start'?startRate:endRate) : normalRate 
    let top:number = 0,left:number = 0, transform:string = ''
    
    switch(pos) {
        case 'bottom': 
            transform = 'translateX(-50%)'
            top = offsetTop + offsetHeight + gap
            left = offsetLeft + offsetWidth * offsetRate
            break
        case 'top':
            transform = 'translate(-50%,-100%)'
            top = offsetTop - gap
            left = offsetLeft + offsetWidth * offsetRate
            break
        case 'right':
            transform = 'translateY(-50%)'
            top = offsetTop + offsetHeight * offsetRate
            left = offsetLeft + offsetWidth + gap
            break
        case 'left':
            transform = 'translate(-100%,-50%)'
            top = offsetTop + offsetHeight * offsetRate
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

export function popIsOverflow(elm:Element,placement:String):Boolean {
    console.log(elm.getBoundingClientRect())
    console.log(placement.split('-'))
}

export function togglePlacement(placement:String):String {
    const toggleMap = new Map<string,string>([
        ['top', 'bottom'],
        ['bottom', 'top'],
        ['left', 'right'],
        ['right', 'left'],
    ]);
    const [pos, subPos] = placement.split('-')
    if(toggleMap.has(pos)) return subPos?`${toggleMap.get(pos)}-${subPos}`:toggleMap.get(placement)
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