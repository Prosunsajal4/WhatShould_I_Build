import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { projectId, estimatedDays } = body;

    // Mock build plan generation
    return NextResponse.json(
      {
        id: 'plan_' + Math.random().toString(36).substr(2, 9),
        projectId,
        plan: {
          totalDays: estimatedDays || 30,
          phases: [
            {
              phase: 1,
              name: 'Setup & Architecture',
              days: 5,
              tasks: ['Setup project structure', 'Configure development environment'],
            },
            {
              phase: 2,
              name: 'Core Features',
              days: 15,
              tasks: ['Implement authentication', 'Build API endpoints'],
            },
            {
              phase: 3,
              name: 'UI & Integration',
              days: 8,
              tasks: ['Design UI components', 'Integrate with API'],
            },
            {
              phase: 4,
              name: 'Testing & Deployment',
              days: 2,
              tasks: ['Write tests', 'Deploy to production'],
            },
          ],
          milestones: [
            { date: 5, description: 'Project setup complete' },
            { date: 20, description: 'Core features MVP ready' },
            { date: 28, description: 'UI implementation done' },
            { date: 30, description: 'Project launched' },
          ],
        },
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
