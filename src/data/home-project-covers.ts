import downpour from "@/assets/home-covers/downpour.webp.asset.json";
import drizzle from "@/assets/home-covers/drizzle.webp.asset.json";
import deadlock from "@/assets/home-covers/deadlock.webp.asset.json";
import flatline from "@/assets/home-covers/flatline.webp.asset.json";
import valor from "@/assets/home-covers/valor-cad-challenge.webp.asset.json";

/** Home-only artwork; project galleries retain their original media. */
export const homeProjectCovers: Record<string, string> = {
  "downpour-2026": downpour.url,
  "drizzle-2026": drizzle.url,
  "deadlock-2025": deadlock.url,
  "flatline-2024": flatline.url,
  "valor-cad-challenge": valor.url,
};