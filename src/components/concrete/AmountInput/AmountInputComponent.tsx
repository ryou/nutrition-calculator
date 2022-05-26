import { LabeledTextInputComponent } from '../../abstract/LabeledTextInput/LabeledTextInputComponent'
import React, { useImperativeHandle, useRef } from 'react'
import { TextInputComponent } from '../../abstract/TextInput/TextInputComponent'
import { replaceFullWidthToHalfWidthAscii } from '../../../../shared/libs/replaceFullWidthToHalfWidthAscii'

type TextInputComponentProps = React.ComponentProps<typeof TextInputComponent>

type SpecificProps = {}
type Props = TextInputComponentProps & SpecificProps
export const AmountInputComponent = React.forwardRef<HTMLInputElement, Props>(
  function AmountInputComponent({ size = 'sm', ...props }: Props, ref) {
    const inputRef = useRef<HTMLInputElement>(null)

    // TODO: このコードをちゃんと理解する
    //  https://qiita.com/costeka/items/a2722350c5d1b995f3c3
    useImperativeHandle(ref, () => inputRef.current!)

    const _onBlur: React.FocusEventHandler<HTMLInputElement> = (event) => {
      const convertedValue = replaceFullWidthToHalfWidthAscii(
        event.target.value
      )
      // TODO: ここの!は大丈夫？
      inputRef.current!.value = `${convertedValue}`

      if (props.onBlur !== undefined) {
        props.onBlur(event)
      }
    }

    return (
      <div className="w-28 inline-block">
        <LabeledTextInputComponent
          {...props}
          onBlur={_onBlur}
          ref={inputRef}
          size={size}
          label="g"
        />
      </div>
    )
  }
)
