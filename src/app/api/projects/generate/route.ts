import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { skills, experienceLevel, careerGoal, interests, numberOfIdeas } = body;

    // Validate input
    if (!skills || !experienceLevel || !careerGoal) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Mock project generation
    const mockIdeas = Array.from({ length: numberOfIdeas || 5 }, (_, i) => ({
      id: `idea_${i + 1}`,
      title: `Project Idea ${i + 1}`,
      elevatorPitch: 'A unique project idea for developers',
      problemSolved: 'Solves real-world problem',
      targetUsers: 'Developers, teams',
      difficulty: 'intermediate',
      portfolioScore: 8,
      startupScore: 7,
      techStack: {
        frontend: ['React', 'TypeScript', 'Tailwind CSS'],
        backend: ['Node.js', 'Express'],
        database: 'PostgreSQL',
        deployment: 'Vercel',
      },
      coreFeatures: ['Feature 1', 'Feature 2', 'Feature 3'],
      advancedFeatures: ['Advanced 1', 'Advanced 2'],
      apiEndpoints: [
        'GET /api/projects',
        'POST /api/projects',
        'GET /api/projects/:id',
      ],
      roadmap: {
        phase1: ['Setup project'],
        phase2: ['Build API'],
        phase3: ['Build frontend'],
        phase4: ['Deploy'],
      },
      skillsLearned: ['React', 'Database Design', 'API Development'],
      estimatedTime: '4 weeks',
      monetization: 'SaaS model',
      resumeBullet: 'Built a scalable web application',
      interviewTopics: ['System design', 'Database optimization'],
    }));

    return NextResponse.json(
      { ideas: mockIdeas },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error generating projects:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
