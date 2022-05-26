import { ReactNode } from 'react'
import { HeadingComponent } from '../Heading/HeadingComponent'

type Props = {
  titleContent: ReactNode
  children: ReactNode
}
// TODO: 命名再考
export const MainLayoutComponent = ({ titleContent, children }: Props) => {
  return (
    <div>
      <div>
        <HeadingComponent size={'main'}>{titleContent}</HeadingComponent>
      </div>
      <div className="mt-12">{children}</div>
    </div>
  )
}
