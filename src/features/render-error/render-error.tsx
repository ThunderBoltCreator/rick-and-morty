import { CustomError } from 'shared/api/types.ts'

export function RenderError({ error }: { error: unknown }) {
  if (isCustomError(error)) {
    const customError = error as CustomError
    return (
      <strong>
        error: {customError.status} <br />
        {customError.data.error}
      </strong>
    )
  }

  return null
}

function isCustomError(error: unknown): error is CustomError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'status' in error &&
    'data' in error &&
    typeof (error as CustomError).data === 'object' &&
    'error' in (error as CustomError).data
  )
}
