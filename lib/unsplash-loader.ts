type LoaderArgs = { src: string; width: number; quality?: number };

/** Builds a resized, auto-format URL on Unsplash's image CDN. */
export default function unsplashLoader({ src, width, quality }: LoaderArgs) {
  const url = new URL(src);
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 70));
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "crop");
  return url.toString();
}
