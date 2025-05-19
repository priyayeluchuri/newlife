import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative h-80 sm:h-[32rem] flex items-center justify-center text-white">
      <Image
        src="/images/hero.jpg"
        alt="New Life Church"
        fill
        style={{ objectFit: 'cover' }}
        priority
        className="brightness-75"
      />
      <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6">
        <div>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 drop-shadow-md">
            Welcome to New Life Church
          </h2>
          <p className="text-lg sm:text-2xl mb-6 drop-shadow-md">
            A community rooted in kindness, love, and faith.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/live"
              className="bg-accent-gold text-text-primary px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-[#E0B027] text-base sm:text-lg transition"
            >
              Watch Live
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
