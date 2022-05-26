import React from 'react'

type SpecificProps = {}
type Props = SpecificProps &
  Omit<React.ComponentPropsWithRef<'a'>, keyof SpecificProps | 'className'>
// TODO: ここでPropsを指定するとExternalTextLinkComponentでのエラーが消えた
//  理由を理解する
//  https://stackoverflow.com/questions/54654303/using-a-forwardref-component-with-children-in-typescript
export const TextLinkComponent = React.forwardRef<HTMLAnchorElement, Props>(
  function TextLinkComponent({ children, ...props }: Props, ref) {
    return (
      <a {...props} className="link" ref={ref}>
        {children}
      </a>
    )
  }
)
