import classNames from 'classnames'
import { ReactNode } from 'react'

type Size = 'main' | 'sub' | 'subsub'
const sizeToCSSClassNameMap: Record<Size, string> = {
  main: 'text-3xl',
  sub: 'text-2xl',
  subsub: 'text-xl',
}

type Props = {
  size: Size
  children: ReactNode
}
export const HeadingComponent = ({ size, children }: Props) => {
  return (
    <div className={classNames(['font-bold', sizeToCSSClassNameMap[size]])}>
      {children}
    </div>
  )
}
