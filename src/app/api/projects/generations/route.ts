import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');

    // Mock data
    const generations = [
      {
        id: 'gen_1',
        skills: ['JavaScript', 'React'],
        experienceLevel: 'intermediate',
        careerGoal: 'portfolio',
        numberOfIdeas: 5,
        createdAt: new Date(),
      },
      {
        id: 'gen_2',
        skills: ['Python', 'Django'],
        experienceLevel: 'advanced',
        careerGoal: 'startup',
        numberOfIdeas: 3,
        createdAt: new Date(),
      },
    ];

    return NextResponse.json(
      {
        data: generations,
        pagination: {
          page,
          limit,
          total: 45,
          totalPages: 5,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching generations:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
