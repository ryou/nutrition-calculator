import React from 'react'
import { TextLinkComponent } from '../TextLink/TextLinkComponent'
import { IconComponent } from '../Icon/IconComponent'

type TextLinkComponentProps = React.ComponentProps<typeof TextLinkComponent>

type SpecificProps = {}
type Props = SpecificProps &
  Omit<TextLinkComponentProps, keyof SpecificProps | 'target' | 'rel'>
export const ExternalTextLinkComponent = ({ children, ...props }: Props) => {
  return (
    <TextLinkComponent target="_blank" rel="noopener noreferrer" {...props}>
      {children}
      <IconComponent icon={'open_in_new'} />
    </TextLinkComponent>
  )
}
