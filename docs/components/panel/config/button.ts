const TYPE = ['default','primary']
import {COMPONENTSIZES} from '@komi-ui/utils'

export const buttonPanelConfig = {
    name: 'ki-button',
    example: 'button/panel-example',
    props: {
        children: {
            type: Element,
            description: 'The Element displayed next to the button.'
        },
        click: {
          placeholder:  "() => {}",
          type: Function,
          description: 'Function called when button is clicked.',
        },
        type: {
          default: 'default',
          options: TYPE,
          type: 'Enum',
          description: 'Defines the kind of a button.',
        },
        size: {
          default: 'default',
          options: COMPONENTSIZES,
          type: 'Enum',
          description: 'Defines the size of the button.',
        },
        loading: {
          default: false,
          type: Boolean,
          description: 'Indicates that the button is loading.',
        },
        disabled: {
          default: false,
          type: Boolean,
          description: 'Indicates that the button is disabled.',
        },
        round: {
          default: false,
          type: Boolean,
          description: 'Indicates that the button is round.',
        },
        circle: {
          default: false,
          type: Boolean,
          description: 'Indicates that the button is circle.',
        }
    },
}

