# SRIKA App Authentication Setup Guide

## Overview

This implementation provides:
- ✅ Login page with app detection (`?source=app`)
- ✅ Google OAuth integration
- ✅ JWT token generation for app authentication
- ✅ Token verification API
- ✅ Deep link redirect to SRIKA desktop app (`srika://auth?token=<JWT>`)
- ✅ Normal web login flow for website users

## Environment Variables

Create a `.env.local` file in the root of your project with these variables:

```env
# Google OAuth Configuration
VITE_GOOGLE_CLIENT_ID=your_google_client_id_here
VITE_GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# JWT Configuration
VITE_JWT_SECRET=your_secure_jwt_secret_here

# Supabase Configuration (if using for subscription lookup)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Set Up Google OAuth

### 1. Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable "Google+ API"
4. Go to "Credentials" → Create OAuth 2.0 Client ID
5. Application type: **Web Application**
6. Authorized redirect URIs:
   - `https://srika.pages.dev/auth/callback` (production)
   - `http://localhost:5173/auth/callback` (development)
7. Copy `Client ID` and `Client Secret`

### 2. Configure Cloudflare Environment Variables

Add to your `wrangler.toml` or Cloudflare Worker secrets:

```toml
[env.production]
vars = { VITE_GOOGLE_CLIENT_ID = "your_client_id" }

[env.production.secrets]
GOOGLE_CLIENT_SECRET = "your_client_secret"
JWT_SECRET = "your_jwt_secret_key"
```

Or use Cloudflare CLI:

```bash
wrangler secret put GOOGLE_CLIENT_SECRET
wrangler secret put JWT_SECRET
```

## Project Structure

```
src/
├── pages/
│   ├── LoginPage.tsx          # Login page with app detection
│   └── AuthCallbackPage.tsx   # OAuth callback handler
├── contexts/
│   └── AuthContext.tsx        # Authentication state management
├── utils/
│   └── jwt.ts                 # JWT utilities
└── ...

functions/
├── auth-exchange.ts           # Exchange auth code for JWT
├── auth-verify.ts             # Verify JWT tokens
└── verify-access.ts          # Existing access verification
```

## Files Modified/Created

### New Components
- `src/pages/LoginPage.tsx` - Login UI with app detection
- `src/pages/AuthCallbackPage.tsx` - OAuth callback handler
- `src/contexts/AuthContext.tsx` - Auth state management
- `src/utils/jwt.ts` - JWT signing/verification utilities

### New Endpoints (Cloudflare Workers)
- `functions/auth-exchange.ts` → `/api/auth/exchange-token`
- `functions/auth-verify.ts` → `/api/auth/verify`

### Modified Files
- `package.json` - Added `react-router-dom` and `jose`
- `src/main.tsx` - Added Router and AuthProvider

## Authentication Flow

### For Desktop App

```
1. App opens browser: https://srika.pages.dev/login?source=app
   ↓
2. Login page detects ?source=app parameter
   ↓
3. User clicks "Sign in with Google"
   ↓
4. OAuth callback at /auth/callback?code=...&state=...
   ↓
5. Website exchanges code for tokens
   ↓
6. Website generates JWT token
   ↓
7. Browser redirects: srika://auth?token=<JWT>
   ↓
8. Desktop app receives deep link callback
   ↓
9. App verifies token via /api/auth/verify
   ↓
10. User is authenticated in desktop app
```

### For Website Users

```
1. User navigates to /login
   ↓
2. User clicks "Sign in with Google"
   ↓
3. OAuth callback at /auth/callback?code=...&state=...
   ↓
4. Website exchanges code for tokens
   ↓
5. Website generates JWT token
   ↓
6. Token stored in localStorage
   ↓
7. Redirect to /dashboard
   ↓
8. User is authenticated on website
```

## Usage Examples

### Check Authentication in Components

```typescript
import { useAuth } from '@/contexts/AuthContext';

export function DashboardPage() {
  const { user, isAuthenticated, logout } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <p>Email: {user?.email}</p>
      <p>Plan: {user?.subscription}</p>
      <button onClick={logout}>Sign out</button>
    </div>
  );
}
```

### Verify Token from App

```typescript
async function verifyAppToken() {
  const response = await fetch('/api/auth/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: jwtToken })
  });

  const data = await response.json();
  if (data.isValid) {
    console.log('User:', data.email, 'Plan:', data.subscription);
  }
}
```

## Security Considerations

1. **JWT Secret** - Create a strong, random secret:
   ```bash
   # Generate 32-byte random secret
   openssl rand -base64 32
   ```

2. **HTTPS Only** - All endpoints use HTTPS in production

3. **Token Expiration** - Tokens expire after 7 days (configurable)

4. **Environment Variables** - Never commit secrets to version control

5. **Rate Limiting** - Add to Cloudflare to prevent token spam

6. **CORS** - Configure appropriate CORS headers for your domain

7. **Validation** - Always validate token signatures server-side

## Deployment Steps

### 1. Update Environment Variables

```bash
# Set local development variables
cp .env.example .env.local
# Edit .env.local with your credentials
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Build Project

```bash
npm run build
```

### 4. Deploy to Cloudflare

```bash
# Deploy functions and website
wrangler deploy

# Or if using Pages with Functions
wrangler pages deploy dist/
```

### 5. Test the Flow

1. Start dev server: `npm run dev`
2. Visit: `http://localhost:5173/login?source=app`
3. Complete Google OAuth
4. Verify redirect to `srika://auth?token=...`

## Troubleshooting

### "Missing authorization code"
- Ensure redirect URI matches in Google Cloud Console
- Check `VITE_GOOGLE_CLIENT_ID` is set correctly

### "JWT_SECRET is not configured"
- Add `JWT_SECRET` to Cloudflare Worker secrets
- Ensure local `.env.local` has `VITE_JWT_SECRET`

### "Invalid or expired token"
- Token expiration is 7 days - user needs to re-login
- Check JWT_SECRET matches between generation and verification

### Deep link not working
- Ensure SRIKA app is running
- Check browser console for redirect errors
- Verify `srika://` protocol is registered on desktop

### OAuth callback shows blank page
- Check network tab for 404 errors
- Verify Cloudflare Worker deployment
- Check `/api/auth/exchange-token` endpoint is accessible

## Next Steps

1. **Integrate with Supabase** - Replace placeholder in `getUserSubscription()`
2. **Add Dashboard Page** - Create `/dashboard` route for authenticated users
3. **Add Refresh Token** - Implement token refresh for long sessions
4. **Add 2FA** - Enhance security with two-factor authentication
5. **Add Rate Limiting** - Protect endpoints from abuse
6. **Add Logging** - Track authentication events for debugging

## API Reference

### POST `/api/auth/exchange-token`

Exchange Google authorization code for JWT token.

**Request:**
```json
{
  "code": "google_auth_code",
  "state": "optional_state_param"
}
```

**Response:**
```json
{
  "googleUser": {
    "id": "google_user_id",
    "email": "user@example.com",
    "name": "John Doe",
    "picture": "https://..."
  },
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "expiresIn": 604800
}
```

### POST `/api/auth/verify`

Verify JWT token validity.

**Request:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Response:**
```json
{
  "id": "google_user_id",
  "email": "user@example.com",
  "name": "John Doe",
  "avatar": "https://...",
  "subscription": "FREE",
  "expiresAt": 1707753600000,
  "isValid": true
}
```

## Support & Resources

- [Google OAuth Documentation](https://developers.google.com/identity/protocols/oauth2/web-server-flow)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [jose - JWT Library](https://github.com/panva/jose)
- [React Router Documentation](https://reactrouter.com/)
