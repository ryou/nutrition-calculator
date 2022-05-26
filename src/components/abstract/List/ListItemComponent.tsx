import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const ListItemComponent = ({ children }: Props) => {
  return (
    <li className="block border-b border-b-base-300 px-2 py-3">{children}</li>
  )
}
