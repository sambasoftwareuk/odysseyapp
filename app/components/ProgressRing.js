"use client";

export default function  ProgressRing({
  totalSegments = 7,
  progress = 3,       // 0–7 arası
  label = "Level -1",
  size = 150,        // px
}) {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const segmentLength = circumference / totalSegments;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Ortadaki Level yazısı */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
  <span className="text-lg font-bold max-w-[100px] text-center wrap-break-word text-green-900">
    {label}
  </span>
</div>


      {/* Çember progress */}
      <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
        {Array.from({ length: totalSegments }).map((_, i) => {
          const filled = i < progress;

          return (
            <circle
              key={i}
              r={radius}
              cx="50"
              cy="50"
              stroke="currentColor"
              strokeWidth={10}
              strokeLinecap="round"
              className={`fill-none transition-colors ${
                filled ? "text-green-700" : "text-gray-200"
              }`}
              style={{
                strokeDasharray: `${segmentLength} ${circumference}`,
                strokeDashoffset: -i * segmentLength,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
