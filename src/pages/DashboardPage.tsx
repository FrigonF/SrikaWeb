import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ProtectedRoute } from '@/components/ProtectedRoute';

function DashboardContent() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Header */}
      <div className="bg-slate-800/50 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              SRIKA Dashboard
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* User Profile Card */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-6">User Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Avatar */}
              {user?.avatar && (
                <div className="flex justify-center md:justify-start">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-24 h-24 rounded-full border-2 border-blue-400"
                  />
                </div>
              )}

              {/* User Info */}
              <div className="space-y-4">
                <div>
                  <p className="text-slate-400 text-sm">Name</p>
                  <p className="text-white text-lg font-semibold">{user?.name}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <p className="text-white text-lg">{user?.email}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-sm">User ID</p>
                  <p className="text-white text-sm font-mono">{user?.id}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Subscription Card */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-6">Subscription</h2>
            <div className="space-y-4">
              <div>
                <p className="text-slate-400 text-sm">Current Plan</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className={`px-4 py-2 rounded-lg font-semibold text-white ${
                    user?.subscription === 'PREMIUM'
                      ? 'bg-purple-500/20 border border-purple-500'
                      : user?.subscription === 'PRO'
                      ? 'bg-blue-500/20 border border-blue-500'
                      : 'bg-slate-700 border border-slate-600'
                  }`}>
                    {user?.subscription}
                  </span>
                </div>
              </div>

              {user?.subscription === 'FREE' && (
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mt-4">
                  <p className="text-blue-300 text-sm">
                    Upgrade to PRO or PREMIUM to unlock advanced features
                  </p>
                  <a
                    href="/pricing"
                    className="mt-3 inline-block text-blue-400 hover:text-blue-300 font-semibold"
                  >
                    View Plans →
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Token Info Card */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-6">Authentication</h2>
            <div className="space-y-4">
              <div>
                <p className="text-slate-400 text-sm">Token Expires</p>
                <p className="text-white text-lg">
                  {user && new Date(user.exp * 1000).toLocaleString()}
                </p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4">
                <p className="text-slate-300 text-xs">
                  🔒 Your authentication token is securely stored and will expire after 7 days.
                </p>
              </div>
            </div>
          </div>

          {/* Features Card */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-6">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'Posture Analysis', available: true },
                { title: 'Real-time Feedback', available: user?.subscription !== 'FREE' },
                { title: 'Advanced Reports', available: user?.subscription === 'PREMIUM' },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-lg border ${
                    feature.available
                      ? 'bg-green-500/10 border-green-500/30'
                      : 'bg-slate-700/30 border-slate-600/30 opacity-50'
                  }`}
                >
                  <p className={feature.available ? 'text-green-300 font-semibold' : 'text-slate-400'}>
                    {feature.title}
                  </p>
                  {!feature.available && (
                    <p className="text-xs text-slate-500 mt-1">Requires upgrade</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}
