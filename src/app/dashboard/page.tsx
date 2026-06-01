'use client';

import { useDashboard } from '@/hooks/useUser';
import { Button } from '@/components/ui/Button';

export default function DashboardPage() {
  const { dashboard, isLoading } = useDashboard();

  if (isLoading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back!
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Here's what you've been working on
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Generations Used
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {dashboard?.stats?.generationsThisWeek || 0}
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Projects Saved
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {dashboard?.stats?.totalSavedProjects || 0}
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 dark:bg-slate-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Remaining Today
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">
              {dashboard?.stats?.generationsRemainingToday || 5}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Get Started
            </h2>
            <div className="mt-4 space-y-2">
              <Button className="w-full sm:w-auto">
                Generate New Ideas
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
