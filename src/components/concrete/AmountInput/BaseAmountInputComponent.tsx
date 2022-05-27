import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export const BaseAmountInputComponent = ({ children }: Props) => {
  return (
    <div className="w-28 inline-block">
      <label className="input-group">
        {children}
        <span>g</span>
      </label>
    </div>
  )
}
