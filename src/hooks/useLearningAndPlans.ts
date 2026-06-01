'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { learningGapApi, buildPlanApi } from '@/lib/api/endpoints';

export const useLearningGapAnalyzer = () => {
  return useMutation({
    mutationFn: (data: any) => learningGapApi.analyze(data),
  });
};

export const useLearningGapAnalysis = (id: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['learning-gap', id],
    queryFn: () => learningGapApi.getAnalysis(id),
    enabled: !!id,
  });

  return { data, isLoading, error };
};

export const useBuildPlanGenerator = () => {
  return useMutation({
    mutationFn: (data: any) => buildPlanApi.generate(data),
  });
};

export const useBuildPlan = (id: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['build-plan', id],
    queryFn: () => buildPlanApi.getPlan(id),
    enabled: !!id,
  });

  return { data, isLoading, error };
};
