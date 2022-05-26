import React from 'react'
import classNames from 'classnames'

type Props = {
  message?: string
  withMargin?: boolean
}
export const ErrorMessageComponent = ({
  message,
  withMargin = true,
}: Props) => {
  return (
    <>
      {message && (
        <div
          className={classNames([
            'text-error',
            {
              'mt-2': withMargin,
            },
          ])}
          role="alert"
        >
          {message}
        </div>
      )}
    </>
  )
}
