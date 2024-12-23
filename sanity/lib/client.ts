import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

const projectIdTemp = "xrr4kx86"
const datasetTemp = "production"
export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})