"use client";
import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-48 bg-gray-800 text-white p-4 space-y-2">
        <h2 className="text-lg font-bold mb-4">Dashboard</h2>
        <nav className="space-y-1">
          <Link href="/" className="block hover:underline">
            Home
          </Link>
          <Link href="/products" className="block hover:underline">
            Products
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-4 bg-gray-50">{children}</main>
    </div>
  );
}
