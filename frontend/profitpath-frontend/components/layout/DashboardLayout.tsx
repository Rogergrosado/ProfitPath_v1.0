'use client';

import { useAuth } from '@/components/auth/AuthProvider';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(getAuth());
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <nav className="space-y-4">
          <Link href="#" className="block text-gray-700 hover:text-blue-600">Overview</Link>
          <Link href="#" className="block text-gray-700 hover:text-blue-600">Orders</Link>
          <Link href="#" className="block text-gray-700 hover:text-blue-600">Inventory</Link>
          <Link href="#" className="block text-gray-700 hover:text-blue-600">Analytics</Link>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Welcome, {user?.email}</h1>
          <button onClick={handleLogout} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Log Out
          </button>
        </header>

        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
