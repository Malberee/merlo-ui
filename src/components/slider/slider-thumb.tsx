import { renderFn } from '@/utilities'
import React, { forwardRef } from 'react'
import { View } from 'react-native'

import { type UseSliderThumbProps, useSliderThumb } from './hooks'

export interface SliderThumbProps extends UseSliderThumbProps {}

const SliderThumb = forwardRef<View, SliderThumbProps>((props, ref) => {
  const {
    getWrapperThumbProps,
    getThumbProps,
    renderThumb,
    index,
    thumbHitboxClassName,
  } = useSliderThumb({
    ...props,
    ref,
  })

  const thumbWrapperProps = {
    ...getWrapperThumbProps(),
    index,
    children: (
      <>
        <View {...getThumbProps()} />
        <View className={thumbHitboxClassName} />
      </>
    ),
  }

  const content = renderFn({
    Component: View,
    props: thumbWrapperProps,
    renderCustom: renderThumb,
  }) as React.ReactElement

  return content
})

SliderThumb.displayName = 'MerloUI.SliderThumb'

export default SliderThumb
