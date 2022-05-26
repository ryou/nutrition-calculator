import { HttpError } from '../libs/errors/HttpError'
import { Result } from '../../shared/types/Result'

export type HttpResult<T> = Result<T, HttpError>
