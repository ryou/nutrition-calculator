import { TextInputComponent } from '../../abstract/TextInput/TextInputComponent'
import { ButtonComponent } from '../../abstract/Button/ButtonComponent'
import {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useState,
} from 'react'
import { RootPortal } from '../../headless/RootPortal'

type Props = {
  id: string
  placeholder?: string
  onSubmit: (keyword: string) => void
  submitText?: string
}
export const SearchFormComponent = ({
  id,
  placeholder,
  onSubmit,
  submitText,
}: Props) => {
  const [keyword, setKeyword] = useState('')

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setKeyword(event.target.value)
    },
    []
  )

  const _onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.stopPropagation()
      event.preventDefault()

      onSubmit(keyword)
      setKeyword('')
    },
    [keyword, onSubmit]
  )

  return (
    <>
      {/* formの入れ子を生まないように、id="root"にformを生成している */}
      <RootPortal>
        <form id={id} data-testid={id} onSubmit={_onSubmit} />
      </RootPortal>
      <div className="input-group">
        <TextInputComponent
          value={keyword}
          placeholder={placeholder}
          onChange={onChange}
          form={id}
        />
        <ButtonComponent type="submit" form={id}>
          {submitText ?? '検索'}
        </ButtonComponent>
      </div>
    </>
  )
}
