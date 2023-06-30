import { withInstallFunction } from '@komi-ui/utils'

import Message from './src/method'

export const KiMessage = withInstallFunction(Message, '$message')
export default KiMessage

export * from './src/message'
