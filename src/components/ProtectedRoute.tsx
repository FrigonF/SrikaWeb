import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'motion/react';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredSubscription?: 'FREE' | 'PRO' | 'PREMIUM';
}

/**
 * ProtectedRoute component wraps pages that require authentication
 * Redirects to login if user is not authenticated
 * Can optionally check for specific subscription tier
 */
export function ProtectedRoute({
  children,
  requiredSubscription,
}: ProtectedRouteProps) {
  const { isAuthenticated, user, isLoading } = useAuth();

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="w-12 h-12 border-4 border-blue-400 border-t-cyan-400 rounded-full"
        />
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Check subscription tier if required
  if (requiredSubscription && user?.subscription) {
    const tiers = { FREE: 0, PRO: 1, PREMIUM: 2 };
    const userTier = tiers[user.subscription as keyof typeof tiers];
    const requiredTier = tiers[requiredSubscription];

    if (userTier < requiredTier) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-md text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Upgrade Required
            </h2>
            <p className="text-slate-400 mb-6">
              This feature requires a {requiredSubscription} subscription.
              Your current plan: {user.subscription}
            </p>
            <a
              href="/pricing"
              className="inline-block px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              View Plans
            </a>
          </motion.div>
        </div>
      );
    }
  }

  return <>{children}</>;
}

export default ProtectedRoute;
