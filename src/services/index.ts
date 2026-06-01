import { prisma } from '@/lib/db/prisma';

export class UserService {
  static async getUserById(id: string) {
    return prisma.user.findUnique({
      where: { id },
      include: { subscription: true },
    });
  }

  static async getUserByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
      include: { subscription: true },
    });
  }

  static async createUser(data: {
    email: string;
    name?: string;
    image?: string;
    clerkId?: string;
  }) {
    return prisma.user.create({
      data,
      include: { subscription: true },
    });
  }

  static async updateUser(id: string, data: any) {
    return prisma.user.update({
      where: { id },
      data,
      include: { subscription: true },
    });
  }

  static async deleteUser(id: string) {
    return prisma.user.delete({
      where: { id },
    });
  }

  static async getAllUsers(skip = 0, take = 20) {
    const [users, total] = await Promise.all([
      prisma.user.findMany({
        skip,
        take,
        include: { subscription: true },
        orderBy: { createdAt: 'desc' },
      }),
      prisma.user.count(),
    ]);

    return { users, total };
  }
}

export class SubscriptionService {
  static async getSubscription(userId: string) {
    return prisma.subscription.findUnique({
      where: { userId },
    });
  }

  static async createSubscription(userId: string, planId: string) {
    return prisma.subscription.create({
      data: {
        userId,
        planId,
        planName: planId === 'pro' ? 'Pro' : 'Free',
        status: 'ACTIVE',
        generationsPerDay: planId === 'pro' ? -1 : 5,
        maxSavedProjects: planId === 'pro' ? -1 : 3,
      },
    });
  }

  static async updateSubscription(userId: string, data: any) {
    return prisma.subscription.update({
      where: { userId },
      data,
    });
  }

  static async cancelSubscription(userId: string) {
    return prisma.subscription.update({
      where: { userId },
      data: { status: 'CANCELED', canceledAt: new Date() },
    });
  }
}

export class ProjectService {
  static async createGeneration(data: any) {
    return prisma.projectGeneration.create({
      data,
    });
  }

  static async getGeneration(id: string) {
    return prisma.projectGeneration.findUnique({
      where: { id },
    });
  }

  static async getUserGenerations(userId: string, skip = 0, take = 20) {
    const [generations, total] = await Promise.all([
      prisma.projectGeneration.findMany({
        where: { userId },
        skip,
        take,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.projectGeneration.count({ where: { userId } }),
    ]);

    return { generations, total };
  }

  static async saveProject(data: any) {
    return prisma.savedProject.create({
      data,
    });
  }

  static async getSavedProject(id: string) {
    return prisma.savedProject.findUnique({
      where: { id },
    });
  }

  static async getUserSavedProjects(userId: string, skip = 0, take = 20) {
    const [projects, total] = await Promise.all([
      prisma.savedProject.findMany({
        where: { userId },
        skip,
        take,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.savedProject.count({ where: { userId } }),
    ]);

    return { projects, total };
  }

  static async toggleFavorite(id: string) {
    const project = await prisma.savedProject.findUnique({
      where: { id },
      select: { isFavorited: true },
    });

    if (!project) throw new Error('Project not found');

    return prisma.savedProject.update({
      where: { id },
      data: { isFavorited: !project.isFavorited },
    });
  }

  static async deleteProject(id: string) {
    return prisma.savedProject.delete({
      where: { id },
    });
  }
}
