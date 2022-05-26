import classNames from 'classnames'
import { CSSProperties, useMemo } from 'react'

type Color =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'neutral'
  | 'success'
  | 'warning'
  | 'error'
  | 'white'
// TODO: ここらへんの色とクラス名の変換。共通処理として切り出したほうがいいのでは？
const colorToCSSClassNameMap: Record<Color, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  accent: 'text-accent',
  info: 'text-info',
  neutral: 'text-neutral',
  success: 'text-success',
  warning: 'text-warning',
  error: 'text-error',
  white: 'text-white',
}

// TODO: ここらへんのサイズとクラス名の変換。共通処理として切り出したほうがいいのでは？
type Size =
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
const sizeToCSSClassNameMap: Record<Size, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
}

type Props = {
  size?: Size
  // 以下URLの一覧にあるものが使用できる
  // https://fonts.google.com/icons?icon.style=Rounded
  icon: string
  color?: Color
}
export const IconComponent = ({ size, icon, color }: Props) => {
  const styleAttribute: CSSProperties | undefined = useMemo(() => {
    if (size !== undefined) return undefined

    return {
      fontSize: 'inherit',
    }
  }, [size])

  return (
    <span
      className={classNames([
        'material-symbols-rounded',
        color ? colorToCSSClassNameMap[color] : undefined,
        size ? sizeToCSSClassNameMap[size] : undefined,
      ])}
      style={styleAttribute}
    >
      {icon}
    </span>
  )
}
