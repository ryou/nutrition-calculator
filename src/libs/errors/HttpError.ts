import { BaseError } from './BaseError'

type HttpErrorDetail = HttpBadRequestErrorDetail | HttpGeneralErrorDetail

export type ServerSideValidationErrorMessages = Record<string, string[]>

type HttpBadRequestErrorDetail = {
  type: 'bad_request'
  data: ServerSideValidationErrorMessages
}

type HttpGeneralErrorDetail = {
  type: 'general'
}

export class HttpError extends BaseError<HttpErrorDetail> {
  private readonly errorDetail: HttpErrorDetail

  public constructor(errorDetail: HttpErrorDetail) {
    super()

    this.errorDetail = errorDetail
  }

  get details() {
    return this.errorDetail
  }
}
