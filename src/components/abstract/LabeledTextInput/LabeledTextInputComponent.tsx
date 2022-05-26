import { TextInputComponent } from '../TextInput/TextInputComponent'
import React from 'react'

type TextInputComponentProps = React.ComponentProps<typeof TextInputComponent>

type SpecificProps = {
  label: string
  labelPosition?: 'left' | 'right'
}
type Props = TextInputComponentProps & SpecificProps
export const LabeledTextInputComponent = React.forwardRef<
  HTMLInputElement,
  // TODO: このPropsの指定が必要な理由調べる
  Props
>(function TextInputWithLabelComponent(
  { label, labelPosition = 'right', ...props }: Props,
  ref
) {
  return (
    <label className="input-group">
      {labelPosition === 'left' && <span>{label}</span>}
      <TextInputComponent {...props} ref={ref} />
      {labelPosition === 'right' && <span>{label}</span>}
    </label>
  )
})
