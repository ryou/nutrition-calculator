import { Failure, Result, Success } from '../../shared/types/Result'
import axios, { AxiosError } from 'axios'
import { HttpError } from './errors/HttpError'
import { ApiErrorBody } from '../../shared/types/ApiErrorBody'

type NetworkResult = Result<unknown, HttpError>

type HttpRequestOption<T> = {
  url: string
  method: 'get' | 'post' | 'put' | 'patch' | 'delete'
  params?: URLSearchParams
  data?: T
}
export const httpRequest = async <T>(
  params: HttpRequestOption<T>
): Promise<NetworkResult> => {
  try {
    const response = await axios({
      method: params.method,
      url: params.url,
      params: params.params,
      data: params.data,
    })

    return new Success(response.data)
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      if (error.response.status === 400) {
        // TODO: zodによるバリデーションを検討
        const errorBody = error.response.data as ApiErrorBody.BadRequest

        return new Failure(
          new HttpError({
            type: 'bad_request',
            data: errorBody,
          })
        )
      }

      return new Failure(new HttpError({ type: 'general' }))
    }

    // 通信エラー以外は想定外の例外なので例外として再スロー
    throw error
  }
}
