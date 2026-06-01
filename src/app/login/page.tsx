'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle login logic
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="flex min-h-[calc(100vh-200px)] items-center justify-center px-4 py-20">
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-slate-900">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Sign In</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Welcome back to BuildNext
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />

          <Button
            type="submit"
            isLoading={isLoading}
            className="w-full"
          >
            Sign In
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <a href="/signup" className="font-medium text-blue-600 hover:text-blue-700">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
