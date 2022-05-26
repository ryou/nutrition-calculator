import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const StackComponent = ({ children }: Props) => {
  return <div className="flex flex-col items-start gap-2">{children}</div>
}
