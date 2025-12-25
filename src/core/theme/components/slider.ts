import type { VariantProps } from 'tailwind-variants'

import { tv } from '../utils/tv'

/**
 * Slider wrapper **Tailwind Variants** component
 *
 * @example
 * ```js
 * const slots = slider()
 *
 * <View className={slots.base()}>
 *  <View className={slots.labelWrapper()}>
 *    <Text className={slots.label()}>Label</Te>
 *    <Text className={slots.value()}>Value</Text>
 *  </View>
 *  <View className={slots.trackWrapper()}>
 *      <View className={slots.startContent()}>Start Content</View>
 *      <View className={slots.track()}>
 *         <View className={slots.filler()} />
 *         <View className={slots.step()} />
 *         <View className={slots.thumb()} />
 *         <Text className={slots.mark()}>Mark</Text>
 *      </View>
 *     <View className={slots.endContent()}>End Content</View>
 *   </View>
 * </View>
 * ```
 */
const slider = tv({
  slots: {
    base: 'flex w-full flex-col gap-1',
    labelWrapper: 'w-full items-center justify-between',
    label: 'text-foreground',
    value: 'text-foreground',
    step: ['h-1.5', 'w-1.5', 'absolute', 'rounded-full'],
    mark: ['absolute', 'text-small', 'text-foreground'],
    trackWrapper: 'relative gap-2',
    track: ['flex-1', 'relative', 'rounded-full', 'bg-default-300/50'],
    filler: 'absolute h-full',
    thumbWrapper: ['flex-row', 'absolute', 'justify-center', 'items-center'],
    thumbHitbox: ['size-11', 'z-10', 'absolute', 'pointer-events-auto'],
    thumb: 'bg-background',
    startContent: [],
    endContent: [],
  },
  variants: {
    size: {
      sm: {
        label: 'text-small',
        value: 'text-small',
        thumbWrapper: 'h-5 w-5',
        thumb: 'h-4 w-4',
        step: 'bg-default-200',
      },
      md: {
        label: 'text-small',
        value: 'text-small',
        thumbWrapper: 'h-6 w-6',
        thumb: 'h-5 w-5',
      },
      lg: {
        step: 'h-2 w-2',
        label: 'text-medium',
        value: 'text-medium',
        mark: 'mt-2',
        thumbWrapper: 'h-7 w-7',
        thumb: 'h-5 w-5',
      },
    },
    radius: {
      none: {
        thumbWrapper: 'rounded-none',
        thumb: 'rounded-none',
      },
      sm: {
        thumbWrapper: 'rounded-[calc(theme(borderRadius.small)/2)]',
        thumb: 'rounded-[calc(theme(borderRadius.small)/3)]',
      },
      md: {
        thumbWrapper: 'rounded-[calc(theme(borderRadius.medium)/2)]',
        thumb: 'rounded-[calc(theme(borderRadius.medium)/3)]',
      },
      lg: {
        thumbWrapper: 'rounded-[calc(theme(borderRadius.large)/1.5)]',
        thumb: 'rounded-[calc(theme(borderRadius.large)/2)]',
      },
      full: {
        thumbWrapper: 'rounded-full',
        thumb: 'rounded-full',
      },
    },
    color: {
      foreground: {
        filler: 'bg-foreground',
        thumbWrapper: 'bg-foreground',
      },
      primary: {
        filler: 'bg-primary',
        thumbWrapper: 'bg-primary',
      },
      secondary: {
        filler: 'bg-secondary',
        thumbWrapper: 'bg-secondary',
      },
      success: {
        filler: 'bg-success',
        thumbWrapper: 'bg-success',
      },
      warning: {
        filler: 'bg-warning',
        thumbWrapper: 'bg-warning',
      },
      danger: {
        filler: 'bg-danger',
        thumbWrapper: 'bg-danger',
      },
    },
    isDisabled: {
      true: {
        base: 'opacity-disabled',
      },
    },
    hasMarks: {
      true: {
        base: 'mb-5',
      },
    },
    hideValue: {
      true: { value: 'sr-only' },
    },
    hideThumb: {
      true: {
        thumbWrapper: 'sr-only opacity-0',
      },
    },
    hasSingleThumb: {
      true: {},
      false: {},
    },
    isInRange: {
      true: {
        step: 'bg-background/50',
        mark: 'opacity-100',
      },
      false: {
        step: 'bg-default-300/50',
        mark: 'opacity-50',
      },
    },
    isVertical: {
      true: {
        base: 'h-full w-auto flex-col-reverse items-center',
        trackWrapper: 'h-full flex-col items-center justify-center',
        filler: 'h-auto w-full',
        thumbWrapper: 'left-1/2 -translate-x-1/2 translate-y-1/2',
        track: 'h-full border-y-transparent',
        labelWrapper: 'flex-col items-center justify-center',
        step: ['left-1/2', '-translate-x-1/2', 'translate-y-1/2'],
        mark: [
          'left-1/2',
          'ml-1',
          'translate-x-1/2',
          'translate-y-1/2',
          'w-10',
        ],
      },
      false: {
        thumbWrapper: 'top-1/2 -translate-x-1/2 -translate-y-1/2',
        trackWrapper: 'flex-row items-center',
        track: 'border-x-transparent',
        labelWrapper: 'flex-row',
        step: ['top-1/2', '-translate-x-1/2', '-translate-y-1/2'],
        mark: ['top-1/2', 'mt-1', '-translate-x-1/2', 'translate-y-1/2'],
      },
    },
    disableAnimation: {
      true: {},
      false: {
        thumb: 'transition-all motion-reduce:transition-none',
        mark: 'duration-250 transition-opacity motion-reduce:transition-none',
      },
    },
    disableThumbScale: {
      true: {},
      false: {},
    },
  },
  compoundVariants: [
    // size="sm" || size="md"
    {
      size: ['sm', 'md'],
      class: {
        thumbWrapper: 'shadow-small',
      },
    },
    // size && color
    {
      size: 'sm',
      color: 'foreground',
      isInRange: true,
      class: {
        step: 'bg-foreground',
      },
    },
    {
      size: 'sm',
      color: 'primary',
      isInRange: true,
      class: {
        step: 'bg-primary',
      },
    },
    {
      size: 'sm',
      color: 'secondary',
      isInRange: true,

      class: {
        step: 'bg-secondary',
      },
    },
    {
      size: 'sm',
      color: 'success',
      isInRange: true,
      class: {
        step: 'bg-success',
      },
    },
    {
      size: 'sm',
      color: 'warning',
      isInRange: true,
      class: {
        step: 'bg-warning',
      },
    },
    {
      size: 'sm',
      color: 'danger',
      isInRange: true,
      class: {
        step: 'bg-danger',
      },
    },
    // size && !isVertical
    {
      size: 'sm',
      isVertical: false,
      class: {
        track:
          'my-[calc((theme(spacing.5)-theme(spacing.1))/2)] h-1 border-x-[calc(theme(spacing.5)/2)]',
      },
    },
    {
      size: 'md',
      isVertical: false,
      class: {
        track:
          'my-[calc((theme(spacing.6)-theme(spacing.3))/2)] h-3 border-x-[calc(theme(spacing.6)/2)]',
      },
    },
    {
      size: 'lg',
      isVertical: false,
      class: {
        track:
          'my-[calc((theme(spacing.7)-theme(spacing.5))/2)] h-7 border-x-[calc(theme(spacing.7)/2)]',
      },
    },
    // size && isVertical
    {
      size: 'sm',
      isVertical: true,
      class: {
        track:
          'mx-[calc((theme(spacing.5)-theme(spacing.1))/2)] w-1 border-y-[calc(theme(spacing.5)/2)]',
      },
    },
    {
      size: 'md',
      isVertical: true,
      class: {
        track:
          'mx-[calc((theme(spacing.6)-theme(spacing.3))/2)] w-3 border-y-[calc(theme(spacing.6)/2)]',
      },
    },
    {
      size: 'lg',
      isVertical: true,
      class: {
        track:
          'mx-[calc((theme(spacing.7)-theme(spacing.5))/2)] w-7 border-y-[calc(theme(spacing.7)/2)]',
      },
    },
    // color && !isVertical && hasSingleThumb
    {
      color: 'foreground',
      isVertical: false,
      hasSingleThumb: true,
      class: {
        track: 'border-l-foreground',
      },
    },
    {
      color: 'primary',
      isVertical: false,
      hasSingleThumb: true,
      class: {
        track: 'border-l-primary',
      },
    },
    {
      color: 'secondary',
      isVertical: false,
      hasSingleThumb: true,
      class: {
        track: 'border-l-secondary',
      },
    },
    {
      color: 'success',
      isVertical: false,
      hasSingleThumb: true,
      class: {
        track: 'border-l-success',
      },
    },
    {
      color: 'warning',
      isVertical: false,
      hasSingleThumb: true,
      class: {
        track: 'border-l-warning',
      },
    },
    {
      color: 'danger',
      isVertical: false,
      hasSingleThumb: true,
      class: {
        track: 'border-l-danger',
      },
    },
    // color && isVertical && hasSingleThumb
    {
      color: 'foreground',
      isVertical: true,
      hasSingleThumb: true,
      class: {
        track: 'border-b-foreground',
      },
    },
    {
      color: 'primary',
      isVertical: true,
      hasSingleThumb: true,
      class: {
        track: 'border-b-primary',
      },
    },
    {
      color: 'secondary',
      isVertical: true,
      hasSingleThumb: true,
      class: {
        track: 'border-b-secondary',
      },
    },
    {
      color: 'success',
      isVertical: true,
      hasSingleThumb: true,
      class: {
        track: 'border-b-success',
      },
    },
    {
      color: 'warning',
      isVertical: true,
      hasSingleThumb: true,
      class: {
        track: 'border-b-warning',
      },
    },
    {
      color: 'danger',
      isVertical: true,
      hasSingleThumb: true,
      class: {
        track: 'border-b-danger',
      },
    },
    // isVertical && !hasSingleThumb
    {
      isVertical: true,
      hasSingleThumb: false,
      class: {
        track: 'border-b-transparent',
      },
    },
    // !isVertical && !hasSingleThumb
    {
      isVertical: false,
      hasSingleThumb: false,
      class: {
        track: 'border-l-transparent',
      },
    },
  ],
  defaultVariants: {
    size: 'md',
    color: 'primary',
    radius: 'full',
    hideValue: false,
    hideThumb: false,
    isDisabled: false,
    disableThumbScale: false,
    showOutline: false,
  },
})

export type SliderVariantProps = VariantProps<typeof slider>
export type SliderSlots = keyof ReturnType<typeof slider>

export { slider }
