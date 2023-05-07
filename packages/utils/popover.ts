import {getBounding} from './DOM/getBounding'

interface POPSTYLE {
    position: string,
    inset: string,
    transform: string
}

// 计算组件在浏览器窗口中的位置
export function getPopStyle(triggerElm:HTMLElement, placement:string, showArrow:boolean):POPSTYLE{
    const {offsetLeft, offsetTop, offsetWidth, offsetHeight} = triggerElm
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

export function calcPopWidth(elm:HTMLElement):string {
    const {offsetWidth} = elm
    return `${offsetWidth*(4/3)}px`
}

export function popIsOverflow(triggerElm:Element,popWidth:number, popHeight:number,placement:string):boolean {
    const pos = placement.split('-')[0]
    const bounding = getBounding(triggerElm)
    console.log(bounding, popHeight, popWidth);
    

    switch(pos) {
        case 'top':
        case 'bottom':
            if(bounding[pos] < popHeight) return true
            break
        case 'left':
        case 'right':
            if(bounding[pos] < popWidth) return true
            break
        default:
            return false
    }
}

export function togglePlacement(placement:string):string {
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


export function arrowTransform(popWidth:number,popHeight:number, placement:string):string {
    let transform = ''
    switch(placement) {
        case 'bottom': 
        case 'bottom-start':
        case 'bottom-end':
            transform = `translateY(${-popHeight/2}px)`
            break
        case 'top':
        case 'top-start':
        case 'top-end':
            transform = `translateY(${popHeight/2}px)`
            break
        case 'right':
        case 'right-start':
        case 'right-end':
            transform = `translateX(${-popWidth/2}px)`
            break
        case 'left':
        case 'left-start':
        case 'left-end':
            transform = `translateX(${popWidth/2}px)`
            break
    }

    return transform
}