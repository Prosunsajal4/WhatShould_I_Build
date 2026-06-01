'use client';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white sm:text-6xl">
            Never Run Out of Project Ideas Again
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400">
            Generate portfolio-worthy software projects tailored to your skills, 
            experience level, and career goals.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700">
              Get Started Free
            </button>
            <button className="rounded-lg border border-gray-300 px-8 py-3 text-gray-900 hover:bg-gray-50 dark:border-gray-600 dark:text-white">
              View Examples
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 px-4 py-20 dark:bg-slate-900 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
            Features
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'AI-Powered Generation',
                description: 'Using GPT-4 to generate unique, personalized project ideas',
              },
              {
                title: 'Complete Specifications',
                description: 'Tech stacks, features, roadmaps, and architecture included',
              },
              {
                title: 'Learning Paths',
                description: 'Skill gap analysis and learning recommendations',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="rounded-lg bg-white p-6 dark:bg-slate-800"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
