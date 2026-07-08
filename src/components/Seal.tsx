const PATH_ID = "seal-text-path";

type SealProps = {
  size?: number;
  tone?: "bronze" | "limestone";
  spin?: boolean;
  className?: string;
};

export default function Seal({ size = 120, tone = "bronze", spin = true, className = "" }: SealProps) {
  const ringColor = tone === "bronze" ? "var(--color-bronze)" : "var(--color-limestone)";
  const fillColor = tone === "bronze" ? "var(--color-bronze)" : "var(--color-limestone)";

  return (
    <div className={className} style={{ width: size, height: size }}>
      <svg viewBox="0 0 200 200" width={size} height={size}>
        <defs>
          <path id={PATH_ID} d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
        </defs>
        <circle cx="100" cy="100" r="96" fill="none" stroke={ringColor} strokeWidth="1" opacity="0.5" />
        <g
          className={spin ? "animate-seal-spin" : undefined}
          style={{
            transformOrigin: "100px 100px",
            transformBox: "view-box",
            willChange: spin ? "transform" : undefined,
            backfaceVisibility: "hidden",
          }}
        >
          <text
            fill={fillColor}
            fontSize="10.5"
            letterSpacing="3.2"
            fontFamily="IBM Plex Mono, monospace"
            style={{ WebkitFontSmoothing: "antialiased" }}
          >
            <textPath href={`#${PATH_ID}`} startOffset="0%">
              SKY LAND · ADREC LICENSED · RAED HAMZE · CN-1827517 ·
            </textPath>
          </text>
        </g>
        <circle cx="100" cy="100" r="60" fill="none" stroke={ringColor} strokeWidth="1" opacity="0.5" />
        <text
          x="100"
          y="94"
          textAnchor="middle"
          fill={fillColor}
          fontFamily="Fraunces, serif"
          fontSize="34"
          fontWeight="500"
        >
          RH
        </text>
        <text
          x="100"
          y="116"
          textAnchor="middle"
          fill={fillColor}
          fontFamily="IBM Plex Mono, monospace"
          fontSize="8"
          letterSpacing="2"
          opacity="0.85"
        >
          EST. 2013
        </text>
      </svg>
    </div>
  );
}
