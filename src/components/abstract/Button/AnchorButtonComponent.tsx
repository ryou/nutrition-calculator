import React from 'react'
import { ButtonPresentationalProps, getButtonClassName } from './ButtonCommon'

type SpecificProps = ButtonPresentationalProps & {}
type Props = SpecificProps &
  Omit<React.ComponentProps<'a'>, keyof SpecificProps | 'className'>
export const AnchorButtonComponent = React.forwardRef<HTMLAnchorElement, Props>(
  function AnchorButtonComponent({
    type = 'button',
    size = 'md',
    xSize = 'default',
    shape = 'default',
    color = 'default',
    outline = false,
    children,
    ...props
  }: Props) {
    return (
      <a
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
      </a>
    )
  }
)
