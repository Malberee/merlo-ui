import { createContext } from '@/utilities'

import type { ContextType } from './hooks'

export const [RadioGroupProvider, useRadioGroupContext] =
  createContext<ContextType>({
    name: 'RadioGroupContext',
    strict: false,
  })
