import { useState } from 'react'
import { BASE_PATH, ENVIRONMENT } from '../config/env'
// ブラウザでバックエンドの仕組みを動かす以上、これだけは依存ルールの例外にせざるをえない
// eslint-disable-next-line strict-dependencies/strict-dependencies
import { startWorker } from '../../backend'
import { useComponentDidFirstMount } from './useComponentDidFirstMount'

export const useBackend = () => {
  const [initialized, setInitialized] = useState(false)

  useComponentDidFirstMount(async () => {
    setInitialized(false)
    await startWorker({
      basePath: BASE_PATH,
      disableLogging: ENVIRONMENT === 'production',
    })
    setInitialized(true)
  })

  return {
    initialized,
  }
}
