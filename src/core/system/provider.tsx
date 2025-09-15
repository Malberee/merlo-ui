import { type FC, type ReactNode, useMemo } from 'react'

import { ProviderContext, type ProviderContextProps } from './provider-context'

export interface MerloUIProviderProps extends ProviderContextProps {
  children: ReactNode
}

export const MerloUIProvider: FC<MerloUIProviderProps> = ({
  children,
  disableRipple,
  disableAnimation,
}) => {
  const context = useMemo<ProviderContextProps>(
    () => ({ disableRipple, disableAnimation }),
    [disableAnimation, disableRipple]
  )
  return <ProviderContext value={context}>{children}</ProviderContext>
}
