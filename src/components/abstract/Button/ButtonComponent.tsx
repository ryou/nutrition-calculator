import React from 'react'
import { ButtonPresentationalProps, getButtonClassName } from './ButtonCommon'

type SpecificProps = ButtonPresentationalProps & {}
type Props = SpecificProps &
  Omit<React.ComponentProps<'button'>, keyof SpecificProps | 'className'>
export const ButtonComponent = ({
  type = 'button',
  size = 'md',
  xSize = 'default',
  shape = 'default',
  color = 'default',
  outline = false,
  children,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      type={type}
      className={getButtonClassName({
        size,
        xSize,
        shape,
        color,
        outline,
      })}
    >
      {children}
    </button>
  )
}
