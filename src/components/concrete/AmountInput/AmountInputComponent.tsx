import { LabeledTextInputComponent } from '../../abstract/LabeledTextInput/LabeledTextInputComponent'
import React from 'react'
import { TextInputComponent } from '../../abstract/TextInput/TextInputComponent'
import { replaceFullWidthToHalfWidthAscii } from '../../../../shared/libs/replaceFullWidthToHalfWidthAscii'

type TextInputComponentProps = React.ComponentProps<typeof TextInputComponent>

type SpecificProps = {}
type Props = TextInputComponentProps & SpecificProps
export const AmountInputComponent = React.forwardRef<HTMLInputElement, Props>(
  function AmountInputComponent({ size = 'sm', ...props }: Props, ref) {
    const _onBlur: React.FocusEventHandler<HTMLInputElement> = (event) => {
      const convertedValue = replaceFullWidthToHalfWidthAscii(
        event.target.value
      )

      event.target.value = `${convertedValue}`

      if (props.onBlur !== undefined) {
        props.onBlur(event)
      }
    }

    return (
      <div className="w-28 inline-block">
        <LabeledTextInputComponent
          {...props}
          onBlur={_onBlur}
          ref={ref}
          size={size}
          label="g"
        />
      </div>
    )
  }
)
