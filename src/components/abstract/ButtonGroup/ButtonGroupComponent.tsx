import classNames from 'classnames'
import { useCallback } from 'react'

type Props<T extends string> = {
  name?: string
  value: T | undefined
  items: {
    label: string
    value: T
  }[]
  onChange: (value: T) => void
}
export const ButtonGroupComponent = <T extends string>({
  name,
  value,
  items,
  onChange,
}: Props<T>) => {
  const onSelect = useCallback(
    (index: number) => {
      const selectedItem = items[index]
      if (selectedItem === undefined) {
        throw new Error(
          `ButtonGroupComponentで定義されていない${index}番目のindexにアクセスされました`
        )
      }

      onChange(selectedItem.value)
    },
    [items, onChange]
  )

  return (
    <div className="btn-group">
      {items.map((item, index) =>
        name === undefined ? (
          <button
            key={index}
            type="button"
            className={classNames([
              'btn btn-sm',
              {
                'btn-active': value === item.value,
              },
            ])}
            onClick={() => onSelect(index)}
          >
            {item.label}
          </button>
        ) : (
          <input
            key={index}
            type="radio"
            name={name}
            data-title={item.label}
            className="btn btn-sm"
            value={item.value}
            checked={value === item.value}
            onChange={() => onSelect(index)}
          />
        )
      )}
    </div>
  )
}
