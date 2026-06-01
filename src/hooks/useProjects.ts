'use client';

import { useMutation, useQuery } from '@tanstack/react-query';
import { projectApi } from '@/lib/api/endpoints';
import { ProjectGeneratorInput } from '@/types';

export const useGenerateProjects = () => {
  return useMutation({
    mutationFn: (input: ProjectGeneratorInput) => projectApi.generate(input),
  });
};

export const useGenerations = (page = 1, limit = 10) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['projects', 'generations', page, limit],
    queryFn: () => projectApi.getGenerations(page, limit),
  });

  return { data, isLoading, error, refetch };
};

export const useGeneration = (id: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['projects', 'generation', id],
    queryFn: () => projectApi.getGeneration(id),
    enabled: !!id,
  });

  return { data, isLoading, error };
};

export const useSaveProject = () => {
  return useMutation({
    mutationFn: (data: any) => projectApi.saveProject(data),
  });
};

export const useSavedProjects = (page = 1, limit = 10) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['projects', 'saved', page, limit],
    queryFn: () => projectApi.getSavedProjects(page, limit),
  });

  return { data, isLoading, error, refetch };
};

export const useSavedProject = (id: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['projects', 'saved', id],
    queryFn: () => projectApi.getSavedProject(id),
    enabled: !!id,
  });

  return { data, isLoading, error };
};

export const useToggleFavorite = () => {
  return useMutation({
    mutationFn: (id: string) => projectApi.toggleFavorite(id),
  });
};

export const useDeleteProject = () => {
  return useMutation({
    mutationFn: (id: string) => projectApi.deleteProject(id),
  });
};

export const useExportPDF = () => {
  return useMutation({
    mutationFn: (id: string) => projectApi.exportPDF(id),
  });
};
