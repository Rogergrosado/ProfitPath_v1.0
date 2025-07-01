import { ProtectedRoute } from '@/components/auth/ProtectedRoute';
import DashboardLayout from '@/components/layout/DashboardLayout';
import Header from '@/components/dashboard/Header';
import SalesChart from '@/components/dashboard/SalesChart';
import InventoryTable from '@/components/dashboard/InventoryTable';
import ResourceCards from '@/components/dashboard/ResourceCards';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <Header />
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <SalesChart />
          <InventoryTable />
        </div>
        <ResourceCards />
      </DashboardLayout>
    </ProtectedRoute>
  );
}
