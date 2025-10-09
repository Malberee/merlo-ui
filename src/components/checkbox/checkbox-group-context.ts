import { createContext } from '@/utilities'

import type { ContextType } from './hooks'

export const [CheckboxGroupProvider, useCheckboxGroupContext] =
  createContext<ContextType>({
    name: 'CheckboxGroupContext',
    strict: false,
  })
