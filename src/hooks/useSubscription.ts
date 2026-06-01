'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { subscriptionApi } from '@/lib/api/endpoints';

export const useSubscription = () => {
  const { data: subscription, isLoading, error, refetch } = useQuery({
    queryKey: ['subscription'],
    queryFn: () => subscriptionApi.getCurrent(),
    staleTime: 1000 * 60 * 5,
  });

  return { subscription, isLoading, error, refetch };
};

export const useCheckout = () => {
  return useMutation({
    mutationFn: (data: { planId: string; billingCycle: 'monthly' | 'annual' }) =>
      subscriptionApi.checkout(data.planId, data.billingCycle),
  });
};

export const useManageSubscription = () => {
  return useMutation({
    mutationFn: () => subscriptionApi.getManageUrl(),
  });
};

export const useCancelSubscription = () => {
  return useMutation({
    mutationFn: () => subscriptionApi.cancel(),
  });
};
