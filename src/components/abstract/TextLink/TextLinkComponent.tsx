import React from 'react'

type SpecificProps = {}
type Props = SpecificProps &
  Omit<React.ComponentPropsWithRef<'a'>, keyof SpecificProps | 'className'>
export const TextLinkComponent = React.forwardRef<HTMLAnchorElement, Props>(
  function TextLinkComponent({ children, ...props }: Props, ref) {
    return (
      <a {...props} className="link" ref={ref}>
        {children}
      </a>
    )
  }
)
