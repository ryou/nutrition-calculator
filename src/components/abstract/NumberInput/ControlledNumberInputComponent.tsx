import React from 'react'
import { TextInputComponent } from '../TextInput/TextInputComponent'
import { replaceFullWidthToHalfWidthAscii } from '../../../../shared/libs/replaceFullWidthToHalfWidthAscii'

type SpecificProps = {
  onValueChange: (value: string) => Promise<void>
}
type Props = SpecificProps &
  Omit<React.ComponentProps<typeof TextInputComponent>, keyof SpecificProps>
export const ControlledNumberInputComponent = ({
  onValueChange,
  onChange,
  onBlur,
  ...props
}: Props) => {
  const _onChange: React.ChangeEventHandler<HTMLInputElement> = async (
    event
  ) => {
    await onValueChange(event.target.value)

    if (onChange !== undefined) {
      onChange(event)
    }
  }

  const _onBlur: React.FocusEventHandler<HTMLInputElement> = async (event) => {
    const value = event.target.value
    const replacedValue = replaceFullWidthToHalfWidthAscii(value)

    await onValueChange(replacedValue)

    if (onBlur !== undefined) {
      onBlur(event)
    }
  }

  return <TextInputComponent {...props} onChange={_onChange} onBlur={_onBlur} />
}
