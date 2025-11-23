export function NeueWegeLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Left pillar of N */}
      <rect x="30" y="40" width="35" height="120" fill="url(#gradient1)" />
      
      {/* Right pillar of N */}
      <rect x="135" y="40" width="35" height="120" fill="url(#gradient1)" />
      
      {/* Curved road/path connecting them */}
      <path
        d="M 60 40 Q 100 80 135 160"
        stroke="url(#gradient2)"
        strokeWidth="40"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Road dashes */}
      <path
        d="M 70 55 L 75 65 M 80 75 L 85 85 M 90 95 L 95 105 M 100 115 L 105 125 M 110 135 L 115 145"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9"
      />
      
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5EBEAF" />
          <stop offset="100%" stopColor="#3B9B8E" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E7E6F" />
          <stop offset="100%" stopColor="#5EBEAF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function NeueWegeLogoSimple({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="30" y="40" width="35" height="120" fill="currentColor" />
      <rect x="135" y="40" width="35" height="120" fill="currentColor" />
      <path
        d="M 60 40 Q 100 80 135 160"
        stroke="currentColor"
        strokeWidth="40"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 70 55 L 75 65 M 80 75 L 85 85 M 90 95 L 95 105 M 100 115 L 105 125 M 110 135 L 115 145"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}
