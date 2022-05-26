import { setupWorker, StartOptions } from 'msw'
import { getHandlers } from './handler'

export const startWorker = async ({
  basePath,
  disableLogging = false,
}: {
  basePath: string
  disableLogging?: boolean
}) => {
  const defaultOptions: StartOptions = {
    serviceWorker: {
      url: `${basePath}/mockServiceWorker.js`,
    },
  }

  const envOptions: StartOptions = disableLogging
    ? {
        quiet: true,
        onUnhandledRequest: 'bypass',
      }
    : {}

  const worker = setupWorker(...getHandlers(basePath))
  await worker.start({
    ...defaultOptions,
    ...envOptions,
  })
}
