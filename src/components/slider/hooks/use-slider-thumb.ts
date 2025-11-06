import type { PropGetter, RNMerloUIProps } from '@/core/system-rsc'
import type { SliderVariantProps } from '@/core/theme'
import { type ReactRef } from '@/utilities'
import type { AriaSliderThumbProps } from '@react-aria/slider'
import { mergeProps } from '@react-aria/utils'
import { useSliderThumb as useAriaSliderThumb } from '@react-native-aria/slider'
import type { SliderState } from '@react-stately/slider'
import { type RefObject, useRef } from 'react'
import { type View, type ViewStyle } from 'react-native'

import type { UseSliderProps } from './use-slider'

interface Props extends RNMerloUIProps {
  /**
   * Ref to the React Native component.
   */
  ref?: ReactRef<View | null>
  /**
   * slider state, created via `useSliderState`.
   */
  state: SliderState
  /**
   * A ref to the track element.
   */
  trackRef: RefObject<View>
  /**
   * @internal
   */
  trackLayout: {
    width: number
    height: number
  }
  /**
   * @internal
   */
  isVertical: boolean
  /**
   * @internal
   */
  formatOptions?: Intl.NumberFormatOptions
  /**
   * Function to render the thumb. It can be used to add a tooltip or custom icon.
   */
  renderThumb?: UseSliderProps['renderThumb']
  thumbWrapperClassName?: string
  thumbClassName?: string
  thumbHitboxClassName?: string
}

export type UseSliderThumbProps = Props &
  AriaSliderThumbProps &
  SliderVariantProps

export const useSliderThumb = (props: UseSliderThumbProps) => {
  const {
    state,
    index = 0,
    name,
    trackLayout,
    thumbWrapperClassName,
    thumbClassName,
    thumbHitboxClassName,
    isVertical,
    disableAnimation,
    disableThumbScale,
    renderThumb,
    ...otherProps
  } = props

  const inputRef = useRef<View>(null)

  const { thumbProps } = useAriaSliderThumb(
    {
      index,
      trackLayout,
      inputRef,
      name,
      ...otherProps,
    },
    state
  )

  const thumbWrapperStyles: ViewStyle = {
    bottom: isVertical ? `${state.getThumbPercent(index) * 100}%` : undefined,
    left: !isVertical ? `${state.getThumbPercent(index) * 100}%` : '50%',
    zIndex: state.focusedThumb === index ? 10 : 1,
  }

  const getWrapperThumbProps: PropGetter = (props = {}) => {
    return {
      role: 'slider',
      ref: inputRef,
      ...mergeProps(thumbProps, otherProps, {
        onTouchStart: () => state.setFocusedThumb(index),
      }),
      className: thumbWrapperClassName,
      style: thumbWrapperStyles,
      ...props,
    }
  }

  const thumbStyles = {
    transform: [
      {
        scale:
          state.isThumbDragging(index) &&
          !disableThumbScale &&
          !disableAnimation
            ? 0.8
            : 1,
      },
    ],
  }

  const getThumbProps: PropGetter = (props = {}) => {
    return {
      className: thumbClassName,
      style: thumbStyles,
      ...props,
    }
  }

  return {
    index,
    getWrapperThumbProps,
    getThumbProps,
    renderThumb,
    thumbHitboxClassName,
  }
}
