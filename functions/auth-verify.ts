// Cloudflare Worker for verifying JWT tokens
// Called by the SRIKA app to verify authentication tokens

import { jwtVerify } from 'jose';

const getJWTSecret = (env: any): Uint8Array => {
  const secret = env.JWT_SECRET || '';
  if (!secret) {
    throw new Error('JWT_SECRET is not configured');
  }
  return new TextEncoder().encode(secret);
};

export const onRequestPost = async (context: any) => {
  const { request, env } = context;

  try {
    const { token } = await request.json();

    if (!token) {
      return new Response(
        JSON.stringify({ error: 'Missing token' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Verify the JWT token
    const secret = getJWTSecret(env);

    try {
      const { payload } = await jwtVerify(token, secret);

      // Return verified user profile
      return new Response(
        JSON.stringify({
          id: payload.id,
          email: payload.email,
          name: payload.name,
          avatar: payload.avatar,
          subscription: payload.subscription,
          expiresAt: (payload.exp as number) * 1000, // Convert to milliseconds
          isValid: true,
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    } catch (verifyError) {
      // Token verification failed
      return new Response(
        JSON.stringify({
          error: 'Invalid or expired token',
          isValid: false,
        }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  } catch (error) {
    console.error('Token verification error:', error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Verification failed',
        isValid: false,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
