// pages/coming-soon.jsx (Next.js) or src/pages/ComingSoon.jsx (CRA)
// Minimal waitlist page with role selection and value props.

import { useState } from "react";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("business");
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    // Replace with your API route or service (e.g., /api/waitlist).
    // fetch("/api/waitlist", { method: "POST", body: JSON.stringify({ email, role, city }) })
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white text-neutral-900 flex items-center">
      <section className="w-full px-6 md:px-12 lg:px-20 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="border rounded-lg p-6 md:p-8">
            <h1 className="text-2xl md:text-4xl font-semibold tracking-tight">
              InfluMatch is coming soon
            </h1>
            <p className="mt-3 text-neutral-600">
              Hyper-local influencer discovery built for Indian small
              businesses. Join the waitlist to get early access, discounts, and
              product updates.
            </p>

            {!submitted ? (
              <form onSubmit={submit} className="mt-6 grid gap-4">
                <div>
                  <label className="block text-xs text-neutral-500 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border rounded-md px-3 py-2 text-sm"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-neutral-500 mb-1">
                      Role
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full border rounded-md px-3 py-2 text-sm bg-white"
                    >
                      <option value="business">Business</option>
                      <option value="influencer">Influencer</option>
                      <option value="agency">Agency</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-neutral-500 mb-1">
                      City
                    </label>
                    <input
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full border rounded-md px-3 py-2 text-sm"
                      placeholder="Hyderabad"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center rounded-md bg-black text-white px-4 py-2 text-sm hover:bg-neutral-800"
                >
                  Join waitlist
                </button>
              </form>
            ) : (
              <div className="mt-6">
                <div className="rounded-md bg-neutral-50 border p-4">
                  <div className="text-sm font-medium">Thanks for joining!</div>
                  <p className="text-sm text-neutral-600 mt-1">
                    We’ve recorded your interest. We’ll email updates before
                    launch and offer early access.
                  </p>
                </div>
                <a
                  href="/"
                  className="inline-flex mt-4 text-sm hover:underline"
                >
                  Back to home
                </a>
              </div>
            )}

            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <div className="border rounded-md p-4">
                <div className="text-sm font-medium">What you’ll get</div>
                <ul className="mt-2 text-sm text-neutral-600 space-y-1">
                  <li>• Early access to discovery features</li>
                  <li>• Influencer profiles with sample content</li>
                  <li>• Simple dashboards for businesses & creators</li>
                </ul>
              </div>
              <div className="border rounded-md p-4">
                <div className="text-sm font-medium">Roadmap highlights</div>
                <ul className="mt-2 text-sm text-neutral-600 space-y-1">
                  <li>• Performance tracking & campaign tools</li>
                  <li>• Ranking, reviews, and boosted listings</li>
                  <li>• In-app messaging & payments</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-xs text-neutral-500">
              Built with React/Next.js • Node/Firebase backend •
              MongoDB/PostgreSQL • Auth0/Firebase Auth • Vercel/Netlify
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
