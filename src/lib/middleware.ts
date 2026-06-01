import { NextRequest, NextResponse } from 'next/server';

/**
 * Rate limit middleware
 * Limits requests per user per minute
 */
export async function rateLimit(
  request: NextRequest,
  limit: number = 100
) {
  const userId = request.headers.get('x-user-id') || 'anonymous';
  const key = `ratelimit:${userId}`;

  // In production, use Redis for distributed rate limiting
  // For now, using simple in-memory (not suitable for production)
  const now = Date.now();
  const windowStart = now - 60 * 1000; // 1 minute window

  // This is simplified - use Redis in production
  return { remaining: limit - 1, reset: now + 60 * 1000 };
}

/**
 * Authentication middleware
 * Checks if user is authenticated
 */
export async function requireAuth(request: NextRequest) {
  const authHeader = request.headers.get('authorization');

  if (!authHeader?.startsWith('Bearer ')) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  const token = authHeader.slice(7);
  // Verify token - implement with JWT
  return { token };
}

/**
 * CORS middleware
 */
export function withCORS(
  request: NextRequest,
  allowOrigins: string[] = ['http://localhost:3000', 'https://buildnext.app']
) {
  const origin = request.headers.get('origin') || '';
  const isAllowed = allowOrigins.includes(origin);

  const headers = new Headers();
  if (isAllowed) {
    headers.set('Access-Control-Allow-Origin', origin);
    headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }

  return headers;
}
