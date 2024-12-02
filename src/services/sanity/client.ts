import { createClient } from 'next-sanity'

import { config } from './config'

export const readClient = createClient({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: config.apiVersion,
  useCdn: true
})

export const writeClient = createClient({
  projectId: config.projectId,
  dataset: config.dataset,
  apiVersion: config.apiVersion,
  token: config.apiToken,
  useCdn: false
})