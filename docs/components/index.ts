import type {Component} from 'vue'
import VPDemo from './vp-demo.vue'
import VPPanel from './vp-panel.vue'



export const globalComps: [string, Component][] = [
    ['Demo', VPDemo],
    ['Panel',VPPanel],
]