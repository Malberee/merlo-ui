import { useProviderContext } from '@/core'
import type { PropGetter, RNMerloUIProps } from '@/core/system-rsc'
import {
  type RadioSlots,
  type RadioVariantProps,
  type SlotsToClasses,
  radio,
} from '@/core/theme'
import { mergeProps, mergeRefs } from '@react-aria/utils'
import { useRadio as useRadioAria } from '@react-native-aria/radio'
import type { AriaRadioProps } from '@react-types/radio'
import clsx from 'clsx'
import {
  type ReactNode,
  type Ref,
  useCallback,
  useId,
  useMemo,
  useRef,
} from 'react'
import { View } from 'react-native'

import { useRadioGroupContext } from '../radio-group-context'

interface Props extends RNMerloUIProps {
  /**
   * Ref to the React Native component.
   */
  ref?: Ref<View>
  /**
   * The label of the checkbox.
   */
  children?: ReactNode
  /**
   * The radio description text.
   */
  description?: string
  /**
   * Classname or List of classes to change the classNames of the element.
   * if `className` is passed, it will be added to the base slot.
   *
   * @example
   * ```ts
   * <Radio classNames={{
   *    base:"base-classes",
   *    wrapper: "wrapper-classes",
   *    control: "control-classes", // inner circle
   *    labelWrapper: "label-wrapper-classes", // this wraps the label and description
   *    label: "label-classes",
   *    description: "description-classes",
   * }} />
   * ```
   */
  classNames?: SlotsToClasses<RadioSlots>
  className?: string
}

export type UseRadioProps = Props &
  Omit<AriaRadioProps, keyof RadioVariantProps> &
  RadioVariantProps

export const useRadio = (props: UseRadioProps) => {
  const globalContext = useProviderContext()
  const groupContext = useRadioGroupContext()

  const {
    ref,
    classNames,
    id,
    value,
    children,
    description,
    size = groupContext?.size ?? 'md',
    color = groupContext?.color ?? 'primary',
    isDisabled = groupContext?.isDisabled ?? false,
    disableAnimation = groupContext?.disableAnimation ??
      globalContext?.disableAnimation ??
      false,
    className,
    ...otherProps
  } = props
  const inputRef = useRef(null)

  const labelId = useId()
  const descriptionId = useId()

  const isRequired = useMemo(
    () => groupContext.isRequired ?? false,
    [groupContext.isRequired]
  )

  const isInvalid = groupContext?.isInvalid

  const ariaRadioProps = useMemo(() => {
    const ariaDescribedBy =
      [otherProps['aria-describedby'], descriptionId]
        .filter(Boolean)
        .join(' ') || undefined

    return {
      id,
      isRequired,
      isDisabled,
      'aria-label': otherProps['aria-label'],
      'aria-labelledby': otherProps['aria-labelledby'] || labelId,
      'aria-describedby': ariaDescribedBy,
    }
  }, [
    id,
    isRequired,
    description,
    otherProps['aria-label'],
    otherProps['aria-labelledby'],
    otherProps['aria-describedby'],
    descriptionId,
  ])

  const { inputProps } = useRadioAria(
    {
      value,
      children: typeof children === 'function' ? true : children,
      ...ariaRadioProps,
    },
    groupContext.groupState,
    inputRef
  )

  const isSelected = groupContext.groupState?.selectedValue === value

  const slots = useMemo(
    () =>
      radio({
        color,
        size,
        isInvalid,
        isDisabled,
        disableAnimation,
      }),
    [color, size, isInvalid, isDisabled, disableAnimation]
  )

  const baseStyles = clsx(classNames?.base, className)

  const getBaseProps: PropGetter = useCallback(
    (props = {}) => ({
      ...props,
      ref: mergeRefs(inputRef, ref),
      className: slots.base({ class: baseStyles }),
      selected: isSelected,
      ...mergeProps(props, inputProps, otherProps),
    }),
    [slots, baseStyles, inputRef, otherProps, isSelected]
  )

  const getWrapperProps: PropGetter = useCallback(
    (props = {}) => ({
      ...props,
      className: clsx(
        slots.wrapper({ class: clsx(classNames?.wrapper, props.className) })
      ),
    }),
    [slots, classNames?.wrapper]
  )

  const getLabelProps: PropGetter = useCallback(
    (props = {}) => ({
      ...props,
      id: labelId,
      className: slots.label({ class: classNames?.label }),
    }),
    [slots, classNames?.label, labelId]
  )

  const getLabelWrapperProps: PropGetter = useCallback(
    (props = {}) => ({
      ...props,
      className: slots.labelWrapper({ class: classNames?.labelWrapper }),
    }),
    [slots, classNames?.labelWrapper]
  )

  const getControlProps: PropGetter = useCallback(
    (props = {}) => ({
      ...props,
      className: slots.control({ class: classNames?.control }),
    }),
    [slots, classNames?.control]
  )

  const getDescriptionProps: PropGetter = useCallback(
    (props = {}) => ({
      ...props,
      id: descriptionId,
      className: slots.description({ class: classNames?.description }),
    }),
    [slots, classNames?.description, descriptionId]
  )

  return {
    children,
    isSelected,
    isDisabled,
    isInvalid,
    description,
    getBaseProps,
    getWrapperProps,
    getLabelProps,
    getLabelWrapperProps,
    getControlProps,
    getDescriptionProps,
  }
}
