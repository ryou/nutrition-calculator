import React from 'react'
import classNames from 'classnames'

type Size = 'lg' | 'md' | 'sm' | 'xs'
const shapeToCSSClassNameMap: Record<Size, string> = {
  lg: 'input-lg',
  md: 'input-md',
  sm: 'input-sm',
  xs: 'input-xs',
}

type Color =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
const colorToCSSClassNameMap: Record<Color, string | undefined> = {
  default: undefined,
  primary: 'input-primary',
  secondary: 'input-secondary',
  accent: 'input-accent',
  info: 'input-info',
  success: 'input-success',
  warning: 'input-warning',
  error: 'input-error',
}
const getColorClassName = (color: Color, error: boolean) => {
  if (error) {
    return 'input-error'
  }

  return colorToCSSClassNameMap[color]
}

type SpecificProps = {
  size?: Size
  color?: Color
  error?: boolean
}
type Props = SpecificProps &
  Omit<React.ComponentPropsWithRef<'input'>, keyof SpecificProps | 'className'>
export const TextInputComponent = React.forwardRef<HTMLInputElement, Props>(
  function TextInputComponent(
    { size = 'md', color = 'default', error = false, ...props }: Props,
    ref
  ) {
    return (
      <input
        type="text"
        {...props}
        className={classNames([
          'input input-bordered w-full',
          shapeToCSSClassNameMap[size],
          getColorClassName(color, error),
        ])}
        ref={ref}
      />
    )
  }
)
