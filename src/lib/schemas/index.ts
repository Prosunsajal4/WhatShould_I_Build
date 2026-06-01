import { z } from 'zod';

export const projectGeneratorSchema = z.object({
  skills: z.array(z.string()).min(1, 'Select at least one skill'),
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']),
  careerGoal: z.enum(['portfolio', 'job', 'freelance', 'startup', 'learning']),
  interests: z.string().min(10, 'Interests must be at least 10 characters'),
  preferredTechStack: z.array(z.string()).optional().default([]),
  hoursPerWeek: z.number().min(1).max(168).optional(),
  teamSize: z.enum(['solo', 'team']).optional(),
  numberOfIdeas: z.number().min(1).max(20).default(5),
});

export const signUpSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const passwordResetSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export const passwordResetConfirmSchema = z.object({
  token: z.string().min(1),
  newPassword: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string().min(8),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

export const userProfileSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.string().email().optional(),
  image: z.string().url().optional(),
  skills: z.array(z.string()).optional(),
  experienceLevel: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
  interests: z.string().optional(),
  hoursPerWeek: z.number().min(1).max(168).optional(),
  teamSize: z.enum(['solo', 'team']).optional(),
});

export const saveProjectSchema = z.object({
  generationId: z.string().optional(),
  title: z.string().min(5, 'Title must be at least 5 characters'),
  elevatorPitch: z.string().min(10),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
  portfolioScore: z.number().min(1).max(10),
  startupScore: z.number().min(1).max(10),
  projectData: z.record(z.any()),
  tags: z.array(z.string()).optional().default([]),
  notes: z.string().optional(),
});

export const learningGapSchema = z.object({
  currentSkills: z.array(z.string()).min(1),
  targetRole: z.string().optional(),
  targetTechStack: z.array(z.string()).optional(),
  timelineWeeks: z.number().min(1).max(52).optional(),
});

export const buildPlanSchema = z.object({
  projectId: z.string(),
  estimatedHoursPerDay: z.number().min(1).max(24),
  difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
  projectTitle: z.string().min(5),
  projectDescription: z.string().min(20),
});

export const checkoutSchema = z.object({
  planId: z.string(),
  billingCycle: z.enum(['monthly', 'annual']),
});

export const feedbackSchema = z.object({
  type: z.enum(['bug', 'feature', 'general', 'improvement']),
  title: z.string().min(5),
  message: z.string().min(20),
  rating: z.number().min(1).max(5).optional(),
});

export type ProjectGeneratorInput = z.infer<typeof projectGeneratorSchema>;
export type SignUpInput = z.infer<typeof signUpSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type UserProfileInput = z.infer<typeof userProfileSchema>;
export type SaveProjectInput = z.infer<typeof saveProjectSchema>;
export type LearningGapInput = z.infer<typeof learningGapSchema>;
export type BuildPlanInput = z.infer<typeof buildPlanSchema>;
export type CheckoutInput = z.infer<typeof checkoutSchema>;
export type FeedbackInput = z.infer<typeof feedbackSchema>;
