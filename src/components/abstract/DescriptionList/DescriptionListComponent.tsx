import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const DescriptionListComponent = ({ children }: Props) => {
  return <dl>{children}</dl>
}
