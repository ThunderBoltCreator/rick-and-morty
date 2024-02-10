interface Info {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export interface BaseResponse<T> {
  results: T
  info: Info
}

export interface CustomError {
  status: number
  data: {
    error: string
  }
}
