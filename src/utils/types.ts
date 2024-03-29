export type Article = {
  apiUrl: string
  id: string
  isHosted: boolean
  pillarId: string
  pillarName: string
  sectionId: string
  sectionName: string
  type: string
  webPublicationDate: string
  webTitle: string
  webUrl: string
}

export type GuardianAPI = {
  q: string
}
