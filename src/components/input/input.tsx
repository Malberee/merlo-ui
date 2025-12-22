import { CloseFilledIcon } from '@/utilities/shared-icons'
import { cssInterop } from 'nativewind'
import { forwardRef, useMemo } from 'react'
import { Pressable, Text, TextInput, View } from 'react-native'

import { type UseInputProps, useInput } from './hooks'

cssInterop(CloseFilledIcon, {
  className: {
    target: false,
    nativeStyleToProp: {
      color: true,
    },
  },
})

export interface InputProps extends Omit<UseInputProps, 'isMultiline'> {}

const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  const {
    slots,
    classNames,
    label,
    description,
    isClearable,
    startContent,
    endContent,
    hasHelper,
    isOutsideLeft,
    isOutsideTop,
    shouldLabelBeOutside,
    errorMessage,
    isUnderlined,
    isInvalid,
    getBaseProps,
    getLabelProps,
    getInputProps,
    getInnerWrapperProps,
    getInputWrapperProps,
    getMainWrapperProps,
    getHelperWrapperProps,
    getDescriptionProps,
    getErrorMessageProps,
    getClearButtonProps,
    getUnderlineProps,
  } = useInput({
    ...props,
    ref,
  })

  const labelContent = label ? <Text {...getLabelProps()}>{label}</Text> : null

  const end = useMemo(() => {
    if (isClearable) {
      return (
        <Pressable {...getClearButtonProps()}>
          {endContent || (
            <CloseFilledIcon
              className={slots.input({ class: classNames?.input })}
            />
          )}
        </Pressable>
      )
    }

    return endContent
  }, [isClearable, getClearButtonProps])

  const helperWrapper = () => {
    if (!hasHelper) return null

    return (
      <View {...getHelperWrapperProps()}>
        {isInvalid && errorMessage ? (
          <Text {...getErrorMessageProps()}>{errorMessage}</Text>
        ) : description ? (
          <Text {...getDescriptionProps()}>{description}</Text>
        ) : null}
      </View>
    )
  }

  const innerWrapper = () => {
    return (
      <View {...getInnerWrapperProps()}>
        {startContent}
        <TextInput {...getInputProps()} />
        {end}
      </View>
    )
  }

  const mainWrapper = () => {
    if (shouldLabelBeOutside) {
      return (
        <View {...getMainWrapperProps()}>
          <View {...getInputWrapperProps()}>
            {!isOutsideLeft && !isOutsideTop ? (
              <Text {...getLabelProps()}>{labelContent}</Text>
            ) : null}
            {innerWrapper()}
          </View>

          {isUnderlined && <View {...getUnderlineProps()} />}
          {helperWrapper()}
        </View>
      )
    }

    return (
      <>
        <View {...getInputWrapperProps()}>
          <Text {...getLabelProps()}>{labelContent}</Text>
          {innerWrapper()}
        </View>
        {isUnderlined && <View {...getUnderlineProps()} />}
        {helperWrapper()}
      </>
    )
  }

  return (
    <Pressable {...getBaseProps()}>
      {isOutsideLeft || isOutsideTop ? (
        <Text {...getLabelProps()}>{labelContent}</Text>
      ) : null}
      {mainWrapper()}
    </Pressable>
  )
})

Input.displayName = 'MerloUI.Input'

export default Input
