// Cloudflare Worker for handling OAuth token exchange
// This endpoint receives the Google auth code and exchanges it for tokens

import { SignJWT } from 'jose';

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
    const { code, state } = await request.json();

    if (!code) {
      return new Response(
        JSON.stringify({ error: 'Missing authorization code' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Exchange authorization code for Google tokens
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: env.VITE_GOOGLE_CLIENT_ID || '',
        client_secret: env.GOOGLE_CLIENT_SECRET || '',
        redirect_uri: `${new URL(request.url).origin}/auth/callback`,
        grant_type: 'authorization_code',
      }),
    });

    if (!tokenResponse.ok) {
      throw new Error('Failed to exchange authorization code');
    }

    const tokenData = await tokenResponse.json();

    // Get user info from Google
    const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    });

    if (!userResponse.ok) {
      throw new Error('Failed to fetch user info');
    }

    const googleUser = await userResponse.json();

    // Get subscription level from database (placeholder - integrate with your DB)
    const subscription = await getUserSubscription(env, googleUser.id) || 'FREE';

    // Generate JWT token for the application
    const secret = getJWTSecret(env);
    const now = Math.floor(Date.now() / 1000);
    const expirationTime = now + (7 * 24 * 60 * 60); // 7 days

    const jwtToken = await new SignJWT({
      id: googleUser.id,
      email: googleUser.email,
      name: googleUser.name,
      avatar: googleUser.picture,
      subscription,
      iat: now,
      exp: expirationTime,
    })
      .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
      .setIssuedAt(now)
      .setExpirationTime(expirationTime)
      .sign(secret);

    return new Response(
      JSON.stringify({
        googleUser: {
          id: googleUser.id,
          email: googleUser.email,
          name: googleUser.name,
          picture: googleUser.picture,
        },
        token: jwtToken,
        expiresIn: 7 * 24 * 60 * 60,
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Token exchange error:', error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Authentication failed',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

/**
 * Placeholder function to get user subscription level
 * Integrate with your database (Supabase, etc.)
 */
async function getUserSubscription(env: any, userId: string): Promise<string | null> {
  try {
    // Example: Query Supabase
    // const { data } = await supabase
    //   .from('subscriptions')
    //   .select('plan')
    //   .eq('user_id', userId)
    //   .single();
    // return data?.plan || 'FREE';

    // For now, return FREE by default
    return 'FREE';
  } catch (error) {
    console.error('Failed to get subscription:', error);
    return 'FREE';
  }
}
