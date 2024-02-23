import { GUARDIAN_CONTENT_API } from './constants'
import { GUARDIAN_API_KEY } from './env'

export const buildGuardianContentAPI = (searchQuery: string): string => {
  return `${GUARDIAN_CONTENT_API}?${(new URLSearchParams({
    'api-key': GUARDIAN_API_KEY,
    q: searchQuery ?? '',
  }))}`
}
