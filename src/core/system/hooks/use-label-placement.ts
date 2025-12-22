import { useProviderContext } from '@/core'
import { useMemo } from 'react'

export const useLabelPlacement = (props: {
  labelPlacement?: 'inside' | 'outside' | 'outside-left' | 'outside-top'
  label?: React.ReactNode
}) => {
  const globalContext = useProviderContext()
  const globalLabelPlacement = globalContext?.labelPlacement

  return useMemo(() => {
    const labelPlacement =
      props.labelPlacement ?? globalLabelPlacement ?? 'inside'

    if (labelPlacement === 'inside' && !props.label) {
      return 'outside'
    }

    return labelPlacement
  }, [props.labelPlacement, globalLabelPlacement, props.label])
}
