import { createContext } from '@/utilities'

export type ProviderContextProps = {
  /**
   * Whether to disable animations in the whole application.
   *
   * @default false
   */
  disableAnimation?: boolean
  /**
   * Position where the label should appear.
   *
   * @default undefined
   */
  labelPlacement?:
    | 'inside'
    | 'outside'
    | 'outside-left'
    | 'outside-top'
    | undefined
  /**
   * Whether to disable the ripple effect in the whole application.
   * If `disableAnimation` is set to `true`, this prop will be ignored.
   *
   * @default false
   */
  disableRipple?: boolean
}

export const [ProviderContext, useProviderContext] =
  createContext<ProviderContextProps>({
    name: 'ProviderContext',
    strict: false,
  })
