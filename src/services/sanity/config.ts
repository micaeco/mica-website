if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  throw new Error('Missing Sanity project id env variable')
}

if (!process.env.NEXT_PUBLIC_SANITY_DATASET) {
  throw new Error('Missing Sanity dataset env variable')
}

if (typeof window === "undefined" && !process.env.SANITY_API_TOKEN) {
  throw new Error('Missing Sanity API token env variable')
}

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-02-09',
  apiToken: process.env.SANITY_API_TOKEN
}
