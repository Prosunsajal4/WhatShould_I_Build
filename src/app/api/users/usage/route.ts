import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Mock usage data
    return NextResponse.json(
      {
        generationsUsed: 5,
        generationsLimit: 5,
        savedProjectsUsed: 2,
        savedProjectsLimit: 3,
        apiCallsThisMonth: 234,
        tokensUsedThisMonth: 45000,
        resetDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
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
