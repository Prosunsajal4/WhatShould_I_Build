export interface User {
  id: string;
  email: string;
  name: string | null;
  image: string | null;
  skills: string[];
  experienceLevel: 'beginner' | 'intermediate' | 'advanced' | null;
  interests: string | null;
  hoursPerWeek: number | null;
  teamSize: 'solo' | 'team' | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Subscription {
  id: string;
  userId: string;
  planId: string;
  status: 'ACTIVE' | 'CANCELED' | 'PAST_DUE';
  generationsPerDay: number;
  maxSavedProjects: number;
  pdfExport: boolean;
  architectureGenerator: boolean;
  startupMode: boolean;
  teamCollaboration: boolean;
  currentPeriodStart: Date | null;
  currentPeriodEnd: Date | null;
}

export interface ProjectIdea {
  id: string;
  title: string;
  elevatorPitch: string;
  problemSolved: string;
  targetUsers: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  portfolioScore: number;
  startupScore: number;
  techStack: TechStack;
  coreFeatures: string[];
  advancedFeatures: string[];
  databaseSchema: Record<string, any>;
  apiEndpoints: string[];
  architecture: string;
  folderStructure: string;
  roadmap: Roadmap;
  skillsLearned: string[];
  estimatedTime: string;
  monetization: string;
  resumeBullet: string;
  interviewTopics: string[];
}

export interface TechStack {
  frontend: string[];
  backend: string[];
  database: string;
  authentication: string;
  deployment: string;
  additionalTools?: string[];
}

export interface Roadmap {
  phase1: string[];
  phase2: string[];
  phase3: string[];
  phase4: string[];
}

export interface ProjectGeneration {
  id: string;
  userId: string;
  skills: string[];
  experienceLevel: string;
  careerGoal: string;
  interests: string;
  numberOfIdeas: number;
  generatedIdeas: ProjectIdea[];
  createdAt: Date;
  updatedAt: Date;
}

export interface SavedProject {
  id: string;
  userId: string;
  generationId: string | null;
  title: string;
  difficulty: string;
  portfolioScore: number;
  startupScore: number;
  isFavorited: boolean;
  tags: string[];
  notes: string | null;
  projectData: ProjectIdea;
  createdAt: Date;
  updatedAt: Date;
}

export interface LearningGapAnalysis {
  id: string;
  userId: string;
  currentSkills: string[];
  missingSkills: string[];
  skillGaps: SkillGap[];
  learningPath: LearningPathItem[];
  estimatedCompletionDate: Date;
  createdAt: Date;
}

export interface SkillGap {
  skill: string;
  importance: 'critical' | 'high' | 'medium' | 'low';
  estimatedWeeks: number;
  resources: Resource[];
}

export interface Resource {
  title: string;
  url: string;
  type: 'official' | 'course' | 'article' | 'video' | 'book';
}

export interface LearningPathItem {
  week: number;
  skills: string[];
  tasks: string[];
}

export interface BuildPlan {
  id: string;
  userId: string;
  projectId: string;
  projectTitle: string;
  startDate: Date;
  endDate: Date;
  totalDays: number;
  dailyPlan: DailyPlan[];
  milestones: Milestone[];
  createdAt: Date;
}

export interface DailyPlan {
  day: number;
  date: Date;
  phase: string;
  tasks: string[];
  resources: string[];
  estimatedHours: number;
  checkpoint: string;
}

export interface Milestone {
  day: number;
  title: string;
  description: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
