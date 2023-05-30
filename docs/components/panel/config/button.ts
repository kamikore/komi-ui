const TYPE = ['default','primary','success']
const SIZE = ['default','small','large']

export const buttonPanelConfig = {
    componentName: 'KiButton',
    example: 'button/basic',
    props: {
        children: {
          value: 'Hello',
          type: HTMLElement,
          description: `Visible label.`,
        },
        onClick: {
          value: '() => alert("click")',
          type: Function,
          description: `Function called when button is clicked.`,
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
          description: 'Defines the kind (purpose) of a button.',
        },
        size: {
          value: 'default',
          options: SIZE,
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

