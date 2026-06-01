import apiClient from './client';
import { ProjectGeneratorInput, ProjectIdea } from '@/types';

export const projectApi = {
  // Generate project ideas
  generate: async (input: ProjectGeneratorInput) => {
    const response = await apiClient.post('/api/projects/generate', input);
    return response.data;
  },

  // Get all generations
  getGenerations: async (page = 1, limit = 10) => {
    const response = await apiClient.get('/api/projects/generations', {
      params: { page, limit },
    });
    return response.data;
  },

  // Get a specific generation
  getGeneration: async (id: string) => {
    const response = await apiClient.get(`/api/projects/generations/${id}`);
    return response.data;
  },

  // Save a project
  saveProject: async (data: any) => {
    const response = await apiClient.post('/api/projects/save', data);
    return response.data;
  },

  // Get saved projects
  getSavedProjects: async (page = 1, limit = 10) => {
    const response = await apiClient.get('/api/projects/saved', {
      params: { page, limit },
    });
    return response.data;
  },

  // Get a specific saved project
  getSavedProject: async (id: string) => {
    const response = await apiClient.get(`/api/projects/saved/${id}`);
    return response.data;
  },

  // Toggle favorite
  toggleFavorite: async (id: string) => {
    const response = await apiClient.post(`/api/projects/saved/${id}/favorite`);
    return response.data;
  },

  // Delete a project
  deleteProject: async (id: string) => {
    const response = await apiClient.delete(`/api/projects/saved/${id}`);
    return response.data;
  },

  // Export as PDF
  exportPDF: async (id: string) => {
    const response = await apiClient.get(`/api/projects/saved/${id}/export-pdf`, {
      responseType: 'blob',
    });
    return response.data;
  },
};

export const userApi = {
  // Get profile
  getProfile: async () => {
    const response = await apiClient.get('/api/users/profile');
    return response.data;
  },

  // Update profile
  updateProfile: async (data: any) => {
    const response = await apiClient.put('/api/users/profile', data);
    return response.data;
  },

  // Get dashboard data
  getDashboard: async () => {
    const response = await apiClient.get('/api/users/dashboard');
    return response.data;
  },

  // Get usage stats
  getUsage: async () => {
    const response = await apiClient.get('/api/users/usage');
    return response.data;
  },
};

export const subscriptionApi = {
  // Get current subscription
  getCurrent: async () => {
    const response = await apiClient.get('/api/subscriptions/current');
    return response.data;
  },

  // Create checkout session
  checkout: async (planId: string, billingCycle: 'monthly' | 'annual') => {
    const response = await apiClient.post('/api/subscriptions/checkout', {
      planId,
      billingCycle,
    });
    return response.data;
  },

  // Get manage URL
  getManageUrl: async () => {
    const response = await apiClient.get('/api/subscriptions/manage');
    return response.data;
  },

  // Cancel subscription
  cancel: async () => {
    const response = await apiClient.post('/api/subscriptions/cancel');
    return response.data;
  },
};

export const learningGapApi = {
  // Analyze skills
  analyze: async (data: any) => {
    const response = await apiClient.post('/api/learning-gap/analyze', data);
    return response.data;
  },

  // Get analysis
  getAnalysis: async (id: string) => {
    const response = await apiClient.get(`/api/learning-gap/${id}`);
    return response.data;
  },
};

export const buildPlanApi = {
  // Generate build plan
  generate: async (data: any) => {
    const response = await apiClient.post('/api/build-plan/generate', data);
    return response.data;
  },

  // Get build plan
  getPlan: async (id: string) => {
    const response = await apiClient.get(`/api/build-plan/${id}`);
    return response.data;
  },
};
