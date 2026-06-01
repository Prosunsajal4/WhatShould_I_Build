'use client';

import { Card, CardBody } from '@/components/ui/Card';

const features = [
  {
    icon: '🤖',
    title: 'AI-Powered Generation',
    description: 'Get personalized project ideas powered by advanced AI algorithms',
  },
  {
    icon: '💾',
    title: 'Save & Organize',
    description: 'Save your favorite ideas and organize them into collections',
  },
  {
    icon: '📊',
    title: 'Portfolio Scoring',
    description: 'Get insights on how projects will impact your developer portfolio',
  },
  {
    icon: '🚀',
    title: 'Startup Analysis',
    description: 'Analyze startup potential and monetization opportunities',
  },
  {
    icon: '📚',
    title: 'Learning Paths',
    description: 'Get personalized learning paths to build the required skills',
  },
  {
    icon: '🗺️',
    title: 'Build Plans',
    description: 'Detailed 30-day roadmaps to help you complete projects',
  },
  {
    icon: '📈',
    title: 'Progress Tracking',
    description: 'Track your project completion and skill development',
  },
  {
    icon: '🔗',
    title: 'PDF Export',
    description: 'Export your project specs and plans as professional PDFs',
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-center text-4xl font-bold text-gray-900 dark:text-white">
          Powerful Features
        </h1>
        <p className="mt-4 text-center text-xl text-gray-600 dark:text-gray-400">
          Everything you need to generate, plan, and build amazing projects
        </p>

        {/* Features Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <Card key={i} className="text-center">
              <CardBody>
                <div className="text-4xl">{feature.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Detailed Features Section */}
        <div className="mt-20">
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
            Deep Dive into Features
          </h2>

          <div className="mt-12 space-y-12">
            {[
              {
                title: 'Intelligent Project Generation',
                description:
                  'Our AI analyzes your skills, experience level, and interests to generate uniquely tailored project ideas. Each idea includes a complete specification with architecture, tech stack, and implementation details.',
              },
              {
                title: 'Smart Learning Gap Analysis',
                description:
                  'Get personalized skill assessments and learning recommendations. Our system identifies gaps between your current skills and the skills required for your ideal projects.',
              },
              {
                title: '30-Day Build Plans',
                description:
                  'Receive detailed, day-by-day roadmaps for completing your projects. Plans include milestones, checkpoints, and time estimates for each phase.',
              },
              {
                title: 'Portfolio & Startup Scoring',
                description:
                  'Every generated idea is scored on its portfolio impact and startup potential, helping you choose projects that align with your career goals.',
              },
            ].map((section, i) => (
              <Card key={i}>
                <CardBody>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {section.title}
                  </h3>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    {section.description}
                  </p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
