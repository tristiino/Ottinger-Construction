import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: '8mza8tmp',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-01-01',
});