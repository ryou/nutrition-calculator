import { ReactNode } from 'react'

type Props = {
  title: ReactNode
  children: ReactNode
}
export const DescriptionListItemComponent = ({ title, children }: Props) => {
  return (
    <div className="mt-4 first:mt-0">
      <dt className="text-lg font-bold">{title}</dt>
      <dd className="mt-2">{children}</dd>
    </div>
  )
}
