import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Mock dashboard data
    return NextResponse.json(
      {
        user: {
          id: 'user_1',
          name: 'John Doe',
          email: 'user@example.com',
        },
        stats: {
          totalGenerations: 12,
          totalSavedProjects: 8,
          generationsThisWeek: 3,
          generationsRemainingToday: 2,
        },
        recentGenerations: [
          {
            id: 'gen_1',
            title: 'Full-Stack E-commerce Platform',
            createdAt: new Date(),
          },
        ],
        savedProjects: [
          {
            id: 'proj_1',
            title: 'Real-time Chat Application',
            difficulty: 'intermediate',
          },
        ],
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
