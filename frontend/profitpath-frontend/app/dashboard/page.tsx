'use client';

import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatCard from '@/components/dashboard/StatCard';
import ChartPlaceholder from '@/components/dashboard/ChartPlaceholder';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <StatCard title="Total Sales" value="$12,340" />
          <StatCard title="Pending Orders" value="87" />
          <StatCard title="Shipped" value="1,233" />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Sales Chart</h2>
          <ChartPlaceholder />
        </section>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
