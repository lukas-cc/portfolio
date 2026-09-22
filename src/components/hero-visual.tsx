import Image from "next/image";

// Back to front: the last shot renders on top.
const shots = [
  {
    src: "/weather-app.png",
    alt: "Weather app screenshot",
    className: "right-0 top-0 w-[72%]",
    rotate: "4deg",
  },
  {
    src: "/spotify.png",
    alt: "Spotify clone screenshot",
    className: "left-0 top-[20%] w-[72%]",
    rotate: "-3deg",
  },
  {
    src: "/stock-io.png",
    alt: "Stock.io screenshot",
    className: "bottom-0 right-[8%] w-[72%]",
    rotate: "1deg",
    priority: true,
  },
];

export const HeroVisual = () => {
  return (
    <div className="relative aspect-4/3 w-full">
      {shots.map((shot, i) => (
        <div
          key={shot.src}
          className={`animate-shot-in absolute motion-reduce:animate-none ${shot.className}`}
          style={{ rotate: shot.rotate, animationDelay: `${150 + i * 120}ms` }}
        >
          <Image
            src={shot.src}
            alt={shot.alt}
            width={2980}
            height={1980}
            priority={shot.priority}
            sizes="(min-width: 768px) 40vw, 90vw"
            className="h-auto w-full rounded-xl border border-white/10 shadow-2xl shadow-zinc-950/80"
          />
        </div>
      ))}
    </div>
  );
};
