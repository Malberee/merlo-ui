import type { VariantProps } from 'tailwind-variants'

import { tv } from '../utils/tv'

/**
 * Progress **Tailwind Variants** component
 *
 * @example
 * ```js
 * const { base, labelWrapper, label, value, track, indicator } = progress({...})
 *
 * <View className={base()}>
 *   <View className={labelWrapper()}>
 *      <Text className={label()}>{label}</Text>
 *      <Text className={value()}>{value}</Text>
 *   </View>
 *   <View className={track()}>
 *     <View className={indicator()} style={{width: `${value}%`}} />
 *   </View>
 * </View>
 * ```
 */
const progress = tv({
  slots: {
    base: 'flex w-full flex-col gap-2',
    label: 'text-foreground',
    labelWrapper: 'flex-row justify-between',
    value: 'text-foreground',
    track: 'bg-default-300/50 z-0 overflow-hidden',
    indicator: 'h-full',
  },
  variants: {
    color: {
      default: {
        indicator: 'bg-default-400',
      },
      primary: {
        indicator: 'bg-primary',
      },
      secondary: {
        indicator: 'bg-secondary',
      },
      success: {
        indicator: 'bg-success',
      },
      warning: {
        indicator: 'bg-warning',
      },
      danger: {
        indicator: 'bg-danger',
      },
    },
    size: {
      sm: {
        label: 'text-small',
        value: 'text-small',
        track: 'h-1',
      },
      md: {
        label: 'text-medium',
        value: 'text-medium',
        track: 'h-3',
      },
      lg: {
        label: 'text-large',
        value: 'text-large',
        track: 'h-5',
      },
    },
    radius: {
      none: {
        track: 'rounded-none',
        indicator: 'rounded-none',
      },
      sm: {
        track: 'rounded-small',
        indicator: 'rounded-small',
      },
      md: {
        track: 'rounded-medium',
        indicator: 'rounded-medium',
      },
      lg: {
        track: 'rounded-large',
        indicator: 'rounded-large',
      },
      full: {
        track: 'rounded-full',
        indicator: 'rounded-full',
      },
    },
    isStriped: {
      true: {},
    },
    isIndeterminate: {
      true: {
        indicator: ['absolute', 'w-full'],
      },
    },
    isDisabled: {
      true: {
        base: 'opacity-disabled cursor-not-allowed',
      },
    },
    disableAnimation: {
      true: {},
      false: {
        indicator: 'transition-transform !duration-500',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
    radius: 'full',
    isStriped: false,
    isIndeterminate: false,
    isDisabled: false,
  },
})

/**
 * CircularProgress **Tailwind Variants** component
 *
 * @example
 * ```js
 * const { base, svgWrapper, svg, indicator, value, label } = circularProgress({...})
 *
 * <View className={base()}>
 *   <View className={svgWrapper()}>
 *      <Svg className={svg()}>
 *        <Circle className={track()} />
 *        <Circle className={indicator()} />
 *      </Svg>
 *      <Text className={value()}>{value}</Text>
 *   </View>
 *    <Text className={label()}>{label}</Text>
 * </View>
 * ```
 */
const circularProgress = tv({
  slots: {
    base: 'flex max-w-fit flex-col items-center justify-center gap-1',
    label: 'text-foreground',
    svgWrapper: 'relative flex flex-row items-center justify-center',
    svg: 'relative z-0 overflow-hidden',
    track: 'text-default-300/50 h-full',
    indicator: 'h-full',
    value: 'text-foreground absolute font-normal',
  },
  variants: {
    color: {
      default: {
        svg: 'text-default-400',
      },
      primary: {
        svg: 'text-primary',
      },
      secondary: {
        svg: 'text-secondary',
      },
      success: {
        svg: 'text-success',
      },
      warning: {
        svg: 'text-warning',
      },
      danger: {
        svg: 'text-danger',
      },
    },
    size: {
      sm: {
        svg: 'h-8 w-8',
        label: 'text-small',
        value: 'text-[0.5rem]',
      },
      md: {
        svg: 'h-10 w-10',
        label: 'text-small',
        value: 'text-[0.55rem]',
      },
      lg: {
        svg: 'h-12 w-12',
        label: 'text-medium',
        value: 'text-[0.6rem]',
      },
    },
    isIndeterminate: {
      true: {
        svg: 'animate-spinner-ease-spin',
      },
    },
    isDisabled: {
      true: {
        base: 'opacity-disabled cursor-not-allowed',
      },
    },
    disableAnimation: {
      true: {},
      false: {
        indicator: 'transition-all !duration-500',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
    isDisabled: false,
  },
  compoundVariants: [
    // disableAnimation && !isIndeterminate
    {
      disableAnimation: true,
      isIndeterminate: false,
      class: {
        svg: '!transition-none motion-reduce:transition-none',
      },
    },
  ],
})

export type ProgressVariantProps = VariantProps<typeof progress>
export type ProgressSlots = keyof ReturnType<typeof progress>
export type CircularProgressVariantProps = VariantProps<typeof circularProgress>
export type CircularProgressSlots = keyof ReturnType<typeof circularProgress>

export { progress, circularProgress }
