import classNames from 'classnames'
import { CSSProperties, useEffect, useMemo, useState } from 'react'
import { round } from '../../../libs/round'

type Props = {
  title: string
  max: number
  data: number
  unit: string
}
export const SingleBarChartComponent = ({ title, max, data, unit }: Props) => {
  const [animate, setAnimate] = useState(false)

  const percent = useMemo(() => {
    return (data / max) * 100
  }, [data, max])

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true)
    }, 250)
  }, [])

  const styleAttribute: CSSProperties = useMemo(() => {
    if (!animate)
      return {
        width: '0%',
      }

    return {
      width: `${percent}%`,
    }
  }, [animate, percent])

  return (
    <div className="my-4">
      <div className={classNames(['flex', 'items-center', 'w-full'])}>
        <div
          className={classNames([
            'flex-grow-0',
            'flex-shrink-0',
            'w-20',
            'text-xs',
          ])}
        >
          {title}
        </div>
        <div className={classNames(['flex-grow'])}>
          <div className="h-4 w-full bg-base-200 overflow-hidden rounded-r-full">
            <div
              className="h-full bg-primary rounded-r-full transition-all duration-500 origin-left"
              style={styleAttribute}
            />
          </div>
        </div>
      </div>
      <div className={classNames(['flex', 'items-center', 'w-full'])}>
        <div className={classNames(['flex-grow-0', 'flex-shrink-0', 'w-20'])} />
        <div className={classNames(['flex-grow'])}>
          <div className="flex justify-between mt-1">
            <div className="text-xs">
              {round(data, -2)}
              {unit}
            </div>
            <div className="text-xs text-gray-500">
              {round(max, -2)}
              {unit}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
