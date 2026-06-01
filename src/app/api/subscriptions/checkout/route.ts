import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { planId, billingCycle } = body;

    // Mock checkout session creation
    return NextResponse.json(
      {
        sessionId: 'cs_test_' + Math.random().toString(36).substr(2, 9),
        url: 'https://checkout.stripe.com/pay/cs_test_...',
        planId,
        billingCycle,
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
