import { ReactNode, useCallback, useState } from 'react'
import classNames from 'classnames'

export const useDrawer = () => {
  const [active, setActive] = useState(false)

  const show = useCallback(() => setActive(true), [])

  const hide = useCallback(() => setActive(false), [])

  return {
    active,
    show,
    hide,
  }
}

export const DrawerComponent = ({
  active,
  onClickOverlay,
  children,
}: {
  active: boolean
  onClickOverlay: () => void
  children: ReactNode
}) => {
  return (
    <div
      className={classNames([
        'fixed z-10 inset-0 transition-opacity',
        {
          'opacity-100': active,
          'opacity-0 pointer-events-none': !active,
        },
      ])}
    >
      <div
        className="absolute inset-0 bg-neutral opacity-40"
        onClick={onClickOverlay}
      />
      <div
        className={classNames([
          'absolute inset-y-0 overflow-y-auto overscroll-contain w-80 bg-base-100 text-base-content transition-transform duration-300',
          {
            '': active,
            '-translate-x-full': !active,
          },
        ])}
      >
        {children}
      </div>
    </div>
  )
}
