import ReactDOM from 'react-dom'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const RootPortal = ({ children }: Props) => {
  const el = document.getElementById('root')

  if (el === null) {
    throw new Error('id=rootの要素が見つかりませんでした。')
  }

  return ReactDOM.createPortal(children, el)
}
