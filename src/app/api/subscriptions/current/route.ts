import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Mock current subscription
    return NextResponse.json(
      {
        id: 'sub_1',
        userId: 'user_1',
        planId: 'free',
        planName: 'Free',
        status: 'ACTIVE',
        generationsPerDay: 5,
        generationsUsedToday: 2,
        generationsRemainingToday: 3,
        maxSavedProjects: 3,
        savedProjectsUsed: 1,
        features: {
          pdfExport: false,
          architectureGenerator: false,
          startupMode: false,
        },
        currentPeriodStart: null,
        currentPeriodEnd: null,
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
