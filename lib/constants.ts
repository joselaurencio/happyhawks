export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.NODE_ENV === 'production' ? '/happyhawks' : '');

const ASSETS_CDN = "https://cdn.jsdelivr.net/gh/joselaurencio/happyhawks-assets@main";

export function asset(path: string): string {
  return `${ASSETS_CDN}/${path}`;
}
