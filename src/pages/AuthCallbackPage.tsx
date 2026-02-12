import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export function AuthCallbackPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Get authorization code from URL
        const code = searchParams.get('code');
        const state = searchParams.get('state');

        if (!code) {
          throw new Error('No authorization code received');
        }

        // Check if this is an app-initiated login
        const isAppLogin = sessionStorage.getItem('srika_app_login') === 'true';

        // Exchange code for tokens via your backend
        const response = await fetch('/api/auth/exchange-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code, state })
        });

        if (!response.ok) {
          throw new Error('Token exchange failed');
        }

        const { googleUser, token } = await response.json();

        if (isAppLogin) {
          // App login flow - redirect via deep link
          sessionStorage.removeItem('srika_app_login');
          
          // Redirect to app with JWT token
          window.location.href = `srika://auth?token=${encodeURIComponent(token)}`;
        } else {
          // Normal web login flow
          // Store token in localStorage or cookie
          localStorage.setItem('auth_token', token);
          localStorage.setItem('user_data', JSON.stringify(googleUser));
          
          // Redirect to dashboard
          navigate('/dashboard');
        }
      } catch (err) {
        console.error('Auth callback error:', err);
        setError(err instanceof Error ? err.message : 'Authentication failed');
        setIsProcessing(false);
      }
    };

    handleCallback();
  }, [searchParams, navigate]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md mx-4 bg-slate-800/50 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-400 mb-4">
              Authentication Error
            </h2>
            <p className="text-slate-300 mb-6">{error}</p>
            <button
              onClick={() => navigate('/login')}
              className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
            >
              Back to Login
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-4 border-blue-400 border-t-cyan-400 rounded-full mx-auto mb-4"
        />
        <p className="text-slate-300 text-lg font-semibold">
          {isProcessing ? 'Completing authentication...' : 'Processing...'}
        </p>
      </motion.div>
    </div>
  );
}
