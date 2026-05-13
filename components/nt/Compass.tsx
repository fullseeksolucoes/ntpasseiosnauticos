export function Compass({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.5"
    >
      <circle cx="100" cy="100" r="98" />
      <circle cx="100" cy="100" r="82" strokeOpacity="0.4" />
      <circle cx="100" cy="100" r="60" strokeOpacity="0.3" />
      <circle cx="100" cy="100" r="3" fill="currentColor" />
      {Array.from({ length: 32 }).map((_, i) => {
        const angle = (i * 360) / 32;
        const long = i % 8 === 0;
        return (
          <line
            key={i}
            x1="100"
            y1={long ? 6 : 12}
            x2="100"
            y2={long ? 22 : 18}
            transform={`rotate(${angle} 100 100)`}
            strokeWidth={long ? 1 : 0.4}
          />
        );
      })}
      <polygon points="100,20 108,100 100,180 92,100" fill="currentColor" opacity="0.9" />
      <polygon points="100,20 108,100 100,100" fill="currentColor" opacity="0.5" />
      <text x="100" y="40" textAnchor="middle" fontSize="10" fill="currentColor" fontFamily="monospace" letterSpacing="2">N</text>
      <text x="160" y="104" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="monospace" opacity="0.6">E</text>
      <text x="100" y="172" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="monospace" opacity="0.6">S</text>
      <text x="40" y="104" textAnchor="middle" fontSize="8" fill="currentColor" fontFamily="monospace" opacity="0.6">W</text>
    </svg>
  );
}

export function WaveDivider({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 60" className={className} preserveAspectRatio="none">
      <path
        d="M0,30 C240,55 480,5 720,30 C960,55 1200,5 1440,30 L1440,60 L0,60 Z"
        fill="currentColor"
        opacity="0.08"
      />
      <path
        d="M0,35 C240,15 480,55 720,35 C960,15 1200,55 1440,35"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.3"
      />
    </svg>
  );
}
