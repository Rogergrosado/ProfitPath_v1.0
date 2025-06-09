'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import { useAuth } from '@/components/auth/AuthProvider';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    router.push('/');
  };

  return (
    <ProtectedRoute>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mb-4">Welcome, {user?.email}</p>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Log out
        </button>
      </div>
    </ProtectedRoute>
  );
}
