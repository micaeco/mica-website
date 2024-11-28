import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { environment } from '@/lib/environment'

export const client = createClient({
  projectId: environment.sanity.projectId,
  dataset: environment.sanity.dataset,
  apiVersion: '2024-02-09',
  useCdn: true
})

export const writeClient = createClient({
  projectId: environment.sanity.projectId,
  dataset: environment.sanity.dataset,
  apiVersion: '2024-02-09',
  token: environment.sanity.apiToken,
  useCdn: false
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}