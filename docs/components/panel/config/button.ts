const TYPE = ['default','primary']
import {COMPONENTSIZES} from '@komi-ui/utils'

export const buttonPanelConfig = {
    name: 'ki-button',
    example: 'button/panel-example',
    props: {
        click: {
          placeholder:  "() => {}",
          type: Function,
          description: 'Function called when button is clicked.',
        },
        disabled: {
          value: false,
          type: Boolean,
          description: 'Indicates that the button is disabled.',
        },
        type: {
          value: 'default',
          options: TYPE,
          type: 'Enum',
          description: 'Defines the kind of a button.',
        },
        size: {
          value: 'default',
          options: COMPONENTSIZES,
          type: 'Enum',
          description: 'Defines the size of the button.',
        },
        circle: {
          value: false,
          type: Boolean,
          description: 'Indicates that the button is circle.',
        }
    },
}

