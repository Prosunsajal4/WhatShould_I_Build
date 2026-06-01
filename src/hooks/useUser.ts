'use client';

import { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { userApi } from '@/lib/api/endpoints';

export const useUser = () => {
  const { data: user, isLoading, error, refetch } = useQuery({
    queryKey: ['user', 'profile'],
    queryFn: () => userApi.getProfile(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return { user, isLoading, error, refetch };
};

export const useUpdateProfile = () => {
  return useMutation({
    mutationFn: (data: any) => userApi.updateProfile(data),
  });
};

export const useDashboard = () => {
  const { data: dashboard, isLoading, error } = useQuery({
    queryKey: ['user', 'dashboard'],
    queryFn: () => userApi.getDashboard(),
    staleTime: 1000 * 60, // 1 minute
  });

  return { dashboard, isLoading, error };
};

export const useUsage = () => {
  const { data: usage, isLoading } = useQuery({
    queryKey: ['user', 'usage'],
    queryFn: () => userApi.getUsage(),
    staleTime: 1000 * 60 * 5,
  });

  return { usage, isLoading };
};
