import { getCollection } from 'astro:content';
export const CATEGORIES = ['City of Del Rio','Val Verde County','Schools','Police','Health','Community'];
export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
export async function allStories(){ return (await getCollection('stories', ({data}) => !data.draft)).sort((a,b)=>b.data.date.valueOf()-a.data.date.valueOf()); }
export const fmt = (d: Date) => d.toLocaleDateString('en-US',{year:'numeric',month:'short',day:'numeric',timeZone:'UTC'});
export const isSample = (t: string) => /sample/i.test(t);
