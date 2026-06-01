import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Mock user profile
    return NextResponse.json(
      {
        id: 'user_1',
        email: 'user@example.com',
        name: 'John Doe',
        image: null,
        skills: ['JavaScript', 'React'],
        experienceLevel: 'intermediate',
        interests: 'Web development',
        createdAt: new Date(),
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

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Update user profile
    return NextResponse.json(
      {
        ...body,
        id: 'user_1',
        createdAt: new Date(),
        updatedAt: new Date(),
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
