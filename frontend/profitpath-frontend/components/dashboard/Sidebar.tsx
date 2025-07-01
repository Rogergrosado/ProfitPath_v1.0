'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/components/auth/AuthProvider';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(getAuth());
    router.push('/');
  };

  return (
    <aside className="w-full md:w-64 bg-[#1f2937] text-white flex flex-col p-6 md:fixed top-0 left-0 h-auto md:h-screen z-50">
      {/* Logo + App Name */}
      <div className="flex items-center gap-3 mb-10">
        <Image
          src="/profitpath_logo.png"
          alt="ProfitPath Logo"
          width={32}
          height={32}
        />
        <span className="text-2xl text-white font-bold">ProfitPath</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4 text-sm font-medium">
        <Link href="#" className="hover:text-[#fd7014]">Dashboard</Link>
        <Link href="#" className="hover:text-[#fd7014]">Inventory</Link>
        <Link href="#" className="hover:text-[#fd7014]">Analytics</Link>
        <Link href="#" className="hover:text-[#fd7014]">Orders</Link>
        <Link href="#" className="hover:text-[#fd7014]">Settings</Link>
        <Link href="#" className="hover:text-[#fd7014]">Help</Link>
      </nav>

      {/* Logout */}
      <div
        onClick={handleLogout}
        className="mt-auto pt-8 text-sm text-gray-400 hover:text-white cursor-pointer"
      >
        Logout
      </div>
    </aside>
  );
}
