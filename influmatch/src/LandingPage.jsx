import Link from "next/link"; // if using Next.js

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* Hero */}
      <section className="px-6 md:px-12 lg:px-20 py-16 border-b">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              India’s local influencer discovery engine for small businesses
            </h1>
            <p className="mt-4 text-neutral-600">
              A matchmaking platform for influencers and businesses. Find
              hyper-local, niche-fit creators with transparent performance
              signals and simple workflows.
            </p>

            {/* Existing buttons */}
            <div className="mt-6 flex gap-3">
              <a
                href="#search"
                className="inline-flex items-center rounded-md bg-black text-white px-4 py-2 text-sm hover:bg-neutral-800"
              >
                Start discovering
              </a>
              <a
                href="/coming-soon"
                className="inline-flex items-center rounded-md border border-neutral-300 px-4 py-2 text-sm hover:bg-neutral-100"
              >
                Join waitlist
              </a>

              {/* NEW Coming Soon button */}
              <Link
                href="/coming-soon"
                className="inline-flex items-center rounded-md bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 text-sm hover:scale-105 transition-transform"
              >
                🚀 Coming Soon
              </Link>
            </div>

            <div className="mt-8 text-xs text-neutral-500">
              Hyper-local targeting • Niche-based search • Performance analysis
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
