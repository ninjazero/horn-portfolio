import { getCollection } from 'astro:content';

/** All case studies: featured first in their set order, then the rest by title. */
export async function getSortedWork() {
  return (await getCollection('work')).sort((a, b) => {
    const fa = a.data.featuredOrder ?? Infinity;
    const fb = b.data.featuredOrder ?? Infinity;
    return fa - fb || a.data.title.localeCompare(b.data.title);
  });
}
