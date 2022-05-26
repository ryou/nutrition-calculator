import classNames from 'classnames'

type ButtonSize = 'lg' | 'md' | 'sm' | 'xs'
export const buttonSizeToCSSClassNameMap: Record<ButtonSize, string> = {
  lg: 'btn-lg',
  md: 'btn-md',
  sm: 'btn-sm',
  xs: 'btn-xs',
}

type ButtonXSize = 'default' | 'wide' | 'block'
export const buttonXSizeToCSSClassNameMap: Record<
  ButtonXSize,
  string | undefined
> = {
  default: undefined,
  wide: 'btn-wide',
  block: 'btn-block',
}

type ButtonShape = 'default' | 'circle' | 'square'
export const buttonShapeToCSSClassNameMap: Record<
  ButtonShape,
  string | undefined
> = {
  default: undefined,
  circle: 'btn-circle',
  square: 'btn-square',
}

type ButtonColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'ghost'
  | 'link'
export const buttonColorToCSSClassNameMap: Record<
  ButtonColor,
  string | undefined
> = {
  default: undefined,
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  ghost: 'btn-ghost',
  link: 'btn-link',
}

export const buttonOutlineToCSSClassNameMap = (outline?: boolean) =>
  outline ? 'btn-outline' : undefined

export type ButtonPresentationalProps = {
  size?: ButtonSize
  xSize?: ButtonXSize
  shape?: ButtonShape
  color?: ButtonColor
  outline?: boolean
}

export const getButtonClassName = ({
  size,
  xSize,
  shape,
  color,
  outline,
}: Required<ButtonPresentationalProps>) =>
  classNames([
    'btn',
    buttonSizeToCSSClassNameMap[size],
    buttonXSizeToCSSClassNameMap[xSize],
    buttonShapeToCSSClassNameMap[shape],
    buttonColorToCSSClassNameMap[color],
    buttonOutlineToCSSClassNameMap(outline),
  ])
