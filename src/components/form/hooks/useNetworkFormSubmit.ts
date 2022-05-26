import { Path, UseFormReturn } from 'react-hook-form'
import { useCallback, useState } from 'react'
import { ServerSideValidationErrorMessages } from '../../../libs/errors/HttpError'
import { HttpResult } from '../../../types'

const displayServerValidationErrors = <FORM_TYPE>(
  errorMessages: ServerSideValidationErrorMessages,
  useFormReturn: UseFormReturn<FORM_TYPE>
) => {
  Object.entries<string[]>(errorMessages).forEach(([path, messages]) => {
    messages.forEach((message) => {
      // TODO: zodでバリデーションを行い、想定外のpathが存在する際にエラー通知をする処理の検討
      useFormReturn.setError(path as Path<FORM_TYPE>, { message })
    })
  })
}

export const useNetworkFormSubmit = <FORM_TYPE, SUCCESS_DATA>({
  execFunc,
  onSuccess,
  useFormReturn,
  scrollToTopOnError = true,
}: {
  execFunc: (data: FORM_TYPE) => Promise<HttpResult<SUCCESS_DATA>>
  onSuccess: (data: SUCCESS_DATA) => void
  useFormReturn: UseFormReturn<FORM_TYPE>
  scrollToTopOnError?: boolean
}) => {
  const [topErrorMessage, setTopErrorMessage] = useState('')

  const onSubmit = useCallback(
    async (data: FORM_TYPE) => {
      setTopErrorMessage('')

      const result = await execFunc(data)

      if (result.isFailure()) {
        const errorDetail = result.error.details

        if (errorDetail.type === 'bad_request') {
          displayServerValidationErrors(errorDetail.data, useFormReturn)

          setTopErrorMessage('入力内容に誤りがあります。')
        } else {
          setTopErrorMessage('通信エラー')
        }

        if (scrollToTopOnError) {
          window.scrollTo({ top: 0 })
        }
      } else {
        onSuccess(result.value)
      }
    },
    [execFunc, onSuccess, scrollToTopOnError, useFormReturn]
  )

  return {
    topErrorMessage,
    onSubmit,
  }
}
