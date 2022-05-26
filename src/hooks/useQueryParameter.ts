import { ZodSchema } from 'zod'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useQueryParameter = <T>(
  querySchema: ZodSchema<T>
): { data: T | undefined; isError: boolean } => {
  const router = useRouter()
  const [query, setQuery] = useState<T | undefined>(undefined)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (router.isReady) {
      const parseResult = querySchema.safeParse(router.query)

      if (!parseResult.success) {
        setIsError(true)
        return
      }

      setQuery(parseResult.data)
    }
  }, [router, querySchema])

  return {
    data: query,
    isError,
  }
}
