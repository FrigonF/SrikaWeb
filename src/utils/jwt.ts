import { SignJWT, jwtVerify } from 'jose';

const getJWTSecret = (): Uint8Array => {
  // This function is called in browser context where import.meta.env is available
  const secret = (import.meta.env.VITE_JWT_SECRET as string) || '';
  if (!secret) {
    throw new Error('JWT_SECRET is not configured. Please set VITE_JWT_SECRET in your environment.');
  }
  return new TextEncoder().encode(secret);
};

export interface JWTPayload {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  subscription: 'FREE' | 'PRO' | 'PREMIUM';
  iat: number;
  exp: number;
}

/**
 * Generate a JWT token for app authentication
 * This is typically called from your backend/Cloudflare Worker
 */
export const generateAppToken = async (
  userData: {
    id: string;
    email: string;
    name: string;
    picture?: string;
  },
  subscription: string = 'FREE',
  expirationDays: number = 7
): Promise<string> => {
  const secret = getJWTSecret();
  const now = Math.floor(Date.now() / 1000);
  const expirationTime = now + (expirationDays * 24 * 60 * 60);

  const token = await new SignJWT({
    id: userData.id,
    email: userData.email,
    name: userData.name,
    avatar: userData.picture,
    subscription: subscription as 'FREE' | 'PRO' | 'PREMIUM',
    iat: now,
    exp: expirationTime,
  })
    .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
    .setIssuedAt(now)
    .setExpirationTime(expirationTime)
    .sign(secret);

  return token;
};

/**
 * Verify a JWT token and return the payload
 */
export const verifyAppToken = async (token: string): Promise<JWTPayload> => {
  const secret = getJWTSecret();

  try {
    const { payload } = await jwtVerify(token, secret);
    return payload as unknown as JWTPayload;
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

/**
 * Check if a token is expired
 */
export const isTokenExpired = (payload: JWTPayload): boolean => {
  const now = Math.floor(Date.now() / 1000);
  return payload.exp < now;
};
