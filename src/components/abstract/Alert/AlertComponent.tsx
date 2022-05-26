import classNames from 'classnames'
import { ReactNode } from 'react'
import { IconComponent } from '../Icon/IconComponent'

type Type = 'default' | 'info' | 'success' | 'warning' | 'error'
const typeToClassNameMap: Record<Type, string | undefined> = {
  default: undefined,
  info: 'alert-info',
  success: 'alert-success',
  warning: 'alert-warning',
  error: 'alert-error',
}

const typeToIconMap: Record<Type, string> = {
  default: 'info',
  info: 'info',
  success: 'check_circle',
  warning: 'warning',
  error: 'error',
}

type Props = {
  type?: Type
  children: ReactNode
}
export const AlertComponent = ({ type = 'default', children }: Props) => {
  return (
    <div
      className={classNames([
        'alert',
        type ? typeToClassNameMap[type] : undefined,
      ])}
      role="alert"
    >
      <div>
        <IconComponent
          size={'2xl'}
          icon={type ? typeToIconMap[type] : 'info'}
        />
        <span>{children}</span>
      </div>
    </div>
  )
}
