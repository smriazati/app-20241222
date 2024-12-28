// src/sanity/lib/imageUrl.ts

import imageUrlBuilder from '@sanity/image-url';
import { client } from './client';

// Initialize the image URL builder with your Sanity client
const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
