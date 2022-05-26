import { Path, UseFormReturn } from 'react-hook-form'
import { useMemo } from 'react'
import { getRHFErrorMessage } from '../../../libs/ReactHookFormUtils'

export const useFormErrorMessage = <T>(
  name: Path<T>,
  { getFieldState, formState }: UseFormReturn<T>
) => {
  return useMemo(
    () => getRHFErrorMessage(getFieldState, formState, name),
    [getFieldState, formState, name]
  )
}
