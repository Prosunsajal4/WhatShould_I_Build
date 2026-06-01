'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardBody, CardHeader, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { PLANS } from '@/lib/constants';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12 dark:bg-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-center text-4xl font-bold text-gray-900 dark:text-white">
          Simple, Transparent Pricing
        </h1>
        <p className="mt-4 text-center text-xl text-gray-600 dark:text-gray-400">
          Choose the perfect plan for your needs
        </p>

        {/* Billing Cycle Toggle */}
        <div className="mt-12 flex justify-center gap-4">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`rounded-lg px-6 py-2 font-medium transition-colors ${
              billingCycle === 'monthly'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('annual')}
            className={`rounded-lg px-6 py-2 font-medium transition-colors ${
              billingCycle === 'annual'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white'
            }`}
          >
            Annual (Save 20%)
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {PLANS.map((plan) => (
            <Card
              key={plan.id}
              className={plan.id === 'pro' ? 'ring-2 ring-blue-600' : ''}
            >
              <CardHeader>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {plan.name}
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {plan.description}
                </p>
                {plan.id === 'pro' && (
                  <Badge variant="primary" className="mt-2 w-fit">
                    Most Popular
                  </Badge>
                )}
              </CardHeader>

              <CardBody className="space-y-6">
                <div>
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice / 12}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    /{billingCycle === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="mr-3 text-green-600">✓</span>
                    {plan.generationsPerDay} generations/day
                  </li>
                  <li className="flex items-center text-gray-700 dark:text-gray-300">
                    <span className="mr-3 text-green-600">✓</span>
                    {plan.maxSavedProjects} saved projects
                  </li>
                  {plan.features && plan.features.length > 0 && (
                    plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-gray-700 dark:text-gray-300"
                      >
                        <span className="mr-3 text-green-600">✓</span>
                        {feature}
                      </li>
                    ))
                  )}
                </ul>
              </CardBody>

              <CardFooter>
                <Button
                  variant={plan.id === 'pro' ? 'primary' : 'outline'}
                  className="w-full"
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                q: 'Can I change my plan anytime?',
                a: 'Yes, you can upgrade or downgrade your plan at any time.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards via Stripe.',
              },
              {
                q: 'Is there a free trial?',
                a: 'Yes, our Free plan comes with 5 generations per day.',
              },
              {
                q: 'Do you offer refunds?',
                a: 'We offer a 14-day money-back guarantee on yearly plans.',
              },
            ].map((faq, i) => (
              <Card key={i}>
                <CardBody>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {faq.q}
                  </p>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{faq.a}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
