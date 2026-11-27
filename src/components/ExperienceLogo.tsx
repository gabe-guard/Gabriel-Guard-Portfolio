import longhorn from "@/assets/logos/longhorn-racing.avif.asset.json";
import throne from "@/assets/logos/throne.png.asset.json";
import valor from "@/assets/logos/valor.jpg.asset.json";

const logos = {
  "longhorn-racing": { src: longhorn.url, width: 980, height: 551, crop: "0 93 980 365", gain: 11, bias: -9.98 },
  throne: { src: throne.url, width: 738, height: 258, crop: "76 58 574 139", gain: -1.25, bias: 1.2 },
  valor: { src: valor.url, width: 447, height: 447, crop: "71 74 305 345", gain: 1.85, bias: -0.1 },
};

export type ExperienceLogoName = keyof typeof logos;

export function ExperienceLogo({ name }: { name: string }) {
  if (!(name in logos)) return null;
  const { src, width, height, crop, gain, bias } = logos[name as ExperienceLogoName];
  const filterId = `experience-logo-${name}`;
  const alpha = [0.2126, 0.7152, 0.0722].map((channel) => channel * gain).join(" ");
  return (
    <svg className="exp-logo" width="104" height="36"
      viewBox={crop} preserveAspectRatio="xMinYMin meet" aria-hidden="true" focusable="false">
      <defs>
        <filter id={filterId} colorInterpolationFilters="sRGB" x="0%" y="0%" width="100%" height="100%">
          <feColorMatrix type="matrix" values={`0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  ${alpha} 0 ${bias}`} />
        </filter>
      </defs>
      <image href={src} width={width} height={height} filter={`url(#${filterId})`} />
    </svg>
  );
}