import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const ListComponent = ({ children }: Props) => {
  return <ul className="border-t border-t-base-300">{children}</ul>
}
