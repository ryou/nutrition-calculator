import React from 'react'
import { TextInputComponent } from '../TextInput/TextInputComponent'
import { replaceFullWidthToHalfWidthAscii } from '../../../../shared/libs/replaceFullWidthToHalfWidthAscii'

type SpecificProps = {}
type Props = SpecificProps &
  Omit<React.ComponentProps<typeof TextInputComponent>, keyof SpecificProps>
export const UncontrolledNumberInputComponent = React.forwardRef<
  HTMLInputElement,
  Props
>(function UncontrolledNumberInputComponent({ onBlur, ...props }: Props, ref) {
  const _onBlur: React.FocusEventHandler<HTMLInputElement> = (event) => {
    const convertedValue = replaceFullWidthToHalfWidthAscii(event.target.value)

    event.target.value = `${convertedValue}`

    if (onBlur !== undefined) {
      onBlur(event)
    }
  }

  return <TextInputComponent ref={ref} {...props} onBlur={_onBlur} />
})
