'use client';

import { useAuth } from '@/components/auth/AuthProvider';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/dashboard/Sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(getAuth());
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Sidebar />

      {/* Add margin-left equal to sidebar width on desktop */}
      <main className="md:ml-64 p-4 md:p-6">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
