'use client';

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { ProjectIdea } from '@/types';

interface ProjectStore {
  generatedProjects: ProjectIdea[];
  selectedProject: ProjectIdea | null;
  setGeneratedProjects: (projects: ProjectIdea[]) => void;
  setSelectedProject: (project: ProjectIdea | null) => void;
  addGeneratedProjects: (projects: ProjectIdea[]) => void;
  clearGeneratedProjects: () => void;
}

export const useProjectStore = create<ProjectStore>()(
  devtools((set) => ({
    generatedProjects: [],
    selectedProject: null,
    setGeneratedProjects: (projects) => set({ generatedProjects: projects }),
    setSelectedProject: (project) => set({ selectedProject: project }),
    addGeneratedProjects: (projects) =>
      set((state) => ({
        generatedProjects: [...state.generatedProjects, ...projects],
      })),
    clearGeneratedProjects: () =>
      set({ generatedProjects: [], selectedProject: null }),
  }))
);
